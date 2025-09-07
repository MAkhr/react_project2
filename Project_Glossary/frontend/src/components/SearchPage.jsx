import React from "react";
import { Link, useLocation } from "react-router-dom";
import { formatServiceName, getGroupTitle } from "../utils/formatServiceName";

const modules = import.meta.glob("./services/*.jsx", { eager: true });

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword") || "";

  const serviceFiles = Object.keys(modules).map((path) =>
    path.split("/").pop().replace(".jsx", "")
  );

  const filteredFiles = serviceFiles.filter((fileName) =>
    formatServiceName(fileName)
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );

  const groupedServices = {};
  filteredFiles.forEach((fileName) => {
    const prefix = fileName.split("_")[0] + "_";
    if (!groupedServices[prefix]) groupedServices[prefix] = [];
    groupedServices[prefix].push(fileName);
  });

  return (
    <div className="p-6" translate="no">
      <h1 className="text-3xl font-bold mb-4">検索結果: "{keyword}"</h1>

      <Link
        to="/"
        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 mb-6 inline-block"
      >
        一覧に戻る
      </Link>

      {filteredFiles.length === 0 && (
        <p className="text-gray-500 mt-4">該当するサービスが見つかりません</p>
      )}

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
    </div>
  );
};

export default SearchPage;
