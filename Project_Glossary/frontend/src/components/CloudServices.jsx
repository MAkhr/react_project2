import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatServiceName, getGroupTitle } from "../utils/formatServiceName";

// Markdown を文字列として読み込む
const modules = import.meta.glob("./services/*.md", { eager: true, as: "raw" });

const CloudServices = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  // Markdown ファイル名のみ取得
  const serviceFiles = Object.keys(modules).map((path) =>
    path.split("/").pop().replace(".md", "")
  );

  const filteredFiles = serviceFiles.filter((fileName) =>
    formatServiceName(fileName)
      .toLowerCase()
      .includes(searchKeyword.toLowerCase())
  );

  // prefix ごとにグルーピング
  const groupedServices = {};
  filteredFiles.forEach((fileName) => {
    const prefix = fileName.split("_")[0] + "_";
    if (!groupedServices[prefix]) groupedServices[prefix] = [];
    groupedServices[prefix].push(fileName);
  });

  const handleSearch = () => {
    navigate(`/search?keyword=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <div className="p-6" translate="no">
      <h1 className="text-3xl font-bold mb-4">クラウドサービス一覧</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="サービス名を検索"
            className="border px-2 py-1 rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            検索
          </button>
        </div>

        <Link
          to="/create"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          新しいサービスを作成
        </Link>
      </div>
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">リソースマップ</h3>
        <a
          href="/src/components/services/aws_リソースマップ.html"
          className="text-blue-600 hover:underline"
        >
          AWS リソースマップ
        </a>
      </div>

      {Object.entries(groupedServices).map(([prefix, files]) => (
        <div key={prefix} className="mb-4">
          <h2 className="text-xl font-bold mb-2">{getGroupTitle(prefix)}</h2>
          <ul>
            {files.map((fileName) => (
              <li key={fileName}>
                <Link to={`/service/${fileName}`} translate="no">
                  {formatServiceName(fileName)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {filteredFiles.length === 0 && (
        <p className="mt-4 text-gray-500">該当するサービスがありません</p>
      )}
    </div>
  );
};

export default CloudServices;
