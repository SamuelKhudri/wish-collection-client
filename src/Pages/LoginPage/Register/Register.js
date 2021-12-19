import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logimg from '../../../image/login.jpg';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, authError, registerUser, isLoading } = useAuth();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //--console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        // alert('hellow doctors')
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container style={{ backgroundColor: 'crimson' }}>
            <Grid sx={{ m: 3 }} container spacing={2}>
                <Grid sx={{ mt: 2 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Please Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign Up</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button style={{ color: '#1976D2' }} variant="text"><span style={{ color: 'white' }}>Already registered?..</span> Go Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%', height: '90%' }} src={logimg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;