import React from "react";
import { Outlet, Link } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Home, Info, Phone } from "@mui/icons-material";
import { theme } from "../../themes/theme";

// レイアウトコンポーネント
export const RootLayout: React.FC = () => {
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
          <Button
            color="inherit"
            component={Link}
            to="/about"
            startIcon={<Info />}
          >
            アバウト
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            startIcon={<Phone />}
          >
            連絡先
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 2 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};
