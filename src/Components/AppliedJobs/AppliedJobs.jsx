import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJob } from '../../utilities/fakeDB';
import Common from '../Common/Common';
import AppliedJobList from '../AppliedJobList/AppliedJobList';

const AppliedJobs = () => {

     const [appliedJob, setAppliedJob] = useState([])
     const [remaining, setRemaining] = useState([])
     const data = useLoaderData()
     // console.log(data);

     useEffect(() => {
       let remainingJob = []
       const storedJob = getAppliedJob()
       for (const id in storedJob) {
         const remaining = data && data.find((j) => j.id == id)
         remainingJob.push(remaining)
       }
       setRemaining(remainingJob)
       setAppliedJob(remainingJob)
     }, [])

     console.log(appliedJob);
     const getValue = (value) => {
       const filteredJob =
         remaining && remaining.filter((j) => j.remoteOrOnsite === value)
       setAppliedJob(filteredJob)
     }
    return (
      <>
        <Common>Applied Jobs</Common>

        <div className="md:w-4/5 mx-auto">
          <div className="text-right my-6">
            <select
              onChange={(e) => getValue(e.target.value)}
              className="select select-success w-2/3 max-w-xs"
            >
              <option disabled selected>
                Filter by
              </option>
              <option>Remote</option>
              <option>Onsite</option>
            </select>
                </div>
                <div className='grid gap-6'>
                    {
                        appliedJob && appliedJob ?.map(job => <AppliedJobList key={job.id} job={job}></AppliedJobList>)
                    }
                </div>
        </div>
      </>
    )
};

export default AppliedJobs;