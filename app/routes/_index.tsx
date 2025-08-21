import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "BlogTemplate" },
    {
      name: "description",
      content:
        "ブログっぽい見た目のサイトになるようなテンプレートプロジェクトファイルです。",
    },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-100 min-h-screen rounded-lg p-4 md:p-12">
      <h1 className="text-gray-800 text-2xl font-bold">
        🏠Blog Templateのトップページへようこそ
      </h1>
      <p className="text-gray-700 mt-8 leading-relaxed">
        このサイトは、<span className="font-bold">Remix × Cloudflare</span>{" "}
        をベースにしたブログ風テンプレートです。
        <br />
        ヘッダーやサイドバーはモバイル表示にも対応しております。
        <br />
        ぜひ、本テンプレートを活用し、あなた自身のブログを作成してみてください。
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        本テンプレートを用いたサイト作成についてを以下のリンクで紹介しております。
        <br />
        覗いてみてください👀
        <br />
      </p>
      {/* リンクカード */}
      <a
        href="https://zeroesu.com/posts/y4-d9c2fa8d"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 max-w-xl rounded-lg border border-gray-300 bg-white shadow hover:shadow-lg transition"
      >
        <div className="flex">
          <img
            src="/images/ogp-sample.png"
            alt="サイトのサムネイル"
            className="w-32 h-auto md:w-48 md:h-auto object-cover rounded-l-lg"
          />
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-xs md:text-sm font-semibold text-gray-800 break-words">
              【第１回】Web開発未経験者がCloudflareで無料ブログ構築！技術選定の理由と前提
            </h3>
            <p className="text-xs text-gray-600 mt-1 break-words">
              Web開発未経験者が1からCloudflare×Remix×microCMSでブログ構築しました。技術選定理由や前提条件などについて記述しています。
            </p>
            <span className="text-blue-500 text-xs mt-2 break-all">
              https://zeroesu.com/posts/y4-d9c2fa8d
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
