import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import GlobalStyle from "./styles/global";

const queryClient = new QueryClient();
const appRoot = ReactDOM.createRoot(document.getElementById("root"));

appRoot.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
