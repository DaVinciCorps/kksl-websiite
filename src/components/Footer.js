import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root : {
        backgroundColor:'#E5E5E5', 
        display:'flex', 
        flexDirection:'column'
    },

    section1 : {
        display:'flex', 
        justifyContent:'space-around',
    },

    section2 : {
        paddingLeft:'100px',
        paddingRight:'100px',
        paddingBottom:'134px',
        display:'flex',
        justifyContent:'space-between'
    },

    heading : {
        fontFamily:'Mulish', 
        fontWeight:'bold', 
        fontStyle:'normal', 
        fontSize:'16px', 
        letterSpacing:'0.05em',
        paddingBottom:'24px', 
        color:'#11142D',
    },

    subsection : {
        fontFamily:'Mulish',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'16px',
        paddingBottom:'16px',
        letterSpacing:'0.005em',
        lineHeight:'125%',
        color:'#92929D'
    },
});


function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.heading}>FEATURE</div>
                    <div className={classes.subsection}>Team Management</div>
                    <div className={classes.subsection}>Tasks Schedule</div>
                    <div className={classes.subsection}>File Manager</div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.heading}>RESOURCES</div>
                    <div className={classes.subsection}>Blog</div>
                    <div className={classes.subsection}>Support</div>
                    <div className={classes.subsection}>Newsletter</div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.heading}>COMMUNITY</div>
                    <div className={classes.subsection}>Twitter</div>
                    <div className={classes.subsection}>Instagram</div>
                    <div className={classes.subsection}>Facebook</div>
                    <div className={classes.subsection}>Youtube</div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.heading}>SUPPORT</div>
                    <div className={classes.subsection}>My Account</div>
                    <div className={classes.subsection}>Help & Support</div>
                    <div className={classes.subsection}>Contact Us</div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.heading}>COMPANY</div>
                    <div className={classes.subsection}>Privacy Policy</div>
                    <div className={classes.subsection}>Terms of Service</div>
                    <div className={classes.subsection}>Code of Conduct</div>
                </div>
            </div>
            <div className={classes.section2}>
                <div>logoipsum</div>
                <div style={{color:'#92929D'}}>Copyright 2020</div>
            </div>
        </div>
    )
}

export default Footer
