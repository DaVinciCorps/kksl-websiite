import React from 'react';
import { makeStyles } from '@mui/styles';
import HeroSectionImage from '../images/HeroSection1.png'
import PersonIcon from '../images/Person.png'
import Base from '../images/Base.png'

const useStyles = makeStyles({
    root : {
        // backgroundColor: 'beige',
        // height:'580px',
        display: 'flex',
        flexDirection:'column',
        // justifyContent: 'space-between',
    },

    section1 : {
        height:'580px',
        display: 'flex',
        backgroundColor:'#E5E5E5'
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
        marginLeft: '72px',
        // marginRight: '50px',

        marginBottom:'25px',
    },

    subHeading : {
        fontSize:'16px',
        fontFamily:'Mulish',
        // float:'right',
        marginLeft:'72px',
        marginBottom: '30px',
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
        padding: '11 24',
        marginLeft: '72px',
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
    }
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sed fermentum aliquet est.
                    </div>
                    <div >
                    <button className={classes.signInButton}>
                        Try For Free
                    </button>
                </div>
                </div>
                <div className={classes.imagePart}>
                    <img src={HeroSectionImage} alt="Hero Section" style={{paddingTop:'135px', float:'right', height:'445px', width:'550px'}}/>
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
        </div>
    )
}

export default Home
