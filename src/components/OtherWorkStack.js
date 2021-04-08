import React from "react";
import { useOverrides, Override, Stack } from "@quarkly/components";
import CardLink from "./CardLink";
const defaultProps = {
	"margin-top": "40px"
};
const overrides = {
	"cardLink": {
		"kind": "CardLink",
		"props": {}
	},
	"cardLinkOverride": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "UXUI"
		}
	},
	"cardLinkOverride1": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"children": "Carsharing"
		}
	},
	"cardLinkOverride2": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cs_c.jpg?v=2021-03-23T13:09:48.177Z) 50% 65%/cover no-repeat"
		}
	},
	"cardLinkOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"href": "carsharing"
		}
	},
	"cardLink1": {
		"kind": "CardLink",
		"props": {}
	},
	"cardLinkOverride4": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "UXUI"
		}
	},
	"cardLinkOverride5": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"children": "Cardiago"
		}
	},
	"cardLinkOverride6": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/cd_c.png?v=2021-03-23T13:09:48.156Z) 50% 40%/cover no-repeat"
		}
	},
	"cardLinkOverride7": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"href": "cardiago"
		}
	},
	"cardLink2": {
		"kind": "CardLink",
		"props": {}
	},
	"cardLinkOverride8": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "UXUI"
		}
	},
	"cardLinkOverride9": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"children": "EVTaxi"
		}
	},
	"cardLinkOverride10": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ev_c.png?v=2021-03-23T13:09:48.181Z) 50% 0%/cover"
		}
	},
	"cardLinkOverride11": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"href": "evtaxi"
		}
	},
	"cardLink3": {
		"kind": "CardLink",
		"props": {}
	},
	"cardLinkOverride12": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "UXUI, Visual"
		}
	},
	"cardLinkOverride13": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"children": "Jianshi Township"
		}
	},
	"cardLinkOverride14": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "#2E4053 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/js_c.png?v=2021-03-23T13:09:48.157Z) 0% 0%/cover no-repeat"
		}
	},
	"cardLinkOverride15": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"href": "jianshi_township"
		}
	},
	"cardLink4": {
		"kind": "CardLink",
		"props": {}
	},
	"cardLinkOverride16": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "Craft"
		}
	},
	"cardLinkOverride17": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"children": "3D / Animation"
		}
	},
	"cardLinkOverride18": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"background": "--color-greyD2 url(https://uploads.quarkly.io/605618353022f1001e5cd2ad/images/ta_c.png?v=2021-03-23T13:09:48.183Z) 50% 0%/cover no-repeat"
		}
	},
	"cardLinkOverride19": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"href": "/index/3d_animation"
		}
	}
};

const OtherWorkStack = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<CardLink {...override("cardLink")}>
			<Override {...override("cardLinkOverride")} />
			<Override {...override("cardLinkOverride1")} />
			<Override {...override("cardLinkOverride2")} />
			<Override {...override("cardLinkOverride3")} />
		</CardLink>
		<CardLink {...override("cardLink1")}>
			<Override {...override("cardLinkOverride4")} />
			<Override {...override("cardLinkOverride5")} />
			<Override {...override("cardLinkOverride6")} />
			<Override {...override("cardLinkOverride7")} />
		</CardLink>
		<CardLink {...override("cardLink2")}>
			<Override {...override("cardLinkOverride8")} />
			<Override {...override("cardLinkOverride9")} />
			<Override {...override("cardLinkOverride10")} />
			<Override {...override("cardLinkOverride11")} />
		</CardLink>
		<CardLink {...override("cardLink3")}>
			<Override {...override("cardLinkOverride12")} />
			<Override {...override("cardLinkOverride13")} />
			<Override {...override("cardLinkOverride14")} />
			<Override {...override("cardLinkOverride15")} />
		</CardLink>
		<CardLink {...override("cardLink4")}>
			<Override {...override("cardLinkOverride16")} />
			<Override {...override("cardLinkOverride17")} />
			<Override {...override("cardLinkOverride18")} />
			<Override {...override("cardLinkOverride19")} />
		</CardLink>
		{children}
	</Stack>;
};

Object.assign(OtherWorkStack, { ...Stack,
	defaultProps,
	overrides
});
export default OtherWorkStack;