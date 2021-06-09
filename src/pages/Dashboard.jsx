import React,{useState,useEffect} from 'react';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chart from "react-apexcharts";
import '../pages/styles.css'
import axios from 'axios';


const drawerWidth = 240;
const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
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

 export default function Dashboard({ history }) {

 

   

    const [containerData, setcontainerData] = useState({})
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCountData = (countData) =>{
        console.log(countData);
       setcontainerData(countData);
    }


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
                    <div>
                        <div className='chart-div'>
                        
                        <ApexChart handleCountFunction = {handleCountData}></ApexChart>
                        </div> <br></br>
                        <br></br>


                        <div className="homepage-container">
                            <div style={{ backgroundColor: '#2196f3', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20  , borderRadius : 8}}>
                                <h4>Cluster 0</h4>
                                <h1>{containerData.cluster0}</h1>
                            </div>
                            <div style={{ backgroundColor: '#06d6a0', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 , borderRadius : 8}}>
                                <h4>Cluster 1</h4>
                                <h1>{containerData.cluster1}</h1>

                            </div>
                            <div style={{ backgroundColor: '#ffc300', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 , borderRadius : 8}}>
                                <h4>Cluster 2</h4>
                                <h1>{containerData.cluster2}</h1>

                            </div>
                            <div style={{ backgroundColor: '#f72585', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 , borderRadius : 8 }}>
                                <h4>Cluster 3</h4>
                                <h1>{containerData.cluster3}</h1>

                            </div>
                            <div style={{ backgroundColor: '#480ca8', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 , borderRadius : 8 }}>
                                <h4>Cluster 4</h4>
                                <h1>{containerData.cluster4}</h1>

                            </div>
                        </div>
                    </div>
                </Typography>

            </main>
        </div>


    );
}


function ApexChart(props) {

        var series = [{
          name: "SAMPLE A",
          data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
        },{
          name: "SAMPLE B",
          data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
        },{
          name: "SAMPLE C",
          data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
        }];


      var options =  {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function(val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
        
          tickAmount: 7
        }
      }

      const [graphData, setgraphData] = useState(series);
     

    useEffect(() => {
    //make axios request and setstate data coming from api
   axios.get('http://127.0.0.1:8000/admin/home').then((res)=>{
      console.log(res.data.series)
       setgraphData(res.data.series)
       props.handleCountFunction(res.data.counts);
  }).catch((err)=>{
     console.log(err);
  });
    
}, [])
  
  return (
    <div id="chart">
      <Chart
        options={options}
        series={graphData}
        type="scatter"
        height={350}
        width={800}
      />
    </div>
  );
  }
  