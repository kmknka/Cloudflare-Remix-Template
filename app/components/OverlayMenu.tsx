// app/components/OverlayMenu.tsx
import { useOverlay } from "~/context/OverlayContext";
import { Link, useLocation, useNavigate } from "@remix-run/react";

export default function OverlayMenu() {
  const tabs = [
    {
      name: "わたしについて",
      path: "/about",
      disabled: false,
    },
    {
      name: "カテゴリ１",
      category: "カテゴリ１",
      disabled: false,
    },
    {
      name: "カテゴリ２",
      category: "カテゴリ２",
      disabled: false,
    },
    {
      name: "カテゴリ３",
      category: "カテゴリ３",
      disabled: false,
    },
    {
      name: "お問い合わせ",
      path: "/contact",
      disabled: false,
    },
  ];
  const location = useLocation();
  const url = new URL(location.pathname + location.search, "https://dummy.com");
  const categoryParam = url.searchParams.get("category");
  const navigate = useNavigate();
  const { isOpen, close } = useOverlay();

  // Header.tsxのuseOverlayから取得したisOpenを使ってメニューの開閉状態を制御
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* 薄黒い背景（クリックで閉じる） */}
      <button
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={close}
      />
      {/* メニュー本体 */}
      <div
        className={`
    fixed flex flex-col top-0 right-0 h-full w-4/5 max-w-sm bg-white
    shadow-lg z-50 p-6 space-y-4
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex justify-center">
          <button
            onClick={close}
            className="p-2 border bg-gray-100 rounded-lg hover:bg-gray-300"
          >
            <svg
              className="w-7 h-7  text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {tabs.map((tab) => {
          const to =
            tab.path ?? `/?category=${encodeURIComponent(tab.category!)}`;
          // isActive 判定を分岐
          const isActive = tab.path
            ? location.pathname === tab.path
            : categoryParam === tab.category;

          return (
            <Link
              key={tab.name}
              to={to}
              onClick={(e) => {
                e.preventDefault(); // <Link> のデフォルト動作を無効にする
                navigate(to); // 明示的にルーティング遷移
                close();
              }}
              className={`flex items-center w-full px-4 py-4 text-lg rounded ${
                isActive
                  ? "bg-gray-300 text-gray-800 pointer-events-none"
                  : "text-gray-800 hover:bg-gray-300"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
