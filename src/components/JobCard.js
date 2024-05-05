import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card variant="outlined" >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            padding: '8px'
          }}
        >
          <img
            src={job.logoUrl}
            alt="Company Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          {job.companyName}
        </Typography>

        <Typography color="textSecondary" style={{ color: 'black', padding: '8px 0' }}>
          Role: {job.jobRole.toUpperCase()}
        </Typography>
        <Typography color="textSecondary">
          Salary: ${job.minJdSalary}- {job.maxJdSalary}
        </Typography>
        <Typography variant="body2" component="p">
          {job.jobDetailsFromCompany}
        </Typography>
        <Typography color="textSecondary" style={{ padding: '8px 0' }}>
          Location: {job.location}
        </Typography>
        <Typography color="textSecondary">
          Experience Required: {job.minExp}- {job.maxExp}
        </Typography>
        <Button variant="contained" color="success" sx={{ width: '100%', marginTop: '10px' }}>Easy Apply</Button>
        <Button variant="contained" sx={{ width: '100%', marginTop: '10px' }}>Unlock refferal asks</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
