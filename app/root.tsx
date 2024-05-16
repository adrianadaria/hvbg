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
      <body className="bg-blue text-white">
        <div id="video-background-container" className="relative w-full h-screen overflow-hidden">
          <video id="video-background" autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover"></video>
          <div className="relative z-10 container m-5 bg-blue w-full">
            <div className="flex">
              <div className="w-full">
                {children}
              </div>
              <div className="grow-1 w-80 rounded border border-grey">
                <li>Sfdsf</li>
              </div>
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
