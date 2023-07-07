import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Jobs from '../Jobs/Jobs';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Navbar from '../Navbar/Navbar';
const Home = () => {

  
  const jobs = useLoaderData();

    return (
      <div>
        <Navbar/>
        <Banner></Banner>
        <Jobs></Jobs>
        <FeatureJobs jobs={jobs}></FeatureJobs>
      </div>
    )
};

export default Home;    