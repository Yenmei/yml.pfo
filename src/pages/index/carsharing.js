import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/carsharing"} />
		<Helmet>
			<title>
				Works | Carsharing
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/favicon.png?v=2021-03-23T06:10:09.433Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#d2d2d2"} />
		</Helmet>
		<Section
			padding="0px 0 0 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,0) 48.6%,rgba(255, 255, 255, 0.25) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_bbg.png?v=2021-03-23T13:09:48.185Z) 0% 0%/contain no-repeat"
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
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="normal normal 500 23px/1.3 --fontFamily-googlePtSerif"
						color="#7dafbe"
					>
						Yenmei
					</Text>
					<Box display="flex" width="max-content">
						<Link
							href="index/#sec_aboutme"
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
							href="index/#sec_letstalk"
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
				<Box
					md-width="380px"
					md-background="rgba(160, 245, 245, 0.45)"
					md-padding="0px 0px 0px 1rem"
					sm-width="300px"
					sm-margin="3rem 0px 0px 0px"
					sm-background="rgba(0, 0, 0, 0)"
				>
					<Text
						font="normal 300 20px/1.5 --fontFamily-googleLato"
						text-transform="uppercase"
						letter-spacing="1px"
						max-width="850px"
						color="--grey"
						margin="0px"
						md-font="normal 300 18px/1.5 --fontFamily-googleLato"
						md-width="100px"
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
					>
						Carsharing
					</Text>
					<Text margin="0px" font="300 20px/24px --fontFamily-googleLato" md-color="#2E4053">
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
					margin="5rem 0px 5rem 0px"
					sm-width="337px"
					sm-padding="10px 0 10px 0"
					sm-margin="3rem 0px 3rem 0px"
					sm-overflow-x="hidden"
					sm-display="block"
				>
					<Image
						src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_1.png?v=2021-03-23T13:09:48.179Z"
						width="600px"
						max-width="100%"
						md-width="450px"
						sm-width="320px"
						sm-overflow-x="hidden"
						sm-display="flex"
					/>
				</Box>
				<Text
					as="h1"
					margin="8px 0px 32px"
					font="normal 700 35px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
					sm-font="normal 900 25px/1.2 --fontFamily-serifGeorgia"
				>
					1. Carsharing is an application with an attempt to maximize the use of personal cars.
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 20px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
					sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
				>
					Researches show the average daily use of private car is only 63 minutes per day. Furthermore, cars are not used for 67 days on annual basis(more than two months). All information cumulates the fact that 96% of the time, cars are just parked at a standstill. Dedicate to enable the general public to catch the innovational concept of "car sharing" in the wave of the digital age.
				</Text>
				<Text
					as="h1"
					margin="40px 0px 32px 0px"
					font="normal 700 35px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
					sm-font="normal 900 25px/1.2 --fontFamily-serifGeorgia"
				>
					2. Informative/detailed description helps users make best choice.
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 20px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
					sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
				>
					Vehicle list: Through interviews, it was found that when choosing a car, clear vehicle information such as fuel level display, can help users find a suitable vehicle more efficiently. However, information shall not carry too much as it’s hard for users to making comparison.
				</Text>
				<Text
					as="h1"
					margin="40px 0px 32px 0px"
					font="normal 700 35px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
					sm-font="normal 900 25px/1.2 --fontFamily-serifGeorgia"
				>
					3. Feature
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 20px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
					sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
				>
					The deep blue background stands for relaxing and the comforting lifestyle, while the greenish-blue shows energy and freedom.
				</Text>
				<Image
					src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_2.png?v=2021-03-23T13:09:48.168Z"
					width="300px"
					max-width="100%"
					padding="0px px 0px 0"
					margin="0px 0px 0px 0"
					position="relative"
					right="0%"
					left="55%"
					md-left="50%"
					md-width="250px"
					sm-left="20%"
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
			<Text
				as="h1"
				font="normal 900 55px/1.2 --fontFamily-serifGeorgia"
				md-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				max-width="800px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#2E4053"
				sm-font="normal 900 35px/1.2 --fontFamily-serifGeorgia"
			>
				OTHER WORKS
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="550px"
				margin="0 auto"
				text-align="center"
				font="normal 300 20px/1.5 --fontFamily-googleLato"
				md-font="normal 300 23px/1.5 --fontFamily-googleLato"
				sm-font="normal 300 18px/1.5 --fontFamily-googleLato"
			>
				Next journey…
			</Text>
			<Stack margin-top="40px">
				<StackItem width="20%" lg-width="33%" sm-width="100%" sm-margin-top="24px">
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
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						md-font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						sm-padding="0 0 0 30px"
					>
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						sm-padding="0 0 0 30px"
					>
						Cardiago
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="33%" sm-width="100%" sm-margin-top="24px">
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
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						md-font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						sm-padding="0 0 0 30px"
					>
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						sm-padding="0 0 0 30px"
					>
						EVTaxi
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="33%" sm-width="100%" sm-margin-top="24px">
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
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						md-font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						sm-padding="0 0 0 30px"
					>
						UXUI, Visual
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						sm-padding="0 0 0 30px"
					>
						Jianshi Township
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="33%" sm-width="100%" sm-margin-top="24px">
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
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ta_c.png?v=2021-03-23T13:09:48.183Z) 60% 0%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						md-font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						sm-padding="0 0 0 30px"
					>
						Craft
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						sm-padding="0 0 0 30px"
					>
						3D / Animation
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="33%" sm-width="100%">
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
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 50% 65%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
						md-background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 50% 65%/cover no-repeat"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						md-font="300 15px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						sm-padding="0 0 0 30px"
					>
						E FLYER
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
						md-padding="0 0 0 14px"
						sm-padding="0 0 0 30px"
					>
						Graphic Design
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Components.FooterofWork>
			<Override slot="box" sm-width="330px" />
		</Components.FooterofWork>
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