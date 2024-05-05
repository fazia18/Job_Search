import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Filters = ({ handleApplyFilters }) => {
    const [minExperience, setMinExperience] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [techStack, setTechStack] = useState('');
    const [role, setRole] = useState('');
    const [minBasePay, setMinBasePay] = useState('');

    const handleFilterClick = () => {
        handleApplyFilters({
            minExperience,
            companyName,
            location,
            techStack,
            role,
            minBasePay
        });
    };

    const handleInputChange = (e) => {
        if (e.target && e.target.name) {
            const { name, value } = e.target;
            switch (name) {
                case 'minExperience':
                    setMinExperience(value);
                    break;
                case 'companyName':
                    setCompanyName(value);
                    break;
                case 'location':
                    setLocation(value);
                    break;
                case 'techStack':
                    setTechStack(value);
                    break;
                case 'role':
                    setRole(value);
                    break;
                case 'minBasePay':
                    setMinBasePay(value);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div style={{ padding: '20px', marginBottom: '20px' }}>
            <TextField
                name="minExperience"
                label="Min Experience"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={minExperience}
                onChange={handleInputChange}
            />
            <TextField
                name="companyName"
                label="Company Name"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={companyName}
                onChange={handleInputChange}
            />
            <TextField
                name="location"
                label="Location"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={location}
                onChange={handleInputChange}
            />
            <TextField
                name="techStack"
                label="Tech Stack"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={techStack}
                onChange={handleInputChange}
            />
            <TextField
                name="role"
                label="Role"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={role}
                onChange={handleInputChange}
            />
            <TextField
                name="minBasePay"
                label="Min Base Pay"
                variant="outlined"
                style={{ marginRight: '10px' }}
                value={minBasePay}
                onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" sx={{
                height: '50px',
                width: '222px',
                marginTop: '4px',
            }} onClick={handleFilterClick}>
                Apply Filters
            </Button>
        </div>
    );
};

export default Filters;
