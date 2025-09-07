@echo off
setlocal enabledelayedexpansion

set "targetDir=src\components\services"
mkdir "%targetDir%" 2>nul

for %%S in (
"Amazon EC2"
"Amazon S3"
"AWS Lambda"
"Amazon RDS"
"Amazon DynamoDB"
"Amazon CloudFront"
"Amazon VPC"
"AWS IAM"
"Amazon SNS"
"Amazon SQS"
) do (
    set "service=%%~S"
    set "filename=!service: =!"

    (
    echo import React from 'react';
    echo.
    echo const !filename! = () => {
    echo   return (
    echo     ^<div^>
    echo       ^<h2^>%%~S^</h2^>
    echo       ^<p^>これは %%~S の詳細ページです。^</p^>
    echo     ^</div^>
    echo   );
    echo };
    echo.
    echo export default !filename!;
    ) > "%targetDir%\!filename!.jsx"
)

echo.
echo 完了しました。
pause
