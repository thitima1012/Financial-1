import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import router from "./router/Router";
import { FinancialRecordsProvider } from "./contexts/financial.context";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <FinancialRecordsProvider>
        <RouterProvider router={router} />
      </FinancialRecordsProvider>
    </ClerkProvider>
  </React.StrictMode>
);
