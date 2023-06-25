import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import Main from './Components/LayOut/Main.jsx'
import './index.css'
import Footer from './Components/Footer/Footer.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx'
import Blog from './Components/Blog/Blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "footer",
        element: <Footer></Footer>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
