import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Registration from "./Pages/Registration";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";

import NotLoggedInUser from "./privateRouter/NotLoggedInUser";
import SignedInUser from "./privateRouter/SignedInUser";
import RootLayout from "./components/RootLayout/RootLayout";
import "swiper/css";
import CreatePost from "./components/HomeComponents/Middle/CreatePostPopUp/CreatePost";
import ActivatePage from "./Pages/Home/ActivatePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<SignedInUser />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/activate/:token" element={<ActivatePage />}></Route>
        </Route>
      </Route>

      <Route element={<NotLoggedInUser />}>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <CreatePost /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
