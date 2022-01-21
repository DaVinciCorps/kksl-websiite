import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from '@mui/material/Slider';
import ToolsImage from '../images/toolsImage.png';
import { PieChart } from 'react-minimal-pie-chart';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Expand from 'react-expand-animated';


const useStyles = makeStyles({
    brokerageDetail: {
        ["@media(max-width: 1180px)"]: {
            marginRight: 60
        }
    }
})

export default function Tools() {
    const classes = useStyles();
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
    const [radioValue, setRadioValue] = useState("Buy");
    const [monthly, setMonthly] = useState(0);
    const [totalAmt, setTotalAmt] = useState(0);
    const [shares, setShares] = useState(1);
    const [price, setPrice] = useState(0);
    const [data, setData] = useState({
        principal: 1,
        amount: 1,
    });
    const [show, setShow] = useState(true);
    const [breakdown,setBreakdown] = useState({
        charges: 0,
        brokerage: 0,
        stt: 0,
        exchange: 0,
        sebi: 0,
        gst: 0,
        stamp: 0
    });
    const [total,setTotal] = useState({
        totalOrder: 0,
        totalCharge: 0,
        netVal: 0,
    })

    useEffect(() => {
        if (month && time && annual && time != 0 && annual != 0) {
            calculateSIP();
        }
    }, [month, time, annual])
    useEffect(()=>{
        calculateBrokerage();
    },[shares,price, radioValue])
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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

    const calculateBrokerage=()=>{
        if(shares == 0 || price==0){
            return;
        }
        var sh="";
        var pr="";
        var arr = shares.split(",");
        arr.map(i=>{sh+=i});
        arr = price.split(",");
        arr.map(i=>{pr+=i});
        sh = parseInt(sh);
        pr = parseInt(pr);
        const tot = sh*pr;
        console.log(sh,pr);
        if(radioValue=="Intraday"){
            var bro = tot*0.01/100;
            var stt = tot*0.025/100;
            var exchange = tot*0.00345/100;
            var sebi = tot*0.0001/100;
            var stamp = tot*0.003/100;
            var gst = 18*(stt+exchange+bro)/100;
            setBreakdown({
                charges: bro + stt + exchange + sebi + stamp + gst,
                brokerage: bro,
                stt: stt,
                exchange: exchange,
                sebi: sebi,
                gst: gst,
                stamp: stamp
            });
            setTotal({
                totalOrder: tot,
                totalCharge: bro + stt + exchange + sebi + stamp + gst,
                netVal: tot + bro + stt + exchange + sebi + stamp + gst,
            })
        }
        else if(radioValue=="Buy"){
            var bro = tot*0.1/100;
            var stt = tot*0.1/100;
            var exchange = tot*0.00345/100;
            var sebi = tot*0.0001/100;
            var stamp = tot*0.015/100;
            var gst = 18*(stt+exchange+bro)/100;
            setBreakdown({
                charges: bro + stt + exchange + sebi + stamp + gst,
                brokerage: bro,
                stt: stt,
                exchange: exchange,
                sebi: sebi,
                gst: gst,
                stamp: stamp
            });
            setTotal({
                totalOrder: tot,
                totalCharge: bro + stt + exchange + sebi + stamp + gst,
                netVal: tot + bro + stt + exchange + sebi + stamp + gst,
            })
        }
        else if(radioValue=="Sell"){
            var bro = tot*0.1/100;
            var stt = tot*0.1/100;
            var exchange = tot*0.00345/100;
            var sebi = tot*0.0001/100;
            var stamp = tot*0/100;
            var gst = 18*(stt+exchange+bro)/100;
            setBreakdown({
                charges: bro + stt + exchange + sebi + stamp + gst,
                brokerage: bro,
                stt: stt,
                exchange: exchange,
                sebi: sebi,
                gst: gst,
                stamp: stamp
            });
            setTotal({
                totalOrder: tot,
                totalCharge: bro + stt + exchange + sebi + stamp + gst,
                netVal: tot + bro + stt + exchange + sebi + stamp + gst,
            })
        }
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

        const sipCalculator = () => {

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
                                <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", minWidth: isSmall ? "240px" : isMobile ? 300 : "" }} >
                                    <input value={month} onChange={handleMonthChange} type="text" style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%", }}></input>
                                    <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>₹</p>
                                </div>
                                <div style={{ margin: 0, flex: 1, marginLeft: isMobile ? 10 : 16, minWidth: isSmall ? "" : isMobile ? 240 : "" }}>
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
                                <div style={{ display: 'flex', flex: 1, border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", minWidth: isSmall ? "" : isMobile ? 300 : "" }} >
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
                                <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", minWidth: isSmall ? "240px" : isMobile ? 300 : "" }} >
                                    <input value={annual} type="number" onWheel={(e) => e.target.blur()} onChange={handleAnnualChange} style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%", }}></input>
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
                                ₹ {numberWithCommas(parseInt(totalAmt))}
                            </p>
                            <p style={{ marginTop: isMobile ? 24 : 32, fontFamily: 'Mulish', fontSize: isMobile ? 16 : 24, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "20.08px" : "30.12px" }}>
                                Payment Breakdown
                            </p>
                            <div style={{ display: 'flex', marginTop: isMobile ? 8 : 12, justifyContent: 'flex-start', flexDirection: 'column', width: "72%" }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: isMobile ? 6 : 12 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Invested Amount
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {numberWithCommas(data.principal)}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Est. Returns
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {numberWithCommas(parseInt(data.amount - data.principal))}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgba(22, 26, 27, 0.6)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        Invested Amount
                                    </p>
                                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 18, color: "rgb(22, 26, 27)", fontWeight: 600, lineHeight: isMobile ? "26.08px" : "20.12px" }}>
                                        ₹ {numberWithCommas(parseInt(data.amount))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        const brokerageCalc = () => {

            const handleRadio = (e) => {
                console.log(e.target.value);
                setRadioValue(e.target.value);
            }

            const handleSharesChange = (e) => {
                const value = String(e.target.value);

                if (value == "") {
                    setShares("");
                }
                if (value) {
                    const formattedValue = (Number(value.replace(/\D/g, '')) || '').toLocaleString();
                    setShares(formattedValue);

                }
                return null;
            }

            const handlePriceChange = (e) => {
                const value = String(e.target.value);

                if (value == "") {
                    setPrice("");
                }
                if (value) {
                    const formattedValue = (Number(value.replace(/\D/g, '')) || '').toLocaleString();
                    setPrice(formattedValue);

                }
                return null;
            }

            return (
                <div style={{ marginTop: 42, }}>
                    <div style={{ display: 'flex', }}>
                        <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input style={{ width: 24, height: 24, margin: 0, cursor: 'pointer' }} type="radio" id="Buy" value={"Buy"} name={"radio"} onClick={handleRadio} checked={radioValue == "Buy"} />
                            <label style={{ marginLeft: 8, fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "15.06px" : "20.08px", fontWeight: 600, color: '#161A1B', fontFamily: "Mulish", cursor: 'pointer' }} for={"Buy"} >Equity Delivery- Buy</label>
                        </div>
                        <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input style={{ width: 24, height: 24, margin: 0, cursor: 'pointer' }} type="radio" id="Sell" value={"Sell"} name={"radio"} onClick={handleRadio} />
                            <label style={{ marginLeft: 8, fontSize: isMobile ? 12 : 16, cursor: 'pointer', lineHeight: isMobile ? "15.06px" : "20.08px", fontWeight: 600, color: '#161A1B', fontFamily: "Mulish" }} for={"Sell"}>Equity Delivery- Sell</label>
                        </div>
                        <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input style={{ width: 24, height: 24, margin: 0, cursor: 'pointer' }} type="radio" id="Intraday" value={"Intraday"} name={"radio"} onClick={handleRadio} />
                            <label style={{ marginLeft: 8, fontSize: isMobile ? 12 : 16, cursor: 'pointer', lineHeight: isMobile ? "15.06px" : "20.08px", fontWeight: 600, color: '#161A1B', fontFamily: "Mulish" }} for={"Intraday"}>Intraday</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ marginTop: 80, flex: 1, marginRight: 30, }}>
                            <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.57px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Shares to Buy NSE
                            </p>
                            <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", minWidth: isSmall ? "240px" : isMobile ? 300 : "", maxWidth: 319, minWidth: 319 }} >
                                <input value={shares} type="text" onChange={handleSharesChange} style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%", }}></input>
                            </div>
                            <p style={{ marginTop: 32, fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.57px" : "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 600 }}>
                                Price
                            </p>
                            <div style={{ flex: 1, display: 'flex', border: "1px solid #161A1B", borderRadius: 8, width: "100%", marginTop: 6, padding: "14px 20px", minWidth: isSmall ? "240px" : isMobile ? 300 : "", maxWidth: 319, minWidth: 319 }} >
                                <input value={price} type="text" onChange={handlePriceChange} style={{ border: 'none', fontSize: 16, lineHeight: "20.08px", color: "#161A1B", outline: 'none', fontFamily: 'Mulish', width: "100%", }}></input>
                                <p style={{ marginLeft: 30, fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 400 }}>₹</p>
                            </div>
                        </div>
                        <div className={classes.brokerageDetail} style={{ flex: 1, marginTop: 30, backgroundColor: "#E5E5E5", padding: "32px 58px 75px 58px", minWidth: 442, }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ fontSize: 18, lineHeight: "22.59px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 600 }}>Total Order Value</p>
                                    <p style={{ fontSize: 24, lineHeight: "30px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 700, marginTop: 15 }}> ₹{numberWithCommas(parseInt(total.totalOrder))}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 18, lineHeight: "22.59px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 600 }}>Total Charges</p>
                                    <p style={{ fontSize: 24, lineHeight: "30px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 700, marginTop: 15 }}> ₹{numberWithCommas(parseInt(total.totalCharge))}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 18, lineHeight: "22.59px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 600 }}>Net Value</p>
                                    <p style={{ fontSize: 24, lineHeight: "30px", fontFamily: 'Mulish', color: '#161A1B', fontWeight: 700, marginTop: 15 }}> ₹{numberWithCommas(parseInt(total.netVal))}</p>
                                </div>
                            </div>
                            <div style={{ border: "1px solid rgba(0, 0, 0, 0.3)", margin: "32px -34px 0px -34px" }} />
                            <div style={{ marginTop: 32, }}>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <p style={{ fontSize: 24, lineHeight: "30px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 700 }}>
                                        Charges Breakup
                                    </p>
                                    {!show &&
                                        <div style={{ cursor: 'pointer', marginLeft: 8 }} onClick={() => { setShow(!show) }}>
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    }
                                    {show &&
                                        <div style={{ cursor: 'pointer', marginLeft: 8 }} onClick={() => { setShow(!show) }}>
                                            <KeyboardArrowUpIcon />
                                        </div>
                                    }
                                </div>
                                <Expand open={show}>
                                    <div style={{ marginTop: 8 }}>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                Charges
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.charges))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                Brokerage
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.brokerage))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                STT Charges
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.stt))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                Exchange Txn Charges (0.00345%)
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.exchange))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                SEBI Charges(0.0001%)
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.sebi))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                GST(18%)
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.gst))}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 16, }}>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                Stamp Duty ({radioValue=="Buy"? "0.015":radioValue=="Sell"?"0":"0.003"})%
                                            </p>
                                            <p style={{ fontSize: 16, lineHeight: "20.08px", fontFamily: 'Mulish', color: 'rgba(22, 26, 27, 0.6)', fontWeight: 500 }}>
                                                ₹{numberWithCommas(parseInt(breakdown.stamp))}
                                            </p>
                                        </div>
                                    </div>
                                </Expand>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }


        return (
            <div style={{ margin: isMobile ? "24px 6.4% 0px" : isTab ? "88px 7.2% 0px" : "133px 7.2% 0px", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)', padding: isSelected == 0 ? isMobile ? "24px 16px" : "40px 4.3% 82px 9.2%" : isSelected == 2 ? "40px 0px 0px 60px" : isMobile ? "24px 16px" : "40px 4.3% 82px 9.2%", borderRadius: isMobile ? 15 : 0 }}>
                {tabs()}
                {isSelected == 0 && sipCalculator()}
                {isSelected == 1 && sipCalculator()}
                {isSelected == 2 && brokerageCalc()}
            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{ margin: "120px 14.4% 108px 14.4%", display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: isMobile ? 0 : 50 }}>
                    <div style={{display:isSelected===0?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px' }}>
                        SIP Calculator- Systematic Investment Plan Calculator
                    </div>
                    <div style={{display:isSelected===1?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px' }}>
                    What is a Margin Calculator?
                    </div>
                    <div style={{display:isSelected===2?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px' }}>
                    Why is a Brokerage Calculator important? 
                    </div>


                    <div style={{ display:isSelected===0?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        Investors may think that SIPs and mutual funds are identical. However, Systematic Investment Plan or SIP is the method of investing a fixed sum of money in mutual funds at regular intervals. SIPs generally allows investing invest weekly, quarterly, or monthly.
                    </div>
                    <div style={{ display:isSelected===1?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        Margin calculator assists potential investors in determining the margin the investors may get for delivery and for intraday based on the order details. The margin at hand is less in case of highly volatile stocks and vice versa. In other words, the calculator also enables the potential investors to input their Equity stocks position and understand the margin requirement.
                    </div>
                    <div style={{ display:isSelected===2?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                    One of the most important and predominant charges while trading in securities is the brokerage fee that a trader needs to pay to the concerned broker. Generally, it is the percentage of the total trade value, which the brokers levy over and above the original value and subtract it from the portfolio. Such monetary charge could be significant depending on the scale of the trade. Thus, a brokerage calculator is widely used to expedite the cost analysis.
                    </div>


                    <div style={{ display:isSelected===0?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px', paddingTop: '24px' }}>
                        What is SIP Calculator?
                    </div>
                    <div style={{ display:isSelected===2?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '30px', paddingTop: '24px' }}>
                    What is a Brokerage Calculator?
                    </div>
                    
                    <div style={{ display:isSelected===0?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        An SIP calculator is a tool that assists in determining the returns on mutual fund investments made through SIP. These have become one of the most popular investment options for millennials lately.  The calculators are intended to provide investors an estimate on their mutual fund investments. They do not clarify the exit load and expense ratio (if any), rather it calculates the wealth gain and expected returns for your monthly SIP investment.
                    </div>
                    <div style={{ display:isSelected===1?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        Margin calculators serve as a good way to estimate the amount involved in purchasing securities, thus helping in outlining the financial map. The calculations also help in understanding if the amount in margin amount is sufficient enough to go ahead with the buying of a margin.
                    </div>
                    <div style={{ display:isSelected===2?'':'none' ,fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '16px', color: 'rgba(22, 26, 27, 0.6)' }}>
                        A tool that is supplied to traders by brokers and other investment platforms to facilitate brokerage calculation. It not only calculates the brokerage but also stamp duty charges, transaction fees, SEBI turnover fee, GST, and Securities Transaction Tax (STT). Such a calculator instantaneously offers precise information about such costs, thus facilitating speedy and timely trading.
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
