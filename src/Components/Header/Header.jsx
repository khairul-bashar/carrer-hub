import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Button from '../Button/Button';


const Header = () => {
    return (
      <nav className="md:flex hidden  justify-between items-center py-10 min-w-6xl mx-auto px-10 bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D]">
        <h1 className="text-4xl font-bold text-primary ">DreamJob</h1>
        <ul className="flex gap-3 text-lg text-neutral font-semibold">
          <Link to="/">Home</Link>
          <Link to="/Statistics">Statistics</Link>
          <Link to="/AppliedJobs">Applied Jobs</Link>
          <Link to="/Blog">Blog</Link>
        </ul>

        <Button>Start Appling</Button>
        <ToastContainer></ToastContainer>
      </nav>
    )
};

export default Header;