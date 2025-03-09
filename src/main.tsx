import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "../styles.scss";
import { AuthProvider } from "./context/authContext";

const queryClient = new QueryClient();

const root = document.getElementById("root");

if (!root) {
  throw new Error("Element with id 'root' not found");
}

createRoot(root).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
