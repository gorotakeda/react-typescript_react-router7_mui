import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box,
  ThemeProvider,
  CssBaseline
} from '@mui/material'
import { Home, Info, Phone } from '@mui/icons-material'

// ページコンポーネントをインポート
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { theme } from './themes/theme'

// レイアウトコンポーネント
const RootLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

// React Router v7の推奨方法でルーターを作成
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App