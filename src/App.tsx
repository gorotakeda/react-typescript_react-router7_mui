import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button,
  Card,
  CardContent,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Chip,
  Stack
} from '@mui/material'
import { Home, Info, Phone, Code, Router, Build } from '@mui/icons-material'

// MUIテーマの作成
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

// ホームページコンポーネント
const HomePage = () => (
  <Container maxWidth="md">
    <Box sx={{ mt: 4, mb: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        React TypeScript MUI アプリへようこそ
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🎉 プロジェクトが正常に構築されました！
          </Typography>
          <Typography variant="body1" paragraph>
            このアプリケーションは最新の技術スタックを使用して構築されています。
            各ページを探索して、React Router v7とMaterial UIの組み合わせをご確認ください。
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" mt={2}>
            <Chip icon={<Code />} label="React 19" color="primary" />
            <Chip icon={<Router />} label="React Router v7" color="secondary" />
            <Chip icon={<Build />} label="Material UI" color="success" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  </Container>
)

// アバウトページコンポーネント
const AboutPage = () => (
  <Container maxWidth="md">
    <Box sx={{ mt: 4, mb: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        技術スタック
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            使用技術
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">⚛️ React 19.0.0</Typography>
              <Typography variant="body2" color="text.secondary">
                最新のReactバージョンで、新しい機能と改善されたパフォーマンスを提供
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">🔄 React Router 7.1.5</Typography>
              <Typography variant="body2" color="text.secondary">
                最新のルーティングライブラリで、宣言的なナビゲーションを実現
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">🎨 Material UI</Typography>
              <Typography variant="body2" color="text.secondary">
                Googleのマテリアルデザインに基づいた美しいUIコンポーネント
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">📝 TypeScript</Typography>
              <Typography variant="body2" color="text.secondary">
                型安全性による開発体験の向上とバグの早期発見
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">⚡ Vite</Typography>
              <Typography variant="body2" color="text.secondary">
                高速なビルドツールとホットリロードによる開発効率の向上
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  </Container>
)

// 連絡先ページコンポーネント
const ContactPage = () => (
  <Container maxWidth="md">
    <Box sx={{ mt: 4, mb: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        連絡先
      </Typography>
      <Card elevation={3}>
        <CardContent>
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
        </CardContent>
      </Card>
    </Box>
  </Container>
)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React MUI App
            </Typography>
            <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
              ホーム
            </Button>
            <Button color="inherit" component={Link} to="/about" startIcon={<Info />}>
              アバウト
            </Button>
            <Button color="inherit" component={Link} to="/contact" startIcon={<Phone />}>
              連絡先
            </Button>
          </Toolbar>
        </AppBar>
        
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App