import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HeroSectionImage from '../images/HeroSection1.png'
// import PersonIcon from '../images/Person.png'
import '../styles/styles.css'
import Bar from "../images/BarChart.png";
import Earth from "../images/Earth.png";
import Person from "../images/Person1.png";
import Equity from '../images/equity.png'
import Derivatives from '../images/derivative.png'
import MutualFund from '../images/mutualfunds.png'
import Illustration1 from '../images/Illustration1.png'
import illustration2 from '../images/illustration2.png'
import illustration3 from '../images/illustration3.png'
import illustration4 from '../images/illustration4.png'
import Trust1 from '../images/Trust1.png'
import TextField from '@mui/material/TextField';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        // height: '580px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
    },

    section1: {
        height: '580px',
        display: 'flex',
        backgroundColor: 'white',
        paddingLeft: '100px',
        // paddingTop: '100px'
    },

    textPart: {
        width: '50%',
    },

    imagePart: {
        width: '50%',
    },

    imageDiv:{
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 20,
        borderRadius: "100%"
    },

    mainHeading: {
        // float:'right',
        fontSize: '60px',
        // textAlign:'right',
        fontWeight: 'bold',
        fontFamily: 'Mulish',
        marginTop: '90px',
        // paddingLeft: '100px',
        // marginRight: '50px',

        marginBottom: '25px',
    },

    subHeading: {
        fontSize: '16px',
        fontFamily: 'Mulish',
        // float:'right',
        // marginLeft:'72px',
        marginBottom: '30px',
    },

    subsInButton: {
        width: 164,
        color: "#FFFFFF",
        height: 56,
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize: '16px',
        borderWidth: 2,
        borderColor: "#2584F4",
        backgroundColor: "#2584F4",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        padding: '11 24',
        marginLeft: '8px',
    },

    section2: {
        height: '156px',
        backgroundColor: '#0953AA',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    insideIcon: {
        display: 'flex',
    },

    number: {
        fontFamily: 'Rubik',
        color: '#86BBF9',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
    },

    text: {
        fontSize: '16px',
        color: 'white',
    },

    section3: {
        // marginLeft: '50px',
        // marginRight: '50px',
        margin: 'auto',
        marginTop: 90,
        backgroundColor: 'white',
        maxWidth: 1100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',


    },

    panel:{
        ['@media (min-width:1200px)']: {
            marginLeft: 100
        }
    },

    head: {
        fontSize: '40px',
        fontFamily: 'Mulish',
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginBottom: '20px',
    },

    body: {
        marginBottom: '50px',
        maxWidth: 515,
        
    },

    image: {
        height: '545px',
        width: '749px',
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",
        padding: 40,
    },

    section4: {
        height: '686px',
        backgroundColor: '#0953AA',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
    },
    subsection4: {
        height: '686px',
        backgroundColor: '#0953AA',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        maxWidth: 1132
    },

    section5: {
        display: 'flex',
        paddingTop: '50px',
        paddingLeft: '100px',
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    section6: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px',
        backgroundColor: 'white',
        paddingBottom: '120px',
    },

    signInButton: {
        width: 102,
        color: "#FFFFFF",
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#2584F4",
        backgroundColor: "#2584F4",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        padding: '11 24'
    },

    heroSectionImage: {
        // paddingTop: '135px',
        float: 'right',
        // height: '445px',
        // width: '550px'
        height: '85%',
        width: '90%',
        marginTop: '88px',
    },

    section3Tabs: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    },

    section3Text: {
        float: 'inline-end',
        fontSize: '18px',
        fontWeight: 500,
        fontFamily: 'Rubik'
    },

    section4Head: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // paddingLeft: '100px',
        // paddingRight: '50px',
    },

    section6Box: {
        backgroundColor: "#0953AA",
        height: '307px',
        width: '70%',
        borderRadius: '8px',
        boxShadow: '0px 40px 92px -16px rgba(9, 83, 170, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    boxContent: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    },

    section6Heading: {
        fontFamily: 'Mulish',
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'normal',
        paddingBottom: '25px'
    },

    panelContent: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

function Home() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <div className={classes.section1}>
                <div className={classes.textPart}>
                    <div className={classes.mainHeading}>
                        BUILD YOUR FUTURE WITH INVESTMENT
                    </div>
                    <div className={classes.subHeading}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas sed fermentum aliquet est.
                    </div>
                    <div >
                        <button className={classes.signInButton}>
                            Try For Free
                        </button>
                    </div>
                </div>
                <div className={classes.imagePart}>
                    <img src={HeroSectionImage} alt="Hero Section" className={classes.heroSectionImage} />
                </div>
            </div>



            <div className={classes.section2}>
                <div className={classes.insideIcon}>
                    <div className={classes.imageDiv}>
                        <img src={Bar} alt="Base" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.number}>$30B</div>
                        <div className={classes.text}>Digital Currency Exchanged</div>
                    </div>
                </div>
                <div className={classes.insideIcon}>
                    <div className={classes.imageDiv}>
                        <img src={Person} alt="Base"  />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.number}>10M+</div>
                        <div className={classes.text}>Trusted Wallet Investors</div>
                    </div>
                </div>
                <div className={classes.insideIcon}>
                    <div className={classes.imageDiv}>
                        <img src={Earth} alt="Base"  />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.number}>195</div>
                        <div className={classes.text}>Countries Supported</div>
                    </div>
                </div>
            </div>



            <div className={classes.section3}>
                <Tabs>
                    <TabList>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={Equity} alt="I1" style={{ height: '40px', width: '40px' }} />
                                <div className={classes.section3Text}>Equity</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={Derivatives} alt="I1" style={{ height: '40px', width: '40px' }} />
                                <div className={classes.section3Text}>Derivatives</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={Equity} alt="I1" style={{ height: '40px', width: '40px' }} />
                                <div className={classes.section3Text}>Commodities</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={MutualFund} alt="I1" style={{ height: '40px', width: '40px' }} />
                                <div className={classes.section3Text}>Mutual Funds</div>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel className={classes.panel}>
                        <div className="panel-content">
                            <div className={classes.panelContent}>
                                <div className={classes.head}>
                                    Lorem Ipsum
                                </div>
                                <div className={classes.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Viverra varius urna viverra nunc
                                    vel pulvinar diam, dui. Libero euismod massa sed sit quam
                                    neque sit donec. Ornare nullam consectetur sed tortor urna.
                                </div>
                                <div>
                                    <img src={illustration2} alt="Equity" className={classes.image} />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div>
                                <div className={classes.head}>
                                    Lorem Ipsum
                                </div>
                                <div className={classes.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Viverra varius urna viverra nunc
                                    vel pulvinar diam, dui. Libero euismod massa sed sit quam
                                    neque sit donec. Ornare nullam consectetur sed tortor urna.
                                </div>
                                <div>
                                    <img src={illustration3} alt="Derivatives" className={classes.image} />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="panel-content" >
                            <div>
                                <div className={classes.head}>
                                    Lorem Ipsum
                                </div>
                                <div className={classes.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Viverra varius urna viverra nunc
                                    vel pulvinar diam, dui. Libero euismod massa sed sit quam
                                    neque sit donec. Ornare nullam consectetur sed tortor urna.
                                </div>
                                <div>
                                    <img src={illustration4} alt="Commodities" className={classes.image} />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div>
                                <div className={classes.head}>
                                    Lorem Ipsum
                                </div>
                                <div className={classes.body}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Viverra varius urna viverra nunc
                                    vel pulvinar diam, dui. Libero euismod massa sed sit quam
                                    neque sit donec. Ornare nullam consectetur sed tortor urna.
                                </div>
                                <div>
                                    <img src={Illustration1} alt="Mutual Funds" className={classes.image} />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>


            <div className={classes.section4}>
            <div className={classes.subsection4}>
                <div className={classes.section4Head}>
                    <div className={classes.section4Heading}>
                        <p style={{fontFamily: 'Mulish',fontStyle: 'normal',fontSize: '56px',fontWeight: 'bold',paddingBottom: '30px', maxWidth: 560}}>
                            Purpose driven with Trust
                        </p>
                    </div>
                    <div className={classes.section4Body}>
                        <p style={{fontFamily: 'Mulish',fontWeight: 'normal',fontSize: '16px',lineHeight: '26px',maxWidth: 560}} >
                            We invest your money like we do our own with utmost transparency in the process. Our forty years of legacy carrying unparalleled trust and transparency ensures the closest trading experience one can imagine. Our best in-class research and cutting edge featured platform ensures security in smooth functioning.
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',marginLeft: 44 }}>
                    <img src={Trust1} alt="Trust1" style={{  height: '414px', width: '420px', alignSelf: 'center' }} />
                    {/* <img src={Ellipse2} style={{height:'574px', width:'574px'}}/>
                    <img src={Ellipse1} style={{height:'368px', width:'368px', backgroundColor:'rgba(255, 255, 255, 0.1);'}}/> */}
                </div>
            </div>
            </div>



            <div className={classes.section5}>
                <div style={{ fontWeight: 'bold', fontSize: '48px', fontFamily: 'Mulish', paddingBottom: '24px' }}>
                    What People Say About Us?
                </div>
                <div style={{ paddingRight: '100px', paddingBottom: '88px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam vitae libero, risus interdum neque arcu. Morbi mi leo maecenas
                    magna nibh euismod purus tempus. Ac elementum eget est mi lectus
                    eget turpis. Porttitor ante malesuada pulvinar nunc aliquam.
                    Lectus volutpat lectus turpis sed sapien massa egestas nam in.
                </div>
                <div>
                    I am new cards
                </div>
            </div>


            <div className={classes.section6}>
                <div className={classes.section6Box}>
                    <div className={classes.boxContent}>
                        <div className={classes.section6Heading}>Let us send you offering</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Input your email address in here"
                                style={{ backgroundColor: 'white', width: '60%', borderRadius: '8px', alignSelf: 'center', height: '56px' }}
                            />
                            <button className={classes.subsInButton}>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
