import React from 'react'
import laptop from "../../images/Product/Group 626252.png"
import stock from "../../images/Product/Group 626253.png"
import Desktop from "../../images/Product/Group 626254.png"
import apple from "../../images/Product/Group (1).png"
import google from "../../images/Product//Group.png"
import {useHistory } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';

function Product() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:600px)');
    const section1=()=>{
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop:isMobile?48: 80, flexWrap: isMobile?'wrap-reverse':''}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={laptop} style={{width: isMobile?311.8:"", marginTop:isMobile?24:0}} />
                    {isMobile && 
                        <button style={{margin: "auto" ,marginTop: 24,width:isMobile?120: 257, height:isMobile?44: 56, backgroundColor: '#2584F4', color: 'white', fontSize:isMobile?14: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                            Get Started
                        </button>
                    }
                </div>
                <div style={{marginLeft:isMobile?0: 30,}} >
                    <p style={{fontWeight: 'bold',marginTop: 0,  fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px",fontFamily: 'Mulish'}}>Web Trading</p>
                    <p style={{fontWeight: 400,marginTop:isMobile?12: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>Easy to navigate and adapt, our platform is one you can always count on. Integrated with latest stats on the market along with fast and efficient trades, make sure you make the most of your investments. </p>
                    {!isMobile && 
                    <button style={{marginTop: 47,width:isMobile?120: 257, height:isMobile?44: 56, backgroundColor: '#2584F4', color: 'white', fontSize:isMobile?14: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                        Get Started
                    </button>}
                </div>
                
            </div>
        )
    }
    const section2=()=>{
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop:isMobile?48: 240, flexWrap: isMobile?'wrap':''}}>
                
                <div style={{marginRight:isMobile?0: 30}} >
                    <p style={{fontWeight: 'bold',marginTop: 0,  fontSize:isMobile?20: 36, color: '#161A1B', lineHeight: isMobile?"24px":"43.2px",fontFamily: 'Mulish'}}>Mobile Application</p>
                    <p style={{fontWeight: 400,marginTop:isMobile?12: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>Trade and invest on the go with our reliable and easy-to-use mobile application. Stay in touch with the market and get live updates no matter where you are. Enjoy the KKSM experience seamlessly on Android and iOS devices.</p>
                    {!isMobile && 
                        <div style={{display: 'flex', marginTop: 7,}}>
                            <img src={google} style={{cursor: 'pointer', marginRight: 25}}/>
                            <img src={apple} style={{cursor: 'pointer',}}/>
                        </div>
                    }     
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={stock} style={{width: isMobile?311.8:"", marginTop:isMobile?24:0}}/>
                    {isMobile && 
                        <div style={{display: 'flex', marginTop: 36,}}>
                            <img src={google} style={{cursor: 'pointer', marginRight: 25}}/>
                            <img src={apple} style={{cursor: 'pointer',}}/>
                        </div>
                    }    
                </div>
            </div>
        )
    }
    const section3=()=>{
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop:isMobile?60: 324, marginBottom:isMobile?48: 160, flexWrap: isMobile?'wrap-reverse':''}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div>
                        <img src={Desktop} style={{width: isMobile?311.8:"", marginTop:isMobile?24:0}} />
                    </div>
                
                    {isMobile && 
                        <button style={{margin: "auto" ,marginTop: 24,width:isMobile?120: 257, height:isMobile?44: 56, backgroundColor: '#2584F4', color: 'white', fontSize:isMobile?14: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                            Get Started
                        </button>
                    }
                </div>
                <div style={{marginLeft:isMobile?0: 30}} >
                    <p style={{fontWeight: 'bold',marginTop: 0,  fontSize:isMobile?20: 36, color: '#161A1B', lineHeight: isMobile?"24px":"43.2px",fontFamily: 'Mulish'}}>Desktop Application</p>
                    <p style={{fontWeight: 400,marginTop:isMobile?12: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>With our desktop application, enjoy all the top notch features of the market as well as live updates on all the stocks and trends. Experience a quick trading and a user-friendly interface currently available on Windows & macOS.</p>
                    {!isMobile &&
                        <button style={{marginTop: 6,width: 257, height: 56, backgroundColor: '#2584F4', color: 'white', fontSize: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                            Get Started
                        </button>
                    }      
                </div>
                
            </div>
        )
    }

    return (

        <div style={{maxWidth: 1440,margin:isMobile?"40px 6.2% 0px 6.2%": "73px 14.4% 0px 14.4%"}}>
            <div >
                <p style={{fontWeight: 'bold', fontSize:isMobile?24: 48, color: '#161A1B', lineHeight:isMobile?"26px": "57.6px", textAlign: 'center', fontFamily: 'Mulish'}}>Products</p>
                <p style={{fontWeight: 400,marginTop:isMobile?8: 16,  fontSize:isMobile?12: 16, color: '#161A1B', lineHeight:isMobile?"15.06px": "26px", textAlign: 'center',fontFamily: 'Mulish'}}>No matter which device you use, we're available.</p>
                <p style={{fontWeight: 400,marginTop: 24,  fontSize:isMobile?14: 18, color: '#161A1B', lineHeight:isMobile?"17.57px": "22.59px", textAlign: 'center',fontFamily: 'Mulish'}}>Check out our <span style={{color: '#2584F4', cursor: 'pointer'}} onClick={()=>{history.push('/services')}} >Services</span></p>
            </div>
            {section1()}
            {section2()}
            {section3()}
        </div>


    );
}
export default Product;