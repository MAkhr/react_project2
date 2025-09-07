import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors()); // フロントからのリクエストを許可
app.use(express.json());

app.post("/api/createService", (req, res) => {
  const { env, service, summary, features, docsUrl } = req.body;

  if (!env || !service) return res.status(400).send("環境・サービス名必須");

  const fileName = `${env}_${service}.md`;
  const filePath = path.join(process.cwd(), "..", "frontend", "src", "components", "services", fileName);

  const mdContent = `# ${env.toUpperCase()} ${service}

${summary}

## 主な特徴
${features.map(f => `- ${f}`).join("\n")}

[公式ドキュメント](${docsUrl})
`;

  fs.writeFile(filePath, mdContent, (err) => {
    if (err) return res.status(500).send("ファイル作成失敗");
    res.status(200).send("作成成功");
  });
});

app.post("/api/updateService", (req, res) => {
  const { serviceName, content } = req.body;

  if (!serviceName || !content) return res.status(400).send("サービス名・内容必須");

  const fileName = `${serviceName}.md`;
  const filePath = path.join(process.cwd(), "..", "frontend", "src", "components", "services", fileName);

  fs.writeFile(filePath, content, (err) => {
    if (err) return res.status(500).send("ファイル更新失敗");
    res.status(200).send("更新成功");
  });
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
