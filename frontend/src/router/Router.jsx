import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";

import Home from "../pages/Home";
import Dashboard from "../pages/dashboard";
import { FinancialRecordContext } from "../contexts/financial.context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FinancialRecordContext>
        <MainLayout />
      </FinancialRecordContext>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "dashboard", 
        element: <Dashboard /> },
    ],
  },
]);
export default router;
