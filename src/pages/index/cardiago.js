import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/cardiago"} />
		<Helmet>
			<title>
				Works | Cardiago
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/favicon.png?v=2021-03-23T06:10:09.433Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#d2d2d2"} />
		</Helmet>
		<Section
			padding="0px 0 0 0"
			sm-padding="40px 0 0px 0"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_bbg.png?v=2021-03-23T13:09:48.194Z) 0% 0%/contain no-repeat"
			color="--light"
			font="--base"
		>
			<Section id="sec_top">
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="column"
				>
					<Components.LogoHomeLink />
					<Box display="flex" width="max-content">
						<Link
							href="/#sec_aboutme"
							display="flex"
							padding="0px 12px 0px 6px"
							color="#2E4053"
							font="300 16px --fontFamily-googleLato"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
							sm-background="rgba(210, 210, 210, 0.6)"
							sm-padding="0px 6px 0px 6px"
							sm-margin="0px 6px 0px 0px"
						>
							ABOUT ME
						</Link>
						<Link
							href="/#sec_letstalk"
							display="flex"
							padding="0px 6px 0px 12px"
							color="#2E4053"
							font="300 16px --fontFamily-googleLato"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
							sm-padding="0px 6px 0px 6px"
							sm-background="rgba(210, 210, 210, 0.6)"
						>
							LET'S TALK
						</Link>
					</Box>
				</Box>
			</Section>
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
					sm-margin="5rem 0px 0px 0px"
					sm-background="rgba(0, 0, 0, 0)"
					width="min-content"
					padding="0.3rem 0.5rem 0.3rem 0.5rem"
					background="rgba(210, 210, 210, 0.7)"
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
						Cardiago
					</Text>
					<Text margin="0px" font="300 16px/24px --fontFamily-googleLato" md-color="#2E4053" sm-font="300 16.5px/24px --fontFamily-googleLato">
						<Span
							color="#2E4053"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
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
					margin="5rem 0px 0rem 40%"
					sm-width="100%"
					sm-padding="10px 0 10px 0"
					sm-margin="3rem 0px 3rem 0px"
					sm-overflow-x="hidden"
					sm-display="block"
					display="block"
					justify-content="right"
					width="fit-content"
					md-margin="5rem 0px 5rem 0px"
				>
					<Image
						src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_1.png?v=2021-03-23T13:09:48.182Z"
						width="600px"
						max-width="100%"
						md-width="500px"
						sm-width="95%"
						sm-overflow-x="hidden"
						sm-display="flex"
						display="block"
						justify-content="flex-end"
						flex-direction="row"
						align-items="flex-end"
						margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					display="block"
					flex-direction="column"
					sm-width="95%"
					sm-justify-content="center"
					sm-align-items="center"
					sm-display="block"
					sm-margin="0px auto 0px auto"
					width="600px"
					margin="0px auto 0px auto"
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
						1. Cardiago : car + diagnosis
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
						Most car owners can only see the warning signal on vehicle dashboard but not knowing the main causes; only can wait anxiously till the repairman tell them what updates the root cause. Cardiago aims to help car owners know “the inside” of their cars and to prevent unexpected breakdown in advance.
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
						2. How to work
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
						The app works with OBDII-dongle, connecting via Bluetooth to keep users updated with the inner condition of their cars.
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
						3. Insight : Timing of asking users to register and log in
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
						In the usability test, it was found that without allowing the user to have a certain degree of understanding of the app, requiring registration and login first would reduce the user’s willingness to learn more about the app. Content that requires user data, such as car owner, vehicle-related information, using light-colored prompt, and button, message that encourage registration, so that users can get a better using experience.
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
						4. Increase the experience of fun
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
						In order to encourage car owners to maintain the good state of the vehicle, using vehicle-health-state to earns points/ranking, adding fun and motivation for user.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_2.png?v=2021-03-23T13:09:48.155Z"
					width="200px"
					max-width="100%"
					padding="0px px 0px 0"
					margin="1rem 0px 0px 0"
					position="relative"
					right="0%"
					left="55%"
					md-left="50%"
					md-width="80px"
					sm-left="20%"
					sm-width="180px"
					md-max-width="none"
					md-display="block"
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
						EVTaxi
					</Override>
					<Override slot="box" background="#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_c.png?v=2021-03-23T13:09:48.181Z) 50% 0%/cover" />
					<Override slot="link" href="/index/evtaxi" background="#fff7f1" />
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
					<Override slot="link" href="/index/jianshi_township" />
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
						E Flyer
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
					<Override slot="box" background="--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 50% 40%/cover no-repeat" />
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