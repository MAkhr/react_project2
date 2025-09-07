// src/components/CloudServices.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const awsServices = [
  { name: "Amazon EC2", file: "aws_EC2" },
  { name: "Amazon S3", file: "aws_S3" },
  { name: "AWS Lambda", file: "aws_Lambda" },
  { name: "Amazon RDS", file: "aws_RDS" },
  { name: "Amazon DynamoDB", file: "aws_DynamoDB" },
  { name: "Amazon CloudFront", file: "aws_CloudFront" },
  { name: "Amazon VPC", file: "aws_VPC" },
  { name: "AWS IAM", file: "aws_IAM" },
  { name: "Amazon SNS", file: "aws_SNS" },
  { name: "Amazon SQS", file: "aws_SQS" }
];

const azureServices = [
  { name: "Azure Virtual Machines", file: "azure_VM" },
  { name: "Azure Blob Storage", file: "azure_Blob" },
  { name: "Azure Functions", file: "azure_Functions" },
  { name: "Azure SQL Database", file: "azure_SQL" },
  { name: "Cosmos DB", file: "azure_CosmosDB" },
  { name: "Azure CDN", file: "azure_CDN" },
  { name: "Azure Virtual Network", file: "azure_VNet" },
  { name: "Azure Active Directory", file: "azure_AD" },
  { name: "Azure Notification Hubs", file: "azure_NotificationHubs" },
  { name: "Azure Service Bus", file: "azure_ServiceBus" }
];

const linuxServices = [
  { name: "Linux awk", file: "linux_awk" },
  { name: "Linux uniq", file: "linux_uniq" }
];

//const encodeServiceName = (name) => encodeURIComponent(name);

const CloudServices = () => {
  return (
    <div>
      <h2>AWS サービス一覧</h2>
      <ul>
        {awsServices.map((service, index) => (
          <li key={`aws-${index}`}>
            <Link to={`/service/${service.file}`}>{service.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Azure サービス一覧</h2>
      <ul>
        {azureServices.map((service, index) => (
          <li key={`azure-${index}`}>
            <Link to={`/service/${service.file}`}>{service.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Linux コマンド一覧</h2>
      <ul>
        {linuxServices.map((service, index) => (
          <li key={`linux-${index}`}>
            <Link to={`/service/${service.file}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CloudServices;
