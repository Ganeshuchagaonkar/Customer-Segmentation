import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import '../pages/styles.css'
import image from '../images/about.jpg';


const drawerWidth = 240;
const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <AddBoxIcon />,
    <AddBoxIcon />,

]

const routes = ['/admin/dashboard', '/admin/dashboard/about', '/admin/dashboard/newdeals','/admin/dashboard/allcustomer'];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0
            , 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function Dashboard({ history }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (


        <div className={classes.root}>
            <Router>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className="appbar"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    style={{ backgroundColor: '#107AE0' }}
                >

                    <Toolbar>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className='item-1'>
                            <Typography variant="h6" noWrap>
                                Admin Dashboard
                        </Typography>
                        </div>

                        <div className='item-2'>

                            <IconButton>
                                <Avatar src="/broken-image.jpg" />

                            </IconButton>
                        </div>

                        <div className='item-3'>
                            <Button color="inherit" onClick={()=>{history.push('/signin')}}>Logout</Button>
                        </div>


                    </Toolbar>

                </AppBar>



                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={0} onClick={() => history.push(routes[0])}>
                            <ListItemIcon>{icons[0]}</ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button key={2} onClick={() => history.push(routes[2])}>
                            <ListItemIcon>{icons[2]}</ListItemIcon>
                            <ListItemText primary={"New Deals"} />
                        </ListItem>
                        <ListItem button key={2} onClick={() => history.push(routes[3])}>
                            <ListItemIcon>{icons[2]}</ListItemIcon>
                            <ListItemText primary={"All Customers"} />
                        </ListItem>
                        <ListItem button key={1} onClick={() => history.push(routes[1])}>
                            <ListItemIcon>{icons[1]}</ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                        
                    </List>
                    <Divider />

                </Drawer>
            </Router>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    <div className="aboutpage-div">
                        <div style={{marginRight:20}}>
                            <img src={image} alt="not found" style={{width:600,height:500}} />
                        </div>
                        <div style={{marginLeft:40,width:600}}>
                            <h1>About us</h1>
                            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type </p>
                        </div>
                    </div>
                </Typography>

            </main>
        </div>


    );
}

export default withRouter(Dashboard);