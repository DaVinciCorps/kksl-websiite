import React from 'react'
import { makeStyles } from '@mui/styles';
import g7 from '../images/g7.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pc1 from '../images/pc1.png'
import vector10 from '../images/Vector (10).png'
import icon1 from "../images/eos-icons_trusted-organization.png"
import pc2 from '../images/pc2.png'
import pc3 from '../images/pc3.png'
import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Group from "../images/Group.png";
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles({
    section1: {
        display: 'flex',
        margin: "50px 7.2% 80px 7.2%",
        ['@media (max-width:600px)']: {
            margin: "40px 6.2% 48px 6.2%",
        },
    },

    section1Text: {
        flex: 1,
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        ['@media (max-width:600px)']: {
            alignItems: "center",
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
        ['@media (max-width:600px)']: {
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
        ['@media (max-width:600px)']: {
            margin: "0px 6.2% 48px 6.2%",
            flexWrap: 'wrap'
        }
    },


    section3: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        marginBottom: '80px',
        ['@media (max-width:600px)']: {
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
        ['@media (max-width:600px)']: {
            fontSize: 20,
            lineHeight: "25.1px",
            marginBottom: 24
        }
    },

    section3Body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        ['@media (max-width:600px)']: {
            flexWrap: 'wrap',
        }
    },

});

function About() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const cardTrust=()=>{
        return(
            <div style={{boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389, display: 'flex', alignItems: 'center', marginBottom: isMobile?24:''}}>
                <div style={{margin:isMobile? "16px 16px 24px 16px":40, }}> 
                    <img src={icon1} style={{width: isMobile?72:120}}/>
                    <p style={{marginTop:isMobile?24: 42,color: '#161A1B', fontFamily: "Mulish", fontSize:isMobile?18: 20, fontWeight:isMobile?600: 'bold', lineHeight:isMobile?"22.59px": '25px'}}>
                        Trust And Assurance
                    </p>
                    <div style={{marginTop: 8,}}>
                        <ul style={{color: 'rgba(22, 26, 27, 0.6)', fontSize:isMobile?12: 16, lineHeight:isMobile?"18px" :"26px", padding: 0, paddingLeft: 18}}>
                            <li>One of the oldest and most trusted brokers in India since 1995.</li>
                            <li>Get help investing your money just as it’s our own.</li>
                            <li>Experience one of the lowest brokerage fees in the market.</li>
                        </ul>
                    </div>
                    {!isMobile &&
                        <button style={{border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer'}}>
                            Read More
                        </button>
                    }
                </div>
            </div>
        )
    }

    const cardPoint=()=>{
        return(
            <div style={{boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389,  height:isMobile?"": "100%", display: 'flex',flexDirection: 'column', marginBottom: isMobile?24:'' }}>
                <div style={{margin:isMobile? "16px 16px 24px 16px":40, flex: 1, display: 'flex', flexDirection: 'column'}}> 
                    <div style={{height:isMobile?72: 120}}><img src={Group} style={{width: isMobile?72:120, height: isMobile?72:120}}/></div>
                    <p style={{marginTop:isMobile?24: 42,color: '#161A1B', fontFamily: "Mulish", fontSize:isMobile?18: 20, fontWeight: 'bold', lineHeight:isMobile?"22.59px": '25px'}}>
                    One Point Access to all Markets
                    </p>
                    <div style={{marginTop: 8,flex: 1}}>
                        <ul style={{color: 'rgba(22, 26, 27, 0.6)', fontSize: isMobile?12:16, lineHeight: isMobile?"18px":"26px", padding: 0, paddingLeft: 18}}>
                            <li>Single access to all market segments of BSE, NSE & MCX.</li>
                            <li> Find large avenues of investment solutions and financial services all under one roof.</li>
                        </ul>
                    </div>
                    {!isMobile &&
                        <button style={{border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer'}}>
                            Read More
                        </button>
                    }
                </div>   
            </div>
        )
    }

    const cardSeamless=()=>{
        return(
            <div style={{boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, maxWidth: 389, display: 'flex', alignItems: 'center',}}>
                <div style={{margin: isMobile? "16px 16px 24px 16px":40,}}>
                    <img src={pc3}style={{width: isMobile?72:120,}} />
                    <p style={{marginTop:isMobile?24: 42,color: '#161A1B', fontFamily: "Mulish", fontSize:isMobile?18: 20, fontWeight: 'bold', lineHeight:isMobile?"22.59px": '25px'}} >
                        Seamless Trading    
                    </p>
                    <div style={{marginTop: 8,}}>
                        <ul style={{color: 'rgba(22, 26, 27, 0.6)', fontSize: isMobile?12:16, lineHeight: isMobile?"18px":"26px", padding: 0, paddingLeft: 18}}>
                            <li>Seamless browser and application-based trading across all devices.</li>
                            <li> Top notch in terms of speed, convenience and risk management.</li>
                            <li> Gain control on your transactions like never before.</li>
                        </ul>
                    </div>
                    {!isMobile &&
                        <button style={{border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer'}}>
                            Read More
                        </button>
                    }
                </div>
            </div>
        )
    }

    const aboutCard=(img, name, post)=>{
        return(
            <div style={{width: 389,minHeight: 387,display: 'flex', flexDirection: 'column', alignItems: 'center',  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15, marginBottom: isMobile?32:0}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: isMobile?"24px 16px": "48px 0px", flex: 1}}>
                    <img src={img} style={{width:isMobile?72: 120, height:isMobile?72: 120, borderRadius: "100%",}}></img>
                    <p style={{marginTop: 24, color: '#161A1B',fontFamily: 'Mulish',fontSize:isMobile?18: 20, lineHeight:isMobile?"22.59px": "25px", fontWeight: 'bold',}}>{name}</p>
                    <p style={{marginTop:isMobile?4: 8, color: '#161A1B',fontFamily: 'Mulish',fontSize: 14, lineHeight: "17.57px", fontWeight: 400, flex: isMobile?"":1}}>{post}</p>
                    {isMobile && <p style={{marginTop: 24,textAlign: 'center', color:'rgba(22, 26, 27, 0.6)',fontFamily: 'Mulish',fontSize: 14, lineHeight: "17.57px", fontWeight: 400, flex: 1}}>Director of the company since 2013, Auchitya completed his
                                    graduation from Delhi University and Masters in Banking and
                                    Finance from University of London. He has a varied bounty of
                                    experience which he gained in his internships with the biggest
                                    names in the Industry like Standard Chartered Bank, ICICI Bank,
                                    Amplify Trading in London and BMW India Financial Services
                                    Ltd.
                                    </p>}
                    {!isMobile && 
                        <button style={{border: '1px solid #2584F4', width: 160, height: 56, borderRadius: 8, color: '#2584F4', fontSize: 16, backgroundColor: 'white', cursor: 'pointer'}}>
                            Read More
                        </button>
                    }
                </div>
            </div>
        )
    }

    return (
        <div style={{ backgroundImage: '', margin:0 }}>
            <div className={classes.section1}>
                <div className={classes.section1Text}>
                    <div className={classes.section1Head}>
                        About Us
                    </div>
                    <div className={classes.section1SubHead}>
                    KK Securities Ltd. is a full-service boutique broking firm and a corporate member of the National Stock Exchange of India (since September 1995) in the capital market, F&O and currency derivative segment of NSE. With 11,000 clients in hand, the company yields a depository AUM of INR 4600 crores.
                    </div>
                    {isMobile && 
                        <div className={classes.section1Image}>
                            <img src={g7} style={{ marginTop: 70,marginBottom: 81, width: 327}} />
                        </div>
                    }
                    <div className={classes.section1SubHead} style={{marginTop: 20}}>
                    We have been standing strong in the financial market for 50 glorious years, growing your money by making smart investment choices for you. Our strength lies in operating with a niche segment of investors hence providing them with personalized trading services. By practicing such a contemporary business approach, our intention is to change the way India invests… One investment at a time.

                    </div>
                </div>
                {!isMobile &&
                    <div className={classes.section1Image}>
                        <img src={g7} style={{ width: '90%'}} />
                    </div>
                }
            </div>


            <div className={classes.section2}>
                <div>
                    {cardTrust()}
                </div>
                <div >
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
                <div className={classes.section3Body}>
                    
                    {aboutCard(d1,"Kamal Gupta","Director")}
                    {aboutCard(d2,"Mr. Auchitya Gupta","Director")}
                    {aboutCard(d3,"T.R. Agarwal","Director")}

                </div>


                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default About
