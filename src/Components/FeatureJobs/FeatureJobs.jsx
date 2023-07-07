import React, { useState } from 'react';
import FeatureJob from '../FeatureJob/FeatureJob';
import Button from '../Button/Button';

const FeatureJobs = ({ jobs }) => {

  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    setShowAll(true)
  }
    return (
      <div>
        <div className="flex justify-center flex-col items-center bg-white py-10">
          <h3 className="text-4xl font-bold text-primary">Featured Jobs</h3>
          <p className="text-base text-accent py-2 text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          {jobs ?.slice(0, showAll ? 8 : 4).map((job) => (
            <FeatureJob job={job} key={job.id}></FeatureJob>
          ))}
          
        </div>
        <div className='flex justify-center my-4'>
          {
            !showAll && (
              <span onClick={handleShowAll}>
                <Button>Show More</Button>
              </span>
            )
          }
        </div>
      </div>
    )
};

export default FeatureJobs;