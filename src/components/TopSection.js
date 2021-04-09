import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text, Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"id": "sec_top"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "normal normal 500 23px/1.3 --fontFamily-googlePtSerif",
			"color": "#7dafbe",
			"children": "Yenmei"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "max-content",
			"children": <>
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
			</>
		}
	}
};

const TopSection = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Box {...override("box1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(TopSection, { ...Section,
	defaultProps,
	overrides
});
export default TopSection;