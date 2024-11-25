import { serveDir } from "jsr:@std/http/file-server";
import { route } from "jsr:@std/http/unstable-route";

const routes = [
  {
    pattern: new URLPattern({ pathname: "/public/*" }),
    handler: (req: Request) => serveDir(req),
  },
];

Deno.serve(route(routes, () => new Response("Not found", { status: 404 })));
