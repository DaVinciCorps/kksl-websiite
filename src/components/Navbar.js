import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root:{
        width: '100%',
        height: '70px',
        backgroundColor: '#0953AA',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '14.5%',
        paddingRight: '14.5%'
    },

    navLinks:{
        display: 'flex',
        marginRight: 51,

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
        marginRight: 83,
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

            </div>

            <div >
                <button style={{width: 102, height: 40,borderRadius: 8, back}}>

                </button>
            </div>
        </div>
    )
}
