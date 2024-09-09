# 1. 環境構築
## 初回
```
docker compose up --build
```
## 初回以降
```
docker compose up
```
# 2. よく使うコマンド
## ライブラリが追加された場合
```
docker compose run app npm install
```
# 3. ディレクトリ構成
```
├─ app/
├─ assets/
├─ components/
│  ├─ elements/
│  │  └─ Button
│  │     └─ Button.tsx
│  └─ layouts/
│     └─ Header
│        └─ Header.tsx
├─ constants/
├─ features/
│  └─ /post(例)
│     ├─ api/
│　　　　└─ getPost.ts
│     ├─ styles/
│     ├─ components/
│        ├─ Post.tsx
│        └─ Posts.tsx
│     ├─ hooks/
│        └─ usePost.ts
│     └─ types/
│        └─ index.ts
├─ hooks/
├─ libs/
├─ styles/
├─ types/
└─ utils/
```
## /assets
画像やSVGなどのファイルを利用するページごとにサブディレクトリで管理します。
## /components
アプリケーション全体で共通して使用されるコンポーネントを格納します。
サブディレクトリには以下のようなものがあります。
elements/ 例：Button
layouts/ 例：Header
## /constants
各ページで利用する、定数を管理します。
## /features
特定の機能やドメイン専用のAPIアクセス方法、コンポーネントなどを含みます。
## /hooks
共通的に使われる複数のリポジトリをまたぐ実装、ロジックなどを格納します。
## /libs
ライブラリ関連の設定などを格納します。
## /styles
スタイリングに関するファイルを格納します。
## types
型定義を中心に格納します。
## utils
アプリ全体で共通して使用するユーティリティ関数を中心に格納