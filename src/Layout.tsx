import { type PropsWithChildren } from "react";
import { pages } from "./pages/index.ts";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
        <link rel="stylesheet" href="/public/global.css" />
        <link rel="stylesheet" href="/public/page.css" />
        <title>Component Challenges</title>
      </head>
      <body>
        <header>
          <nav className="content">
            {Object.entries(pages).map(([url, component]) => (
              <a href={url}>{component.name}</a>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
