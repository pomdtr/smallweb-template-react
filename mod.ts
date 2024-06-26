import { serveDir } from "./file_server.ts";
import dir from "./dist/dir.ts";

// fill this with the types of the parameters you want to pass to your app
export type AppParams = {};

export type RequestHandler = (req: Request) => Response | Promise<Response>;
export function createApp(_params: AppParams): RequestHandler {
    return (req: Request) => {
        return serveDir(req, {
            dir,
        });
    };
}
