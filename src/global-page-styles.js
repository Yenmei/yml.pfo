import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#d2d2d2"
    },
    "index": {
        "background": "#d2d2d2"
    },
    "index/graphic_design": {
        "background": "#d2d2d2"
    },
    "index/carsharing": {
        "background": "#d2d2d2"
    },
    "index/cardiago": {
        "background": "#d2d2d2"
    },
    "index/evtaxi": {
        "background": "#d2d2d2"
    },
    "index/jianshi_township": {
        "background": "#d2d2d2"
    },
    "index/3d_animation": {
        "background": "#d2d2d2"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
