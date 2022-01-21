import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import AboutTopImg from '../images/AboutTopImage.svg'
import TrustedVector from "../images/eos-icons_trusted-organization.png"
import SeamlessVector from '../images/community.png'
import About1 from '../images/d1.png'
import About2 from '../images/d2.png'
import About3 from '../images/d3.png'
import Dialog from '@mui/material/Dialog';
import Group from "../images/building.png";
import cross from "../images/x.png";

import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles({
    section1: {
        display: 'flex',
        margin: "95px 7.2% 80px 7.2%",
        ['@media (max-width:960px)']: {
            margin: "50px 7.2% 80px 7.2%",
        },
        ['@media (max-width:850px)']: {
            margin: "40px 6.2% 48px 6.2%",
            justifyContent: 'center'
        },
    },

    section1Text: {
        flex: 1,
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        ['@media (max-width:850px)']: {
            alignItems: "center",
            maxWidth: 500
        },
    },

    section1Image: {
        width: '60%',
        display: 'flex',
        justifyContent: 'center'
    },

    section1Head: {
        fontFamily: 'Mulish',
        fontSize: '36px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#161A1B',
        marginBottom: '24px',
        ['@media (max-width:850px)']: {
            fontSize: 24,
            lineHeight: "30.12px",
            textAlign: 'center'
        },
    },

    section1SubHead: {
        fontStyle: 'normal',
        fontFamily: 'Mulish',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '26px',
        color: 'rgba(22, 26, 27, 0.6)'
    },

    section2: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: "0px 7.2% 80px 7.2%",
        ['@media (max-width:850px)']: {
            margin: "0px 6.2% 48px 6.2%",
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        borderRadius: 15,
    },


    section3: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        marginBottom: '80px',
        ['@media (max-width:850px)']: {
            marginLeft: "6.2%",
            marginRight: "6.2%",
        }
    },

    section3Head: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '45px',
        color: '#161A1B',
        marginBottom: '79px',
        alignSelf: 'center',
        ['@media (max-width:850px)']: {
            fontSize: 20,
            lineHeight: "25.1px",
            marginBottom: 24
        }
    },

    section3Body: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: "0px 7.2%",
        ['@media (max-width:850px)']: {
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 0,
        }
    },

});

