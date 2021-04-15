import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/evtaxi"} />
		<Helmet>
			<title>
				Works | EVTaxi
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/favicon.png?v=2021-03-23T06:10:09.433Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#d2d2d2"} />
		</Helmet>
		<Section
			padding="0px 0 0 0"
			sm-padding="40px 0 0px 0"
			background="linear-gradient(0deg,rgba(0,0,0,0) 48.6%,rgba(255, 255, 255, 0.25) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_bbg.png?v=2021-03-23T13:09:48.190Z) 0% 0%/contain no-repeat"
			color="--light"
			font="--base"
		>
			<Components.Header2 />
			<Section
				padding="60px 0 60px 0"
				sm-padding="40px 0"
				min-height="1200px"
				sm-min-height="auto"
				background="url() bottom no-repeat"
				display="flex"
				flex-direction="column"
			>
				<Override slot="SectionContent" sm-width="100%" sm-min-width="16px" />
				<Box
					md-width="380px"
					md-background="rgba(160, 245, 245, 0.45)"
					md-padding="0px 0px 0px 1rem"
					sm-width="280px"
					sm-margin="6rem 0px 0px 0px"
					sm-background="rgba(0, 0, 0, 0)"
					width="35%"
					padding="1rem 1rem 1rem 1rem"
					background="rgba(210, 210, 210, 0.5)"
				>
					<Text
						font="normal 300 18px/1.5 --fontFamily-googleLato"
						text-transform="uppercase"
						letter-spacing="1px"
						max-width="850px"
						color="--grey"
						margin="0px"
						md-font="normal 300 18px/1.5 --fontFamily-googleLato"
						md-width="100px"
						sm-font="normal 300 16.5px/1.5 --fontFamily-googleLato"
					>
						UXUI
					</Text>
					<Text
						as="h1"
						margin="8px 0px 32px"
						font="normal 900 72px/1.2 --fontFamily-serifGeorgia"
						md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
						color="#2E4053"
						max-width="850px"
						letter-spacing="-1px"
						sm-margin="4px 0px 16px 0px"
					>
						EVTaxi
					</Text>
					<Text margin="0px" font="300 16px/24px --fontFamily-googleLato" md-color="#2E4053" sm-font="300 16.5px/24px --fontFamily-googleLato">
						<Span color="#2E4053">
							Tag{" "}
						</Span>
						{" "}
						<Span
							color="#AD7D52"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Mobile app, car, innovation, 2017
						</Span>
					</Text>
				</Box>
				<Box
					padding="10px"
					margin="20rem 0px 0rem 0px"
					sm-width="90%"
					sm-padding="10px 0 10px 0"
					sm-margin="3rem auto 3rem auto"
					sm-overflow-x="hidden"
					sm-display="block"
					md-display="block"
					md-flex-direction="column"
					md-justify-content="center"
					md-margin="0rem 0px 0rem 0px"
				>
					<Image
						src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_1.png?v=2021-03-23T13:09:48.159Z"
						width="800px"
						max-width="100%"
						md-width="450px"
						sm-width="100%"
						sm-overflow-x="hidden"
						sm-display="flex"
					/>
				</Box>
				<Box
					display="block"
					flex-direction="column"
					align-items="center"
					sm-width="95%"
					sm-justify-content="center"
					sm-align-items="center"
					sm-display="block"
					sm-margin="0px auto 0px auto"
					width="600px"
					margin="2rem auto 0px auto"
				>
					<Text
						as="h1"
						margin="8px 0px 32px"
						font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
						md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
						color="#2E4053"
						max-width="850px"
						letter-spacing="-1px"
						sm-font="normal 900 23px/1.2 --fontFamily-serifGeorgia"
						display="block"
					>
						1. A ride-hailing app is to relieve users with special needs to use.
					</Text>
					<Text
						as="p"
						color="#2E4053"
						max-width="800px"
						text-align="left"
						font="normal 300 18px/1.5 --fontFamily-googleLato"
						letter-spacing="0.06rem"
						md-font="normal 300 22px/1.5 --fontFamily-googleLato"
						md-letter-spacing={0}
						sm-font="normal 300 16.5px/1.5 --fontFamily-googleLato"
						display="block"
					>
						Rehabus is a vehicle to be used by wheelchair users. In the past, it was called by telephone reservations. General ride-hailing apps doesn't provide service for wheelchair users. This app combines existing resources of rehabus to provide more convenient service for those in need.
					</Text>
					<Text
						as="h1"
						margin="40px 0px 32px 0px"
						font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
						md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
						color="#2E4053"
						max-width="850px"
						letter-spacing="-1px"
						sm-font="normal 900 23px/1.2 --fontFamily-serifGeorgia"
						display="block"
					>
						2. Insight: The usability of address entering.
					</Text>
					<Text
						as="p"
						color="#2E4053"
						max-width="800px"
						text-align="left"
						font="normal 300 18px/1.5 --fontFamily-googleLato"
						letter-spacing="0.06rem"
						md-font="normal 300 22px/1.5 --fontFamily-googleLato"
						md-letter-spacing={0}
						sm-font="normal 300 16.5px/1.5 --fontFamily-googleLato"
						display="block"
					>
						The original interface must enter a complete address to send the request, but users do not always know the address on the spot, and the automatic positioning may not be precise. Therefore, the functions of map-tapping selection and keywords searching are added, allowing users to send out the pick-up location through recognizing nearby landmarks, or keywords of the place.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_2.png?v=2021-03-23T13:09:48.156Z"
					width="200px"
					max-width="100%"
					padding="0px px 0px 0"
					margin="0px 0px 0px 0"
					position="relative"
					right="0%"
					left="55%"
					md-left="50%"
					md-width="80px"
					sm-left="20%"
					sm-width="120px"
					md-max-width="none"
					md-display="block"
					sm-margin="0px 0px 0px 40%"
				/>
			</Section>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			id="sec_work"
		>
			<Override slot="SectionContent" sm-min-width="16px" sm-width="88%" />
			<Text
				as="h1"
				font="normal 900 48px/1.2 --fontFamily-serifGeorgia"
				md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				max-width="800px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#2E4053"
				sm-font="normal 900 30px/1.2 --fontFamily-serifGeorgia"
			>
				OTHER WORKS
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="550px"
				margin="0 auto"
				text-align="center"
				font="normal 300 18px/1.5 --fontFamily-googleLato"
				md-font="normal 300 23px/1.5 --fontFamily-googleLato"
				sm-font="normal 300 16.5px/1.5 --fontFamily-googleLato"
			>
				Next journey…
			</Text>
			<Stack margin-top="40px" sm-margin="0px -16px -16px -16px">
				<Components.CardLink sm-width="50% content-box">
					<Override
						slot="text"
						sm-font="300 13px/24px Lato, sans-serif"
						font="300 13px/20px Lato, sans-serif"
						padding="0px 0px 0px 25px"
						sm-margin="0 0 0.3rem 0"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						UXUI, Visual
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/25px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						Jianshi Township
					</Override>
					<Override slot="box" background="#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/js_c.png?v=2021-03-23T13:09:48.157Z) 0% 0%/cover no-repeat" />
					<Override slot="link" href="/index/jianshi_township" background="#fff7f1" />
				</Components.CardLink>
				<Components.CardLink sm-width="50% content-box">
					<Override
						slot="text"
						sm-font="300 13px/24px Lato, sans-serif"
						font="300 13px/20px Lato, sans-serif"
						padding="0px 0px 0px 25px"
						sm-margin="0 0 0.3rem 0"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						Craft
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/25px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						3D / Animation
					</Override>
					<Override slot="box" background="--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ta_c.png?v=2021-03-23T13:09:48.183Z) 50% 0%/cover no-repeat" />
					<Override slot="link" href="/index/3d_animation" />
				</Components.CardLink>
				<Components.CardLink sm-width="50% content-box">
					<Override
						slot="text"
						sm-font="300 13px/24px Lato, sans-serif"
						font="300 13px/20px Lato, sans-serif"
						padding="0px 0px 0px 25px"
						sm-margin="0 0 0.3rem 0"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						E FLYER
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/25px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						Graphic Design
					</Override>
					<Override slot="box" background="#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 50% 0%/cover" />
					<Override slot="link" href="/index/graphic_design" />
				</Components.CardLink>
				<Components.CardLink sm-width="50% content-box">
					<Override
						slot="text"
						sm-font="300 13px/24px Lato, sans-serif"
						font="300 13px/20px Lato, sans-serif"
						padding="0px 0px 0px 25px"
						sm-margin="0 0 0.3rem 0"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						UXUI
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/25px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						Carsharing
					</Override>
					<Override slot="box" background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 65%/cover no-repeat" />
					<Override slot="link" href="/index/carsharing" />
				</Components.CardLink>
				<Components.CardLink sm-width="50% content-box">
					<Override
						slot="text"
						sm-font="300 13px/24px Lato, sans-serif"
						font="300 13px/20px Lato, sans-serif"
						padding="0px 0px 0px 25px"
						sm-margin="0 0 0.3rem 0"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						UXUI
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/25px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
						sm-padding="0px 0.6rem 0px 0.8rem"
					>
						Cardiago
					</Override>
					<Override slot="box" background="--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_c.png?v=2021-03-23T13:09:48.156Z) 50% 40%/cover no-repeat" />
					<Override slot="link" href="/index/cardiago" />
				</Components.CardLink>
			</Stack>
		</Section>
		<Components.Footer2 />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});