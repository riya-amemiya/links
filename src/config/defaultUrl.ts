// サイトのURLを設定する
export const defaultUrl: string =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL || ""
    : "http://localhost:3000";
