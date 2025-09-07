import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Markdown を文字列として読み込む
const modules = import.meta.glob("./services/*.md", { as: "raw" });

const ServiceRouter = () => {
  const { serviceName } = useParams();
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // modules のキーから serviceName に一致する Markdown ファイルを検索
    const matchedFile = Object.keys(modules).find((key) =>
      key.endsWith(`${serviceName}.md`)
    );

    if (matchedFile) {
      (async () => {
        const md = await modules[matchedFile]();
        setContent(md);
        setEditContent(md);
      })();
    } else {
      setContent(`# サービスが見つかりませんでした: ${serviceName}`);
    }
  }, [serviceName]);

  const handleEdit = () => {
    setIsEditing(true);
    setMessage("");
  };

  const handleSave = async () => {
    const res = await fetch("/api/updateService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serviceName, content: editContent })
    });

    if (res.ok) {
      setContent(editContent);
      setIsEditing(false);
      setMessage("保存しました！");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("保存に失敗しました。");
    }
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
    setMessage("");
  };

  return (
    <div className="p-6" translate="no">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">サービス詳細</h1>
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              編集
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                保存
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                キャンセル
              </button>
            </>
          )}
        </div>
      </div>

      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}

      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full h-96 p-4 border rounded font-mono text-sm"
            placeholder="Markdownで記述してください..."
          />
          <div className="text-sm text-gray-600">
            <p>Markdownの書き方例：</p>
            <ul className="list-disc ml-4">
              <li># 見出し1</li>
              <li>## 見出し2</li>
              <li>- リスト項目</li>
              <li>[リンクテキスト](URL)</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}

      <Link to="/" className="text-blue-500 underline mt-4 block">
        一覧ページに戻る
      </Link>
    </div>
  );
};

export default ServiceRouter;
