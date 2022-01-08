import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from '@mui/material/Slider';
import ToolsImage from '../images/toolsImage.png';


export default function Tools() {

    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const [isSelected, setSelected] = useState(0);
    const [month, setMonth] = useState();
    const [time, setTime] = useState();
    const [annual, setAnnual] = useState();
    const [sliderMonth, setSliderMonth] = useState(0);
    const [sliderTime, setSliderTime] = useState();
    const [sliderAnnual, setSliderAnnual] = useState();
    useEffect(() => {
        console.log(month)
    }, [month])
    const section1 = () => {

        const handleSelect = (e) => {
            setSelected(e);
        }

        const tabs = () => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 30, }}>
                        <p onClick={() => { handleSelect(0) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: 18, lineHeight: "22.59px", fontWeight: isSelected == 0 ? 'bold' : 'normal', color: isSelected == 0 ? '#0953AA' : "#042349", padding: "0px 12px" }}>
                            SIP Calculator
                        </p>
                        {isSelected == 0 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: 8 }} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 30, }}>
                        <p onClick={() => { handleSelect(1) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: 18, lineHeight: "22.59px", fontWeight: isSelected == 1 ? 'bold' : 'normal', color: isSelected == 1 ? '#0953AA' : "#042349", padding: "0px 12px" }}>
                            Margin Calculator
                        </p>
                        {isSelected == 1 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: 8 }} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 40, }}>
                        <p onClick={() => { handleSelect(2) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: 18, lineHeight: "22.59px", fontWeight: isSelected == 2 ? 'bold' : 'normal', color: isSelected == 2 ? '#0953AA' : "#042349", padding: "0px 12px" }}>
                            Brokerage Calculator
                        </p>
                        {isSelected == 2 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: 8 }} />}
                    </div>
                </div>
            )
        }

        const tabContent = () => {

            const handleMonthChange = (e) => {
                const value = String(e.target.value);

                if (value == "") {
                    setMonth("");
                    setSliderMonth(0);
                }
                if (value) {
                    const formattedValue = (Number(value.replace(/\D/g, '')) || '').toLocaleString();
                    setMonth(formattedValue);
                    const arr = formattedValue.split(',');
                    var val = "";
                    arr.map((i) => { val += i });
                    setSliderMonth(parseInt(parseInt(val) / 3000));
                }
                return null;
            };
            const handleSliderMonth = (event, value) => {
                // console.log(value)
                setSliderMonth(value);
                const x = {
                    target: {
                        value: value * 3000,
                    }
                }
                handleMonthChange(x);
            }
            return (
                <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginRight: 50, flex: 1 }}>
                        <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B' }}>
                            Calculate and view the monthly mortgage for an apartment.
                        </p>

                        <div style={{ marginTop: 32, }}>
                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Monthly Investment
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", }} >
                                    <input value={month} onChange={handleMonthChange} type="text" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%" }}></input>
                                    <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>₹</p>
                                </div>
                                <Slider style={{ marginLeft: 16, width: "100%" }} aria-label="Volume" value={sliderMonth} onChange={handleSliderMonth} />
                            </div>
                        </div>
                        <div style={{ marginTop: 32, }}>
                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B' }}>
                                Time Period
                            </p>
                            <div style={{ display: 'flex', }}>
                                <div style={{ border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", }} >
                                    <input type="number" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%" }}></input>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 32, }}>
                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B' }}>
                                Annual Return
                            </p>
                            <div style={{ display: 'flex', }}>
                                <div style={{ border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", }} >
                                    <input type="number" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%" }}></input>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: 24, height: 12, background: '#1ECF9A', borderRadius: 40 }}></div>
                                    <p style={{ marginBottom: 3, marginLeft: 10, fontFamily: 'Mulish', fontSize: 16, color: "#161A1B", fontWeight: 400, lineHeight: "20.08px" }}>
                                        Lorem Ipsum
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 13 }}>
                                    <div style={{ width: 24, height: 12, background: '#1ECF9A', borderRadius: 40 }}></div>
                                    <p style={{ marginBottom: 3, marginLeft: 10, fontFamily: 'Mulish', fontSize: 16, color: "#161A1B", fontWeight: 400, lineHeight: "20.08px" }}>
                                        Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ width: 180, height: 180, border: "40px solid #1ECF9A", borderRadius: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <p style={{ fontFamily: 'Mulish', fontSize: 32, color: "#00D09C", fontWeight: 700, lineHeight: "40.16px" }}>
                                        1020
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: 16, color: "#00D09C", fontWeight: 400, lineHeight: "20.08px" }}>
                                        per month
                                    </p>
                                </div>
                            </div>
                            <p style={{ marginTop: 30, fontFamily: 'Mulish', fontSize: 24, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: "30.12px" }}>
                                Total Loan Amount
                            </p>
                            <p style={{ marginTop: 8, fontFamily: 'Mulish', fontSize: 32, color: "#161A1B", fontWeight: 700, lineHeight: "40.16px" }}>
                                ₹306,285
                            </p>
                            <p style={{ marginTop: 32, fontFamily: 'Mulish', fontSize: 24, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: "30.12px" }}>
                                Payment Breakdown
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div style={{ margin: isTab ? "88px 7.2% 0px" : "133px 7.2% 0px", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)', padding: "40px 4.3% 82px 9.2%", }}>
                {tabs()}
                {tabContent()}

            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{ margin: "120px 14.4% 108px 14.4%", display:'flex', justifyContent:'space-between'}}>
                <div style={{flex:1}}>
                    <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:600, fontSize:'24px', lineHeight:'30px'}}>
                        SIP Calculator- Systematic Investment Plan Calculator
                    </div>
                    <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'16px', lineHeight:'26px', paddingTop:'16px', color:'rgba(22, 26, 27, 0.6)'}}>
                        Investors may think that SIPs and mutual funds are identical. However, Systematic Investment Plan or SIP is the method of investing a fixed sum of money in mutual funds at regular intervals. SIPs generally allows investing invest weekly, quarterly, or monthly. 
                    </div>
                    <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:600, fontSize:'24px', lineHeight:'30px', paddingTop:'24px'}}>
                        What is SIP Calculator?
                    </div>
                    <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'16px', lineHeight:'26px', paddingTop:'16px', color:'rgba(22, 26, 27, 0.6)'}}>
                        An SIP calculator is a tool that assists in determining the returns on mutual fund investments made through SIP. These have become one of the most popular investment options for millennials lately.  The calculators are intended to provide investors an estimate on their mutual fund investments. They do not clarify the exit load and expense ratio (if any), rather it calculates the wealth gain and expected returns for your monthly SIP investment.
                    </div>
                </div>
                <div style={{flex:1, paddingLeft:'2%', alignSelf:'center'}}>
                    <img src={ToolsImage} style={{width:'100%', height:'auto'}}/>
                </div>
            </div>
        )
    }


    const section2Mobile = () => {
        return (
            <div style={{ margin: "48px 6.4% 48px 6.4%", display:'flex', flexDirection:'column'}}>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:600, fontSize:isMobile?'20px':'24px', lineHeight:'30px'}}>
                    SIP Calculator- Systematic Investment Plan Calculator
                </div>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:isMobile?'12px':'16px', lineHeight:'26px', paddingTop:'16px', color:'rgba(22, 26, 27, 0.6)'}}>
                    Investors may think that SIPs and mutual funds are identical. However, Systematic Investment Plan or SIP is the method of investing a fixed sum of money in mutual funds at regular intervals. SIPs generally allows investing invest weekly, quarterly, or monthly. 
                </div>
                <div style={{flex:1, paddingTop:'24px'}}>
                    <img src={ToolsImage} style={{width:'100%', height:'auto'}}/>
                </div>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:600, fontSize:isMobile?'20px':'24px', lineHeight:'30px', paddingTop:'24px'}}>
                    What is SIP Calculator?
                </div>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:isMobile?'12px':'16px', lineHeight:'26px', paddingTop:'16px', color:'rgba(22, 26, 27, 0.6)'}}>
                    An SIP calculator is a tool that assists in determining the returns on mutual fund investments made through SIP. These have become one of the most popular investment options for millennials lately.  The calculators are intended to provide investors an estimate on their mutual fund investments. They do not clarify the exit load and expense ratio (if any), rather it calculates the wealth gain and expected returns for your monthly SIP investment.
                </div>
                
            </div>
        )
    }

    return (
        <div>
            {section1()}
            {!isMobile && section2()}
            {isMobile && section2Mobile()}
        </div>
    )
}
