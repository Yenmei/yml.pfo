import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
import LogoHomeLink from "./LogoHomeLink";
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
	"logoHomeLink": {
		"kind": "LogoHomeLink",
		"props": {}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "max-content",
			"children": <>
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
			</>
		}
	}
};

const Header2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<LogoHomeLink {...override("logoHomeLink")} />
			<Box {...override("box1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Header2, { ...Section,
	defaultProps,
	overrides
});
export default Header2;