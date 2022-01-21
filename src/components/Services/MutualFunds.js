import React, { useState } from 'react'
import cuate from "../../images/Debt/cuate.png"
import service1 from "../../images/mutual.svg"
import Tick from "../../images/Debt/Tick.png"
import 'react-dropdown/style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import LoginSignupModal from '../LoginSignupModal';
import Expand from 'react-expand-animated';



function Demat() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const [selected, setSelected] = useState();
    const [selectedPara, setSelectedPara] = useState();
    const [loginOpen,setLoginOpen] = useState(false);
    const loginClose=()=>{
        setLoginOpen(false);
    }

    const topDiv = () => {
        return (
            <div style={{ maxWidth: isMobile ? 500 : 1440, display: 'flex', justifyContent: 'space-between', margin: isMobile ? "40px 6.2% 48px 6.2%" : is960 ? "80px 7.4% 20px 7.4%" : isTab ? "125px 7.4% 20px 7.4%" : "125px 14.4% 20px 14.4%", flexWrap: isMobile ? 'wrap-reverse' : "" }}>
                {isMobile &&
                    <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "", margin: 'auto' }}>
                        <button style={{ marginTop: isMobile ? 32 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Get Started
                        </button>
                    </div>
                }
                <div>
                    <img style={{ marginTop: isMobile ? 24 : 0, width: "100%" }} src={service1} />
                </div>

                <div style={{ marginLeft: isMobile ? 0 : 50 }}>
                    <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 24 : 36, color: '#161A1B', lineHeight: isMobile ? "30.12px" : "43.2px", fontFamily: 'Mulish', textAlign: isMobile ? '' : "" }}>
                        Mutual Funds
                    </p>
                    <p style={{ fontWeight: 400, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: isMobile ? '' : '' }}>
                    Invest in mutual funds to build your wealth. With over 5000+ direct mutual funds available at zero commission, you can maximize your returns.
                    </p>
                    {!isMobile &&
                        <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "" }}>
                            <button style={{ marginTop: isMobile ? 24 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                                Get Started
                            </button>
                        </div>
                    }
                </div>

            </div>
        )
    }

    const makeYourFirstMove = () => {
        return (
            <div style={{ backgroundColor: "#F7F7F7", marginTop: isMobile ? 0 : 160, width: "100%" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: isMobile ? 500 : '', margin: "auto" }}>
                    {!isMobile && <p style={{ marginTop: isMobile ? "40px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Make your first move with confidence</p>}
                    <div style={{ padding: isMobile ? "24px 6.2% 40px 6.2%" : isTab ? "48px 7.4% 88px 7.4%" : "48px 14.4% 88px 14.4%", display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '',width: '-webkit-fill-available' }}>
                        {isMobile && <p style={{ marginBottom: isMobile ? "24px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Make your first move with confidence</p>}
                        <div >
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Less cost for Bulk Transactions</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>The processing fees and other commission charges will be less when you buy multiple mutual fund units at once compared to buying one mutual fund unit.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Suits your financial goals</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Mutual funds are generally perceived as being less safe than bank products. Fund houses are strictly governed by statutory government agencies like SEBI and AMFI. One can easily verify the credentials of the fund house and the asset manager from SEBI.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 16 : 0 }}>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Tax Saving</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Under Section 80C of the Income Tax Act, 1961, you can deduct up to Rs 1.5 lakh per annum from your taxable income if you invest in tax-saving mutual funds.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Safety</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Diverse types of mutual funds are available in India for investors from all walks of life. It is important to set aside some money (however small) for investments no matter what your income level is.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const howItWorks = () => {
        return (
            <div style={{ margin: isMobile ? "48px 6.2% 0px 6.2%" : "160px 7.2% 0px 7.2%", maxWidth: isMobile ? 500 : 1440 }}>
                <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "25.1px" : "43.2px", fontFamily: 'Mulish', textAlign: 'center' }}>
                    How it Works
                </p>
                <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <p style={{ fontWeight: 400, marginTop: 16, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: 'center', maxWidth: 498 }}>
                    Here’s how you can get hold of your Mutual Fund investments in no time. Make investments, keep track, update and manage them, all at one place.
                    </p>
                </div>
                <div style={{ marginTop: isMobile ? 32 : 56, display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '' }}>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '' }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                1
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Create/Log-in Account
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The first and foremost step is to create an investment account or Log-in to it, and calculate the risk tolerance/capacity.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                2
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Fill Required Details
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            Fill all the essential details and information required for you to invest in mutual funds.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                3
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Complete KYC
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The imperative step towards investment is to complete the KYC either offline or via e-KYC. The process usually does not take much time..
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                4
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Choose Investment
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The final step is a crucial one. Take a careful look at the mutual fund schemes and assess the various factors like your financial goals, budget, risk capacity, etc. Finally, invest in the mutual funds that are right for you,
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


    const faq = () => {
        const faqCard = (ques, ans, id) => {
            return (
                <div style={{ backgroundColor: '#F7F7F7', border: '1px solid #E0E0E0', borderRadius: 8, padding: isMobile ? "12px" : "24px 32px", display: 'flex' }} >
                    <div style={{ marginRight: isMobile ? 10 : 48, flex: 1 }}>
                        <p onClick={() => { handleSelect(id) }} style={{ fontWeight: 400, marginTop: 0, fontSize: isMobile ? 12 : 18, color: '#161A1B', lineHeight: isMobile ? "18px" : "24px", fontFamily: 'Mulish', cursor: 'pointer' }}>
                            {ques}
                        </p>
                        <div >
                            <Expand
                                open={selected == id}
                                duration={400}
                            >
                                <p id={"p" + id} style={{ fontWeight: 400, marginRight: isMobile ? "-34px" : 0, fontSize: isMobile ? 12 : 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', marginTop: isMobile ? 12 : 25, }}>
                                    {ans}
                                </p>
                            </Expand>
                        </div>
                    </div>
                    {selected !== id &&
                        <div style={{ cursor: 'pointer' }} onClick={() => { handleSelect(id) }}>
                            <KeyboardArrowDownIcon />
                        </div>
                    }
                    {selected === id &&
                        <div style={{ cursor: 'pointer' }} onClick={() => { handleSelect(id) }}>
                            <KeyboardArrowUpIcon />
                        </div>
                    }
                </div>
            )
        }

        const handleSelect = (e) => {
            if (selected == e) {
                setSelected();
            }
            else {
                setSelected(e);
            }
        }

        return (
            <div style={{ maxWidth: isMobile ? 500 : 1440, margin: isMobile ? "48px 6.2%" : isTab ? "160px 7.4% 0px 7.4%" : '160px 14.2% 0px 14.2%' }}>
                <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish', textAlign: 'center' }}>
                    Frequently Asked Questions
                </p>
                <div style={{ marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard('What are Mutual Funds?', ' A mutual fund is an investment scheme that pools money from many investors which is further invested by a professional fund manager: The fund manager can invest this pooled money to purchase securities like stocks, bonds, gold, or any combination of these.', 0)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('How do they work?', 'Every mutual fund works around certain investment objectives and attempts to achieve the same. The fund manager plans the investment accordingly and allocates the asset between stocks and bonds. Combining all, thes securities form the portfolio composition of the selected scheme.', 1)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('How to invest in Mutual Funds?', 'There are two ways of investing in mutual funds - via a systematic investment plan (SIP) or investing through a one-time lump sum method. The primary difference between the two is in a lump sum you have to invest the whole amount in one go and in SIP, you can invest in a mutual fund at fixed intervals such as monthly SIP.', 2)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('Are mutual funds taxable? If yes, then what are the charges on withdrawals?', "Yes. For tax purposes, mutual funds are segregated into equity-oriented and debt-oriented. If the investment made in equity-oriented Mutual Funds is for less than 12 months, you have to pay ~15% tax on returns. For any duration exceeding that, you will have to pay ~10% on gains exceeding lakh. Furthermore, if a fund's exposure to stocks is less than ~65%, capital gains will be as per your tax slab if the holding period is less than 36 months. If the holding period exceeds 3 years, capital gains are taxed at ~20% after the indexation benefit. ", 3)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How are returns earned in mutual funds?', 'Mutual funds offer returns to their investors’ returns in two forms - dividends and capital gains. Dividends are paid out when the company makes profits (if any). If the company has performed really well and is left with surplus cash, it may decide to share the same with investors in the form of dividends. Thus, dividends are rolled out to investors proportional to the number of mutual fund units held by them. A capital gain is the profit earned by investors in case the selling price of the security held. ', 4)}
                </div>
            </div>
        )
    }

    const investInStocks = () => {
        return (
            <div style={{ margin: isMobile ? "48px 6.2% " : isTab ? "160px 7.4%" : "160px 14.4% 160px 14.4%", maxWidth: isMobile ? 500 : 1440, }}>
                <div style={{ backgroundColor: "#0953AA", borderRadius: 15, display: 'flex', justifyContent: "space-between", padding: isMobile ? "40px 6.2%" : "125px 82px 100px 104px", flexWrap: isMobile ? "wrap" : '', backgroundImage: `url("/group8.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "100% 0%", backgroundSize: isMobile ? "25%" : "" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <p style={{ color: "white", fontFamily: 'Mulish', fontWeight: 'bold', fontSize: isMobile ? 20 : 40, lineHeight: isMobile ? "25.1px" : "52px", letterSpacing: "0.005em" }}>
                        Summon us Anywhere, <br />Anytime
                        </p>
                        <p style={{ color: 'white', marginTop: isMobile ? 16 : 25, fontFamily: 'Mulish', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", maxWidth: 350 }}>
                        Our service is just one-click away.  From clearing your doubts to guiding you through your investment portfolio, we are present at every step.
                        </p>
                        <button onClick={()=>{setLoginOpen(true)}} style={{ width: isMobile ? 160 : 240, marginTop: 25, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Start Investing
                        </button>
                    </div>
                    <div style={{ marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 33.66 : 0 }}>
                        <img src={cuate} style={{ width: "100%", minWidth: isMobile ? "" : 220 }} />
                    </div>
                </div>

            </div>
        )
    }

    return (

        <div style={{ display: isMobile? 'flex':'', alignItems: "center", flexDirection: "column" }} >
            {topDiv()}
            {makeYourFirstMove()}
            {howItWorks()}
            {faq()}
            {investInStocks()}
            <LoginSignupModal open={loginOpen} handleClose={loginClose} />
        </div>

    );

}
export default Demat;