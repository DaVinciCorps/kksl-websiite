import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import MasterImage from '../images/BlogHome/master.png'
import Arrow from '../images/BlogHome/arrow.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import RightArrow from "../images/Vector (11).png";
import LeftArrow from "../images/Vector (12).png";
import ArrowLeft from '../images/round right-arrow 2.png';
import ArrowRight from "../images/round right-arrow 1.png";
import { url } from "./Helper";
import axios from 'axios';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    blog: {
        justifyContent: 'flex-end',
        ['@media(max-width: 1100px)']: {
            justifyContent: 'flex-start'
        },
    }
});




function BlogHome() {
    const classes = useStyles();
    const history = useHistory();
    const scrollRef = useRef();
    const scrollRefBlog = useRef();
    const scrollRefExplainer = useRef();
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const is1100 = useMediaQuery('(max-width:1100px)');
    const is1200 = useMediaQuery('(max-width:1200px)');
    const isLarge = useMediaQuery('(max-width:1440px)');
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(true);
    const [leftArrowActiveBlog, setLeftArrowActiveBlog] = useState(false);
    const [rightArrowActiveBlog, setRightArrowActiveBlog] = useState(true);
    const [leftArrowActiveExplainer, setLeftArrowActiveExplainer] = useState(false);
    const [rightArrowActiveExplainer, setRightArrowActiveExplainer] = useState(true);
    const [blogs, setBlogs] = useState([])
    const [explainerVideo, setExplainerVideo] = useState([]);
    const [tutorialVideo, setTutorialVideo] = useState([]);

    useEffect(() => {
        document.getElementById("tutorial").addEventListener("scroll", handleActiveArrows)
        document.getElementById("explainer").addEventListener("scroll", handleActiveArrowsExplainer)
        document.getElementById("blog").addEventListener("scroll", handleActiveArrowsBlog)
    })

    useEffect(() => {
        axios({
            method: 'get',
            url: url + "blogs/",
        })
            .then(res => {
                console.log(res.data);
                const arr = res.data;
                setBlogs([...arr]);
            })
            .catch(err => {
                console.log(err);
            })
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


    const handleActiveArrowsBlog = () => {
        const div = document.getElementById("blog");
        const clientWidth = div.clientWidth;
        const scrollLeft = div.scrollLeft;
        const scrollWidth = div.scrollWidth;
        if (scrollLeft == 0) {
            setLeftArrowActiveBlog(false);
        }
        else {
            setLeftArrowActiveBlog(true);
        }
        if (scrollWidth - scrollLeft == clientWidth) {
            setRightArrowActiveBlog(false);
        }
        else {
            setRightArrowActiveBlog(true);
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


    const leftInActiveBlog = () => {
        return (
            <img onClick={handleScroll_leftBlog} src={LeftArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer" }} />
        )
    }
    const leftActiveBlog = () => {
        return (
            <img onClick={handleScroll_leftBlog} src={RightArrow} style={{ marginRight: isMobile ? 32 : 40, cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightInActiveBlog = () => {
        return (
            <img onClick={handleScrollBlog} src={LeftArrow} style={{ cursor: "pointer", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }} />
        )
    }
    const rightActiveBlog = () => {
        return (
            <img onClick={handleScrollBlog} src={RightArrow} style={{ cursor: "pointer" }} />
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



    const handleScrollBlog = () => {
        var dist;
        if (isMobile) {
            dist = 347;
        }
        else {
            dist = 296;
        }
        sideScrollBlog('right', 25, dist, 30);
    }
    const handleScroll_leftBlog = () => {
        var dist;
        if (isMobile) {
            dist = 347;
        }
        else {
            dist = 296;
        }
        sideScrollBlog('left', 25, dist, 30);
    }
    function sideScrollBlog(direction, speed, distance, step) {
        var scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction == 'left') {
                scrollRefBlog.current.scrollLeft -= step;
            } else {
                scrollRefBlog.current.scrollLeft += step;
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



    const section1 = () => {
        return (
            <div style={{ marginTop: isMobile ? 0 : is960 ? "88px" : '133px', backgroundColor: '#F7F7F7', paddingLeft:is1200?"6.2%": '7.2%', paddingRight:is1200?"6.2%": '7.2%' }}>
                <div style={{ paddingTop: '56px', fontFamily: 'Mulish', fontSize: '36px', fontWeight: 'bold', fontStyle: 'normal', lineHeight: '120%', textAlign: isMobile || isLarge ? 'center' : '' }}>
                    Blogs
                </div>
                <div style={{ paddingTop: '40px', display: 'flex', justifyContent: 'space-between', paddingBottom: '56px',flexWrap:is1100?'wrap':"" }}>
                    <div style={{paddingRight: isLarge ? 0 : 16, display: isMobile ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', flex: isMobile?"" :is1100?1:"" }}>
                        <img src={MasterImage} style={{margin: 0,width:is1100?"": isLarge?"110%":"100%", marginRight: 0}} />
                        <div style={{ background: 'white', position: 'relative', top: '-135px', padding: 40, display: 'flex', flexDirection: 'column', maxWidth:is1100?"320px":isLarge?220: 320 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '32px' }}>
                                A Reader in here, is a Leader out there: The (r)Evolution of Market
                            </div>
                            <div style={{ paddingTop: '16px', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: 16, lineHeight: '26px' }}>
                                From an investor point of view, IPO gives a chance to buy shares of a company, directly from the company....
                            </div>
                            <div style={{ paddingTop: '32px' }}>
                                <button onClick={() => window.open('/blog/content')} style={{ width: isMobile ? 120 : '100%', color: "#FFFFFF", height: isMobile ? 44 : 56, borderRadius: 8, borderWidth: 2, fontFamily: 'Poppins', fontSize: isMobile ? 14 : 18, lineHeight: '27px', fontStyle: 'normal', fontWeight: 'normal', borderColor: "#2584F4", backgroundColor: "#2584F4", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: '11 24', cursor: 'pointer', border: "none", outline: 'none' }}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: isLarge ? "" : 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: is1100?624:"", marginLeft:'auto', marginRight: 'auto' }}>
                        <div className={classes.blog} ref={scrollRefBlog} id='blog' style={{ display: 'flex', flexWrap: isMobile ? '' : 'wrap', flexDirection: isMobile ? '' : 'row', alignItems: isMobile ? 'center' : '',  }}>
                            {blogs.slice(0, 4).map((i, index) =>
                                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: 296, marginBottom: isMobile?0:16, marginRight:isMobile?0:(index%2==0 || is1100)? 16:0 }}>
                                    <div style={{ flex: 1 }}>
                                        <img src={i.image} style={{ width: "100%", height: "auto", maxWidth: 296, }} />
                                    </div>
                                    <div style={{ padding: 16, paddingBottom: 0, fontFamily: 'Mulish', fontWeight: 'bold', fontStyle: 'normal', fontSize: '18px', lineHeight: '24px', height: "48px" }}>
                                        {i.title.substring(0, 40)}{i.title.length > 40 ? "..." : ""}
                                    </div>
                                    <div style={{ height: "60px", padding: 16, paddingBottom: 0, paddingTop: 8, fontFamily: 'Mulish', fontWeight: 'normal', fontStyle: 'normal', fontSize: '14px', lineHeight: '20px' }}>
                                        {i.content_para_1.substring(0, 90)}{i.content_para_1.length > 90 ? "..." : ""}
                                    </div>
                                    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '48px' }}>
                                        <div style={{ paddingLeft: 20, fontFamily: 'Mulish', fontSize: 12, fontStyle: 'normal', fontWeight: 'normal', bottom: 13 }}>
                                            {i.time_to_read_min} Min Read
                                        </div>
                                        <button onClick={() => window.open('/blog/' + i._id)} style={{ cursor: 'pointer', height: '48px', width: '48px', backgroundColor: '#2584F4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 0 }}>
                                            <img src={Arrow} />
                                        </button>
                                    </div>
                                </div>
                            )}


                        </div>

                        <div onScroll={handleActiveArrowsBlog} style={{ display: isMobile ? 'flex' : 'none', paddingTop: '32.88px', justifyContent: 'end', marginRight: isMobile ? "0px" : "14.4%", alignSelf: 'end' }}>
                            {leftArrowActiveBlog ? leftActiveBlog() : leftInActiveBlog()}
                            {rightArrowActiveBlog ? rightActiveBlog() : rightInActiveBlog()}
                        </div>

                        <div style={{ alignSelf: 'center', paddingTop: isMobile ? '26.88px' : 16, }}>
                            <button onClick={() => history.push('/blog/all')} style={{ width: isMobile ? 120 : 257, color: "#FFFFFF", height: isMobile ? 44 : 56, borderRadius: 8, borderWidth: 2, fontFamily: 'Poppins', fontSize: isMobile ? 14 : 18, lineHeight: '27px', fontStyle: 'normal', fontWeight: 'normal', borderColor: "#2584F4", backgroundColor: "#2584F4", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: '11 24', cursor: 'pointer', border: "none", outline: 'none' }}>
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const section1Mobile = () => {
        return (
            <div style={{ padding: "0px 6.4%", background: "#F7F7F7" }}>
                <div style={{ paddingTop: '40px', fontFamily: 'Mulish', fontSize: '24px', fontWeight: 'bold', fontStyle: 'normal', lineHeight: '26px', textAlign: 'center' }}>
                    Blogs
                </div>
                <div ref={scrollRefBlog} style={{ marginTop: 24, display: 'flex', overflow: 'auto' }} id="blog">
                    {blogs.slice(0, 4).map((i, index) =>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', minWidth: 327, marginRight: 24, }}>
                            <div style={{ flex: 1 }}>
                                <img src={i.image} style={{ width: "100%", height: "auto", maxWidth: 327, }} />
                            </div>
                            <div style={{ padding: 16, paddingBottom: 0, fontFamily: 'Mulish', fontWeight: 'bold', fontStyle: 'normal', fontSize: '18px', lineHeight: '24px', height: "48px" }}>
                                {i.title.substring(0, 40)}{i.title.length > 40 ? "..." : ""}
                            </div>
                            <div style={{ height: "60px", padding: 16, paddingBottom: 0, paddingTop: 8, fontFamily: 'Mulish', fontWeight: 'normal', fontStyle: 'normal', fontSize: '14px', lineHeight: '20px' }}>
                                {i.content_para_1.substring(0, 90)}{i.content_para_1.length > 90 ? "..." : ""}
                            </div>
                            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '48px' }}>
                                <div style={{ paddingLeft: 20, fontFamily: 'Mulish', fontSize: 12, fontStyle: 'normal', fontWeight: 'normal', bottom: 13 }}>
                                    {i.time_to_read_min} Min Read
                                </div>
                                <button onClick={() => window.open('/blog/' + i._id)} style={{ cursor: 'pointer', height: '48px', width: '48px', backgroundColor: '#2584F4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 0 }}>
                                    <img src={Arrow} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div onScroll={handleActiveArrowsBlog} style={{ display: isMobile ? 'flex' : 'none', paddingTop: '32.88px', justifyContent: 'end', marginRight: isMobile ? "0px" : "14.4%", alignSelf: 'end' }}>
                    {leftArrowActiveBlog ? leftActiveBlog() : leftInActiveBlog()}
                    {rightArrowActiveBlog ? rightActiveBlog() : rightInActiveBlog()}
                </div>
                <div style={{ display: 'flex',justifyContent: 'center', paddingTop: isMobile ? '26.88px' : 16,paddingBottom: 40 }}>
                    <button onClick={() => history.push('/blog/all')} style={{ width: isMobile ? 120 : 257, color: "#FFFFFF", height: isMobile ? 44 : 56, borderRadius: 8, borderWidth: 2, fontFamily: 'Poppins', fontSize: isMobile ? 14 : 18, lineHeight: '27px', fontStyle: 'normal', fontWeight: 'normal', borderColor: "#2584F4", backgroundColor: "#2584F4", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: '11 24', cursor: 'pointer', border: "none", outline: 'none' }}>
                        View All
                    </button>
                </div>
            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{ paddingLeft: '7.2%', paddingRight: '7.2%', paddingTop: '80px', display: 'flex', justifyContent: 'space-around', paddingBottom: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', paddingTop: '66px', flexDirection: 'column', alignItems: 'center', paddingBottom: '66px', paddingRight: '2%', paddingLeft: '2%' }}>
                    <div style={{ fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: isMobile ? '10px' : '18px', lineHeight: '32px', color: '#1ECF9A' }}>
                        Dynamic
                    </div>
                    <div style={{ paddingTop: 16, fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: isMobile ? 600 : 'bold', fontSize: isMobile ? '10px' : '32px', lineHeight: '32px' }}>
                        Scope
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(0, 14, 28, 0.2)' }} />
                <div style={{ display: 'flex', paddingTop: '66px', flexDirection: 'column', alignItems: 'center', paddingBottom: '66px', paddingLeft: '2%', paddingRight: '2%' }}>
                    <div style={{ fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: isMobile ? '10px' : '18px', lineHeight: '32px', color: '#1ECF9A' }}>
                        Utterly
                    </div>
                    <div style={{ paddingTop: 16, fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: isMobile ? 600 : 'bold', fontSize: isMobile ? '10px' : '32px', lineHeight: '32px' }}>
                        Research Driven
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(0, 14, 28, 0.2)' }} />
                <div style={{ display: 'flex', paddingTop: '66px', flexDirection: 'column', alignItems: 'center', paddingBottom: '66px', paddingLeft: '2%', paddingRight: '2%' }}>
                    <div style={{ fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: isMobile ? '10px' : '18px', lineHeight: '32px', color: '#1ECF9A' }}>
                        Unabridged
                    </div>
                    <div style={{ paddingTop: 16, fontStyle: 'Mulish', fontStyle: 'normal', fontWeight: isMobile ? 600 : 'bold', fontSize: isMobile ? '10px' : '32px', lineHeight: '32px' }}>
                        Insights
                    </div>
                </div>
            </div>
        )
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

        return (
            <div style={{ paddingLeft: '7.2%', paddingRight: '7.2%', backgroundColor: isMobile?"white":'#F7F7F7', paddingTop: '56px', marginBottom:isMobile?0: '160px', paddingBottom: '56px' }}>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: isMobile ? '20px' : '36px', lineHeight: '120%', }}>
                    Tutorial Videos
                </div>
                <div style={{ cursor: "pointer", display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', margin: "0px -3.5%", position: "relative", top: 150, height: 0 }}>
                    {leftArrowActive ? leftActiveWeb() : leftInActiveWeb()}
                    {rightArrowActive ? rightActiveWeb() : rightInActiveWeb()}
                </div>
                <div ref={scrollRef} id="tutorial" style={{ paddingTop: '32px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', overflow: 'auto', alignItems: isMobile ? 'center' : '' }}>
                    {tutorialVideo.map((tut) => (
                        <div style={{ display: 'flex', flexDirection: isMobile ? '' : 'column', marginRight: '16px' }}>
                            <div style={{}}>
                                <iframe width={isMobile ? "320px" : "400"} height={isMobile ? "300px" : "300"} src={tut.youtube_link} style={{ borderRadius: 15, border: 'none' }} />
                            </div>
                            <div style={{ marginTop: '24px', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '20px', lineHeight: '32px', display: isMobile ? 'none' : '' }}>{tut.title}</div>
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
                        <div style={{ display: 'flex', flexDirection: isMobile ? '' : 'column', marginRight: '16px' }}>
                            <div style={{}}>
                                <iframe width={isMobile ? "320px" : "400"} height={isMobile ? "300px" : "300"} src={tut.youtube_link} style={{ borderRadius: 15, border: 'none' }} />
                            </div>
                            <div style={{ paddingTop: '24px', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'normal', fontSize: '20px', lineHeight: '32px', display: isMobile ? 'none' : '' }}>{tut.title}</div>
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
        <div style={{}}>
            <div style={{}}>
                {!isMobile && section1()}
                {isMobile && section1Mobile()}
                {section2()}
                {section3()}
            </div>
        </div>
    )
}

export default BlogHome
