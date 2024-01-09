# リンク集

## 概要

リンク集を作成するためのツールです。

## 使い方

下記のボタンからVercelにデプロイしてください。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Friya-amemiya%2Flinks%2Ftree%2Fmain&env=MICROCMS_SERVICEDOMAIN,MICROCMS_API_KEY,NEXT_PUBLIC_URL&demo-title=Demo&demo-url=https%3A%2F%2Friya-amemiya-links.oshaburikitchin.com%2F)

### 環境変数

| 環境変数 | 説明 |
| --- | --- |
| `MICROCMS_SERVICEDOMAIN` | MicroCMSのサービスドメイン |
| `MICROCMS_API_KEY` | MicroCMSのAPIキー |
| `NEXT_PUBLIC_URL` | リンク集のURL |

### データ構造

MicroCMSのコンテンツモデルは下記のように作成してください。

#### links

| フィールドID | 表示名 | フィールドタイプ | 必須 | その他 |
| --- | --- | --- | --- | --- |
| `name` | リンク名 | テキスト | ○ | |
| `url` | URL | テキスト | ○ | |
| `icon` | アイコン | セレクト | ○ | src/config/iconData.tsに対応するものを指定してください。 |

#### profile

| フィールドID | 表示名 | フィールドタイプ | 必須 | その他 |
| --- | --- | --- | --- | --- |
| `name` | 名前 | テキスト | ○ | |
| `biography` | 自己紹介とか | テキストエリア | ○ | 簡単な自己紹介を記入してください |
| `icon` | アイコン | 画像 | ○ |　自分のアイコンを設定してください |
| `links` | リンク集 | 複数コンテンツ参照 | ○ | linksのコンテンツを選択してください |

#### works

| フィールドID | 表示名 | フィールドタイプ | 必須 | その他 |
| --- | --- | --- | --- | --- |
| `link` | リンク | コンテンツ参照 | ○ | linksのコンテンツを選択してください |
| `description` | 説明 | テキストエリア | ○ | |
| `img` | 画像 | 画像 | ○ | |

## カスタマイズ

### SEO系

`src/config/`を自身のサイトに合わせて変更してください。
faviconやOGP画像は`src/app`に配置してください。
