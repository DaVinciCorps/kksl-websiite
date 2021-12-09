import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { makeStyles } from '@mui/styles';
import HeroSectionImage from '../images/HeroSection1.png'
// import PersonIcon from '../images/Person.png'
import Base from '../images/Base.png'
import '../styles/styles.css'
import Equity from '../images/equity.png'
import Derivatives from '../images/derivative.png'
import MutualFund from '../images/mutualfunds.png'
import Illustration1 from '../images/Illustration1.png'
import illustration2 from '../images/illustration2.png'
import illustration3 from '../images/illustration3.png'
import illustration4 from '../images/illustration4.png'
import Trust1 from '../images/Trust1.png'
import TextField from '@mui/material/TextField';
import Ellipse1 from '../images/Ellipse1.png'
import Ellipse2 from '../images/Ellipse2.png'


const useStyles = makeStyles({
    root : {
        // height:'580px',
        display: 'flex',
        flexDirection:'column',
        // justifyContent: 'space-between',
    },

    section1 : {
        height:'580px',
        display: 'flex',
        backgroundColor:'#E5E5E5',
        paddingLeft:'100px',
    },

    textPart :{
        width:'50%',
    },

    imagePart : {
        width:'50%',
    },

    mainHeading : {
        // float:'right',
        fontSize:'60px',
        // textAlign:'right',
        fontWeight: 'bold',
        fontFamily:'Mulish',
        marginTop: '90px',
        // paddingLeft: '100px',
        // marginRight: '50px',

        marginBottom:'25px',
    },

    subHeading : {
        fontSize:'16px',
        fontFamily:'Mulish',
        // float:'right',
        // marginLeft:'72px',
        marginBottom: '30px',
    },

    subsInButton : {
        width: 164, 
        color:"#FFFFFF", 
        height: 56,
        borderRadius: 8, 
        fontWeight:'bold',
        fontSize:'16px',
        borderWidth:2, 
        borderColor:"#2584F4", 
        backgroundColor:"#2584F4", 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: "center", 
        padding: '11 24',
        marginLeft: '8px',
    },

    section2 : {
        height:'156px',
        backgroundColor:'#0953AA',
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
    },

    insideIcon : {
        display:'flex',
    },

    number : {
        fontFamily: 'Rubik',
        color: '#86BBF9',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
    },

    text : {
        fontSize: '16px',
        color:'white',
    },

    section3 : {
        paddingTop: '40px',
        paddingLeft:'50px',
        backgroundColor:'#E5E5E5',
    },

    head : {
        fontSize: '40px',
        fontFamily: 'Mulish',
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginBottom:'20px',
    },

    body : {
        marginBottom:'35px'
    },

    section4 : {
        height: '686px',
        backgroundColor: '#0953AA',
        display:'flex',
        justifyContent:'space-between',
        color: 'white',
    },

    section5 : {
        display:'flex',
        paddingTop:'50px',
        paddingLeft:'100px',
        flexDirection:'column',
        backgroundColor:'#E5E5E5',
    },

    section6 : {
        display:'flex',
        justifyContent:'center',
        paddingTop:'50px',
        backgroundColor:' #E5E5E5',
        paddingBottom:'120px',
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
    },

    heroSectionImage : {
        paddingTop:'135px', 
        float:'right', 
        height:'445px', 
        width:'550px'
    },

    section3Tabs : {
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-around', 
        height:'100%'
    },

    section3Text : {
        float:'inline-end', 
        fontSize:'18px', 
        fontWeight:500, 
        fontFamily:'Rubik'
    },

    section4Head : {
        display:'flex', 
        justifyContent:'center', 
        flexDirection:'column', 
        paddingLeft:'100px', 
        paddingRight:'50px'
    },

    section4Heading : {
        fontFamily:'Mulish', 
        fontStyle:'normal', 
        fontSize:'62px', 
        fontWeight:'bold', 
        paddingBottom:'30px'
    },

    section4Body : {
        fontFamily:'Mulish', 
        fontWeight:'normal', 
        fontSize:'16px', 
        lineHeight:'26px'
    },

    section6Box : {
        backgroundColor:"#0953AA", 
        height:'307px', 
        width:'70%', 
        borderRadius:'8px', 
        boxShadow: '0px 40px 92px -16px rgba(9, 83, 170, 0.3)', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center'
    },

    boxContent : {
        color:'white', 
        display:'flex', 
        flexDirection:'column',
    },

    section6Heading : {
        fontFamily:'Mulish', 
        fontSize:'48px', 
        fontWeight:'bold', 
        textAlign:'center', 
        fontStyle:'normal', 
        paddingBottom:'25px'
    },
});

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
                    <img src={HeroSectionImage} alt="Hero Section" className={classes.heroSectionImage}/>
                </div>
            </div>



            <div className={classes.section2}>
                <div className={classes.insideIcon}>
                    <img src={Base} alt="Base" style={{marginRight:'20px'}}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className={classes.number}>$30B</div>
                        <div className={classes.text}>Digital Currency Exchanged</div>
                    </div>
                </div>
                <div className={classes.insideIcon}>
                    <img src={Base} alt="Base" style={{marginRight:'20px'}}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className={classes.number}>10M+</div>
                        <div className={classes.text}>Trusted Wallet Investors</div>
                    </div>
                </div>
                <div className={classes.insideIcon}>
                    <img src={Base} alt="Base" style={{marginRight:'20px'}}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
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
                                <img src={Equity} alt="I1" style={{height: '40px', width: '40px'}} />
                                <div className={classes.section3Text}>Equity</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={Derivatives} alt="I1" style={{height: '40px', width: '40px'}} />
                                <div className={classes.section3Text}>Derivatives</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={Equity} alt="I1" style={{height: '40px', width: '40px'}} />
                                <div className={classes.section3Text}>Commodities</div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className={classes.section3Tabs}>
                                <img src={MutualFund} alt="I1" style={{height: '40px', width: '40px'}} />
                                <div className={classes.section3Text}>Mutual Funds</div>
                            </div>
                        </Tab>
                    </TabList>

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
                            <div className={classes.image}>
                                <img src={illustration2} alt="Equity" />
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
                            <div className={classes.image}>
                                <img src={illustration3} alt="Derivatives" />
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
                            <div className={classes.image}>
                                <img src={illustration4} alt="Commodities" />
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
                            <div className={classes.image}>
                                <img src={Illustration1} alt="Mutual Funds" />
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                </Tabs>
            </div>



            <div className={classes.section4}>
                <div className={classes.section4Head}>
                    <div className={classes.section4Heading}>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className={classes.section4Body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras id sed non sed duis mauris hendrerit diam. 
                        Aenean in nunc laoreet nec gravida libero feugiat. 
                        Aliquam, mauris feugiat in faucibus viverra imperdiet 
                        felis, est. Rhoncus nisl ipsum egestas augue 
                        risus massa vitae. Tincidunt libero nullam commodo 
                        commodo, sodales.
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <img src={Trust1} alt="Trust1" style={{paddingRight:'100px', height:'414px', width:'420px',alignSelf:'center'}}/>
                    {/* <img src={Ellipse2} style={{height:'574px', width:'574px'}}/>
                    <img src={Ellipse1} style={{height:'368px', width:'368px', backgroundColor:'rgba(255, 255, 255, 0.1);'}}/> */}
                </div>
            </div>



            <div className={classes.section5}>
                <div style={{fontWeight:'bold', fontSize:'48px', fontFamily:'Mulish', paddingBottom:'24px'}}>
                    What People Say About Us?
                </div>
                <div style={{paddingRight:'100px', paddingBottom:'88px'}}>
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
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <TextField 
                                id="outlined-basic"  
                                variant="outlined" 
                                placeholder="Input your email address in here"
                                style={{backgroundColor:'white', width:'60%', borderRadius:'8px', alignSelf:'center', height:'56px'}}
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
