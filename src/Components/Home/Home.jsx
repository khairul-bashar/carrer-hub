import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Jobs from '../Jobs/Jobs';
const Home = () => {

  
  const jobs = useLoaderData();

    return (
      <div>
        <Banner></Banner>
        <Jobs></Jobs>
        <FeatureJobs jobs={jobs}></FeatureJobs>
      </div>
    )
};

export default Home;    