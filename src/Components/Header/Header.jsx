import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="flex justify-between items-center py-10 min-w-6xl mx-auto px-10 bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D]">
        <h1 className="text-4xl font-bold text-primary ">DreamJob</h1>
        <ul className="flex gap-3 text-lg text-neutral font-semibold">
          <Link to="/">Home</Link>
          <Link to="/Statistics">Statistics</Link>
          <Link to="/AppliedJobs">Applied Jobs</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Footer">Footer</Link>
        </ul>

        <button className="btn-primary">Applied Jobs</button>
      </nav>
    )
};

export default Header;