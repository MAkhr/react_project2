# Amazon CloudWatch

AWSリソースとアプリケーションの監視・ログ管理サービスです。

## 主な特徴
- メトリクス収集・監視
- ログ集約・分析
- アラーム設定
- ダッシュボード作成

## 主な機能
- CloudWatchエージェント

    EC2とオンプレに導入し、ログとメトリクス取得・作成できる。

- CloudWatchのダッシュボード

    ダッシュボードの共有機能を使用することで、AWSアカウントを持たない相手と共有することが可能。

- CloudWatch Insight

    CloudWatch Logsに保存されたログデータに対して、高速でスケーラブルなクエリを実行。

- CloudWatch Container Insights

    コンテナのCPU やメモリ、ディスク、ネットワークなど、多数のリソースのメトリクスを自動的に収集.
    問題の迅速な特定と解決に役立つ、コンテナの再起動失敗などの診断情報を提供

- サブスクリプションフィルター

    条件に一致するログイベントをリアルタイムで別のサービスに転送。
    Kinesis Data Streams、Firehose、Lambdaで利用可能

[公式ドキュメント](https://docs.aws.amazon.com/cloudwatch/)