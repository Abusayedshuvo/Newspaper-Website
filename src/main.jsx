import React from "react";
import ReactDOM from "react-dom/client";
import Theme from "./components/Theme/Theme.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
// tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routes/Routes";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
