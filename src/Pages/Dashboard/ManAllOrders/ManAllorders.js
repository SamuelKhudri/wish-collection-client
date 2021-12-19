import React, { useEffect, useState } from 'react';

import './mangeO.css';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />


const ManAllorders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://warm-temple-88396.herokuapp.com/orders/all')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // handle delete function
    const handleDelorder = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://warm-temple-88396.herokuapp.com/orders/all/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainorder = orders.filter(order => order._id !== id);
                        setOrders(remainorder);
                    }
                })
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                    Your Order : {orders.length}
                </Typography>

                <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                    Your All Orders
                </Typography>
                {/* sx={{ bgcolor: 'warning.main' }} */}
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
                                            Name: {order.username}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {order.email}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {order.orderid}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {element2} {order.address}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {element1}Phone: {order.phone}
                                        </Typography>

                                    </CardContent>

                                </Card>
                                <button className="btn" onClick={() => handleDelorder(order._id)} >Cancel</button>
                                <Link to={`/orders/update/${order._id}`}><button className="btn">update</button></Link>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid></Container>
        </Box>
    );
};

export default ManAllorders;