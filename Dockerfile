# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /usr/app

# アプリケーションのポートを公開
# EXPOSE 3000

# 権限の問題を避けるためにユーザーをnodeに変更
# RUN chown -R node:node /app
# USER node

