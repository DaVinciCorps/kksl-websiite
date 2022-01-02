import React from 'react'
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../images/02.png";
import Twitter from "../images/Group 2690.png";
import Insta from "../images/Group 2691.png";
import Facebook from "../images/Group 2692.png";
import Youtube from "../images/Group 2693.png";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },

    section1: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    heading: {
        fontFamily: 'Mulish',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '16px',
        letterSpacing: '0.05em',
        paddingBottom: '24px',
        color: '#11142D',
    },

    subsection: {
        cursor: "pointer",
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        paddingBottom: '16px',
        letterSpacing: '0.005em',
        lineHeight: '125%',
        color: '#92929D'
    },
});


function Footer() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:850px)');
    return (
        <React.Fragment>
        {!isMobile && 
            <div className={classes.root} style={{ margin: "0px 7.2%" }} >
                <div className={classes.section1}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.heading}>FEATURE</div>
                        <div className={classes.subsection}>Team Management</div>
                        <div className={classes.subsection}>Tasks Schedule</div>
                        <div className={classes.subsection}>File Manager</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.heading}>RESOURCES</div>
                        <div className={classes.subsection}>Blog</div>
                        <div className={classes.subsection}>Support</div>
                        <div className={classes.subsection}>Newsletter</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.heading}>COMMUNITY</div>
                        <div className={classes.subsection}>Twitter</div>
                        <div className={classes.subsection}>Instagram</div>
                        <div className={classes.subsection}>Facebook</div>
                        <div className={classes.subsection}>Youtube</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.heading}>SUPPORT</div>
                        <div className={classes.subsection}>My Account</div>
                        <div className={classes.subsection}>Help & Support</div>
                        <div className={classes.subsection}>Contact Us</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.heading}>COMPANY</div>
                        <div className={classes.subsection}>Privacy Policy</div>
                        <div className={classes.subsection}>Terms of Service</div>
                        <div className={classes.subsection}>Code of Conduct</div>
                    </div>
                </div>
                <div style={{display: 'flex', margin: "115px 0px 130px 0px",}}>
                    <div style={{flex: 1}}><img src={logo} /></div>
                    <div style={{ color: '#92929D' }}>Copyright 2020</div>
                </div>
            </div>
        }

        {isMobile && 
            <div style={{margin: "0px 6.2%", }}>
                <p style={{color: '#051733', fontSize: 20, lineHeight: "25.1px", fontWeight: 600, fontFamily: 'Mulish', textAlign: 'center'}}>
                    kk Securities
                </p>
                <div style={{marginTop: 40,}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{}}>
                            <p style={{color: '#11142D', fontSize: 14, lineHeight: "16.8px", fontWeight:700, fontFamily: 'Mulish', textAlign: 'left',}}>
                                FEATURE
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left', cursor: 'pointer', marginTop: 16}}>
                                Team Management
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                Tasks Schedule
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                File Manager    
                            </p>
                        </div>

                        <div style={{}}>
                            <p style={{color: '#11142D', fontSize: 14, lineHeight: "16.8px", fontWeight:700, fontFamily: 'Mulish', textAlign: 'left',}}>
                                COMPANY
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left', cursor: 'pointer', marginTop: 16}}>
                            Privacy Policy
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                            Terms of Service
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                            Code of Conduct
                            </p>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 32}}>
                        <div style={{}}>
                            <p style={{color: '#11142D', fontSize: 14, lineHeight: "16.8px", fontWeight:700, fontFamily: 'Mulish', textAlign: 'left',}}>
                            RESOURCES
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left', cursor: 'pointer', marginTop: 16}}>
                                Blog
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                Support
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                Newsletter
                            </p>
                        </div>

                        <div style={{}}>
                            <p style={{color: '#11142D', fontSize: 14, lineHeight: "16.8px", fontWeight:700, fontFamily: 'Mulish', textAlign: 'left',}}>
                                SUPPORT
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left', cursor: 'pointer', marginTop: 16}}>
                                My Account
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                Help & Support
                            </p>
                            <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'left',cursor: 'pointer', marginTop: 10}}>
                                Contact Us
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 40, display: 'flex', marginLeft: "5.5%", marginRight: "5.5%", justifyContent: "space-between"}}>
                    <img src={Twitter} />
                    <img src={Insta} />
                    <img src={Facebook} />
                    <img src={Youtube} />
                </div>
                <div style={{marginTop: 40,}}>
                    <p style={{color: '#92929D', fontSize: 12, lineHeight: "15px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'center',}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ultricies lacus aliquet morbi ultrices diam hendrerit porta. Neque id nec tellus faucibus sapien amet sem lobortis.
                    </p>
                </div>
                <div style={{marginTop: 40,paddingBottom: 37}}>
                    <p style={{color: '#92929D', fontSize: 16, lineHeight: "20px", fontWeight:400, fontFamily: 'Mulish', textAlign: 'center',}}>
                        Copyright 2020
                    </p>
                </div>
            </div>
        }

    </React.Fragment>
    )
}

export default Footer
