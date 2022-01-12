import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from '@mui/material/Slider';
import ToolsImage from '../images/toolsImage.png';
import { PieChart } from 'react-minimal-pie-chart';


export default function Tools() {

    const isMobile = useMediaQuery('(max-width:850px)');
    const isSmall = useMediaQuery('(max-width:450px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const [isSelected, setSelected] = useState(0);
    const [month, setMonth] = useState("500");
    const [time, setTime] = useState(1);
    const [annual, setAnnual] = useState(1);
    const [sliderMonth, setSliderMonth] = useState(0.5);
    const [sliderTime, setSliderTime] = useState(2);
    const [sliderAnnual, setSliderAnnual] = useState(2);
    const [radioValue, setRadioValue] = useState("Interest");
    const [monthly, setMonthly] = useState(0);
    const [totalAmt, setTotalAmt] = useState(0);
    const [data, setData] = useState({
        principal: 1,
        amount: 1,
    });

    useEffect(() => {
        if (month && time && annual && time != 0 && annual != 0) {
            calculateSIP();
        }
    }, [month, time, annual])


    const calculateSIP = () => {
        if (!time || !month || !annual || time == 0 || annual == 0 || time < 1 || annual < 1) {
            return;
        }
        var arr = month.split(',');
        var val = "";
        arr.map((i) => { val += i });
        val = parseInt(val);
        if (val < 500) {
            return;
        }
        var time1 = parseInt(time);
        var annual1 = parseInt(annual);
        var rate = (annual1 / 100) / 12;
        var amount = val * (Math.pow(1 + rate, time1 * 12) - 1) * (1 + rate) / rate;
        setTotalAmt(amount);
        setData({
            principal: val * 12 * time1,
            amount: amount
        })
        console.log(amount)
    }

    const section1 = () => {


        const handleSelect = (e) => {
            setSelected(e);
        }

        const tabs = () => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', margin: isMobile ? "0px 54px" : '' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: isMobile ? 16 : 30, }}>
                        <p onClick={() => { handleSelect(0) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: isMobile ? 14 : 18, lineHeight: isMobile ? "17.57px" : "22.59px", fontWeight: isSelected == 0 ? 'bold' : 'normal', color: isSelected == 0 ? '#0953AA' : "#042349", padding: isMobile ? "0px 8px" : "0px 12px" }}>
                            {isMobile ? "SIP" : "SIP Calculator"}
                        </p>
                        {isSelected == 0 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: isMobile ? 4 : 8 }} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: isMobile ? 16 : 30, }}>
                        <p onClick={() => { handleSelect(1) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: isMobile ? 14 : 18, lineHeight: isMobile ? "17.57px" : "22.59px", fontWeight: isSelected == 1 ? 'bold' : 'normal', color: isSelected == 1 ? '#0953AA' : "#042349", padding: isMobile ? "0px 8px" : "0px 12px" }}>
                            {isMobile ? "Margin" : "Margin Calculator"}
                        </p>
                        {isSelected == 1 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: isMobile ? 4 : 8 }} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: isMobile ? 0 : 40, }}>
                        <p onClick={() => { handleSelect(2) }} style={{ cursor: 'pointer', fontFamily: "Mulish", fontSize: isMobile ? 14 : 18, lineHeight: isMobile ? "17.57px" : "22.59px", fontWeight: isSelected == 2 ? 'bold' : 'normal', color: isSelected == 2 ? '#0953AA' : "#042349", padding: isMobile ? "0px 8px" : "0px 12px" }}>
                            {isMobile ? "Brokerage" : "Brokerage Calculator"}
                        </p>
                        {isSelected == 2 && <div style={{ height: 4, backgroundColor: "#0953AA", width: "100%", marginTop: isMobile ? 4 : 8 }} />}
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
                    setMonthly(parseInt(val));
                    setSliderMonth(parseInt(parseInt(val) / 1000));
                }
                return null;
            };
            const handleSliderMonth = (event, value) => {
                setSliderMonth(value);
                if (value < 0.5) {
                    value = 0.5;
                }
                const x = {
                    target: {
                        value: value * 1000,
                    }
                }
                handleMonthChange(x);
            }

            const handleRadio = (e) => {
                console.log(e.target.value);
                setRadioValue(e.target.value);
            }

            const handleTimeChange = (e) => {
                const value = (e.target.value);
                if (!value) {
                    setTime("");
                    setSliderTime(0);
                }
                else {
                    setTime(value);
                    console.log(value);
                    setSliderTime(parseInt(value * 2));
                }

            }

            const handleSliderTime = (event, value) => {
                if (value < 1) {
                    return;
                }
                setSliderTime(value);
                const x = {
                    target: {
                        value: value / 2,
                    }
                }
                handleTimeChange(x);
            }

            const handleAnnualChange = (e) => {
                var value = (e.target.value);
                if (value > 100) {
                    value = 100;
                }
                if (!value) {
                    setAnnual("");
                    setSliderAnnual(0);
                }
                else {
                    setAnnual(value);
                    console.log(value);
                    setSliderAnnual(parseInt(value * 2));
                }
            };
            const handleSliderAnnual = (event, value) => {
                console.log({ value });
                if (value < 1) {
                    return;
                }
                setSliderAnnual(value);
                const x = {
                    target: {
                        value: value / 2,
                    }
                }
                handleAnnualChange(x);
            }

            const chart = () => {
                const data1 = [
                    {
                        title: 'Return',
                        value: parseInt(data.amount),
                        color: '#2584F4'
                    },
                    {
                        title: "Investment",
                        value: parseInt(data.principal),
                        color: "#1ECF9A"
                    },
                ]

                return (
                    <div>

                        <div style={{ WebkitTransform: "rotate(-90deg)", width: 'min-content', height: 'min-content', marginTop: "0px" }}>

                            <PieChart
                                style={{ width: 260, height: 260 }}
                                lineWidth={40}
                                data={data1}
                            />
                        </div>
                    </div>
                )
            }

            return (
                <div style={{ marginTop: isMobile ? 24 : 48, display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '', }}>
                    <div style={{ marginRight: isMobile ? 0 : 50, flex: 1 }}>
                        <p style={{ textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "16px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B' }}>
                            Calculate and view the monthly mortgage for an apartment.
                        </p>

                        <div style={{ marginTop: 32, }}>
                            <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.57px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Monthly Investment
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: isMobile ? 'wrap' : '' }}>
                                <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px",minWidth: isSmall ? "240px" : isMobile ? 300 : "" }} >
                                    <input value={month} onChange={handleMonthChange} type="text" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%",  }}></input>
                                    <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>₹</p>
                                </div>
                                <div style={{ margin: 0, flex: 1, marginLeft: isMobile ? 10 : 16, minWidth: isSmall?"": isMobile ? 240 : "" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            500
                                        </p>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            100,000
                                        </p>
                                    </div>
                                    <Slider style={{ marginLeft: 0, width: "100%" }} aria-label="Volume" value={sliderMonth} onChange={handleSliderMonth} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: isMobile ? 16 : 32, }}>
                            <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.57px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Time Period
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: isMobile ? 'wrap' : '' }}>
                                <div style={{ display: 'flex', flex: 1, border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px",minWidth: isSmall ? "" : isMobile ? 300 : "" }} >
                                    <input value={time} onChange={handleTimeChange} type="number" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%", }}></input>
                                    <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>Years</p>
                                </div>
                                <div style={{ margin: 0, flex: 1, marginLeft: isMobile ? 10 : 16, minWidth: isMobile ? 240 : "" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            1
                                        </p>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            50
                                        </p>
                                    </div>
                                    <Slider style={{ width: "100%" }} value={sliderTime} onChange={handleSliderTime} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: isMobile ? 16 : 32, }}>
                            <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.57px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Annual Return
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: isMobile ? 'wrap' : '' }}>
                                <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px",minWidth: isSmall ? "240px" : isMobile ? 300 : "" }} >
                                    <input value={annual} type="number" onChange={handleAnnualChange} style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%",}}></input>
                                    <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>%</p>
                                </div>
                                <div style={{ margin: 0, flex: 1, marginLeft: isMobile ? 10 : 16, minWidth: isMobile ? 240 : "" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            1
                                        </p>
                                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: "20.08px", }}>
                                            50
                                        </p>
                                    </div>
                                    <Slider style={{ width: "100%" }} aria-label="Volume" value={sliderAnnual} onChange={handleSliderAnnual} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: isMobile ? 16 : 64 }}>
                            <button onClick={calculateSIP} style={{ border: 'none', outline: "none", background: "#2584F4", width: isMobile ? "100%" : "53%", height: 48, fontWeight: 700, fontFamily: 'Mulish', color: "white", borderRadius: "8px", cursor: 'pointer', fontSize: 16, lineHeight: "20.08px" }}>
                                Calculate
                            </button>
                        </div>

                    </div>
                    <div style={{ flex: 1, marginTop: isMobile ? 36 : 0, }}>
                        <div style={{ display: 'flex', justifyContent: isMobile ? "center" : 'flex-end' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: 24, height: 12, background: '#1ECF9A', borderRadius: 40 }}></div>
                                    <p style={{ marginBottom: 3, marginLeft: 10, fontFamily: 'Mulish', fontSize: 16, color: "#161A1B", fontWeight: 400, lineHeight: "20.08px" }}>
                                        Investment
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 13 }}>
                                    <div style={{ width: 24, height: 12, background: '#2584F4', borderRadius: 40 }}></div>
                                    <p style={{ marginBottom: 3, marginLeft: 10, fontFamily: 'Mulish', fontSize: 16, color: "#161A1B", fontWeight: 400, lineHeight: "20.08px" }}>
                                        Return
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: isMobile ? 16 : 0 }}>
                            {chart()}
                            <p style={{ marginTop: isMobile ? 40 : 30, fontFamily: 'Mulish', fontSize: isMobile ? 16 : 24, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "20.08px" : "30.12px" }}>
                                Total Amount
                            </p>
                            <p style={{ marginTop: 8, fontFamily: 'Mulish', fontSize: isMobile ? 20 : 32, color: "#161A1B", fontWeight: 700, lineHeight: isMobile ? "25.1px" : "40.16px" }}>
                                ₹ {parseInt(totalAmt)}
                            </p>
                            <p style={{ marginTop: isMobile ? 24 : 32, fontFamily: 'Mulish', fontSize: isMobile ? 16 : 24, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "20.08px" : "30.12px" }}>
                                Payment Breakdown
                            </p>
                            <div style={{ display: 'flex', marginTop: isMobile ? 8 : 12, justifyContent: 'flex-start', flexDirection: 'column', width: "72%" }}>
                                {/* <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', }}>
                                    <input style={{ width: 24, height: 24, margin: 0 }} type="radio" id="Interest" value={"Interest"} name={"radio"} onClick={handleRadio} checked={radioValue == "Interest"} />
                                    <label style={{ marginLeft: 8, fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "15.06px" : "20.08px", fontWeight: 600, color: '#161A1B', fontFamily: "Mulish" }} for={"Interest"} >Interest</label>
                                </div>
                                <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', }}>
                                    <input style={{ width: 24, height: 24, margin: 0 }} type="radio" id="Principal" value={"Principal"} name={"radio"} onClick={handleRadio} />
                                    <label style={{ marginLeft: 8, fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "15.06px" : "20.08px", fontWeight: 600, color: '#161A1B', fontFamily: "Mulish" }} for={"Principal"}>Principal</label>
                                </div> */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: isMobile ? 6 : 12 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Invested Amount
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {data.principal}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Est. Returns
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {parseInt(data.amount - data.principal)}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Invested Amount
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {parseInt(data.amount)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div style={{ margin: isMobile ? "24px 6.4% 0px" : isTab ? "88px 7.2% 0px" : "133px 7.2% 0px", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)', padding: isMobile ? "24px 16px" : "40px 4.3% 82px 9.2%", borderRadius: isMobile ? 15 : 0 }}>
                {tabs()}
                {tabContent()}
            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{ margin: "120px 14.4% 108px 14.4%", display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: isMobile ? 0 : 50 }}>
                    <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px' }}>
                        SIP Calculator- Systematic Investment Plan Calculator
                    </div>
                    <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        Investors may think that SIPs and mutual funds are identical. However, Systematic Investment Plan or SIP is the method of investing a fixed sum of money in mutual funds at regular intervals. SIPs generally allows investing invest weekly, quarterly, or monthly.
                    </div>
                    <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px', paddingTop: '24px' }}>
                        What is SIP Calculator?
                    </div>
                    <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        An SIP calculator is a tool that assists in determining the returns on mutual fund investments made through SIP. These have become one of the most popular investment options for millennials lately.  The calculators are intended to provide investors an estimate on their mutual fund investments. They do not clarify the exit load and expense ratio (if any), rather it calculates the wealth gain and expected returns for your monthly SIP investment.
                    </div>
                </div>
                <div style={{ flex: 1, paddingLeft: '2%', alignSelf: 'center' }}>
                    <img src={ToolsImage} style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        )
    }


    const section2Mobile = () => {
        return (
            <div style={{ margin: "48px 6.4% 48px 6.4%", display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: isMobile ? '20px' : '24px', lineHeight: '30px' }}>
                    SIP Calculator- Systematic Investment Plan Calculator
                </div>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: isMobile ? '12px' : '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                    Investors may think that SIPs and mutual funds are identical. However, Systematic Investment Plan or SIP is the method of investing a fixed sum of money in mutual funds at regular intervals. SIPs generally allows investing invest weekly, quarterly, or monthly.
                </div>
                <div style={{ flex: 1, paddingTop: '24px' }}>
                    <img src={ToolsImage} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: isMobile ? '20px' : '24px', lineHeight: '30px', paddingTop: '24px' }}>
                    What is SIP Calculator?
                </div>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: isMobile ? '12px' : '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                    An SIP calculator is a tool that assists in determining the returns on mutual fund investments made through SIP. These have become one of the most popular investment options for millennials lately.  The calculators are intended to provide investors an estimate on their mutual fund investments. They do not clarify the exit load and expense ratio (if any), rather it calculates the wealth gain and expected returns for your monthly SIP investment.
                </div>

            </div>
        )
    }



    return (
        <div style={{ background: 'white' }}>
            {isMobile && <p style={{ marginTop: 40, fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: "24px", lineHeight: '30px', paddingTop: '16px', color: '#161A1B', textAlign: "center" }}>Calculate</p>}
            {section1()}
            {!isMobile && section2()}
            {isMobile && section2Mobile()}
        </div>
    )
}
