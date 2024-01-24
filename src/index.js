import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import Store from "./components/Store/Store";
import Login from "./components/Pages/Login";
import ContextProvider from "./Store/ContextProvider";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "store", element: <Body /> },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="store" element={<Store/>}/>
      </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
