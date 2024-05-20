import Home from "./pages/Home";
import About from "./pages/About";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import ItemDetails from "./pages/ItemDetails";
import ErrorHandling from "./pages/ErrorHandling";
function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorHandling />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "items",
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);

  //another way of createing the routes not preffered
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //   </>
  // );
  // const Router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
