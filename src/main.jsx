import { StrictMode } from 'react'

import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);