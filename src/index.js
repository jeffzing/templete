import { RangePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import MyRangePicker from './MyRangePicker'
// import styles from './main.module.less'
import 'antd/dist/antd.css';
import './index.css'
const root = document.querySelector('#root');
root.style.backgroundColor = 'white';
root.style.display = 'flex';
// root.style.justifyContent = 'center';
// root.style.alignItems = 'center';
root.style.width = '100vw';// The styles variable is imported from './index.less' which is a LESS file. 
// However, in order to use LESS files in a React project, a LESS loader must be configured in the project's webpack configuration. 
// If the LESS loader is not properly configured, the imported styles will be undefined. 
// Therefore, it is likely that the LESS loader is not properly configured in this project, causing the styles variable to be undefined.
root.style.height = '100vh';
root.className = 'root'
// root.className = styles.root;
// console.log('styles.root', styles)
// Create a div element and append it to the root// The styles variable is imported from './index.less' which is a LESS file. 
// However, in order to use LESS files in a React project, a LESS loader must be configured in the project's webpack configuration. 
// If the LESS loader is not properly configured, the imported styles will be undefined. 
// Therefore, it is likely that the LESS loader is not properly configured in this project, causing the styles variable to be undefined.
ReactDOM.render(<button className='btn'>创建100000个数字</button>, root);

const btn = document.querySelector('.btn')
const datas = new Array(100).fill(0).map((_, i) => i)
console.log(btn)


btn.onclick = function () {
    function consumer(i) {
        const item = datas[i]
        const div = document.createElement('div')
        div.textContent = item
        div.textContent = item
        console.log('item', item)
        document.body.appendChild(div)
    }
    function chunksplitor(task) {
        setTimeout(() => {
            task((time) => time < 16)
        }, 30)
    }
    splitCall(datas, consumer, chunksplitor)
}

function splitCall(datas, consumer, chunksplitor) {

    let i = 0

    function run() {
        if (i === datas.length) {
            return
        }
        chunksplitor((hastime) => {
            const now = Date.now()
            while (hastime(Date.now() - now) && i < datas.length) {
                console.log('now', now)

                consumer(i)
                i++
            }
            run()
        })
    }
    run()
}

// Center the triangle div element in the root
// window.onload = function() {
//   triangle.style.position = 'absolute';
//   triangle.style.top = `${(window.innerHeight / 2) - (window.innerHeight / 8)}px`;
//   triangle.style.left = `${(window.innerWidth / 2) - (window.innerHeight / 8)}px`;
//   ReactDOM.render(<MyRangePicker />, root);
// }

