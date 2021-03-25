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
    "index/index1": {
        "background": "#d2d2d2"
    },
    "index/index11": {
        "background": "#d2d2d2"
    },
    "index/index111": {
        "background": "#d2d2d2"
    },
    "index/index1111": {
        "background": "#d2d2d2"
    },
    "index/index11111": {
        "background": "#d2d2d2"
    },
    "index/index12": {
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
