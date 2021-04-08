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
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"width": "700px",
			"margin": "0px auto 0px auto",
			"children": <>
				<Link
					href="#sec_top"
					font="300 20px --fontFamily-googleLato"
					text-decoration-line="initial"
					color="#d2d2d2"
					padding="10px 36px 10px 48px"
					width="33%"
					hover-text-decoration-line="underline"
				>
					TOP
				</Link>
				<Link
					href="#sec_aboutme"
					font="300 20px --fontFamily-googleLato"
					text-decoration-line="initial"
					color="#d2d2d2"
					padding="10px 24px 10px 36px"
					width="33%"
					hover-text-decoration-line="underline"
				>
					ABOUT ME
				</Link>
				<Link
					href="#sec_works"
					font="300 20px --fontFamily-googleLato"
					text-decoration-line="initial"
					color="#d2d2d2"
					padding="10px 24px 10px 24px"
					width="33%"
					hover-text-decoration-line="underline"
				>
					OTHER WORKS
				</Link>
			</>
		}
	}
};

const Footer = props => {
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

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;