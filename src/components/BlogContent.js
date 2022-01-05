import React from 'react';
import MasterImage from '../images/BlogContent/master.png';
import Blog1 from '../images/BlogContent/Blog1.png';
import Blog2 from '../images/BlogContent/Blog2.png';
import Blog3 from '../images/BlogContent/Blog3.png';
import Blog4 from '../images/BlogContent/Blog4.png';
import Blog5 from '../images/BlogContent/Blog5.png';
import Blog6 from '../images/BlogContent/Blog6.png';
import Blog7 from '../images/BlogContent/Blog7.png';
import Blog8 from '../images/BlogContent/Blog8.png';
import { useHistory } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery'

function createData(image, heading, content, link){
    return {image, heading, content, link};
}

const BlogData = [
    createData(
        Blog1,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog2,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog3,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog4,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog5,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog6,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog7,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog8,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    )
]



const MobileViewBlogData = [
    createData(
        Blog1,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog2,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
]



function BlogHome() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isMac = useMediaQuery('(max-width:1170px)');

    const section1 = () => {
        return (
            <div style={{display:'flex',flex:1, flexDirection:'column', marginRight:'40px'}}>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold',paddingBottom: isMobile?'24px':'',fontSize:isMobile?'14px':'24px', lineHeight:isMobile?'18px':'32px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quisque aliquet risus diam aliquet senectus diam egestas volutpat.
                </div>
                <div style={{marginTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', display:isMobile?'none':''}}>
                    2 min read
                </div>
            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{flex:2, display:'flex', flexDirection:'column', marginRight:'24px'}}>
                <div style={{}}>
                    <img src={MasterImage} />
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        Lorem ipsum dolor sit amet, ctetur scing elit ipsum.
                    </div>
                    <div style={{paddingTop:'16px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tempor eget sit etiam. Cras et pellentesque facilisis parturient nulla tristique. Semper sit ultrices nec diam. Cras erat dictum felis, proin habitasse. Porttitor blandit suscipit imperdiet pellentesque orci odio ac leo.
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        Lorem ipsum dolor sit amet, ctetur scing elit ipsum.
                    </div>
                    <div style={{paddingTop:'16px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tempor eget sit etiam. Cras et pellentesque facilisis parturient nulla tristique. Semper sit ultrices nec diam. Cras erat dictum felis, proin habitasse. Porttitor blandit suscipit imperdiet pellentesque orci odio ac leo.
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        Lorem ipsum dolor sit amet, ctetur scing elit ipsum.
                    </div>
                    <div style={{paddingTop:'16px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tempor eget sit etiam. Cras et pellentesque facilisis parturient nulla tristique. Semper sit ultrices nec diam. Cras erat dictum felis, proin habitasse. Porttitor blandit suscipit imperdiet pellentesque orci odio ac leo.
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        Lorem ipsum dolor sit amet, ctetur scing elit ipsum.
                    </div>
                    <div style={{paddingTop:'16px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tempor eget sit etiam. Cras et pellentesque facilisis parturient nulla tristique. Semper sit ultrices nec diam. Cras erat dictum felis, proin habitasse. Porttitor blandit suscipit imperdiet pellentesque orci odio ac leo.
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        Lorem ipsum dolor sit amet, ctetur scing elit ipsum.
                    </div>
                    <div style={{paddingTop:'16px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tempor eget sit etiam. Cras et pellentesque facilisis parturient nulla tristique. Semper sit ultrices nec diam. Cras erat dictum felis, proin habitasse. Porttitor blandit suscipit imperdiet pellentesque orci odio ac leo.
                    </div>
                </div>
            </div>
        )
    }

    const section3 = () => {
        return (
            <div style={{flex:1}}>
                <div style={{paddingTop:'48px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold', fontSize:'20px', lineHeight:'26px', paddingBottom:'24px', display:isMac?'':'none' }}>
                    Related Blogs
                </div>
                {!isMobile && BlogData.map((blog)=> (
                    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'row', paddingBottom:'16px',}}>
                            <div style={{ paddingRight:'16px'}}>
                                <img src={blog.image}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:'16px', lineHeight:'24px', fontStyle:'normal',}}>
                                    {blog.heading}
                                </div>
                                <div style={{paddingTop:'8px', fontFamily:'Mulish', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content} 
                                    <button style={{border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} onClick={()=>history.push(blog.link)}>
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{border: '1px solid rgba(0, 0, 0, 0.2)', marginBottom:'16px', height:0, display:isMobile?'none':''}} />
                    </div>
                ))}
                {isMobile && MobileViewBlogData.map((blog)=> (
                    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'row', paddingBottom:'16px',}}>
                            <div style={{ paddingRight:'16px'}}>
                                <img src={blog.image}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:'16px', lineHeight:'24px', fontStyle:'normal',}}>
                                    {blog.heading}
                                </div>
                                <div style={{paddingTop:'8px', fontFamily:'Mulish', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content} 
                                    <button style={{border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} onClick={()=>history.push(blog.link)}>
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{border: '1px solid rgba(0, 0, 0, 0.2)', marginBottom:'16px', height:0, display:isMobile?'none':''}} />
                    </div>
                ))}
                {isMobile && 
                    <div style={{display:'flex', justifyContent:'center', paddingTop:'16px'}} >
                        <button  style={{width: 120, fontSize:'16px',color: "#FFFFFF",height: 44,borderRadius: 8,backgroundColor: "#2584F4", display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: "center",padding: '11 24',cursor: 'pointer',border: 'none',outline: 'none'}}>
                            View More
                        </button>
                    </div>
                }
            </div>
        )
    }


    return (
        <div style={{margin:'auto', maxWidth:'1440px', marginTop:isMobile?'40px':'88px', display:'flex', marginLeft:'7.2%', marginRight:'7.2%', flexWrap:'wrap', paddingBottom:isMobile?'45px':'160px'}}>
            {section1()}
            {section2()}
            {section3()}
        </div>
    )
}

export default BlogHome
