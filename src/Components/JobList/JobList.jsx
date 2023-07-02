import React from 'react';

const JobList = ({ job }) => {
  const { name, icon, available } = job;
  
    return (
      <div className="flex flex-col p-10 bg-[#F9F8FF] rounded-md">
        <div className="flex justify-center items-center bg-[#EFECFF] w-16 h-16 p-4 rounded-md mb-3">
          <img className="w-full" src={icon} alt="" />
        </div>
        <h2 className='text-xl font-bold text-secondary my-2'>{name}</h2>
        <p className='text-base font-medium text-neutral my-2'>{available}</p>
      </div>
    )
};

export default JobList;