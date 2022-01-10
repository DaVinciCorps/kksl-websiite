import React, { useState, useRef, useEffect } from 'react'
import RightArrow from "../images/Vector (11).png";
import LeftArrow from "../images/Vector (12).png";
import star from '../images/star.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import Pattern from "../images/Pattern.png";
import axios from 'axios';
import { url } from "./Helper";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminReviewList() {
    const scrollRef = useRef();
    const isMobile = useMediaQuery('(max-width:850px)');
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(true);
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    useEffect(() => {
        document.getElementById("cont").addEventListener("scroll", handleActiveArrows)
    })

    useEffect(() => {
        axios({
            method: 'get',
            url: url + "review/",
        })
            .then(res => {
                console.log(res);
                setReviews(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleActiveArrows = () => {
        const div = document.getElementById("cont");
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

    const section6 = () => {

        const handleScroll = () => {

            var dist;
            if (isMobile) {
                // dist = 0.96*window.innerWidth;
                dist = 360
            }
            else {
                // dist = window.innerWidth;
                dist = 565
            }
            sideScroll('right', 25, dist, 30);
        }
        const handleScroll_left = () => {
            var dist;
            if (isMobile) {
                dist = 360;
            }
            else {
                dist = 565
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
                handleActiveArrows();
            }, speed);

        }

        const handleRedirect = (link) => {
            history.push('/admin/review/' + link);
        }

        const feedbackCard = (data, index) => {
            return (
                <div id={`card-${index}`} style={{ zIndex: 100, backgroundColor: "#E7F1FE", boxShadow: "0px 20px 26px rgba(54, 53, 53, 0.3)", borderRadius: 15, margin: isMobile ? "96px 20px 40.88px 20px" : "138px 120px 78px 25px", minWidth: isMobile ? 327 : 420 }}>
                    <div style={{ margin: "0px 32px 32px 32px", }}>
                        <img src={data.image} style={{ position: "relative", borderRadius: "100%", bottom: 56, width: '112px', height: '112px' }} />
                        <div style={{ marginTop: -35, display: data.rating === 1 ? '' : 'none', }}>
                            <img src={star} ></img>
                        </div>
                        <div style={{ marginTop: -35, display: data.rating === 2 ? '' : 'none', }}>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} ></img>
                        </div>
                        <div style={{ marginTop: -35, display: data.rating === 3 ? '' : 'none', }}>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} ></img>
                        </div>
                        <div style={{ marginTop: -35, display: data.rating === 4 ? '' : 'none', }}>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} ></img>
                        </div>
                        <div style={{ marginTop: -35, display: data.rating >= 5 ? '' : 'none', }}>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} style={{ paddingRight: '12px' }}></img>
                            <img src={star} ></img>
                        </div>
                        <p style={{ fontFamily: 'Mulish', fontSize: 12, lineHeight: isMobile ? "20px" : "24px", color: 'black', marginTop: 24, maxWidth: isMobile ? 263 : 356, height: isMobile ? 80 : 73 }}>
                            {data.content.substring(0, 170)}{data.content.length > 170 ? "..." : ''}
                        </p>
                        <p style={{ fontFamily: 'Mulish', fontSize: 16, fontWeight: 700, lineHeight: isMobile ? "20.8px" : "24px", color: 'black', marginTop: 16 }} >
                            {data.name}
                        </p>
                        <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 14, fontWeight: 500, lineHeight: isMobile ? "15.06px" : "21px", color: 'black', marginTop: isMobile ? 4 : 8 }} >
                            {data.designation}
                        </p>
                        <div style={{ marginTop: 20 }}>
                            <button onClick={() => { handleRedirect(data._id) }} style={{ width: 150, height: 48, background: '#2584F4', color: 'white', fontFamily: 'Mulish', fontSize: 16, lineHeight: "20.08px", border: 'none', outline: 'none', borderRadius: 15, cursor: 'pointer' }}>
                                Edit
                            </button>
                        </div>
                    </div>

                </div>
            )
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

        return (
            <div style={{ marginTop: isMobile ? 0 : 0, backgroundColor: '#F7F7F7', }}>
                <div style={{ margin: isMobile ? "0px 6.2% 0px 6.2%" : "0px 0% 132px 7.2%", paddingTop: isMobile ? 40 : 88, }}>
                    {!isMobile && <img src={Pattern} style={{ position: 'absolute', marginTop: 447, left: 320 }} />}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontSize: isMobile ? 20 : 36, lineHeight: isMobile ? "25.1px" : "45.18px", fontWeight: 'bold', fontFamily: 'Mulish', color: "#3C4856" }}>
                            Edit Reviews
                        </p>
                        <p style={{ fontSize: isMobile ? 12 : 16, marginTop: isMobile ? 16 : 24, lineHeight: isMobile ? "20px" : "26px", fontWeight: 400, fontFamily: 'Mulish', color: "rgba(0, 0, 0, 0.7)", maxWidth: 592, textAlign: 'center' }}>
                            Click on the edit button to go to edit page.
                        </p>
                    </div>
                    <div ref={scrollRef} id="cont" style={{ display: 'flex', overflowX: 'auto', margin: isMobile ? '0px -6.2%' : 0 }}>
                        {reviews.map((i, index) =>
                            feedbackCard(i, index)
                        )}
                    </div>
                    <div onScroll={handleActiveArrows} style={{ display: 'flex', paddingBottom: isMobile ? "56.88px" : 132, justifyContent: 'end', marginRight: isMobile ? "0px" : "14.4%" }}>

                        {leftArrowActive ? leftActive() : leftInActive()}
                        {rightArrowActive ? rightActive() : rightInActive()}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ marginTop: isMobile ? 0 : 60 }}>
            {section6()}
        </div>
    )
}
