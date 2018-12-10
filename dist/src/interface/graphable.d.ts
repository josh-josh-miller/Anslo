/**
 * Represents what a graph looks like
 */
export interface Graphable {
    references: number;
    type: string;
    key?: string;
    value?: any;
    context?: string;
    contents?: {
        [key: string]: Graphable;
    };
}
