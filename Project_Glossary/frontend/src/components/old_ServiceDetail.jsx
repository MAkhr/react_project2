// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDescriptions = {
  "Amazon EC2": "仮想サーバーの提供。弾力的なクラウドコンピューティング。",
  "Amazon S3": "オブジェクトストレージ。データ保存に最適。",
  "AWS Lambda": "サーバーレス実行環境。イベント駆動型。",
  "Amazon RDS": "リレーショナルデータベースサービス。",
  "Amazon DynamoDB": "高速でスケーラブルな NoSQL データベース。",
  "Amazon CloudFront": "CDN（コンテンツ配信ネットワーク）サービス。",
  "Amazon VPC": "仮想ネットワーク。セキュリティ構成可能。",
  "AWS IAM": "アクセス管理。ユーザー・権限設定。",
  "Amazon SNS": "通知サービス。プッシュ配信やメール送信。",
  "Amazon SQS": "メッセージキューサービス。非同期通信。",

  "Azure Virtual Machines": "仮想マシンの提供。WindowsやLinux対応。",
  "Azure Blob Storage": "大容量オブジェクトストレージ。",
  "Azure Functions": "Azureのサーバーレス実行基盤。",
  "Azure SQL Database": "マネージドなSQLデータベース。",
  "Cosmos DB": "グローバルスケーラブルな NoSQL データベース。",
  "Azure CDN": "Microsoftのコンテンツ配信ネットワーク。",
  "Azure Virtual Network": "仮想ネットワーク構成可能。",
  "Azure Active Directory": "ID管理とシングルサインオン対応。",
  "Azure Notification Hubs": "モバイル通知配信サービス。",
  "Azure Service Bus": "信頼性の高いメッセージングサービス。",

  "Linux awk": "特定のカラムを指定して出力する",
  "Linux uniq": "重複を削除して出力する"
};

const ServiceDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const description = serviceDescriptions[decodedName];

  if (!description) {
    return (
      <div>
        <h2>サービスが見つかりませんでした。</h2>
        <Link to="/">← 一覧へ戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{decodedName}</h2>
      <p>{description}</p>
      <Link to="/">← 一覧へ戻る</Link>
    </div>
  );
};

export default ServiceDetail;
