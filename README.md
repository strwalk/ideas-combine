# Combine Ideas

Word と Word をランダムに組み合わせるアイデアメーカー

新企画の着想や、アイデア出しに詰まった時に便利です

- Demo: [https://combine-ideas.onrender.com](https://combine-ideas.onrender.com)

<br/>

<!-- prettier-ignore -->
| 画面イメージ |
| --------- |
| <img width="500" alt="ideas-combine" src="https://github.com/strwalk/ideas-combine/assets/61673527/68bf0cf8-169a-4607-8325-5157e36c3aff"> |

## Getting Started

1. GitHub リポジトリのクローン

   ```sh
   # HTTPSの場合
   git clone https://github.com/strwalk/ideas-combine.git

   # SSHの場合
   git clone git@github.com:strwalk/ideas-combine.git
   ```

2. プロジェクト内への移動

   ```sh
   cd ideas-combine
   ```

3. 依存関係のインストール

   ```sh
   yarn install
   ```

4. Auth0 の設定

- [Auth0](https://auth0.com/)にログイン／サインアップし、新規アプリを作成
- Regular Web App を選択
- Applications > Applications > 作成したアプリを選択 > Settings で下記を設定し保存
  - Allowed Callback URLs
    - http://localhost:3000/api/auth/callback
  - Allowed Logout URLs
    - http://localhost:3000
  - Allowed Web Origins
    - http://localhost:3000

5. `.env`ファイルの設定

- プロジェクト直下に`.env`を作成

  ```sh
  touch .env
  ```

- `.env`に下記を追加

  - Next.js 関連

    ```sh
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    ```

  - PostgreSQL 関連

    - POSTGRES_USE`、POSTGRES_PASSWORD、POSTGRES_DB、POSTGRES_TZ は、任意の値を設定
      - POSTGRES_USER の例：`user`
      - POSTGRES_PASSWORD の例：`password`
      - POSTGRES_DB の例：`database`
      - POSTGRES_TZ の例：`Asia/Tokyo`
    - DATABASE_URL は、＊1, ＊2 のどちらか片方を追加

    ```sh
    POSTGRES_USER=XXXXX
    POSTGRES_PASSWORD=XXXXX
    POSTGRES_DB=XXXXX
    POSTGRES_TZ=XXXXX

    # PostgreSQL + アプリ全体を Docker コンテナで起動する場合（＊1）
    DATABASE_URL=`postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?schema=public`

    # PostgreSQL のみ Docker コンテナで起動する場合（＊2）
    # DATABASE_URL=`postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public`
    ```

  - Auth0 関連

    - Auth0 にログイン > Applications > Applications > 作成したアプリを選択 > Quickstart > Configure the SDK から下記の値を取得

    ```sh
    AUTH0_SECRET=XXXXX
    AUTH0_BASE_URL='http://localhost:3000'
    AUTH0_ISSUER_BASE_URL=XXXXX
    AUTH0_CLIENT_ID=XXXXX
    AUTH0_CLIENT_SECRET=XXXXX
    ```

    - 上記の`AUTH0_SECRET`はターミナルで下記を実行することで取得可能

    ```sh
    openssl rand -hex
    ```

6. プロジェクトの起動

- `.env`の PostgreSQL 関連で選択した`DATABASE_URL`に合わせ、下記のいずれかの方法で起動

  - PostgreSQL + アプリ全体を Docker コンテナで起動する場合

    ```docker
    docker compose up -d
    ```

  - PostgreSQL のみ Docker コンテナで起動する場合

    ```docker,sh
    docker compose -f docker-compose.dev.yml up -d

    yarn dev
    ```

7. ブラウザで確認

- [http://localhost:3000](http://localhost:3000) を開く

## Features

- 基本機能（Word のシャッフル）
  - Top ページ（[http://localhost:3000](http://localhost:3000)）を開く
  - 「Shuffle」ボタンをクリック
  - ランダムに表示される Word の組み合わせから、新たなアイデアが生まれるかも？

<details>
<summary>その他の機能</summary>

- 気に入ったアイデアの保存
  - ログイン後に使用可能な機能
  - Top ページ（[http://localhost:3000](http://localhost:3000)）を開く
  - 「Shuffle」ボタンをクリックし、気に入ったアイデアを見つけたら「Save」ボタンをクリック
  - 「保存しました」と表示されたら「OK」で閉じる
- 保存したアイデアの確認
  - ログイン後に使用可能な機能
  - Top ページ（[http://localhost:3000](http://localhost:3000)）を開く
  - 「Favorites List」ボタンをクリック
  - 保存したアイデアが表示される
- 保存したアイデアの削除
  - ログイン後に使用可能な機能
  - Top ページ（[http://localhost:3000](http://localhost:3000)）を開く
  - 「Favorites List」ボタンをクリック
  - 削除したい行の一番右の削除ボタンをクリック
  - 「削除しました」と表示されたら「OK」で閉じる
- ログイン
  - 画面右上の「Login」ボタンをクリック
  - 登録したメールアドレス・パスワードを入力
  - 「続ける」ボタンをクリック
  - 初めて使用する場合は、先に「サインアップ」が必要
- ログアウト
  - 画面右上の「Logout」ボタンをクリック
  - 注：Logout ボタンが表示されるのは、ログイン済みの時のみ
- サインアップ
  - 画面右上の「Login」ボタンをクリック
  - ログイン画面下部の「サインアップ」の文字をクリック
  - メールアドレス・パスワードを入力
  - 「続ける」ボタンをクリック

</details>

## Built With

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [React](https://react.dev/) - The library for web and native user interfaces
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Node.js](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
- [Docker](https://www.docker.com/) - Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.
- [tailwindcss](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
- [Auth0](https://auth0.com/) - Secure access for online shoppers But not scammer
- [render](https://render.com/) - Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git

## Author

strwalk - https://github.com/strwalk
