import React from "react";
import styles from "../styles";

const HSL = ({match: {params}}) => (
    <div
        style={{
            ...styles.fill,
            ...styles.hsl,
            background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
        }}
    >
        hsl({params.h}, {params.s}%, {params.l}%)
    </div>
);

export default HSL;
