import { serveDir } from "./file_server.ts";
import dir from "./dist/dir.ts";

// fill this with the types of the parameters you want to pass to your app
export type AppConfig = {};

export type RequestHandler = (req: Request) => Response | Promise<Response>;
export function createApp(_config: AppConfig): RequestHandler {
    return (req: Request) => {
        return serveDir(req, {
            dir,
        });
    };
}
