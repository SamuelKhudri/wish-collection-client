import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://warm-temple-88396.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // handle delete function
    const handleDelUser = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://warm-temple-88396.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = orders.filter(order => order._id !== id);
                        setOrders(remainUser);
                    }
                })
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography style={{ color: "tomato" }} sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                    Your Order : {orders.length}
                </Typography>

                <Typography style={{ color: "tomato" }} sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                    Your All Orders
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        orders.map(order => <Grid item xs={4} sm={4} md={4}
                            key={order.id}

                        >
                            <Box sx={{ bgcolor: 'primary.main' }}>
                                <Card sx={{ minWidth: 275, border: 2, boxShadow: 5, }}>
                                    <CardContent>

                                        <Typography variant="h5" component="div">
                                            {order.productName}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {order.email}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Name: {order.username}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Address: {order.address}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Phone:  {order.phone}
                                        </Typography>

                                    </CardContent>

                                </Card>
                                <button className="btn" onClick={() => handleDelUser(order._id)} >Cancel</button>
                                <Link className="btn" to={`/dashboard/payment/${order._id}`}>PayNow</Link>
                                <Link className="btn" to="/allproducts">MoreOrder</Link>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default MyOrder;