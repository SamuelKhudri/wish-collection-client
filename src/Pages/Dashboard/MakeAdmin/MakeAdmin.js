import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('')
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <div style={{ backgroundColor: 'blue', padding: '50px', textAlign: 'center' }}>
            <div >
                <h2 style={{ color: 'white' }}>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br /><Button style={{ color: 'white', marginTop: '20px' }} type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>

        </div>
    );
};

export default MakeAdmin;