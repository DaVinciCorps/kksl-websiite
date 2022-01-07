import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Tools() {

    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');

    const section1=()=>{
        return(
            <div style={{marginTop: 88,boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)'}}>
                
            </div>
        )
    }

    const section2=()=>{
        return(
            <div>

            </div>
        )
    }

    return (
        <div>
            {section1()}
            {section2()}
        </div>
    )
}
