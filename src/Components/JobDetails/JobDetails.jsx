import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakeDB';


const JobDetails = () => {
    const getId = useParams()
    const getJobs = useLoaderData();
    

    
    const [jobDetails, setJobDetails] = useState({})
    useEffect(() => {
        const newJobDetails = getJobs && getJobs.find(job => job.id == getId.id)
        setJobDetails(newJobDetails)
    }, [])
    
  const {
      id,
      jobName,
      salary,
      educationalRequirements,
      experience,
      jobResponsibilities,
      jobDescription,
      contact
    } = jobDetails
  
  
  const handleAddToDb = (id) => {
    if (getJobs) {
      addToDb(id)
    }
  }
    
    return (
      <div>
        <h2 className="text-3xl font-extrabold text-center text-primary bg-[#F9F9FF] py-10">
          Job Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 container mx-auto px-10">
          <div className="col-span-4 py-6 mr-3">
            <p className="text-base text-primary my-6">
              <span className="font-bold mr-3">Job Description:</span>{" "}
              {jobDescription}
            </p>
            <p className="text-base text-primary my-6">
              <span className="font-bold mr-3">Job Responsibility:</span>{" "}
              {jobResponsibilities}
            </p>
            <p className="text-base text-primary my-6 flex flex-col gap-5">
              <span className="font-bold mr-3">Educational Requirements:</span>{" "}
              {educationalRequirements}
            </p>
            <p className="text-base text-primary my-6 flex flex-col gap-5">
              <span className="font-bold mr-3">Experience:</span> {experience}
            </p>
          </div>
          <div className="col-span-2 my-10">
            <div className="bg-[#F4F2FF] rounded-md p-5">
              <h3 className="text-xl font-extrabold mb-4 text-primary">
                Job Details
              </h3>
              <hr className="bg-[#D7CEFF] " />

              <div className="flex text-secondary text-base font-bold py-2">
                <div className="text-[#8A83FE] mr-2">
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
                </div>
                <span>Salary:</span>
                <span className="ml-2 text-accent font-medium">
                  {salary} (per month)
                </span>
              </div>
              <div className="flex mr-6 text-secondary text-base font-bold py-2">
                <div className="text-[#8A83FE] mr-2">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <span>Job Title:</span>
                <span className="ml-2 text-accent font-medium">{jobName}</span>
              </div>

              <h3 className="text-xl font-extrabold my-4 text-primary">
                Contact Information
              </h3>
              <hr className="bg-[#D7CEFF] " />

              <div className="flex mr-6 text-secondary text-base font-bold py-2">
                <div className="text-[#8A83FE] mr-2">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span>Email:</span>
                <span className="ml-2 text-accent font-medium">
                  {contact?.email}
                </span>
              </div>
              <div className="flex mr-6 text-secondary text-base font-bold py-2">
                <div className="text-[#8A83FE] mr-2">
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
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </div>
                <span>Phone:</span>
                <span className="ml-2 text-accent font-medium">
                  {contact?.phone}
                </span>
              </div>
              <div className="flex mr-6 text-secondary text-base font-bold py-2">
                <div className="text-[#8A83FE] mr-2">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <span>Address:</span>
                <span className="ml-2 text-accent font-medium">
                  {contact?.address}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleAddToDb(id)}
              className="w-full mt-3 px-3 py-4 text-white font-semibold bg-[#8984FE] rounded-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    )
};

export default JobDetails;