function About() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:850px)');
    const isLarge = useMediaQuery('(min-width:1200px)');
    const is1300 = useMediaQuery('(max-width:1300px)');
    const is1200 = useMediaQuery('(max-width:1200px)');
    const is1900 = useMediaQuery('(max-width:1900px)');
    const [currAbout, setCurrAbout] = useState(0);
    const handleClickOpen = (e) => {
        setCurrAbout(e);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const cardTrust = () => {
        return (
            <div style={{ backgroundColor: 'white', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389, display: 'flex', alignItems: 'center', marginBottom: isMobile ? 24 : '', height: isMobile ? '' : "100%" }}>
                <div style={{ margin: isMobile ? "16px 16px 24px 16px" : 40, flex: 1, display: 'flex', flexDirection: 'column', height: '-webkit-fill-available' }}>
                    <img src={TrustedVector} style={{ width: isMobile ? 72 : 120 }} />
                    <p style={{ marginTop: isMobile ? 24 : 42, color: '#161A1B', fontFamily: "Mulish", fontSize: isMobile ? 18 : 20, fontWeight: isMobile ? 600 : 'bold', lineHeight: isMobile ? "22.59px" : '25px' }}>
                        Trust And Assurance
                    </p>
                    <div style={{ marginTop: 8, flex: 1 }}>
                        <ul style={{ color: 'rgba(22, 26, 27, 0.6)', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", padding: 0, paddingLeft: 18 }}>
                            <li>One of the oldest and most trusted brokers in India since 1995.</li>
                            <li>Get help investing your money just as it’s our own.</li>
                            <li>Experience one of the lowest brokerage fees in the market.</li>
                        </ul>
                    </div>
                    {/* {!isMobile &&
                        <button onClick={() => { handleClickOpen(0) }} style={{ border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer' }}>
                            Read More
                        </button>
                    } */}
                </div>
            </div>
        )
    }

    const cardPoint = () => {
        return (
            <div style={{ backgroundColor: 'white', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389, height: isMobile ? "" : "100%", display: 'flex', flexDirection: 'column', marginBottom: isMobile ? 24 : '', height: isMobile ? '' : "100%" }}>
                <div style={{ margin: isMobile ? "16px 16px 24px 16px" : 40, flex: 1, display: 'flex', flexDirection: 'column', height: '-webkit-fill-available' }}>
                    <div style={{ height: isMobile ? 72 : 120 }}><img src={Group} style={{ width: isMobile ? 72 : 120, height: isMobile ? 72 : 120 }} /></div>
                    <p style={{ marginTop: isMobile ? 24 : 42, color: '#161A1B', fontFamily: "Mulish", fontSize: isMobile ? 18 : 20, fontWeight: 'bold', lineHeight: isMobile ? "22.59px" : '25px' }}>
                        One Point Access to all Markets
                    </p>
                    <div style={{ marginTop: 8, flex: 1 }}>
                        <ul style={{ color: 'rgba(22, 26, 27, 0.6)', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", padding: 0, paddingLeft: 18 }}>
                            <li>Single access to all market segments of BSE, NSE & MCX.</li>
                            <li> Find large avenues of investment solutions and financial services all under one roof.</li>
                        </ul>
                    </div>
                    {/* {!isMobile &&
                        <button onClick={() => { handleClickOpen(0) }} style={{ border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer' }}>
                            Read More
                        </button>
                    } */}
                </div>
            </div>
        )
    }

    const cardSeamless = () => {
        return (
            <div style={{ backgroundColor: 'white', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389, display: 'flex', alignItems: 'center', height: isMobile ? '' : '100%' }}>
                <div style={{ margin: isMobile ? "16px 16px 24px 16px" : 40, flex: 1, display: 'flex', flexDirection: 'column', height: '-webkit-fill-available' }}>
                    <img src={SeamlessVector} style={{ width: isMobile ? 72 : 120, }} />
                    <p style={{ marginTop: isMobile ? 24 : 42, color: '#161A1B', fontFamily: "Mulish", fontSize: isMobile ? 18 : 20, fontWeight: 'bold', lineHeight: isMobile ? "22.59px" : '25px' }} >
                        Seamless Trading
                    </p>
                    <div style={{ marginTop: 8, flex: 1 }}>
                        <ul style={{ color: 'rgba(22, 26, 27, 0.6)', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", padding: 0, paddingLeft: 18 }}>
                            <li>Seamless browser and application-based trading across all devices.</li>
                            <li> Top notch in terms of speed, convenience and risk management.</li>
                            <li> Gain control on your transactions like never before.</li>
                        </ul>
                    </div>
                    {/* {!isMobile &&
                        <button onClick={() => { handleClickOpen(0) }} style={{ border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer' }}>
                            Read More
                        </button>
                    } */}
                </div>
            </div>
        )
    }

    const aboutData = [
        {
            name: "Kamal Gupta",
            img: About1,
            about: "Director of the company since 2013, Auchitya completed his graduation from Delhi University and Masters in Banking and Finance from University of London. He has a varied bounty of experience which he gained in his internships with the biggest names in the Industry like Standard Chartered Bank, ICICI Bank,Amplify Trading in London and BMW India Financial Services Ltd.",
            post: "Director"
        },
        {
            name: "Mr. Auchitya Gupta",
            img: About2,
            about: "Director of the company since 2013, Auchitya completed his graduation from Delhi University and Masters in Banking and Finance from University of London. He has a varied bounty of experience which he gained in his internships with the biggest names in the Industry like Standard Chartered Bank, ICICI Bank,Amplify Trading in London and BMW India Financial Services Ltd.",
            post: "Director"
        },
        {
            name: "T.R. Agarwal",
            img: About3,
            about: "Director of the company since 2013, Auchitya completed his graduation from Delhi University and Masters in Banking and Finance from University of London. He has a varied bounty of experience which he gained in his internships with the biggest names in the Industry like Standard Chartered Bank, ICICI Bank,Amplify Trading in London and BMW India Financial Services Ltd.",
            post: "Director"
        }
    ]

    const aboutCard = (img, name, post, id) => {
        return (
            <div style={{ backgroundColor: "white", width: 389,minWidth: isMobile?"":is1200?"300px":is1300?"400px":is1900?"500px":700,flex:isMobile?"": 1, minHeight:isMobile?387: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, marginBottom: isMobile ? 32 : 0, marginLeft: isMobile ? 0 :(id%2==0) ?0:50, marginRight: isMobile ? 0 : (id%2!=0) ?0:50,marginTop: (id>1 && !isMobile)?100:0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: isMobile ? "24px 16px" : "48px 0px", flex: 1 }}>
                    <img src={img} style={{ width: isMobile ? 72 : 120, height: isMobile ? 72 : 120, borderRadius: "100%", }}></img>
                    <p style={{ marginTop: 24, color: '#161A1B', fontFamily: 'Mulish', fontSize: isMobile ? 18 : 20, lineHeight: isMobile ? "22.59px" : "25px", fontWeight: 'bold', }}>{name}</p>
                    <p style={{ marginTop: isMobile ? 4 : 8, color: '#161A1B', fontFamily: 'Mulish', fontSize: 14, lineHeight: "17.57px", fontWeight: 400, flex: isMobile ? "" : 1 }}>{post}</p>
                    {isMobile && <p style={{ marginTop: 24, textAlign: 'center', color: 'rgba(22, 26, 27, 0.6)', fontFamily: 'Mulish', fontSize: 14, lineHeight: "17.57px", fontWeight: 400, flex: 1, minWidth: 295 }}>
                        Director of the company since 2013, Auchitya completed his
                        graduation from Delhi University and Masters in Banking and
                        Finance from University of London. He has a varied bounty of
                        experience which he gained in his internships with the biggest
                        names in the Industry like Standard Chartered Bank, ICICI Bank,
                        Amplify Trading in London and BMW India Financial Services
                        Ltd.
                    </p>}
                    {!isMobile &&
                        <button onClick={() => { handleClickOpen(id) }} style={{ border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer' }}>
                            Read More
                        </button>
                    }
                </div>
            </div>
        )
    }

    return (
        <div style={{ backgroundImage: `url("/Vector2.png")`, margin: 0, backgroundRepeat: "no-repeat", backgroundPosition: "100% 8%", backgroundSize: isLarge ? "70%" : "100%", }}>
            <div className={classes.section1}>
                <div className={classes.section1Text}>
                    <div className={classes.section1Head}>
                        Get to know your Brokers Better
                    </div>
                    <div className={classes.section1SubHead}>
                        KK Securities Ltd. is a full-service boutique broking firm and a corporate member of the National Stock Exchange of India (since September 1995) in the capital market, F&O and currency derivative segment of NSE. With 11,000 clients in hand, the company yields a depository AUM of INR 4600 crores.
                    </div>
                    {isMobile &&
                        <div className={classes.section1Image}>
                            <img src={AboutTopImg} style={{ marginTop: 70, marginBottom: 81, width: 327 }} />
                        </div>
                    }
                    <div className={classes.section1SubHead} style={{ marginTop: 20 }}>
                        We have been standing strong in the financial market for 50 glorious years, growing your money by making smart investment choices for you. Our strength lies in operating with a niche segment of investors hence providing them with personalized trading services. By practicing such a contemporary business approach, our intention is to change the way India invests… One investment at a time.

                    </div>
                </div>
                {!isMobile &&
                    <div className={classes.section1Image}>
                        <img src={AboutTopImg} style={{ width: '90%', height: "fit-content" }} />
                    </div>
                }
            </div>


            <div className={classes.section2}>
                <div style={{ marginRight: isMobile ? 0 : 20 }}>
                    {cardTrust()}
                </div>
                <div style={{ marginRight: isMobile ? 0 : 20 }}>
                    {cardPoint()}
                </div>
                <div>
                    {cardSeamless()}
                </div>
            </div>



            <div className={classes.section3}>
                <div className={classes.section3Head}>
                    Meet Our Board of Directors
                </div>
                <div className={classes.section3Body} >

                    {aboutCard(aboutData[0].img, aboutData[0].name, aboutData[0].post, 0)}
                    {aboutCard(aboutData[1].img, aboutData[1].name, aboutData[1].post, 1)}
                    {aboutCard(aboutData[2].img, aboutData[2].name, aboutData[2].post, 2)}
                    {aboutCard(aboutData[2].img, aboutData[2].name, aboutData[2].post, 3)}

                </div>


                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                        maxWidth="md"
                    >
                        <div style={{ width: 831, height: 644, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={cross} style={{ position: 'absolute', top: 32, right: 32, cursor: 'pointer', }} onClick={handleClose} />
                            <div style={{ margin: "64px 64px 151px 64px" }}>
                                <img src={aboutData[currAbout].img} style={{ width: 160, height: 160, borderRadius: "100%" }} />
                                <p style={{ marginTop: 24, fontSize: 24, lineHeight: "30.12px", fontFamily: 'Mulish', color: "#161A1B", fontWeight: 'bold', textTransform: 'uppercase' }} >
                                    {aboutData[currAbout].name}
                                </p>
                                <p style={{ marginTop: 8, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: "rgba(22, 26, 27, 0.6)", fontWeight: 400, textTransform: 'uppercase' }} >
                                    {aboutData[currAbout].post}
                                </p>
                                <p style={{ marginTop: 47, fontSize: 16, lineHeight: "26px", fontFamily: 'Mulish', color: "rgba(22, 26, 27, 0.6)", fontWeight: 400, maxWidth: 703 }} >
                                    {aboutData[currAbout].about}
                                </p>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default About
