import React from 'react';
import { makeStyles } from '@mui/styles';
import TrendImage from '../images/Vector.png'

const useStyles = makeStyles({
    root:{
        // width: '100%',
        height: '70px',
        backgroundColor: '#0953AA',
        display: 'flex',
        alignItems: 'center',
        justifyContent : 'space-around',
        // paddingLeft: '14.5%',
        // paddingRight: '14.5%'
    },

    navLinks:{
        display: 'flex',
        // marginRight: 51,

    },

    navP:{
        margin: 0,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Mulish',
        lineHeight: '120%',
        letterSpacing: '0.005em',
        // textTransform: 'uppercase',
        color: '#FFFFFF',
        marginRight: 32
    },

    nifty:{
        backgroundColor: '#042349',
        height: '100%',
        width: 325,
        // marginRight: 83,
        color: '#FFFFFF',
        justifyContent:'space-evenly',
        display: 'flex',
        flexDirection:'column'
        // position: 'absolute',
        // left: 722,
        
    },

    shares : {
        display:'flex',
        flexDirection: 'row',
        alignSelf:'center',
    },

    name :{
        // paddingLeft:8,
        paddingRight:6,
        fontFamily: 'Rubik',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight:"18px",
    },

    value : {
        paddingLeft:6,
        paddingRight:6,
        fontFamily: 'Rubik',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight:"18px",
    },

    trend : {
        paddingLeft:6,
        // paddingRight:8,
        fontFamily: 'Rubik',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight:"21px",
    },

    signInButton : {
        width: 102, 
        color:"#FFFFFF", 
        height: 40,
        borderRadius: 8, 
        borderWidth:2, 
        borderColor:"#2584F4", 
        backgroundColor:"#2584F4", 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: "center", 
        padding: '11 24'
    }

  });
  

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className = {classes.root} >
            
            <div className = {classes.navLinks}>
                <p className={classes.navP}>
                    OPEN AN ACCOUNT
                </p>
                <p className={classes.navP}>
                    IPO
                </p>
                <p className={classes.navP}>
                    FUND TRANSFER
                </p>
                <p className={classes.navP}>
                    Re-KYC
                </p>
            </div>

            <div className={classes.nifty}>
                <div className={classes.shares}>
                    <div className={classes.name}>
                        NIFTY
                    </div>
                    <div className={classes.value}>
                        15784.10
                    </div>
                    <div className={classes.trend}>
                        <img src={TrendImage} alt="Trend Icon" style={{width: '15.67px', height: '13.58px'}} /> 46.35(0.29%)
                    </div>
                </div>
                <div className={classes.shares}>
                    <div className={classes.name}>
                        SENSEX
                    </div>
                    <div className={classes.value}>
                        52.515.51
                    </div>
                    <div className={classes.trend}>
                        <img src={TrendImage} alt="Trend Icon" style={{width: '15.67px', height: '13.58px'}}/> 215.04(0.41%)
                    </div>
                </div>
            </div>

            <div >
                <button className={classes.signInButton}>
                    Sign In
                </button>
            </div>
        </div>
    )
}
