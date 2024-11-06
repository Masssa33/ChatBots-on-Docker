# ChatBots on Docker

このプロジェクトは、Reactを使用して構築されたチャットボットアプリケーションです。LINE風とChatGPT風の2種類のチャットボットを提供します。

## 特徴

- **LINE風チャットボット**：シンプルで直感的なインターフェースを持つチャットボット。
- **ChatGPT風チャットボット**：複数のスレッドを管理できる高度なチャットボット。

## 必要条件

- Node.js (バージョン14以上)
- npm または yarn
- Docker（オプション）

## インストール

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/あなたのユーザー名/リポジトリ名.git
   cd リポジトリ名
   ```
2. 依存関係をインストールします。

   ```bash
   npm install
   ```
   または
   ```bash
   yarn install
   ```
## 起動方法
### ローカル環境での起動
   ```bash
   npm start
   ```
   または
   ```bash
   yarn install
   ```
   ブラウザで http://localhost:3000 にアクセスします。

### Dockerを使用しての起動
  1. Dockerイメージをビルドします。

  ```bash
  docker compose up
  ```
  2. Dockerコンテナを起動します。

  ```bash
  docker run -p 3000:3000 chatbots-app
  ```
  ブラウザで http://localhost:3000 にアクセスします。

## 使用技術
- React：ユーザーインターフェースを構築するためのJavaScriptライブラリ。
- React Router：シングルページアプリケーションでのルーティングを実現。
- Docker：アプリケーションをコンテナ化し、どの環境でも動作可能に。
  
