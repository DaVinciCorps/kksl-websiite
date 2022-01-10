import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery'
import RightArrow from "../images/Vector (11).png";
import LeftArrow from "../images/Vector (12).png";
import ArrowLeft from '../images/round right-arrow 2.png';
import ArrowRight from "../images/round right-arrow 1.png";
import { url } from "./Helper";
import axios from 'axios';

import { makeStyles } from '@mui/styles';





function AdminVideoList() {
    const history = useHistory();
    const scrollRef = useRef();
    const scrollRefBlog = useRef();
    const scrollRefExplainer = useRef();
    const isMobile = useMediaQuery('(max-width:850px)');
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(true);
    const [leftArrowActiveExplainer, setLeftArrowActiveExplainer] = useState(false);
    const [rightArrowActiveExplainer, setRightArrowActiveExplainer] = useState(true);
    const [explainerVideo, setExplainerVideo] = useState([]);
    const [tutorialVideo, setTutorialVideo] = useState([]);

    useEffect(() => {
        document.getElementById("tutorial").addEventListener("scroll", handleActiveArrows)
        document.getElementById("explainer").addEventListener("scroll", handleActiveArrowsExplainer)
    })

    useEffect(() => {
        axios({
            method: 'post',
            url: url + "video/category",
            data: {
                category: "Explainer"
            }
        })
            .then(res => {
                console.log(res.data);
                const arr = res.data;
                setExplainerVideo([...arr]);
            })
            .catch(err => {
                console.log(err);
            })
        axios({
            method: 'post',
            url: url + "video/category",
            data: {
                category: "Tutorial"
            }
        })
            .then(res => {
                console.log(res.data);
                const arr = res.data;
                setTutorialVideo([...arr]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    const handleActiveArrows = () => {
        const div = document.getElementById("tutorial");
        const clientWidth = div.clientWidth;
        const scrollLeft = div.scrollLeft;
        const scrollWidth = div.scrollWidth;
        if (scrollLeft == 0) {
            setLeftArrowActive(false);
        }
        else {
            setLeftArrowActive(true);
        }
        if (scrollWidth - scrollLeft == clientWidth) {
            setRightArrowActive(false);
        }
        else {
            setRightArrowActive(true);
        }
    }



    const handleActiveArrowsExplainer = () => {
        const div = document.getElementById("explainer");
        const clientWidth = div.clientWidth;
        const scrollLeft = div.scrollLeft;
        const scrollWidth = div.scrollWidth;
        if (scrollLeft == 0) {
            setLeftArrowActiveExplainer(false);
        }
        else {
            setLeftArrowActiveExplainer(true);
        }
        if (scrollWidth - scrollLeft == clientWidth) {
            setRightArrowActiveExplainer(false);
        }
        else {
            setRightArrowActiveExplainer(true);
        }
    }

    const leftInActive = () => {
        return (
            <img onClick={handleScroll_left} src={LeftArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer" }} />
        )
    }
    const leftActive = () => {
        return (
            <img onClick={handleScroll_left} src={RightArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightInActive = () => {
        return (
            <img onClick={handleScroll} src={LeftArrow} style={{ cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightActive = () => {
        return (
            <img onClick={handleScroll} src={RightArrow} style={{ cursor: "pointer" }} />
        )
    }


    const leftInActiveExplainer = () => {
        return (
            <img onClick={handleScroll_leftExplainer} src={LeftArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer" }} />
        )
    }
    const leftActiveExplainer = () => {
        return (
            <img onClick={handleScroll_leftExplainer} src={RightArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightInActiveExplainer = () => {
        return (
            <img onClick={handleScrollExplainer} src={LeftArrow} style={{ cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightActiveExplainer = () => {
        return (
            <img onClick={handleScrollExplainer} src={RightArrow} style={{ cursor: "pointer" }} />
        )
    }


    const handleScroll = () => {
        var dist;
        if (isMobile) {
            dist = 320;
        }
        else {
            dist = window.innerWidth;
        }
        sideScroll('right', 25, dist, 30);
    }
    const handleScroll_left = () => {
        var dist;
        if (isMobile) {
            dist = 320;
        }
        else {
            dist = 0.9 * window.innerWidth;
        }
        sideScroll('left', 25, dist, 30);
    }
    function sideScroll(direction, speed, distance, step) {
        var scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction == 'left') {
                scrollRef.current.scrollLeft -= step;
            } else {
                scrollRef.current.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    const handleScrollExplainer = () => {
        var dist;
        if (isMobile) {
            dist = 320;
        }
        else {
            dist = window.innerWidth;
        }
        sideScrollExplainer('right', 25, dist, 30);
    }
    const handleScroll_leftExplainer = () => {
        var dist;
        if (isMobile) {
            dist = 320;
        }
        else {
            dist = 0.9 * window.innerWidth;
        }
        sideScrollExplainer('left', 25, dist, 30);
    }
    function sideScrollExplainer(direction, speed, distance, step) {
        var scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction == 'left') {
                scrollRefExplainer.current.scrollLeft -= step;
            } else {
                scrollRefExplainer.current.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    const section3 = () => {

        const leftActiveExplainerWeb = () => {
            return (
                <img src={ArrowRight} onClick={handleScroll_leftExplainer} style={{ width: 72, height: 72, WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
            )
        }
        const leftInActiveExplainerWeb = () => {
            return (
                <img src={ArrowLeft} onClick={handleScroll_leftExplainer} style={{ width: 72, height: 72 }} />
            )
        }
        const rightActiveExplainerWeb = () => {
            return (
                <img src={ArrowRight} onClick={handleScrollExplainer} style={{ width: 72, height: 72 }} />
            )
        }
        const rightInActiveExplainerWeb = () => {
            return (
                <img src={ArrowLeft} onClick={handleScrollExplainer} style={{ width: 72, height: 72, WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
            )
        }
        const leftActiveWeb = () => {
            return (
                <img src={ArrowRight} onClick={handleScroll_left} style={{ width: 72, height: 72, WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
            )
        }
        const leftInActiveWeb = () => {
            return (
                <img src={ArrowLeft} onClick={handleScroll_left} style={{ width: 72, height: 72 }} />
            )
        }
        const rightActiveWeb = () => {
            return (
                <img src={ArrowRight} onClick={handleScroll} style={{ width: 72, height: 72 }} />
            )
        }
        const rightInActiveWeb = () => {
            return (
                <img src={ArrowLeft} onClick={handleScroll} style={{ width: 72, height: 72, WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
            )
        }

        const handleRedirect = (link) => {
            history.push('/admin/video/' + link);
        }

        return (
            <div style={{ paddingLeft: '7.2%', paddingRight: '7.2%', backgroundColor: isMobile ? "white" : '#F7F7F7', paddingTop: '56px', marginBottom: isMobile ? 0 : '160px', paddingBottom: '56px' }}>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: isMobile ? '20px' : '36px', lineHeight: '120%', }}>
                    Tutorial Videos
                </div>
                <div style={{ cursor: "pointer", display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', margin: "0px -3.5%", position: "relative", top: 150, height: 0 }}>
                    {leftArrowActive ? leftActiveWeb() : leftInActiveWeb()}
                    {rightArrowActive ? rightActiveWeb() : rightInActiveWeb()}
                </div>
                <div ref={scrollRef} id="tutorial" style={{ paddingTop: '32px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', overflow: 'auto', alignItems: isMobile ? 'center' : '' }}>
                    {tutorialVideo.map((tut) => (
                        <div style={{ display:isMobile?"": 'flex', flexDirection: isMobile ? 'row' : 'column', marginRight: '16px' }}>
                            <div style={{}}>
                                <iframe width={isMobile ? "320px" : "400"} height={isMobile ? "300px" : "300"} src={tut.youtube_link} style={{ borderRadius: 15, border: 'none' }} />
                            </div>
                            <div style={{ marginTop: '24px', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '20px', lineHeight: '32px', display: isMobile ? 'none' : '' }}>
                                {tut.title}
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button onClick={() => { handleRedirect(tut._id) }} style={{ width: 150, height: 48, background: '#2584F4', color: 'white', fontFamily: 'Mulish', fontSize: 16, lineHeight: "20.08px", border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div onScroll={handleActiveArrows} style={{ display: isMobile ? 'flex' : 'none', paddingTop: '32.88px', justifyContent: 'end', marginRight: isMobile ? "0px" : "14.4%", alignSelf: 'end' }}>
                    {leftArrowActive ? leftActive() : leftInActive()}
                    {rightArrowActive ? rightActive() : rightInActive()}
                </div>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: isMobile ? '20px' : '36px', lineHeight: '120%', paddingTop: '80px' }}>
                    Explainer Videos
                </div>
                <div style={{ cursor: "pointer", display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', margin: "0px -3.5%", position: "relative", top: 150, height: 0 }}>
                    {leftArrowActiveExplainer ? leftActiveExplainerWeb() : leftInActiveExplainerWeb()}
                    {rightArrowActiveExplainer ? rightActiveExplainerWeb() : rightInActiveExplainerWeb()}
                </div>
                <div ref={scrollRefExplainer} id='explainer' style={{ paddingTop: '32px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', overflow: 'auto', alignItems: isMobile ? 'center' : '' }}>
                    {explainerVideo.map((tut) => (
                        <div style={{ display: isMobile?"":'flex', flexDirection: isMobile ? 'row' : 'column', marginRight: '16px' }}>
                            <div style={{}}>
                                <iframe width={isMobile ? "320px" : "400"} height={isMobile ? "300px" : "300"} src={tut.youtube_link} style={{ borderRadius: 15, border: 'none' }} />
                            </div>
                            <div style={{ paddingTop: '24px', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '20px', lineHeight: '32px', display: isMobile ? 'none' : '' }}>
                                {tut.title}
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <button onClick={() => { handleRedirect(tut._id) }} style={{ width: 150, height: 48, background: '#2584F4', color: 'white', fontFamily: 'Mulish', fontSize: 16, lineHeight: "20.08px", border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div onScroll={handleActiveArrowsExplainer} style={{ display: isMobile ? 'flex' : 'none', paddingTop: '32.88px', justifyContent: 'end', marginRight: isMobile ? "0px" : "14.4%", alignSelf: 'end' }}>
                    {leftArrowActiveExplainer ? leftActiveExplainer() : leftInActiveExplainer()}
                    {rightArrowActiveExplainer ? rightActiveExplainer() : rightInActiveExplainer()}
                </div>
            </div>
        )
    }


    return (
        <div style={{ marginTop: isMobile ? 0 : 65 }}>
            <div style={{}}>
                {section3()}
            </div>
        </div>
    )
}

export default AdminVideoList
