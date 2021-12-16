import React, { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useHistory } from 'react-router';
import Associate from "../images/noto-v1_office-building.png";
import User from "../images/fa-solid_user.png";
import Security from "../images/security.png";

export default function Login() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:600px)');
    const loginData = [
        {
            img: User, 
            heading: "Client Login",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
        },
        {
            img: Associate,
            heading: "Backoffice Branch",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
        },
        {
            img: User,
            heading: "Backoffice Client",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
        },
        {
            img: Security,
            heading: "Remeshire",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
        },

    ]
    useEffect(() => {
        if (window.innerWidth > 600) {
            history.replace("/");
        }
    }, [])

    const loginCard = (data) => {
        return (
            <div style={{ width: 327, height: 150, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 12, marginBottom: 24, }}>
                <div style={{ display: 'flex', margin: 16, }}>
                    <img src={data.img} style={{ width: 42, height: 48 }} />
                    <div style={{ marginLeft: 16, }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 'bold' }}>
                            {data.heading}
                        </p>
                        <p style={{ marginTop: 4, color: "rgba(22, 26, 27, 0.6)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "18px", fontWeight: 400, maxWidth: 237 }}>
                            {data.text}
                        </p>
                        <button style={{ marginTop: 16, width: 136, height: 40, outline: 'none', border: '1px solid #2584F4', borderRadius: 8, color: "#2584F4", fontWeight: 700, fontSize: 16, backgroundColor: "inherit", cursor: 'pointer' }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ margin: "40px 6.2% 31px 6.2%", display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
            {loginCard(loginData[0])}
            {loginCard(loginData[2])}
            {loginCard(loginData[2])}
            {loginCard(loginData[3])}
        </div>
    )
}
