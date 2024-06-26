import { serveDir } from "./file_server.ts";
import dir from "./dist/dir.ts";

export type RequestHandler = (req: Request) => Response | Promise<Response>;

export type AppParams = {};
export function createServer(_params: AppParams): RequestHandler {
    return (req: Request) => {
        return serveDir(req, {
            dir,
        });
    };
}
