import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const AppliedJobList = ({ job }) => {
    const { id, jobName, companyName, location, salary, jobType, logoLink } =
      job
    return (
      <div className="border p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-[#F4F4F4] mr-8">
            <img className="w-60 h-60" src={logoLink} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-secondary my-2">
              {jobName}
            </h2>
            <p className="text-xl font-bold text-accent my-2">{companyName}</p>
            <div className="mb-2">
              <button className="btn btn-outline btn-info mr-3 my-2 font-extrabold text-base">
                {jobType[0]}
              </button>
              <button className="btn btn-outline btn-info mr-3 my-2 font-extrabold text-base">
                {jobType[1]}
              </button>
            </div>
            <div className="md:flex font-bold text-xl text-accent mb-6">
              <div className="flex mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="ml-2">{location}</span>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2">{salary}</span>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    )
};

export default AppliedJobList;