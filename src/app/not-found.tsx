import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-xl">ページが見つかりません</p>
    </div>
  );
}
