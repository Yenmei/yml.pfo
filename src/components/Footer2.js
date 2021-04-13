import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"background-color": "--dark",
	"text-align": "center",
	"padding": "32px 0",
	"background": "--color-greyD2"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "600px",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"margin": "1rem auto 1.5rem auto",
			"sm-width": "300px",
			"sm-height": "auto",
			"sm-display": "inline-block",
			"sm-margin": "0 auto 0 auto",
			"children": <>
				<Link
					href="#top"
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
					href="index/#sec_aboutme"
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
					href="index/#sec_letstalk"
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
			</>
		}
	}
};

const Footer2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")} />
		{children}
	</Section>;
};

Object.assign(Footer2, { ...Section,
	defaultProps,
	overrides
});
export default Footer2;