import Header from "~/components/Header";
import { OverlayProvider } from "~/context/OverlayContext";
import OverlayMenu from "~/components/OverlayMenu";
import Sidebar from "./components/Sidebar";
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
          {/* モバイル表示時のみ余白を追加 */}
          <div className="mt-12 md:mt-0" />
          {/* トップ画像 */}
          <div className="relative w-full h-28 md:h-64">
            <img
              src="/images/hero.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl font-bold">Blog Template</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:flex-1 gap-6 px-4 py-6">
            {/* メインコンテンツ*/}
            <main className="flex-1">{children}</main>
            {/* サイドバー*/}
            <Sidebar />
          </div>
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
