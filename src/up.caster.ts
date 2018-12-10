import { Graphable } from "./interface/graphable";
import { ModelCollection } from "./interface/model.collection";
import { DownCaster } from "./down.caster";
import Exceptions from "./exceptions";
import Is from "./utils/is";

/**
 * Represents the upcaster...
 */
export class UpCaster {

    /**
     * Holds the instance as 
     * state is being pieced
     * back together.
     */
    public instance: any;

    /**
     * Holds the list of pointers
     */
    public pointers: any[] = [];

    /**
     * Creates an instance of UpCaster
     * @param namespace '
     * @param model 
     * @param str 
     */
    public constructor(private namespace: string, private model: ModelCollection, str: string) {
        let downCaster: DownCaster = this.getDowncaster(str)
        this.instance = this.getInstanceFromDowncaster(downCaster)
    }

    /**
     * Get the "rough" instance of 
     * Downcaster from JSON
     * @param str 
     */
    public getDowncaster(str: string) {
        try {
            return JSON.parse(str);
        } catch (err) {
            Exceptions.blow(
                this.namespace,
                `Could parse string.`
            )
        }
    }

    /**
     * Once the downcaster is in place,
     * this method will recursively return
     * the pointers for the given graphs
     * @param downcaster 
     */
    public getInstanceFromDowncaster(downcaster: DownCaster) {
        if (!Array.isArray(downcaster.pointers)) { Exceptions.invalidPointerSet(this.namespace) }
        this.pointers = downcaster.pointers;
        return this.ungraphData(downcaster.graph);
    }

    /**
     * Entry point for ungraphing
     * @param graph 
     */
    public ungraphData(graph: Graphable) {
        //validations
        //---------------
        if (!Is.obj(graph)) { Exceptions.invalidGraph(this.namespace) }
        if (typeof graph.type !== "string") { Exceptions.invalidGraph(this.namespace) }
        //-----------------
        if (graph.type === "array") {
            return this.unGraphArray(graph);
        }
        else if (graph.type === "date") {
            return this.unGraphDate(graph);
        }
        else if (graph.type === "object") {
            return this.unGraphObject(graph);
        }
        else {
            return this.unGraphPrimitives(graph)
        }
    }

    /**
     * Handles ungraphing arrays
     * @param graph 
     */
    public unGraphArray(graph: Graphable) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") { Exceptions.invalidGraph(this.namespace) }
        if (!Is.obj(graph.contents)) { Exceptions.invalidGraph(this.namespace) }
        //-------------
        let pointer: any[] = this.pointers[graph.references];
        if (!Array.isArray(pointer)) { Exceptions.invalidPointer(this.namespace) }
        //-------------
        for (var iterator in graph.contents) {
            pointer[iterator] = this.ungraphData(graph.contents[iterator]);
        }
        return pointer;
    }

    /**
     * Handles ungraphing dates
     * @param graph 
     */
    public unGraphDate(graph: Graphable) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") { Exceptions.invalidGraph(this.namespace) }
        if (typeof graph.value !== "string") { Exceptions.invalidGraph(this.namespace) }
        //-------------
        let pointer = this.pointers[graph.references];
        if (pointer === undefined) { Exceptions.invalidGraph(this.namespace) }
        if (Is.date(pointer)) {
            return pointer;
        } else {
            return this.pointers[graph.references] = new Date(graph.value);
        }
    }

    /**
     * Handles ungraphing objects
     * @param graph 
     */
    public unGraphObject(graph: Graphable) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") { Exceptions.invalidGraph(this.namespace) }
        //-------------
        let pointer: object = this.pointers[graph.references];
        //when an object has context
        for (var iterator in this.model) {
            let model = this.model[iterator];
            if (model[this.namespace] === graph.context) {
                if (pointer instanceof model) {
                    return pointer
                } else {
                    let instance = this.pointers[graph.references] = new model;
                    for (var instanceIterator in graph.contents) {
                        instance[instanceIterator] = this.ungraphData(graph.contents[instanceIterator]);
                    }
                    return instance;
                }
            }
        }
        //when just a generic object
        let instance = this.pointers[graph.references];
        for (var instanceIterator in graph.contents) {
            instance[instanceIterator] = this.ungraphData(graph.contents[instanceIterator]);
        }
        return instance
    }

    /**
     * Handles ungraphing primitives
     * @param graph 
     */
    public unGraphPrimitives(graph: Graphable) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") { Exceptions.invalidGraph(this.namespace) }
        //-------------
        return this.pointers[graph.references];
    }

    /**
     * Returns the instance and handles
     * garbage collection
     */
    public toInstance<Context>() {
        this.pointers = null;
        return this.instance
    }
}
