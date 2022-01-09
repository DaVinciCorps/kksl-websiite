import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		height: 80,
		display: 'flex',
		alignItems: 'center',
		position: 'fixed',
		top: 70,
		width: "100%",
		transition: "top 0.4s",
		zIndex: 100,
	},
	link: {
		fontFamily: 'Mulish',
		fontSize: 16,
		lineHeight: "120%",
		paddingLeft: 16,
		paddingRight: 16,
		cursor: 'pointer'
	},

});


function Header() {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:960px)');
	const history = useHistory();
	const { pathname } = useLocation();
	const [value, setValue] = useState();
	useEffect(() => {
		if (!isMobile) {
			var prevScrollpos = window.pageYOffset;
			window.onscroll = function () {
				var currentScrollPos = window.pageYOffset;
				if (prevScrollpos >= currentScrollPos && !isMobile && document.getElementById("header") != null) {
					document.getElementById("header").style.top = "70px";
				} else if (!isMobile && document.getElementById("header") != null) {
					document.getElementById("header").style.top = "-150px";
				}
				prevScrollpos = currentScrollPos;
			}
		}
	})
	useEffect(() => {
		const path = pathname.split("/")[1];
		if (path == '') {
			setValue(0);
		}
		else if (path == 'about') {
			setValue(1);
		}
		else if (path == 'product') {
			setValue(3);
		}
		else if (path == 'services') {
			setValue(4);
		}
		else if (path == 'tools') {
			setValue(5);
		}
		else if(path=="blog"){
			setValue(6);
		}
		else{
			setValue(4);
		}
	}, [pathname])

	const handleNavigate = (link) => {
		history.push(link);
	}

	return (
		<React.Fragment>

			{!isMobile &&

				<div className={classes.root} id="header">
					<div style={{ position: 'relative', left: '9.7%', top: "-7px" }}><span style={{ color: '#3E4953', fontSize: 20, cursor: 'pointer' }}><b>logo</b>ipsum</span></div>
					<div style={{ display: 'flex', margin: 'auto', }}>

						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/") }} style={{ color: value == 0 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 0 ? 'bold' : 400 }}>
								Home
							</p>
							{value == 0 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/about") }} style={{ color: value == 1 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 1 ? 'bold' : 400 }}>
								About Us
							</p>
							{value == 1 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/") }} style={{ color: value == 2 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 2 ? 'bold' : 400 }}>
								Market
							</p>
							{value == 2 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/product") }} style={{ color: value == 3 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 3 ? 'bold' : 400 }}>
								Product
							</p>
							{value == 3 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/services") }} style={{ color: value == 4 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 4 ? 'bold' : 400 }}>
								Services
							</p>
							{value == 4 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/tools") }} style={{ color: value == 5 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 5 ? 'bold' : 400 }}>
								Tools
							</p>
							{value == 5 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
						<div >
							<p className={classes.link} onClick={() => { handleNavigate("/blog") }} style={{ color: value == 6 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: value == 6 ? 'bold' : 400 }}>
								Blogs/Videos
							</p>
							{value == 6 &&
								<div style={{ marginTop: 8, height: 4, backgroundColor: "#0953AA" }}>

								</div>
							}
						</div>
					</div>
				</div>

			}
		</React.Fragment>
	)
}

export default Header
