import "./App.css";
import { createHashRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Public from "./pages/Public";
import Admin from "./pages/Admin";
import UjTermek from "./pages/UjTermek";
import NoPage from "./pages/NoPage";
import Kosar from "./pages/Kosar";
import AdottTermek from "./pages/AdottTermek";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Public /> },
      { path: "admin", element: <Admin /> },
      { path: "admin/uj-termek", element: <UjTermek /> },
      { path: "kosar", element: <Kosar /> },
      { path: "termek/:id", element: <AdottTermek /> },
      { path: "", element: <NoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
