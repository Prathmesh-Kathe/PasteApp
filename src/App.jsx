import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import Viewpastes from "./components/Viewpastes";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <NavBar />
        <Pastes />
        <Footer />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <NavBar />
        <Viewpastes />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
