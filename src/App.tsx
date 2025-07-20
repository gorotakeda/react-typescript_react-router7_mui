import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

// React Router v7の推奨方法でルーターを作成
const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
