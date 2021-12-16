import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useHistory} from "react-router-dom";
import Trading from "../../images/Services/service1.png";
import Demat from "../../images/Services/service2.png";
import Mutual from "../../images/Services/service3.png";
import IPO from "../../images/Services/service4.png";
import Equity from "../../images/Services/service5.png";
import Inter from "../../images/Services/service6.png";
import Debt from "../../images/Services/service7.png";
import Arrow from "../../images/Arrow 1 (1).png";

function Services() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:600px)');
    const data = [
        {
            heading: "Trading",
            image: Trading,
            link: "/trading",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "Demat",
            image: Demat,
            link: "/demat",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "Mutual Funds",
            image: Mutual,
            link: "/mutual-funds",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "IPO",
            image: IPO,
            link: "/IPO",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "Unlisted Equity",
            image: Equity,
            link: "/unlisted-equity",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "International Investments",
            image: Inter,
            link: "/international-investments",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },
        {
            heading: "Debt",
            image: Debt,
            link: "/debt",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
        },

    ]

    const headingDiv=()=>{
        return (
            <div style={{marginTop:isMobile?40: 75}}>
                <p style={{fontWeight: 'bold', fontSize:isMobile?24: 48, color: '#161A1B', lineHeight:isMobile?"26px": "57.6px", textAlign: 'center', fontFamily: 'Mulish'}}>Services</p>
                <p style={{fontWeight: 400,marginTop:isMobile?8: 16,  fontSize:isMobile?12: 16, color: '#161A1B', lineHeight:isMobile?"15.06px": "26px", textAlign: 'center',fontFamily: 'Mulish'}}>No matter which device you use, we're available.</p>
                <p style={{fontWeight: 400,marginTop: 24,  fontSize:isMobile?14: 18, color: '#161A1B', lineHeight:isMobile?"17.57px": "22.59px", textAlign: 'center',fontFamily: 'Mulish'}}>Check out our <span style={{color: '#2584F4', cursor: 'pointer'}} onClick={()=>{history.push('/product')}} >Products</span></p>
            </div>
        )
    }

    const handleNavigate=(link)=>{
        history.push(link);
    }

    const leftBox=(data)=>{
        return(
            <div style={{display: 'flex',alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: isMobile? 'wrap-reverse':''}}>
                <img src={data.image} style={{width:isMobile?"100%": 504, height: isMobile?"": 328, marginTop: isMobile?24:0}} />
                <div style={{marginLeft:isMobile?0: 30}}>
                    <p style={{fontWeight: 'bold', fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px", textAlign: 'left', fontFamily: 'Mulish'}}>
                        {data.heading}
                    </p>
                    <p style={{fontWeight: 400,marginTop: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>
                        {data.para}
                    </p>
                    <div style={{display: 'flex', alignItems: 'center',marginTop: 10,cursor: 'pointer'}} onClick={()=>{handleNavigate(data.link)}}>
                        <p style={{fontWeight: 600,  fontSize: 16, color: '#2584F4', lineHeight: "26px",fontFamily: 'Mulish'}}>
                            Learn More
                        </p>
                        <div>
                            <img style={{width: 28, marginLeft: 8}} src={Arrow} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const rightBox=(data)=>{
        return(
            <div style={{display: 'flex',alignItems: 'flex-start', justifyContent: 'space-between', flexWrap:isMobile? 'wrap':''}}>
                
                <div style={{marginRight:isMobile?0: 30}}>
                    <p style={{fontWeight: 'bold', fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px", textAlign: 'left', fontFamily: 'Mulish'}}>
                        {data.heading}
                    </p>
                    <p style={{fontWeight: 400,marginTop: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>
                        {data.para}
                    </p>
                    <div style={{display: 'flex', alignItems: 'center',marginTop: 10,cursor: 'pointer'}} onClick={()=>{handleNavigate(data.link)}}>
                        <p style={{fontWeight: 600,  fontSize: 16, color: '#2584F4', lineHeight: "26px",fontFamily: 'Mulish'}}>
                            Learn More
                        </p>
                        <div>
                            <img style={{width: 28, marginLeft: 8}} src={Arrow} />
                        </div>
                    </div>
                </div>
                <img src={data.image} style={{width:isMobile?"100%": 504, height: isMobile?"": 328, marginTop: isMobile?24:0}} />
            </div>
        )
    }


    return (
        <div style={{ maxWidth: 1440, margin:isMobile?"0px 6.2%": "0px 14.4%"}}>
            {headingDiv()}
            <div style={{marginTop: isMobile?48: 40}}>
                {leftBox(data[0])}
            </div>
            <div style={{marginTop: isMobile?64:240}}>
                {rightBox(data[1])}
            </div>
            <div style={{marginTop: isMobile?64:240}}>
                {leftBox(data[2])}
            </div>
            <div style={{marginTop: isMobile?64:240}}>
                {rightBox(data[3])}
            </div>
            <div style={{marginTop: isMobile?64:240}}>
                {leftBox(data[4])}
            </div>
            <div style={{marginTop: isMobile?64:240}}>
                {rightBox(data[5])}
            </div>
            <div style={{marginTop: isMobile?64:240, marginBottom:isMobile?48: 160}}>
                {leftBox(data[6])}
            </div>
            
            
        </div>
    );
}
export default Services;