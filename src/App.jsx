import React from "react";
import "./App.css";
import { createBrowserRouter,createRoutesFromElements,RouterProvider,} from "react-router";
import { Route } from "react-router";
import LayOutOne from "./LayOut/layOutOne";
import Home from "./pages/Home";
import About from "./pages/about";
import Longing from "./pages/Longing";
import Resis from "./pages/Resis";
import Productpage from "./pages/Productpage";
import CheckOutpage from "./pages/CheckOutpage";







const App = () => {
  const MyRout = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route  path="/" element={<LayOutOne />}>
          <Route path="/About" element={<About/>}/>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Longing />} />
          <Route path="/Register" element={<Resis />} />
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/CheckOutpage" element={<CheckOutpage />} />
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
