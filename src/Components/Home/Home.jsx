import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Jobs from '../Jobs/Jobs';
const Home = () => {

  
  const jobs = useLoaderData();
  console.log(jobs);

    return (
      <div>
        <Banner></Banner>
        <Jobs></Jobs>
      </div>
    )
};

export default Home;    