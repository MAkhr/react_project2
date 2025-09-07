import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ServiceCreate = () => {
  const [env, setEnv] = useState("aws");
  const [service, setService] = useState("");
  const [content, setContent] = useState(`# サービス名

概要説明

## 主な特徴
- 特徴1
- 特徴2

[公式ドキュメント](URL)`);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!service.trim()) {
      setMessage("サービス名を入力してください。");
      return;
    }

    const serviceName = `${env}_${service}`;
    const res = await fetch("/api/updateService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serviceName, content })
    });

    if (res.ok) {
      setMessage("サービスページを作成しました！");
      navigate("/");
    } else {
      setMessage("作成に失敗しました。");
    }
  };

  return (
    <div className="p-6" translate="no">
      <h1 className="text-2xl font-bold mb-4">新しいサービスページ作成</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">環境</label>
          <select 
            value={env} 
            onChange={(e) => setEnv(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="linux">Linux</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">サービス名</label>
          <input 
            value={service} 
            onChange={e => setService(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="EC2, Lambda, VirtualMachinesなど"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">サービス内容（Markdown形式）</label>
          <textarea 
            value={content} 
            onChange={e => setContent(e.target.value)}
            className="border px-3 py-2 rounded w-full h-64 font-mono text-sm"
            placeholder="Markdownで自由に記述してください..."
          />
          <div className="text-sm text-gray-600 mt-2">
            <p>Markdownの書き方例：</p>
            <ul className="list-disc ml-4">
              <li># 見出し1</li>
              <li>## 見出し2</li>
              <li>- リスト項目</li>
              <li>[リンクテキスト](URL)</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        作成
      </button>

      {message && <p className="mt-2">{message}</p>}

      {/* 追加: 一覧に戻るリンク */}
      <Link to="/" className="text-blue-500 underline mt-4 block">
        一覧ページに戻る
      </Link>
    </div>
  );
};

export default ServiceCreate;
