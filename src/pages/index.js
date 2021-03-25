import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Button, Span, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/favicon.png?v=2021-03-23T06:10:09.433Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#d2d2d2"} />
		</Helmet>
		<Section>
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
				<Menu display="flex">
					<Override slot="link" color="#2E4053" text-decoration-line="initial" hover-text-decoration-line="underline">
						ABOUT ME
					</Override>
					<Override slot="link-index" color="#2E4053">
						LET'S TALK
					</Override>
					<Override slot="link-active" color="#2E4053" />
				</Menu>
			</Box>
		</Section>
		<Section
			text-align="center"
			padding="100px 0"
			sm-padding="40px 0"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/pb.png?v=2021-03-21T11:52:25.247Z) right/contain no-repeat scroll padding-box"
			sm-background="rgba(0, 0, 0, 0) url() right/contain no-repeat scroll padding-box"
		>
			<Box
				display="flex"
				margin="40px 0 20px 0"
				justify-content="space-around"
				sm-flex-direction="column"
				sm-margin="0px 0 20px 0"
			>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/portrait.png?v=2021-03-23T11:57:45.675Z" width="400px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Text
						as="h1"
						margin="20% 0px auto 0px"
						sm-margin="10% 0px auto 0px"
						color="#2E4053"
						font="normal 700 37px/100% --fontFamily-serifGeorgia"
						sm-font="normal 700 30px/100% --fontFamily-serifGeorgia"
					>
						Hi, I'm a Visual / Interface designer,
					</Text>
					<Text as="p" font="300 27px --fontFamily-googleLato" color="--greyD2" sm-font="300 20px --fontFamily-googleLato">
						enjoying turning ideas into reality.
					</Text>
					<Button
						background="#4aa7c0"
						font="500 27px --fontFamily-googleLato"
						padding="12px 50px 18px 50px"
						color="#E1FFFF"
						border-radius="45px"
						letter-spacing="0.1rem"
						type="submit"
						disabled={false}
						hover-transform="translateY(6px)"
						hover-background="#009ac1"
						box-shadow="--m"
						href="#sec_work"
					>
						Check out my works
					</Button>
				</Box>
			</Box>
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
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#2E4053"
			>
				WORKS
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="550px"
				margin="0 auto"
				text-align="center"
				font="normal 300 25px/1.5 --fontFamily-googleLato"
				sm-font="normal 300 20px/1.5 --fontFamily-googleLato"
			>
				Most UX/UI works are related to automobiles as acting as designer of automotive telematics before.
			</Text>
			<Stack margin-top="40px">
				<StackItem width="33%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-lightD1"
						padding="0px 0px 0px 0px"
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
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_c.png?v=2021-03-23T13:09:48.178Z) 50% 60%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						E Flyer
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						Graghic Design
					</Text>
					<Text
						as="p"
						margin="7px 0 20px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag
						</Span>
						{"  "}
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Posters, covers, Affinity designer, Affinity photo,  2013-2020
						</Span>
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%">
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
						background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 65%/cover no-repeat"
						border-radius="20px 20px 0px 0px"
					/>
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						Carsharing
					</Text>
					<Text
						as="p"
						margin="7px 0 30px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag{"  "}
						</Span>
						Mobile app, car, innovation, 2016
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
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
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						Cardiago
					</Text>
					<Text
						as="p"
						margin="7px 0 30px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag
						</Span>
						{"  "}Mobile app, diagnosis, Zeplin, 2017
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
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
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						UXUI
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						EVTaxi
					</Text>
					<Text
						as="p"
						margin="7px 0 30px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag
						</Span>
						{"  "}Mobile app, car, rehabus, 2018
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
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
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						UXUI, Visual
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						Jianshi Township
					</Text>
					<Text
						as="p"
						margin="7px 0 30px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag
						</Span>
						{"  "}Mobile app, web, 2018
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
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
					<Text color="--greyD2" margin="0" letter-spacing="0.17rem" padding="0 0 0 30px">
						Craft
					</Text>
					<Text
						as="h3"
						font="normal 500 30px/1.2 --fontFamily-serifGeorgia"
						margin="17px 0 20px 0"
						color="#2E4053"
						padding="0 0 0 30px"
					>
						3D / Animation
					</Text>
					<Text
						as="p"
						margin="7px 0 30px 0"
						font="300 20px/24px --fontFamily-googleLato"
						letter-spacing="0.05rem"
						color="#AD7D52"
						padding="0 25px 0 30px"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#2E4053"
						>
							Tag
						</Span>
						{"  "}C4D, Tumult Hype, visual
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text
				as="h1"
				font="normal 900 72px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#2E4053"
			>
				ABOUT ME
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/portrait2.svg?v=2021-03-23T13:09:48.184Z" width="570px" max-width="100%" />
					<Text as="h3" font="normal 700 35px/1.2 --fontFamily-serifGeorgia" margin="20px 0 0 0" color="#2E4053">
						Collectively to design high quality products.
					</Text>
					<Text
						as="p"
						font="normal 300 22px/1.5 --fontFamily-googleLato"
						margin="20px auto 0 auto"
						text-align="left"
						width="680px"
						color="#2E4053"
						padding="0px 0 0px 0"
					>
						Open-minded to comprehend different ideas.
