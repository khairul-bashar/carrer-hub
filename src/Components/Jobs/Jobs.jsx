import React, { useEffect, useState } from "react"
import JobList from "../JobList/JobList"



const Jobs = () => {


  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("joblist.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])

  
  return (
    <div>
      <div className="flex justify-center flex-col items-center bg-white py-10">
        <h3 className="text-4xl font-bold text-primary">Job Category List</h3>
        <p className="text-base text-accent py-2 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-10">
        {
          jobs.map(job => <JobList key={job.id} job={job}></JobList>)
        }
      </div>
    </div>
  )
}

export default Jobs
