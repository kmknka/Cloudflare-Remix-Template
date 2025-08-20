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
    <div className="bg-gray-100 min-h-screen rounded-lg p-6">
      <h1 className="text-gray-800 text-2xl font-bold">Blog Template</h1>
    </div>
  );
}
