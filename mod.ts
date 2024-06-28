import { serveDir } from "./file_server.ts";
import dir from "./dist/dir.ts";

// fill this with the types of the parameters you want to pass to your app
export type AppConfig = {
    param1: string;
};

// a good way to distribute a smallweb app is to wrap it in a class
export class App {
    constructor(public config?: AppConfig) {}

    // the class should have a method that returns a fetch function
    // make sure to use an arrow function to keep the context of `this`
    fetch = (req: Request): Promise<Response> => {
        // here you can do anything with the request
        return serveDir(req, {
            dir,
        });
    };
}
