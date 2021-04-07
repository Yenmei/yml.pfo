import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/graphic_design"} />
		<Helmet>
			<title>
				Works | Graphic Design
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
				<Menu display="flex" font="18px --fontFamily-googleLato">
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
			<Text
				font="normal 300 20px/1.5 --fontFamily-googleLato"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				E Flyer
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 72px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
			>
				Graghic Design
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="300 20px/24px --fontFamily-googleLato">
						Tag{"  "}
						<Span color="#AD7D52">
							Posters, covers, Affinity designer, Affinity photo,  2013-2020
						</Span>
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
			<Box padding="10px" margin="5rem 0px 5rem 0px">
				<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_1.png?v=2021-03-24T11:36:59.337Z" width="1149px" max-width="100%" />
			</Box>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
			>
				1. Women's Football Related Posters
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="800px"
				text-align="left"
				font="normal 300 25px/1.5 --fontFamily-googleLato"
				letter-spacing="0.06rem"
			>
				I start to play football in 2010. Through playing football, I get the fun of team collaboration, and the accomplishment of self-discovery and spiritual growth. Have leveraged design skills to promote women's football, hoping to help more women gain self-growth and fun through sports.
			</Text>
		</Section>
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0"
			sm-min-height="auto"
			background="url() bottom no-repeat"
			display="flex"
			flex-direction="column"
			min-height="1200px"
		>
			<Box padding="10px" margin="5rem 0px 5rem 0px">
				<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_2.png?v=2021-03-24T11:36:59.336Z" width="1149px" max-width="100%" />
			</Box>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 700 40px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
			>
				2. Poster design since 2013
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="800px"
				text-align="left"
				font="normal 300 25px/1.5 --fontFamily-googleLato"
				letter-spacing="0.06rem"
			>
				Try different styles of painting and bring vitality to the content with bright tones.
			</Text>
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
				md-font="--headline2"
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
			>
				Next journey…
			</Text>
			<Components.OtherWorkStack />
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