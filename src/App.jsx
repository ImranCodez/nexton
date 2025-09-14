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
import Details from "./pages/Details";
import Bessellet_Productpage from "./pages/Bessellet_Productpage";
 import { ToastContainer } from 'react-toastify';







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
            <Route path="/Bessellet_Productpage" element={<Bessellet_Productpage />} />
            <Route path="/CheckOutpage" element={<CheckOutpage />} />
          <Route path="/Details/:Productid" element={<Details />} />

        </Route>
      </Route>
    )
  );

  return (
    <>
    <ToastContainer/>
      <RouterProvider router={MyRout} />
    </>
  );
};

export default App;
