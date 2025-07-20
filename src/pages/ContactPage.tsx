import { Typography, Button, TextField, Stack, Box } from "@mui/material";
import { useState } from "react";
import { CardLayout } from "../components/layout/CardLayout";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const hundleClick = () => {
    alert(`${name} ${email} ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <CardLayout>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        連絡先
      </Typography>
      <Typography variant="h6" gutterBottom>
        📧 お問い合わせ
      </Typography>
      <Typography variant="body1" paragraph>
        このプロジェクトについてご質問やご提案がございましたら、
        お気軽にお問い合わせください。
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          開発環境: React 19 + React Router 7 + Material UI + TypeScript + Vite
        </Typography>
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          maxWidth: 400,
          mx: "auto",
          px: 2,
          py: 3,
        }}
      >
        <TextField
          label="お名前"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="メールアドレス"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="お問い合わせ内容"
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={hundleClick}>
          送信
        </Button>
      </Stack>
    </CardLayout>
  );
};
