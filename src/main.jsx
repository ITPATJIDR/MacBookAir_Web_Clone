import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Basic from "./pages/basic.jsx"
import PlayVideo from './pages/playVideo.jsx'
import "./css/index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/basic",
    element: <Basic/>
  },
  {
    path: "/playVideo",
    element: <PlayVideo/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
