import * as React from 'react';
import './Dashboard.css';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import DashHome from './DashHome/DashHome';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import MyOrder from '../MyOrder/MyOrder';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManAllorders from './ManAllOrders/ManAllorders';
import ManageProducts from './ManageProducts/ManageProducts';


const drawerWidth = 200;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div>
            <Toolbar />
            <Divider />
            {
                admin ? <Box>
                    <br />
                    <Link to={`${url}/makeadmin`}>
                        <Button variant="contained" color="success"> Make-Admin</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/manageproducts`}>
                        <Button variant="contained" color="success">Manage-Products</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/manageallorders`}>
                        <Button variant="contained" color="success">Manage-Orders</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/addproduct`}>
                        <Button variant="contained" color="success">Add-Products</Button>

                    </Link>
                    <br /><br />
                    <br /><br />
                </Box>
                    : <Box>
                        <br /><br />
                        <Link to="/">
                            <Button variant="contained" color="success"> Home Page</Button>

                        </Link>
                        <br /><br />
                        <Link to={`${url}/payment`}>
                            <Button variant="contained" color="success">Payment</Button>

                        </Link>
                        <br /><br />
                        <Link to={`${url}/myorder`}>
                            <Button variant="contained" color="success">Your Order</Button>

                        </Link>
                        <br /><br />
                        <Link to={`${url}/review`}>
                            <Button variant="contained" color="success">GiveReview</Button>

                        </Link>
                    </Box>
            }
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box style={{ height: '100vh' }} sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar style={{ backgroundColor: "" }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard Menu
                    </Typography>
                    <div style={{ paddingLeft: "40%" }}>
                        {
                            user?.email &&
                            <Typography>
                                <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Hi"{user.displayName}"</Button>
                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Typography>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                style={{ backgroundColor: 'rgb(9, 6, 22)', backgroundSize: 'cover' }}
                className=""
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    <Switch>
                        <Route exact path={path}>
                            <DashHome></DashHome>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/manageallorders`}>
                            <ManAllorders></ManAllorders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                    </Switch>
                </Typography>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
