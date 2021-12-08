import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';

const useStyles = makeStyles({
    root : {
        backgroundColor:'#E5E5E5',
        height: 70,
        display: 'flex',
        alignItems: 'center',
    },

    appName : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        height:'100%',
        alignItems:'center',
    },

    navigation : {
        display:'flex',
        flex:2,
        justifyContent:'space-evenly',
        fontFamily: 'Mulish',
        height:'100%',
        alignItems:'center',
    },

    currentTabStyle : {
      fontWeight: 'bold',
      width:'100%',
      color : 'black',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '4px solid #0953AA',
    },

    normalTabStyle : {
      width:'100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

  });


  // const AntTabs = styled(Tabs)({
  //   borderBottom: '1px  #e8e8e8',
  //   '& .MuiTabs-indicator': {
  //     backgroundColor: '#0953AA',
  //   },
  // });
  
  // const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  //   textTransform: 'none',
  //   fontFamily: [
  //     'Mulish',
  //   ].join(','),
  //   '&:hover': {
  //     opacity: 1,
  //   },
  //   '&.Mui-selected': {
  //     color: 'black',
  //     fontWeight: 'bold',
  //   },
  // }));



function Header(props) {
    const classes = useStyles();
    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
      <div className={classes.root}>
        <div className={classes.appName}>
          logoIPSUM
        </div>
        <div className={classes.navigation}>
          {/* <Box sx={{ width: '100%'}}>
            <AntTabs value={value} onChange={handleChange} centered>
              <AntTab label="Home" value="0" default/>
              <AntTab label="About Us" value="1" />
              <AntTab label="Market" value="2"/>
              <AntTab label="Product" value="3"/>
              <AntTab label="Services" value="4"/>
              <AntTab label="Tools" value="5"/>
              <AntTab label="Blogs/Videos" value="6"/>
            </AntTabs>
          </Box> */}
          <div className={props.value === 0 ? classes.currentTabStyle: classes.normalTabStyle}>
            Home
          </div>
          <div className={props.value === 1 ? classes.currentTabStyle: classes.normalTabStyle}>
            About Us
          </div>
          <div className={props.value === 2 ? classes.currentTabStyle: classes.normalTabStyle}>
            Market
          </div>
          <div className={props.value === 3 ? classes.currentTabStyle: classes.normalTabStyle}>
            Product
          </div>
          <div className={props.value === 4 ? classes.currentTabStyle: classes.normalTabStyle}>
            Services
          </div>
          <div className={props.value === 5 ? classes.currentTabStyle: classes.normalTabStyle}>
            Tools
          </div>
          <div className={props.value === 6 ? classes.currentTabStyle: classes.normalTabStyle}>
            Blogs/Videos
          </div>
        </div>
      </div>
    )
}

export default Header
