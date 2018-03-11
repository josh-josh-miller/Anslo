import "jest";
export declare module Model {
    class Settings {
        canDoSomething: boolean;
    }
    class Note {
        title: string;
        content: string;
        created: Date;
        doSomething(): void;
    }
    class User {
        name: string;
        email: string;
        notes: Note[];
        created: Date;
        settings: Settings;
        doSomething(): void;
    }
}
