import React from "react";
import { useOverrides, StackItem } from "@quarkly/components";
import { Box, Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "20%",
	"lg-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"flex-direction": "column",
			"background": "--color-lightD1",
			"border-radius": "20px",
			"hover-cursor": "pointer",
			"hover-transform": "translateY(5px)",
			"hover-background": "--color-light",
			"box-shadow": "--l",
			"display": "flex",
			"width": "100%",
			"text-decoration-line": "initial"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"border-radius": "20px 20px 0px 0px",
			"background": "--color-greyD2"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--greyD2",
			"margin": "0",
			"letter-spacing": "0.17rem",
			"padding": "0 0 0 30px",
			"children": "Category",
			"font": "300 16px/24px --fontFamily-googleLato"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "normal 500 30px/1.2 --fontFamily-serifGeorgia",
			"margin": "17px 0 20px 0",
			"color": "#2E4053",
			"padding": "0 0 0 30px",
			"children": "Title"
		}
	}
};

const CardWithLink = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Link {...override("link")}>
			<Box {...override("box")} />
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Link>
		{children}
	</StackItem>;
};

Object.assign(CardWithLink, { ...StackItem,
	defaultProps,
	overrides
});
export default CardWithLink;