To wisely leverage all talents and traits from various team member, open communication/discussion to lighten reliable and impressive product feature.
						<br />
						<br />
						Look forward to work with partners who are willing to understand and respect each other's values. Likes to share and communicate with people who share the most in common.
						<br />
						<br />
						In the view of social media is mainly a channel to interested news. So if you are interested to know more about me, just leave a message below then we can have a chat!{" "}
					</Text>
					<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/sits.png?v=2021-03-23T13:09:48.159Z" width="470px" max-width="100%" margin="3rem 0px 0px 0px" />
				</Box>
			</Box>
		</Section>
		<Section background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/goldfish.png?v=2021-03-23T13:09:48.163Z) 0%  0% no-repeat" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" margin="0 0px 0px 0px" />
					<Text
						as="h1"
						font="normal 900 58px/1.2 --fontFamily-serifGeorgia"
						md-font="--headline2"
						max-width="520px"
						margin="10rem auto 5px 0"
						text-align="center"
						color="#2E4053"
						sm-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
					>
						LET'S TALK
					</Text>
					<Text
						as="p"
						color="#2E4053"
						max-width="550px"
						margin="0 0 0 0"
						text-align="left"
						font="normal 300 22px/1.5 --fontFamily-googleLato"
						sm-font="normal 300 20px/1.5 --fontFamily-googleLato"
					>
						Interested in my works and want to hire me? Feel free to leave your message, I will respond as soon as possible.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/xbjqrdww">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text
									font="normal 300 16px/1.5 --fontFamily-googleLato"
									margin="0 0 4px 0"
									sm-font="normal 300 16px/1.5 --fontFamily-googleLato"
									sm-color="#2E4053"
									color="#2E4053"
								>
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text
									font="normal 300 16px/1.5 --fontFamily-googleLato"
									margin="0 0 4px 0"
									sm-font="normal 300 16px/1.5 --fontFamily-googleLato"
									sm-color="#2E4053"
									color="#2E4053"
								>
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text
									font="normal 300 16px/1.5 --fontFamily-googleLato"
									margin="0 0 4px 0"
									sm-font="normal 300 16px/1.5 --fontFamily-googleLato"
									sm-color="#2E4053"
									color="#2E4053"
								>
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button
									background="#4aa7c0"
									font="normal 700 16px/1.5 --fontFamily-googleLato"
									border-radius="30px"
									box-shadow="--m"
									hover-background="#009ac1"
									hover-transform="translateY(6px)"
									color="#E1FFFF"
								>
									SEND
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
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
					color="#d2d2d2"
					padding="6px 12px"
					font="300 20px/30px --fontFamily-googleLato"
					hover-text-decoration-line="underline"
				/>
				<Override slot="link-active" color="--lightD1" font="300 20px/30px --fontFamily-googleLato" hover-text-decoration-line="underline" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-404">
					WORKS
				</Override>
				<Override slot="link-item" font="300 20px/30px --fontFamily-googleLato" hover-text-decoration-line="underline">
					ABOUT ME
				</Override>
				<Override slot="link-index" font="300 20px/30px --fontFamily-googleLato" hover-text-decoration-line="underline">
					LET'S TALK
				</Override>
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