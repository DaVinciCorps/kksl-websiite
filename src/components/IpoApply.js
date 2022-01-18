import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import PolicyBazar from '../images/policybazar.png'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function IpoApply() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const { id } = useParams();

    const section1 = () => {
        return (
            <div style={{ display: 'flex', paddingRight: isMobile ? 0 : '9.8%', paddingLeft: isMobile ? 0 : '9.8%', justifyContent: 'space-between', marginTop: isMobile ? '' : is960 ? "88px" : '133px', flexDirection: isMobile ? 'column' : 'row' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '15px', borderSizing: 'border-box', border: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={PolicyBazar} alt="LOGO" />
                    </div>
                    <div style={{ paddingLeft: '16px' }}>
                        <div style={{ fontStyle: 'normal', fontFamily: 'Mulish', fontWeight: 'bold', fontSize: '24px', lineHeight: '120%' }}>
                            PolicyBazaar IPO
                        </div>
                        <div style={{ fontStyle: 'normal', fontFamily: 'Mulish', fontWeight: 'normal', fontSize: '16px', lineHeight: '26px', paddingTop: '4px', display: isMobile ? 'none' : '' }}>
                            PolicyBazaar
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: isMobile ? 'space-between' : '', paddingTop: isMobile ? '24px' : '' }}>
                    <div style={{ fontStyle: 'normal', fontFamily: 'Mulish', fontWeight: 'bold', fontSize: isMobile ? '18px' : '24px', lineHeight: '120%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            ₹ 14,100
                            <div style={{ fontStyle: 'normal', fontFamily: 'Mulish', fontWeight: 'normal', fontSize: isMobile ? '12px' : '16px', lineHeight: isMobile ? '15px' : '26px', paddingLeft: '16px' }}>/15 shares</div>
                        </div>
                        <div style={{ fontStyle: 'normal', fontFamily: 'Mulish', fontWeight: 'normal', fontSize: isMobile ? '12px' : '16px', lineHeight: isMobile ? '15px' : '26px', paddingTop: '4px', alignSelf: isMobile ? '' : 'end' }}>
                            Minimum Investment
                        </div>
                    </div>

                    <div style={{ alignSelf: isMobile ? '' : 'end', display: 'flex' }}>
                        <button style={{ marginTop: isMobile ? '' : '16px', width: 108, height: 42, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }} >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    const section2 = () => {
        return (
            <div style={{ marginTop: '80px', backgroundColor: '#E7F1FE', paddingRight: '9.8%', paddingLeft: '9.8%', paddingTop: '32px', }}>
                <div style={{ fontWeight: 'bold', fontStyle: 'normal', fontFamily: 'Mulish', fontSize: '24px', lineHeight: '120%' }}>
                    IPO Details
                </div>
                <div style={{ paddingTop: '48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                        <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                            Bidding Date
                        </div>
                        <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                            1 Nov, 2021 to 3 Nov, 2021
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                                Min. Investment
                            </div>
                            <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                                1 Nov, 2021 to 3 Nov, 2021
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                                Lot Size
                            </div>
                            <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                                15
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                                Price Range
                            </div>
                            <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                                15
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                                Issue Size
                            </div>
                            <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                                5625Cr
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px', paddingBottom: '40px', minWidth: 203 }}>
                            <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', lineHeight: '120%' }}>
                                IPO Doc
                            </div>
                            <div style={{ paddingTop: '8px', fontSize: '16px', fontWeight: 600, fontFamily: 'Mulish', fontStyle: 'normal', lineHeight: '120%' }}>
                                RHP PDF
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


    const section3 = () => {
        return (
            <div style={{ marginTop: isMobile ? '59px' : '80px', paddingLeft: isMobile ? 0 : '9.8%', paddingRight: isMobile ? 0 : '9.8%' }}>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: isMobile ? '20px' : '36px', lineHeight: '120%', }}>
                    About Company
                </div>
                <div style={{ paddingTop: '24px', maxWidth: '820px', fontSize: isMobile ? '12px' : '16px', lineHeight: isMobile ? '20px' : '26px', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'Mulish' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, at condimentum ullamcorper vitae erat sollicitudin magna. Quam diam amet, quis nisi egestas amet, lorem habitasse convallis. Elementum, viverra turpis scelerisque tempor, egestas cum. Consectetur ridiculus et sit in. Viverra nulla varius diam porta euismod metus est tellus. Cursus adipiscing sed vel adipiscing. Eu tempus felis odio ut diam sed. Faucibus sit eu quis orci, risus odio nec. Ut senectus imperdiet auctor cras ornare eros, massa malesuada consequat. Vitae integer non urna, lacus rutrum. Egestas tortor, sed enim ullamcorper arcu vivamus suspendisse vestibulum iaculis. Sed est praesent placerat volutpat volutpat lectus turpis est facilisis. Egestas sit luctus tellus, arcu vitae. Curabitur dolor mollis feugiat sit pellentesque ut.
                </div>
            </div>
        )
    }


    const section4 = () => {
        return (
            <div style={{ marginTop: isMobile ? '48px' : '80px', paddingLeft: isMobile ? 0 : '9.8%', paddingRight: isMobile ? 0 : '9.8%', paddingBottom: isMobile ? '48px' : '80px' }}>
                <div style={{ fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 'bold', fontSize: isMobile ? '20px' : '36px', lineHeight: '120%', }}>
                    Recommendations
                </div>
                <div style={{ paddingTop: '24px', maxWidth: '820px', fontSize: isMobile ? '12px' : '16px', lineHeight: isMobile ? '20px' : '26px', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'Mulish' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, at condimentum ullamcorper vitae erat sollicitudin magna. Quam diam amet, quis nisi egestas amet, lorem habitasse convallis. Elementum, viverra turpis scelerisque tempor, egestas cum. Consectetur ridiculus et sit in. Viverra nulla varius diam porta euismod metus est tellus. Cursus adipiscing sed vel adipiscing.
                    </p>
                    <p style={{ paddingTop: '24px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, at condimentum ullamcorper vitae erat sollicitudin magna. Quam diam amet, quis nisi egestas amet, lorem habitasse convallis. Elementum, viverra turpis scelerisque tempor, egestas cum. Consectetur ridiculus et sit in. Viverra nulla varius diam porta euismod metus est tellus. Cursus adipiscing sed vel adipiscing. Eu tempus felis odio ut diam sed. Faucibus sit eu quis orci, risus odio nec. Ut senectus imperdiet auctor cras ornare eros, massa malesuada consequat. Vitae integer non urna, lacus rutrum. Egestas tortor, sed enim ullamcorper arcu vivamus suspendisse vestibulum iaculis. Sed est praesent placerat volutpat volutpat lectus turpis est facilisis. Egestas sit luctus tellus, arcu vitae. Curabitur dolor mollis feugiat sit pellentesque ut.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div style={{ background: "white" }}>
            <div style={{ maxWidth: isMobile ? '600px' : '1440px', margin: 'auto', }}>
                <div style={{ background: "white", marginLeft: isMobile ? '6%' : isTab ? "7.4%" : '14.2%', marginRight: isMobile ? '6%' : isTab ? "7.4%" : '14.2%', paddingTop: isMobile ? "40px" : '88px', display: 'flex', flexDirection: 'column', marginBottom: isMobile ? '48px' : '160px' }}>
                    {section1()}
                    {section2()}
                    {section3()}
                    {section4()}
                </div>
            </div>
        </div>
    )
}

export default IpoApply
