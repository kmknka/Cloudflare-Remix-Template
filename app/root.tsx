import Header from "~/components/Header";
import { OverlayProvider } from "~/context/OverlayContext";
import OverlayMenu from "~/components/OverlayMenu";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white">
        {/* オーバーレイ表示用 */}
        <OverlayProvider>
          {/* ヘッダー */}
          <Header />
          {/* メインコンテンツ (記事情報及びサイドバー)*/}
          <main>{children}</main>
          {/* メニュー表示 */}
          <OverlayMenu />
          <ScrollRestoration />
          <Scripts />
        </OverlayProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
