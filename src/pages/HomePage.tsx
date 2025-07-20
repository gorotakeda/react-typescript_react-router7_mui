// ホームページコンポーネント
import React from "react";
import { Typography, Chip, Stack } from "@mui/material";
import { Code, Router, Build } from "@mui/icons-material";
import { CardLayout } from "../components/layout/CardLayout";

export const HomePage: React.FC = () => (
  <CardLayout>
    <Typography variant="h3" component="h1" gutterBottom color="primary">
      React TypeScript MUI アプリへようこそ
    </Typography>
    <Typography variant="h6" gutterBottom>
      🎉 プロジェクトが正常に構築されました！
    </Typography>
    <Typography variant="body1" paragraph>
      このアプリケーションは最新の技術スタックを使用して構築されています。
      各ページを探索して、React Router v7とMaterial
      UIの組み合わせをご確認ください。
    </Typography>
    <Stack direction="row" spacing={2} flexWrap="wrap" mt={2}>
      <Chip icon={<Code />} label="React 19" color="primary" />
      <Chip icon={<Router />} label="React Router v7" color="secondary" />
      <Chip icon={<Build />} label="Material UI" color="success" />
    </Stack>
  </CardLayout>
);
