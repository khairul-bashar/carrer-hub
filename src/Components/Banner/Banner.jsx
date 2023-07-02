import React from 'react';
import image from '../../../public/profile.png';
import Button from '../Button/Button';

const Banner = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-between items-center min-w-6xl mx-auto px-10 bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D]">
        <div className="w-full">
          <h2 className="text-6xl font-bold leading-tight text-primary ">
            One Step Closer To Your <span className="text-info">Dream Job</span>
          </h2>
          <p className="text-lg text-accent py-4 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <img className="h-[450px] w-[500px]" src={image} alt="" />
      </div>
    )
};

export default Banner;