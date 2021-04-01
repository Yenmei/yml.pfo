import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
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
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,0) 48.6%,rgba(255, 255, 255, 0.25) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_bbg.png?v=2021-03-23T13:09:48.194Z) 0% 0%/contain no-repeat"
			color="--light"
			font="--base"
			sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_bbg.png?v=2021-03-23T13:09:48.194Z) 0% 0%/contain no-repeat"
		>
			<Section>
				<Override slot="SectionContent" md-flex-direction="row" />
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="row"
					md-justify-content="space-between"
					md-width="700px"
					sm-flex-direction="column"
					sm-justify-content="space-between"
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
					<Menu display="flex" md-display="flex" sm-background="rgba(160, 245, 245, 0.45)">
						<Override slot="link" color="#2E4053" text-decoration-line="initial" hover-text-decoration-line="underline">
							ABOUT ME
						</Override>
						<Override slot="link-index" color="#2E4053">
							OTHER WORKS
						</Override>
						<Override slot="link-active" color="#2E4053" />
						<Override slot="link-index1" font="18px sans-serif">
							LET'S TALK
						</Override>
					</Menu>
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
						Cardiago
					</Text>
					<Text margin="0px" font="300 20px/24px --fontFamily-googleLato" md-color="#2E4053">
						<Span color="#2E4053">
							Tag{" "}
						</Span>
						{" "}
						<Span
							color="#AD7D52"
							data-q-widget-type="PRIMITIVE"
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
					sm-width="320px"
					sm-padding="10px 0 10px 0"
					sm-margin="3rem 0px 3rem 0px"
				>
					<Image
						src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_1.png?v=2021-03-23T13:09:48.182Z"
						width="600px"
						max-width="100%"
						md-width="450px"
						sm-width="320px"
						position="relative"
						left="15rem"
						md-left="10rem"
						sm-position="static"
						top="7rem"
					/>
				</Box>
				<Text
					as="h1"
					margin="8px 0px 32px"
					font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
				>
					1. Cardiago : car + diagnosis
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 25px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
				>
					Most car owners can only see the warning signal on vehicle dashboard but not knowing the main causes;            only can wait anxiously till the repairman tell them what updates the root cause.            Cardiago aims to help car owners know “the inside” of their cars and to prevent unexpected breakdown in advance.
				</Text>
				<Text
					as="h1"
					margin="40px 0px 32px 0px"
					font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
				>
					2. How to work
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 25px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
				>
					The app works with OBDII-dongle, connecting via Bluetooth to keep users updated with
                              the inner condition of their cars.
				</Text>
				<Text
					as="h1"
					margin="40px 0px 32px 0px"
					font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
				>
					3. Insight : Timing of asking users to register and log in
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 25px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
				>
					In the usability test, it was found that without allowing the user to have a certain degree of understanding of the app,
            requiring registration and login first would reduce the user’s willingness to learn more about the app.
            Content that requires user data, such as car owner, vehicle-related information,
            using light-colored prompt, and button, message that encourage registration, so that users can get a better using experience.
				</Text>
				<Text
					as="h1"
					margin="40px 0px 32px 0px"
					font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
					md-font="normal 900 31px/1.2 --fontFamily-serifGeorgia"
					color="#2E4053"
					max-width="850px"
					letter-spacing="-1px"
				>
					4. Increase the experience of fun
				</Text>
				<Text
					as="p"
					color="#2E4053"
					max-width="800px"
					text-align="left"
					font="normal 300 25px/1.5 --fontFamily-googleLato"
					letter-spacing="0.06rem"
					md-font="normal 300 22px/1.5 --fontFamily-googleLato"
					md-letter-spacing={0}
				>
					In order to encourage car owners to maintain the good state of the vehicle,
            using vehicle-health-state to earns points/ranking, adding fun and motivation for user.
				</Text>
				<Image
					src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_2.png?v=2021-03-23T13:09:48.155Z"
					width="300px"
					max-width="100%"
					padding="0px px 0px 0"
					margin="0px 0px 0px 0"
					position="relative"
					right="0%"
					left="60%"
					md-left="50%"
					md-width="250px"
					sm-left="20%"
					sm-margin="1rem 0px 0px 0"
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
				font="normal 900 72px/1.2 --fontFamily-serifGeorgia"
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
				font="normal 300 25px/1.5 --fontFamily-googleLato"
				md-font="normal 300 23px/1.5 --fontFamily-googleLato"
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
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_c.png?v=2021-03-23T13:09:48.181Z) 50% 0%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
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
						padding="0 0 0 20px"
						font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
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
						padding="0 0 0 20px"
						font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
					>
						Craft
					</Text>
					<Text
						as="h3"
						font="normal 500 25px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 20px"
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
						padding="0 0 0 20px"
						font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
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
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 60%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
						sm-background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 60%/cover no-repeat"
					/>
					<Text
						color="--greyD2"
						margin="0"
						letter-spacing="0.07rem"
						padding="0 0 0 20px"
						font="300 14px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
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
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="--color-greyD2">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override
					slot="link"
					text-decoration="none"
					color="#D2D2D2"
					padding="6px 20px 6px 20px"
					hover-text-decoration-line="underline"
					font="300 18px/30px Lato, sans-serif"
				/>
				<Override slot="link-active" color="#D2D2D2" font="300 18px/30px --fontFamily-googleLato" hover-text-decoration-line="underline" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-404">
					ABOUT ME
				</Override>
				<Override slot="link-item" font="300 20px/30px --fontFamily-googleLato" hover-text-decoration-line="underline">
					ABOUT ME
				</Override>
				<Override slot="link-index" font="300 18px/30px --fontFamily-googleLato" hover-text-decoration-line="underline">
					LET'S TALK
				</Override>
				<Override slot="link-index1" display="none" />
			</Menu>
		</Section>
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