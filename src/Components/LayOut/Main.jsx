import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
      <div className="max-w-5xl mx-auto px-10">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    )
};

export default Main;