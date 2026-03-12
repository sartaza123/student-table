import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudentsProvider } from "./context/StudentsContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AddStudent from "./pages/AddStudents.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-student",
        element: <AddStudent />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentsProvider>
      <RouterProvider router={appRouter} />
    </StudentsProvider>
  </StrictMode>,
);
