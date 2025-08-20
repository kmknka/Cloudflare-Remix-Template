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
  return <h1>Welcome to BlogTemplate</h1>;
}
