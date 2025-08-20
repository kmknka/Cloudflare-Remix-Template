// components/Sidebar.tsx
import { Link } from "@remix-run/react";
interface SidebarProps {
  tagList?: { name: string; count: number }[];
}

export default function Sidebar({ tagList }: SidebarProps) {
  return (
    <aside className="md:w-64 space-y-4">
      {/* 自己紹介セクション */}
      <section>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          {/* 背景画像 */}
          <div
            className="relative h-24 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg-avatar.jpg')" }}
          >
            {/* アバター画像 */}
            <img
              src="/images/avatar.png"
              alt="プロフィール画像"
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div className="text-center mt-8">
            {/* 名前と自己紹介 */}

            <h2 className="text-lg font-semibold text-gray-800 mb-2">Name</h2>
            <div className="max-w-screen-md mx-auto px-6">
              <div className="text-xs text-gray-600 leading-relaxed text-justify">
                <p className="mb-60">自己紹介文を書くスペース</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 記事タグセクション */}
      <section>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">タグ一覧</h2>
          {/* タグリスト */}
          {tagList && tagList.length > 0 ? (
            <div className="flex flex-wrap gap-1 mt-1">
              {tagList.map((tag) => (
                <div
                  key={tag.name}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs bg-gray-100 text-gray-800 font-medium px-2 py-0.5 rounded hover:bg-gray-300 hover:shadow-lg transition-shadow duration-500"
                >
                  <Link
                    key={tag.name}
                    to={`/?tag=${encodeURIComponent(tag.name)}`}
                    className="flex items-center gap-1"
                  >
                    {tag.name}
                    <div className="ml-1">({tag.count})</div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">タグはありません</p>
          )}
        </div>
      </section>
    </aside>
  );
}
