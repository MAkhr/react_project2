export const formatServiceName = (fileName) => {
  return fileName
    .replace(/^aws_/, "Amazon ")
    .replace(/^azure_/, "Azure ")
    .replace(/^linux_/, "Linux ")
    .replace(/_/g, " ");
};

export const getGroupTitle = (prefix) => {
  switch (prefix) {
    case "aws_":
      return "AWS サービス一覧";
    case "azure_":
      return "Azure サービス一覧";
    case "linux_":
      return "Linux コマンド一覧";
    default:
      return "その他";
  }
};
