import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "/index",
	"color": "#7dafbe",
	"text-decoration-line": "initial",
	"font": "23px --fontFamily-googlePtSerif",
	"children": "Yenmei"
};
const overrides = {};

const LogoHomeLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(LogoHomeLink, { ...Link,
	defaultProps,
	overrides
});
export default LogoHomeLink;