import { Graphable } from "./interface/graphable";
import Is from "./utils/is";
import { ModelCollection } from "./interface/model.collection";

/**
 * Represents the downcaster...
 */
export class DownCaster {
    /**
     * Holds all the pointers for whatever
     * is beings serialized, ensuring that
     * all references a correctly allocated.
     */
    public pointers: any[] = [];

    /**
     * Holds the graph, of the instance 
     * for the serialization.
     */
    public graph: Graphable;


    /**
     * Create an instance of Downcaster
     * @param namespace 
     * @param models 
     * @param data 
     */
    public constructor(private namespace, private models: ModelCollection, data: any) {
        this.graph = this.graphData(data);
        this.stripPointersOfResponsibility();
    }

    /**
     * This makes it more optimized in the 
     * upcaster and doesn't hold on to pointers
     * of a developer's instance for garbage
     * collection purposes.
     */
    public stripPointersOfResponsibility() {
        let index = 0;
        let genericArray = [];
        let genericObject = {}
        while (index < this.pointers.length) {
            let pointer = this.pointers[index];
            if (Array.isArray(pointer)) {
                this.pointers[index] = genericArray;
            } else if (Is.obj(pointer)) {
                this.pointers[index] = genericObject;
            }
            index++;
        }
    }

    /**
     * Entry point to recursively
     * look through the data provide
     * and assign a graphable.
     * @param data 
     */
    public graphData(data: any): Graphable {
        if (Array.isArray(data)) {
            return this.graphArray(data);
        }
        else if (Is.date(data)) {
            return this.graphDate(data);
        }
        else if (Is.obj(data)) {
            return this.graphObject(data);
        }
        else {
            return this.graphPrimitives(data);
        }
    }

    /**
     * Holds graphing arrays
     * @param arr 
     */
    public graphArray(arr: any[]) {
        let arrayGraph = this.makeGraphable();
        let index = this.pointers.indexOf(arr);
        if (index < 0) {
            index = (this.pointers.push(arr)) - 1;
            arrayGraph.c = {};
            arr.forEach((item, idx) =>
                arrayGraph.c[idx] = this.graphData(item))
        }
        arrayGraph.t = "array";
        arrayGraph.r = index;
        return arrayGraph;
    }

    /**
     * Handles graphing dates
     * @param date 
     */
    public graphDate(date: Date) {
        let dateGraph = this.makeGraphable();
        let index = this.pointers.indexOf(date);
        if (index < 0) {
            index = (this.pointers.push(date)) - 1;
        }
        dateGraph.t = "date";
        dateGraph.r = index;
        dateGraph.v = date;
        return dateGraph;
    }

    /**
     * Handles graphing objects
     * @param obj 
     */
    public graphObject(obj: object) {
        let objectGraph = this.makeGraphable();
        let index = this.pointers.indexOf(obj);
        if (index < 0) {
            index = (this.pointers.push(obj)) - 1;
            objectGraph.c = {};
            for (var iterator in obj) {
                if (obj.hasOwnProperty(iterator)) {
                    objectGraph.c[iterator] = this.graphData(obj[iterator]);
                }
            }
        }
        if (Is.builtFromModel(this.namespace, this.models, obj)) {
            objectGraph.cx = obj.constructor[this.namespace];
        }
        objectGraph.t = "object";
        objectGraph.r = index;
        return objectGraph;
    }

    /**
     * Handles graphing primitives
     * @param value 
     */
    public graphPrimitives(value: any) {
        let primitiveGraph = this.makeGraphable();
        let index = this.pointers.indexOf(value);
        if (index < 0) {
            index = (this.pointers.push(value)) - 1;
        }
        primitiveGraph.t = typeof value;
        primitiveGraph.r = index;
        return primitiveGraph;
    }

    /**
     * Helper method to make as instance
     * of graphable
     */
    public makeGraphable(): Graphable {
        return { r: 0, t: "" }
    }

    /**
     * Stringifies the graph and pointers
     */
    public toString(spaces: number = null) {
        return JSON.stringify({
            pointers: this.pointers,
            graph: this.graph
        }, null, typeof spaces === "number" ? spaces : void 0)
    }
}
