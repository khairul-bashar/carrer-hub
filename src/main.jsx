import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import JobDetails from './Components/JobDetails/JobDetails.jsx'
import Main from './Components/LayOut/Main.jsx'
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Jobs.json"),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/Jobs.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: () => fetch("/Jobs.json"),
      },
      {
        path: "footer",
        element: <Footer></Footer>,
      },
    ],
  },
  {
    path: "*",
    element:<PageNotFound/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
