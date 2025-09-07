# Project Glossary

クラウドサービス（AWS、Azure）やLinuxコマンドの用語集・辞書アプリケーション

## 概要

このプロジェクトは、クラウドサービスやLinuxコマンドの情報を整理・検索・編集できるWebアプリケーションです。React + Vite（フロントエンド）とExpress.js（バックエンド）で構成されています。

## プロジェクト構成

```
Project_Glossary/
├── backend/                    # バックエンドAPI
│   ├── package.json           # Express.js、CORS依存関係
│   └── server.js              # APIサーバー（ポート3001）
├── frontend/                   # フロントエンドアプリ
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── services/      # サービス情報（Markdownファイル）
│   │   │   │   ├── aws_EC2.md
│   │   │   │   ├── aws_Lambda.md
│   │   │   │   ├── aws_VPC.md
│   │   │   │   ├── aws_IAM.md
│   │   │   │   ├── aws_DynamoDB.md
│   │   │   │   ├── aws_CloudWatch.md
│   │   │   │   ├── aws_CloudFront.md
│   │   │   │   ├── aws_RDS.md
│   │   │   │   ├── aws_S3.md
│   │   │   │   ├── azure_Functions.md
│   │   │   │   ├── azure_VirtualMachines.md
│   │   │   │   ├── azure_AppService.md
│   │   │   │   ├── azure_BlobStorage.md
│   │   │   │   ├── azure_SQLDatabase.md
│   │   │   │   ├── azure_CosmosDB.md
│   │   │   │   ├── azure_ActiveDirectory.md
│   │   │   │   ├── linux_awk.md
│   │   │   │   └── tmp_service.md
│   │   │   ├── CloudServices.jsx    # メイン一覧ページ
│   │   │   ├── SearchPage.jsx       # 検索ページ
│   │   │   ├── ServiceCreate.jsx    # 新規サービス作成
│   │   │   └── ServiceRouter.jsx    # サービス詳細表示・編集
│   │   ├── utils/
│   │   │   └── formatServiceName.js # サービス名フォーマット
│   │   ├── App.jsx            # メインアプリコンポーネント
│   │   └── main.jsx           # エントリーポイント
│   ├── package.json           # React、React Router、Markdown依存関係
│   └── vite.config.js         # Vite設定
├── .gitignore
└── create_service_pages.bat   # サービスページ作成バッチ
```

## 主な機能

### フロントエンド機能
- **サービス一覧表示**: AWS、Azure、Linuxサービスをカテゴリ別に表示
- **検索機能**: サービス名での絞り込み検索
- **サービス詳細表示**: Markdownファイルの内容をレンダリング
- **インライン編集**: サービス詳細ページでその場編集・保存
- **新規サービス作成**: Markdownエディタでサービス情報を自由に作成

### バックエンド機能
- **サービス更新API**: `/api/updateService` エンドポイント
- **Markdownファイル更新**: 編集内容をファイルに直接保存

## 技術スタック

### フロントエンド
- **React 18.2.0**: UIライブラリ
- **React Router DOM 6.15.0**: ルーティング
- **React Markdown 8.0.7**: Markdownレンダリング・編集
- **Remark GFM 3.0.1**: GitHub Flavored Markdown対応
- **Vite 5.1.0**: ビルドツール
- **TailwindCSS**: スタイリング

### バックエンド
- **Express.js 4.18.2**: Webフレームワーク
- **CORS 2.8.5**: クロスオリジン対応
- **Node.js File System**: Markdownファイル操作

## セットアップ・起動方法

### バックエンド起動
```bash
cd backend
npm install
node server.js
# http://localhost:3001 で起動
```

### フロントエンド起動
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173 で起動（Viteデフォルト）
```

### 使用方法
1. ブラウザで http://localhost:5173 にアクセス
2. サービス一覧から詳細を確認
3. 「編集」ボタンで内容を編集・保存
4. 「新しいサービスを作成」で新規追加

## ファイル詳細

### 主要コンポーネント

#### CloudServices.jsx
- メイン一覧ページ
- サービスをプレフィックス（aws_, azure_, linux_）でグルーピング
- 検索機能とサービス作成ページへのリンク

#### ServiceRouter.jsx
- サービス詳細表示・編集ページ
- Markdownレンダリング表示
- インライン編集機能（編集・保存・キャンセル）
- リアルタイムプレビュー

#### ServiceCreate.jsx
- 新規サービス作成フォーム
- 環境（AWS/Azure/Linux）とサービス名を選択
- Markdownエディタで自由な項目・内容を作成
- 書き方ガイド付き

#### server.js
- Express.jsサーバー
- `/api/updateService` エンドポイントでサービス作成・更新
- Markdownファイルを `frontend/src/components/services/` に保存

### ユーティリティ

#### formatServiceName.js
- サービス名の表示フォーマット（`aws_EC2` → `Amazon EC2`）
- カテゴリタイトルの生成（`aws_` → `AWS サービス一覧`）

## サービスデータ形式

各サービスは `{環境}_{サービス名}.md` 形式のMarkdownファイルで管理。完全なMarkdown記法に対応し、自由な項目を追加可能：

```markdown
# サービス名

概要説明

## 主な特徴
- 特徴1
- 特徴2

## 料金体系
- 従量課金制
- 無料枠あり

## 使用例
具体的な使用例の説明

## その他の項目
自由に項目を追加可能

[公式ドキュメント](URL)
```

## 編集機能の使い方

### サービス情報の編集
1. サービス詳細ページで「編集」ボタンをクリック
2. Markdownエディタで内容を自由に編集
3. 「保存」ボタンで変更を確定
4. 「キャンセル」で変更を破棄

### 新規サービス作成
1. `/create` ページにアクセス
2. 環境（AWS/Azure/Linux）とサービス名を入力
3. Markdownエディタで内容を作成
4. 「作成」ボタンで保存

### Markdown記法例
- `# 見出し1` - メインタイトル
- `## 見出し2` - セクション見出し
- `- リスト項目` - 箇条書き
- `[リンクテキスト](URL)` - リンク
- `**太字**` - 強調

## 収録サービス

### AWS（7サービス）
- EC2, Lambda, VPC, IAM, DynamoDB, CloudWatch, CloudFront, RDS, S3

### Azure（6サービス）
- Functions, Virtual Machines, App Service, Blob Storage, SQL Database, Cosmos DB, Active Directory

### Linux
- awk

## 開発・拡張

- 新しいサービス追加: `/create` ページから、またはservicesフォルダに直接MDファイル追加
- 新しい環境追加: `formatServiceName.js` と `ServiceCreate.jsx` の選択肢を更新
- スタイリング: TailwindCSSクラスを使用（App.css、index.css）