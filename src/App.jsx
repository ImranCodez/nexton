import React from "react";
import "./App.css";
import { createBrowserRouter,createRoutesFromElements,RouterProvider,} from "react-router";
import { Route } from "react-router";
import LayOutOne from "./LayOut/layOutOne";
import Home from "./pages/Home";
import About from "./pages/about";







const App = () => {
  const MyRout = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route  path="/" element={<LayOutOne />}>
          <Route path="/About" element={<About/>}/>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={MyRout} />
    </>
  );
};

export default App;
