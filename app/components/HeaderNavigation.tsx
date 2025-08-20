//app/components/HeaderNavigation.tsx
import { Link, useLocation } from "@remix-run/react";

const tabs = [
  {
    name: "about",
    path: "/about",
    disabled: false,
  },
  { name: "category1", category: "category1", disabled: false },
  {
    name: "category2",
    category: "category2",
    disabled: false,
  },
  { name: "category3", category: "category3", disabled: false },
  { name: "contact", path: "/contact", disabled: false },
];

export default function HeaderNavigation() {
  const location = useLocation();
  const url = new URL(location.pathname + location.search, "https://dummy.com");
  const categoryParam = url.searchParams.get("category");

  return (
    <div className="flex items-center gap-x-6 text-sm text-white">
      {tabs.map((tab) => {
        const to =
          tab.path ?? `/?category=${encodeURIComponent(tab.category!)}`;
        const isActive = tab.path
          ? location.pathname === tab.path
          : categoryParam === tab.category;

        return (
          <div key={tab.name}>
            {tab.disabled ? (
              <span className="text-gray-400 rounded-t-lg cursor-not-allowed">
                {tab.name}
              </span>
            ) : (
              <Link
                to={to}
                className={`border-b-2 ${
                  isActive
                    ? "text-gray-300 border-gray-300"
                    : "border-transparent hover:text-gray-300 duration-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
