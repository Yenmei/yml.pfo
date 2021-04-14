import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Span, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, Stack } from "@quarkly/components";
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
			<Override slot="SectionContent" sm-width="90%" />
			<Text
				font="normal 300 18px/1.5 --fontFamily-googleLato"
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
				sm-font="normal 900 42px/1.2 --fontFamily-serifGeorgia"
				sm-margin="8px 0px 16px 0px"
			>
				Graghic Design
			</Text>
			<Text margin="0px" font="300 18px/24px --fontFamily-googleLato">
				Tag{"  "}
				<Span
					color="#AD7D52"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					font="300 16px/24px Lato, sans-serif"
				>
					Posters, covers, Affinity designer, Affinity photo,  2013-2020
				</Span>
			</Text>
			<Box padding="10px" margin="5rem 0px 5rem 0px" sm-margin="1rem 0px 1rem 0px">
				<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_1.png?v=2021-03-24T11:36:59.337Z" width="1149px" max-width="100%" />
			</Box>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
				sm-font="normal 900 28px/1.2 --fontFamily-serifGeorgia"
				sm-margin="0px 0px 0px 0px"
			>
				1. Women's Football Related Posters
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="800px"
				text-align="left"
				font="normal 300 18px/1.5 --fontFamily-googleLato"
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
			md-padding="0px 0 0px 0"
		>
			<Box padding="10px" margin="5rem 0px 5rem 0px" sm-margin="0rem 0px 2rem 0px" md-margin="0rem 0px 0rem 0px">
				<Image src="https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/og_2.png?v=2021-03-24T11:36:59.336Z" width="1149px" max-width="100%" />
			</Box>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 700 28px/1.2 --fontFamily-serifGeorgia"
				md-font="--headline2"
				color="#2E4053"
				max-width="850px"
				letter-spacing="-1px"
				sm-font="normal 900 28px/1.2 --fontFamily-serifGeorgia"
				sm-margin="8px 0px 0px 0px"
				md-margin="0px 0px 32px 0px"
			>
				2. Poster design since 2013
			</Text>
			<Text
				as="p"
				color="#2E4053"
				max-width="800px"
				text-align="left"
				font="normal 300 18px/1.5 --fontFamily-googleLato"
				letter-spacing="0.06rem"
				sm-margin="16px 0px 0px 0px"
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
				<Components.CardLink>
					<Override slot="text" sm-font="300 13px/24px Lato, sans-serif" font="300 13px/20px Lato, sans-serif" padding="0px 0px 0px 25px">
						UXUI
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/36px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
					>
						Carsharing
					</Override>
					<Override slot="box" background="url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 65%/cover no-repeat" />
					<Override slot="link" href="/index/carsharing" />
				</Components.CardLink>
				<Components.CardLink>
					<Override slot="text" sm-font="300 13px/24px Lato, sans-serif" font="300 13px/20px Lato, sans-serif" padding="0px 0px 0px 25px">
						UXUI
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/36px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
					>
						Cardiago
					</Override>
					<Override slot="box" background="--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_c.png?v=2021-03-23T13:09:48.156Z) 50% 40%/cover no-repeat" />
					<Override slot="link" href="/index/cardiago" />
				</Components.CardLink>
				<Components.CardLink>
					<Override slot="text" sm-font="300 13px/24px Lato, sans-serif" font="300 13px/20px Lato, sans-serif" padding="0px 0px 0px 25px">
						UXUI
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/36px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
					>
						EVTaxi
					</Override>
					<Override slot="box" background="#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_c.png?v=2021-03-23T13:09:48.181Z) 50% 0%/cover" />
					<Override slot="link" href="/index/evtaxi" />
				</Components.CardLink>
				<Components.CardLink>
					<Override slot="text" sm-font="300 13px/24px Lato, sans-serif" font="300 13px/20px Lato, sans-serif" padding="0px 0px 0px 25px">
						UXUI, Visual
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/36px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
					>
						Jianshi Township
					</Override>
					<Override slot="box" background="#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/js_c.png?v=2021-03-23T13:09:48.157Z) 0% 0%/cover no-repeat" />
					<Override slot="link" href="/index/jianshi_township" />
				</Components.CardLink>
				<Components.CardLink>
					<Override slot="text" sm-font="300 13px/24px Lato, sans-serif" font="300 13px/20px Lato, sans-serif" padding="0px 0px 0px 25px">
						Craft
					</Override>
					<Override
						slot="text1"
						sm-font="500 23px/36px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						sm-margin="0px 0px 20px 0px"
						font="500 22px/23px Constantia, &quot;Lucida Bright&quot;, Lucidabright, &quot;Lucida Serif&quot;, Lucida, &quot;DejaVu Serif&quot;, &quot;Bitstream Vera Serif&quot;, &quot;Liberation Serif&quot;, Georgia, serif"
						margin="0.4rem 0px 1.5rem 0px"
						padding="0px 0px 0px 25px"
					>
						3D / Animation
					</Override>
					<Override slot="box" background="--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ta_c.png?v=2021-03-23T13:09:48.183Z) 50% 0%/cover no-repeat" />
					<Override slot="link" href="/index/3d_animation" />
				</Components.CardLink>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="--color-greyD2">
			<Box
				width="600px"
				display="flex"
				justify-content="center"
				align-items="center"
				margin="1rem auto 1.5rem auto"
				sm-width="300px"
				sm-height="auto"
				sm-display="inline-block"
				sm-margin="0 auto 0 auto"
			>
				<Link
					href="#sec_top"
					display="inline-flex"
					justify-content="center"
					color="#d2d2d2"
					font="300 16px --fontFamily-googleLato"
					text-decoration-line="initial"
					padding="12px 24px 0px 24px"
					width="33%"
					hover-text-decoration-line="underline"
					sm-font="300 16px --fontFamily-googleLato"
					sm-padding="0 auto 3px auto"
					sm-width="250px"
					sm-display="inline-flex"
					sm-align-items="flex-start"
					sm-justify-content="center"
					sm-height="30px"
				>
					TOP
				</Link>
				<Link
					href="/#sec_aboutme"
					display="inline-flex"
					justify-content="center"
					color="#d2d2d2"
					font="300 16px --fontFamily-googleLato"
					text-decoration-line="initial"
					padding="12px 24px 0px 24px"
					width="33%"
					hover-text-decoration-line="underline"
					sm-font="300 16px --fontFamily-googleLato"
					sm-display="inline-flex"
					sm-width="250px"
					sm-align-items="flex-start"
					sm-justify-content="center"
					sm-height="30px"
				>
					ABOUT ME
				</Link>
				<Link
					href="/#sec_letstalk"
					display="inline-flex"
					justify-content="center"
					color="#d2d2d2"
					font="300 16px --fontFamily-googleLato"
					text-decoration-line="initial"
					padding="12px 24px 0px 24px"
					width="33%"
					hover-text-decoration-line="underline"
					sm-font="300 16px --fontFamily-googleLato"
					sm-padding="0 auto 3px auto"
					sm-display="inline-flex"
					sm-width="250px"
					sm-align-items="flex-start"
					sm-justify-content="center"
					sm-height="30px"
				>
					LET'S TALK
				</Link>
			</Box>
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