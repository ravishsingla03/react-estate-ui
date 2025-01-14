import "./index.scss";
import Homepage from "./routes/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout"
import Listpage from "./routes/Listpage/listpage";
import SinglePage from "./routes/singlePage/singlePage";
import LoginPage from "./routes/Login/loginPage";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Homepage></Homepage>,
        },
        {
          path: "/list",
          element: <Listpage></Listpage>,
        },
        {
          path: "/:id",
          element: <SinglePage></SinglePage>,
        },
        {
          path: "/profile",
          element: <ProfilePage></ProfilePage>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
