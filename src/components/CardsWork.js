import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
import OtherWorkStack from "./OtherWorkStack";
const defaultProps = {
	"padding": "64px 0",
	"sm-padding": "40px 0",
	"font": "--base",
	"color": "--dark",
	"id": "sec_work"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "normal 900 48px/1.2 --fontFamily-serifGeorgia",
			"md-font": "normal 900 42px/1.2 --fontFamily-serifGeorgia",
			"max-width": "800px",
			"margin": "0 auto 5px auto",
			"text-align": "center",
			"color": "#2E4053",
			"sm-font": "normal 900 30px/1.2 --fontFamily-serifGeorgia",
			"children": "OTHER WORKS"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"color": "#2E4053",
			"max-width": "550px",
			"margin": "0 auto",
			"text-align": "center",
			"font": "normal 300 18px/1.5 --fontFamily-googleLato",
			"md-font": "normal 300 23px/1.5 --fontFamily-googleLato",
			"sm-font": "normal 300 16.5px/1.5 --fontFamily-googleLato",
			"children": "Next journey…"
		}
	},
	"otherWorkStack": {
		"kind": "OtherWorkStack",
		"props": {
			"sm-margin": "0px -16px -16px -16px"
		}
	},
	"otherWorkStackOverride": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride",
			"sm-font": "300 13px/24px Lato, sans-serif",
			"font": "300 13px/20px Lato, sans-serif",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride1": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride4",
			"sm-font": "300 13px/24px Lato, sans-serif",
			"font": "300 13px/20px Lato, sans-serif",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride2": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride8",
			"sm-font": "300 13px/24px Lato, sans-serif",
			"font": "300 13px/20px Lato, sans-serif",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride3": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride12",
			"sm-font": "300 13px/24px Lato, sans-serif",
			"font": "300 13px/20px Lato, sans-serif",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride4": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride16",
			"sm-font": "300 13px/24px Lato, sans-serif",
			"font": "300 13px/20px Lato, sans-serif",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride5": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride17",
			"sm-font": "500 23px/36px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"sm-margin": "0px 0px 20px 0px",
			"font": "500 22px/23px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"margin": "0.4rem 0px 1.5rem 0px",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride6": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride13",
			"sm-font": "500 23px/36px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"sm-margin": "0px 0px 20px 0px",
			"font": "500 22px/23px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"margin": "0.4rem 0px 1.5rem 0px",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride7": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride9",
			"sm-font": "500 23px/36px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"sm-margin": "0px 0px 20px 0px",
			"font": "500 22px/23px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"margin": "0.4rem 0px 1.5rem 0px",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride8": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride5",
			"sm-font": "500 23px/36px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"sm-margin": "0px 0px 20px 0px",
			"font": "500 22px/23px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"margin": "0.4rem 0px 1.5rem 0px",
			"padding": "0px 0px 0px 25px"
		}
	},
	"otherWorkStackOverride9": {
		"kind": "Override",
		"props": {
			"slot": "cardLinkOverride1",
			"sm-font": "500 23px/36px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"sm-margin": "0px 0px 20px 0px",
			"font": "500 22px/23px Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif",
			"margin": "0.4rem 0px 1.5rem 0px",
			"padding": "0px 0px 0px 25px"
		}
	}
};

const CardsWork = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" sm-min-width="16px" sm-width="88%" />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<OtherWorkStack {...override("otherWorkStack")}>
			<Override {...override("otherWorkStackOverride")} />
			<Override {...override("otherWorkStackOverride1")} />
			<Override {...override("otherWorkStackOverride2")} />
			<Override {...override("otherWorkStackOverride3")} />
			<Override {...override("otherWorkStackOverride4")} />
			<Override {...override("otherWorkStackOverride5")} />
			<Override {...override("otherWorkStackOverride6")} />
			<Override {...override("otherWorkStackOverride7")} />
			<Override {...override("otherWorkStackOverride8")} />
			<Override {...override("otherWorkStackOverride9")} />
		</OtherWorkStack>
		{children}
	</Section>;
};

Object.assign(CardsWork, { ...Section,
	defaultProps,
	overrides
});
export default CardsWork;