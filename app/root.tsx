import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-white">
        <div id="video-background-container" className="absolute w-full h-screen overflow-hidden">
          <video id="video-background" autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover"></video>
          <div className="flex grid-cols-2 gap-4 fixed z-10 w-full bottom-0">

              <div className="w-full m-5">
                {children}
              </div>
              <div className="hidden w-80 rounded border border-grey bg-blue">
                <li>Sfdsf</li>
              </div>

          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <script src="/scripts/webcam.js"></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
