import React from "react";
import styles from "../skillsCss/eclipseText.less";
export default function EclipseText({ text, containerH, lineH }) {
    console.log("styles", styles);

    return (
        <div className={styles.container}>
            <div className={styles.eclipse}>...</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}
