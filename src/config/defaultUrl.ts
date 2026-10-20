// サイトのURLを設定する
export const defaultUrl: string = import.meta.env.PROD
  ? import.meta.env.NEXT_PUBLIC_URL || ""
  : "http://localhost:3000";
