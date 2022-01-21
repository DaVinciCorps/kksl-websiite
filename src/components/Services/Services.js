import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useHistory } from "react-router-dom";
import Trading from "../../images/trading.svg";
import Demat from "../../images/dematt.svg";
import Mutual from "../../images/mf.svg";
import IPO from "../../images/ipo.svg";
import Equity from "../../images/eq.svg";
import Inter from "../../images/inter.svg";
import Debt from "../../images/Services/service7.png";
import Arrow from "../../images/Arrow 1 (1).png";

function Services() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const data = [
        {
            heading: "Trading",
            image: Trading,
            link: "/trading",
            para: "Trading is the base that constitutes all the core elements of all economic societies and financial activities. Build a long-term perspective."
        },
        {
            heading: "Demat",
            image: Demat,
            link: "/demat",
            para: "One of the best ways to keep track of all your investments in shares, bonds, mutual funds, and exchange-traded funds, all organized in one place."
        },
        {
            heading: "Mutual Funds",
            image: Mutual,
            link: "/mutual-funds",
            para: "An investment scheme that pools money from many investors which is futher invested by a professional fund manager. Invest now with a diverse set of mutual fund options to suit your financial goals."
        },
        {
            heading: "IPO",
            image: IPO,
            link: "/IPO",
            para: "An Initial Public Offer (IPO) is the selling of securities to public on primary stock market allowing a company to raise capital from public investors. Get your window to rapid profit in a short time period."
        },
        {
            heading: "Unlisted Equity",
            image: Equity,
            link: "/unlisted-equity",
            para: "Unlisted Equities are securities/financial instruments of a company that is not listed and does not trade publicly on the stock market. These illiquid stocks can offer you huge profits in the longer run."
        },
        {
            heading: "International Investments",
            image: Inter,
            link: "/international-investments",
            para: "Trade in the market with stocks of non-U.S. based companies to get  a source of stability during market volatility."
        },
        {
            heading: "Debt",
            image: Debt,
            link: "/debt",
            para: "The major markets where you invest to earn more via profits through guaranteed returns with fixed interest.  Make the most of the low transaction fees in Debt funds."
        },

    ]

    const headingDiv = () => {
        return (
            <div style={{ marginTop: isMobile ? 40 : is960?75:120 }}>
                <p style={{ fontWeight: 'bold', fontSize: isMobile ? 24 : 48, color: '#161A1B', lineHeight: isMobile ? "26px" : "57.6px", textAlign: 'center', fontFamily: 'Mulish' }}>Services</p>
                <p style={{ fontWeight: 400, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "15.06px" : "26px", textAlign: 'center', fontFamily: 'Mulish' }}>
                    Our strength lies in operating with a niche segment of investors, providing them with personalized trading services for guaranteed diversified portfolios.
                </p>
                <p style={{ fontWeight: 400, marginTop: 24, fontSize: isMobile ? 14 : 18, color: '#161A1B', lineHeight: isMobile ? "17.57px" : "22.59px", textAlign: 'center', fontFamily: 'Mulish' }}>Check out our <span style={{ color: '#2584F4', cursor: 'pointer' }} onClick={() => { history.push('/product') }} >Products</span></p>
            </div>
        )
    }

    const handleNavigate = (link) => {
        // history.push(link);
        window.open(link, "_blank");
    }

    const leftBox = (data) => {
        return (
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap-reverse' : '' }}>
                {/* <img src={data.image} style={{ width: isMobile ? "100%" : 504, height: isMobile ? "" : 328, marginTop: isMobile ? 24 : 0 }} alt="Data" /> */}
                <div>
                    <img src={data.image} style={{ width: isMobile ? "100%" : "100%", height: isMobile ? "" : "", marginTop: isMobile ? 24 : 0,maxWidth: 504 }} alt="Data" />
                </div>
                <div style={{ marginLeft: isMobile ? 0 : 60 }}>
                    <p style={{ fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", textAlign: 'left', fontFamily: 'Mulish' }}>
                        {data.heading}
                    </p>
                    <p style={{ fontWeight: 400, marginTop: 24, fontSize: isMobile ? 12 : 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: isMobile?"":400 }}>
                        {data.para}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, cursor: 'pointer' }} onClick={() => { handleNavigate(data.link) }}>
                        <p style={{ fontWeight: 600, fontSize: 16, color: '#2584F4', lineHeight: "26px", fontFamily: 'Mulish' }}>
                            Learn More
                        </p>
                        <div>
                            <img style={{ width: 28, marginLeft: 8 }} src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const rightBox = (data) => {
        return (
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '' }}>

                <div style={{ marginRight: isMobile ? 0 :60 }}>
                    <p style={{ fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", textAlign: 'left', fontFamily: 'Mulish' }}>
                        {data.heading}
                    </p>
                    <p style={{ fontWeight: 400, marginTop: 24, fontSize: isMobile ? 12 : 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth:isMobile?"": 400 }}>
                        {data.para}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, cursor: 'pointer' }} onClick={() => { handleNavigate(data.link) }}>
                        <p style={{ fontWeight: 600, fontSize: 16, color: '#2584F4', lineHeight: "26px", fontFamily: 'Mulish' }}>
                            Learn More
                        </p>
                        <div>
                            <img style={{ width: 28, marginLeft: 8 }} src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                </div>
                {/* <img src={data.image} style={{ width: isMobile ? "100%" : 504, height: isMobile ? "" : 328, marginTop: isMobile ? 24 : 0 }} alt="Data" /> */}
                <div>
                    <img src={data.image} style={{ width: isMobile ? "100%" : "100%", height: isMobile ? "" : "", marginTop: isMobile ? 24 : 0, maxWidth: 504 }} alt="Data" />
                </div>
            </div>
        )
    }


    return (
        <div style={{ maxWidth: 1440, margin: isMobile ? "0px 6.2%" :isTab?"0px 7.4%": "0px 14.4%",display :'flex', justifyContent:"center" }}>
            <div style={{ maxWidth: isMobile ? 500 : 1440, margin: 'auto' }} >
                {headingDiv()}
                <div style={{ marginTop: isMobile ? 48 : 40 }}>
                    {leftBox(data[0])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240 }}>
                    {rightBox(data[1])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240 }}>
                    {leftBox(data[2])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240 }}>
                    {rightBox(data[3])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240 }}>
                    {leftBox(data[4])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240 }}>
                    {rightBox(data[5])}
                </div>
                <div style={{ marginTop: isMobile ? 64 : 240, marginBottom: isMobile ? 48 : 160 }}>
                    {leftBox(data[6])}
                </div>

            </div>
        </div>
    );
}
export default Services;