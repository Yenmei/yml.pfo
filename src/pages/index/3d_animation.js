import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/3d_animation"} />
		<Helmet>
			<title>
				Works | 3D / Animation
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/favicon.png?v=2021-03-23T06:10:09.433Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#d2d2d2"} />
		</Helmet>
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
						href="index/#sec_aboutme"
						display="flex"
						padding="0px 12px 0px 6px"
						color="#2E4053"
						font="300 16px --fontFamily-googleLato"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						ABOUT ME
					</Link>
					<Link
						href="index/#sec_letstalk"
						display="flex"
						padding="0px 6px 0px 12px"
						color="#2E4053"
						font="300 16px --fontFamily-googleLato"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
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
			<Override slot="SectionContent" sm-width="90%" sm-min-width="16px" />
			<Text
				font="normal 300 18px/1.5 --fontFamily-googleLato"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				CRAFT
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 72px/1.2 --fontFamily-serifGeorgia"
				md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
				sm-margin="8px 0px 16px 0px"
			>
				3D / Animation
			</Text>
			<Text margin="0px" font="300 20px/24px --fontFamily-googleLato" sm-font="300 18px/24px --fontFamily-googleLato">
				Tag{"  "}
				<Span
					color="#AD7D52"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					font="300 18px/24px Lato, sans-serif"
					sm-font="300 16px/24px Lato, sans-serif"
				>
					C4D, Tumult Hype0
				</Span>
			</Text>
			<Box padding="10px" margin="5rem 0px 5rem 0px">
				<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ta.png?v=2021-03-23T13:09:48.159Z" width="1149px" max-width="100%" />
			</Box>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
				md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
				sm-font="normal 900 28px/1.2 --fontFamily-serifGeorgia"
			>
				1. Shell design of OBD-II plug-in
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="800px"
				text-align="left"
				font="normal 300 18px/1.5 --fontFamily-googleLato"
				letter-spacing="0.06rem"
				sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
				md-font="normal 300 28px/1.5 --fontFamily-googleLato"
			>
				This plug-in works with Carsharing application.
				<br />
				How to :
				<br />
				{"  "}1.  Fit the size of the embedded motherboard
				<br />
				{"  "}2.  Concise and neat
				<br />
				{"  "}3.  Able to shows different light
				<br />
				{"  "}4.  Molding method
				<br />
				Above are the focus of the design, through the use of C4D modeling and proofing to communicate with the institutional designer. Learned persistence in high quality and the courage to raise question in this project.
			</Text>
		</Section>
		<Section background="#d2d2d2" padding="64px 0" sm-padding="40px 0" height="max-content">
			<Override
				slot="SectionContent"
				height="auto"
				margin="0px 64px 0rem 64px"
				min-height="fit-content"
				sm-margin="0px auto 0rem auto"
				sm-width="100%"
			/>
			<Stack
				height="fit-content"
				padding="0px 0px 0 0px"
				min-height="fit-content"
				sm-margin="-16px auto -16px auto"
				sm-width="90%"
				sm-align-items="center"
				sm-justify-content="center"
			>
				<StackItem
					width="50%"
					lg-width="100%"
					height="auto"
					min-height="fit-content"
					sm-padding="0 0 0 0"
					sm-margin="0px 0 0px 0"
					sm-display="block"
					sm-align-items="center"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-height="550px"
						sm-display="block"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-width="100%"
					/>
					<Box
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ani-min.gif?v=2021-03-25T16:18:26.802Z) 0% 0% /contain no-repeat scroll padding-box"
						height="1050px"
						width="auto"
						sm-height="100%"
						sm-width="270px"
						sm-margin="0px auto 0px auto"
						sm-display="block"
					/>
				</StackItem>
				<StackItem
					width="50%"
					lg-width="100%"
					height="auto"
					min-height="fit-content"
					max-height="fit-content"
					sm-padding="0 0 0 0"
					sm-min-width="16px"
				>
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						flex-direction="column"
						sm-padding="0 0 0 0"
						sm-width="100%"
						sm-margin="0px au 0px auto"
					/>
					<Text
						as="h1"
						margin="8px 0px 32px"
						font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
						md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
						color="#2E4053"
						max-width="850px"
						letter-spacing="-1px"
						sm-font="normal 900 28px/1.2 --fontFamily-serifGeorgia"
						sm-width="100%"
					>
						2. Simulation animation of parking query system
					</Text>
					<Text
						as="p"
						color="#2E4053"
						max-width="800px"
						text-align="left"
						font="normal 300 18px/1.5 --fontFamily-googleLato"
						letter-spacing="0.06rem"
						sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
						md-font="normal 300 28px/1.5 --fontFamily-googleLato"
					>
						Made with Tumult Hype 3, so customers are able to have a vivid sense of the overall process.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			id="sec_work"
		>
			<Text
				as="h1"
				font="normal 900 55px/1.2 --fontFamily-serifGeorgia"
				md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				max-width="800px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#2E4053"
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
			>
				Next journey…
			</Text>
			<Stack
				margin-top="40px"
				sm-width="100%"
				sm-align-items="center"
				sm-justify-content="center"
				sm-display="block"
				sm-margin="0px auto -16px auto"
				margin="0px -16px -16px -16px"
			>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						border-radius="20px"
						hover-cursor="pointer"
						hover-transform="translateY(5px)"
						hover-background="--color-light"
						box-shadow="--l"
					/>
					<Link href="/index/graphic_design" display="flex" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 0% 40%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						E FLYER
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
					>
						Graphic Design
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						border-radius="20px"
						hover-cursor="pointer"
						hover-transform="translateY(5px)"
						hover-background="--color-light"
						box-shadow="--l"
					/>
					<Link href="/index/carshring" display="flex" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 65%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
					>
						Carsharing
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						border-radius="20px"
						hover-cursor="pointer"
						hover-transform="translateY(5px)"
						hover-background="--color-light"
						box-shadow="--l"
					/>
					<Link href="/index/cardiago" display="flex" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_c.png?v=2021-03-23T13:09:48.156Z) 50% 40%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
					>
						Cardiago
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						border-radius="20px"
						hover-cursor="pointer"
						hover-transform="translateY(5px)"
						hover-background="--color-light"
						box-shadow="--l"
					/>
					<Link href="/index/evtaxi" display="flex" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_c.png?v=2021-03-23T13:09:48.181Z) 50% 0%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
					>
						EVTaxi
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						border-radius="20px"
						hover-cursor="pointer"
						hover-transform="translateY(5px)"
						hover-background="--color-light"
						box-shadow="--l"
					/>
					<Link href="/index/jianshi_township" display="flex" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/js_c.png?v=2021-03-23T13:09:48.157Z) 50% 0/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						UXUI, Visual
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
					>
						Jianshi Township
					</Text>
				</StackItem>
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