import React, { useEffect, useState } from 'react';

import './mangeO.css';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

// import material ui comphonent
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@mui/material';
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />


const ManAllorders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://e-comerce-w-s.vercel.app/orders/all')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // handle delete function
    const handleDelorder = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://e-comerce-w-s.vercel.app/orders/all/${id}`;
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
        <Container>

            <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 2, color: 'success.main' }} variant="h5" component="div">
                Your Order : {orders.length}
            </Typography>

            <Typography style={{ color: "white" }} sx={{ fontWeight: 'bold', m: 5 }} variant="h4" component="div">
                Your All Orders
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            {/* <TableCell align="right">Name</TableCell> */}
                            <TableCell align="right">ProductID</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => <TableRow
                                key={order.id}

                            >   <TableCell component="th" scope="row">
                                    {order.username}
                                </TableCell>
                                <TableCell align="right">{order.orderid}</TableCell>
                                <TableCell align="right">{order.email}</TableCell>
                                <TableCell align="right">{element1}{order.phone}</TableCell>
                                <TableCell align="right">{element2}{order.address}</TableCell>
                                <TableCell align="right"><button className="can-upd" onClick={() => handleDelorder(order._id)} >Cancel</button></TableCell>
                                <TableCell align="right"><Link to={`/orders/update/${order._id}`}><button className="can-upd">update</button></Link></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>

    );
};

export default ManAllorders;