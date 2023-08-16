import { RangePicker } from "antd";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
import MyRangePicker from "./MyRangePicker";

import continueCreate from "./skills/continueCreate";
import chainFunc from "./skills/chainFuncs";
import TestView from "./skills/TestView";
import EclipseText from "./skills/eclipseText";
import "antd/dist/antd.css";
import "./index.css";
const root = document.querySelector("#root");
root.style.backgroundColor = "white";
root.style.display = "flex";
// test revert
// test revert 1
// commit test 3
// root.style.justifyContent = 'center';
// root.style.alignItems = 'center';
root.style.width = "100vw"; // The styles variable is imported from './index.less' which is a LESS file.
// However, in order to use LESS files in a React project, a LESS loader must be configured in the project's webpack configuration.
// If the LESS loader is not properly configured, the imported styles will be undefined.
// Therefore, it is likely that the LESS loader is not properly configured in this project, causing the styles variable to be undefined.
root.style.height = "100vh";
root.className = "root";
// root.className = styles.root;
// console.log('styles.root', styles)
// Create a div element and append it to the root// The styles variable is imported from './index.less' which is a LESS file.
// However, in order to use LESS files in a React project, a LESS loader must be configured in the project's webpack configuration.
// If the LESS loader is not properly configured, the imported styles will be undefined.
// Therefore, it is likely that the LESS loader is not properly configured in this project, causing the styles variable to be undefined.
ReactDOM.createRoot(root).render(<EclipseText text='撒旦撒旦大苏打' containerH={100} lineH={20} />);
// const btn = document.querySelector('.btn')
// console.log(btn)

// btn.onclick = function () {
//     chainFunc(() => { console.log('初始化') })
//         .break(5)
//         .breakFirst(5)
//         // .dofirst(() => { console.log('我先来哦') })
//         .continue(() => { console.log('第二🙅步') })
//         .execute();
// }

// Center the triangle div element in the root
// window.onload = function() {
//   triangle.style.position = 'absolute';
//   triangle.style.top = `${(window.innerHeight / 2) - (window.innerHeight / 8)}px`;
//   triangle.style.left = `${(window.innerWidth / 2) - (window.innerHeight / 8)}px`;
//   ReactDOM.render(<MyRangePicker />, root);
// }
