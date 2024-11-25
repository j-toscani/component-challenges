import { serveDir } from "jsr:@std/http/file-server";
import { route } from "jsr:@std/http/unstable-route";
import routes from "./src/routes.ts";

Deno.serve(
  route(
    [
      ...routes,
      {
        pattern: new URLPattern({ pathname: "/public/*" }),
        handler: (req: Request) => serveDir(req),
      },
    ],
    () => new Response("Not found", { status: 404 })
  )
);
