import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import JobCard from './components/JobCard';
import Filters from './components/Filters';
import InfiniteScroll from './components/InfiniteScroll';
import { Grid, Typography } from '@mui/material';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": 0,
      ...filters
    });


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setJobs(data.jdList);
      setFilteredJobs(data.jdList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApplyFilters = (filters) => {
    const filteredData = jobs.filter(job => {
      return (
        (!filters.minExperience || job.minExp >= filters.minExperience) &&
        (!filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
        (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.techStack || job.jobRole.toLowerCase().includes(filters.techStack.toLowerCase())) &&
        (!filters.role || job.jobRole.toLowerCase().includes(filters.role.toLowerCase())) &&
        (!filters.minBasePay || (job.minJdSalary && job.minJdSalary >= filters.minBasePay))
      );
    });
    setFilteredJobs(filteredData);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Filters handleFilterChange={handleFilterChange} handleApplyFilters={handleApplyFilters} />
        <InfiniteScroll handleApplyFilters={handleApplyFilters}>
          <Grid container spacing={2}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <JobCard key={index} job={job} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography>No data found.</Typography>
              </Grid>
            )}
          </Grid>
        </InfiniteScroll>
      </div>
    </Provider>
  );
};

export default App;
