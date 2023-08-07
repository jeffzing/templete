
import { DatePicker } from 'antd'; // DatePicker组件改为RangePicker组件
import './main.less'

import moment from 'moment';
import React from 'react';
const { RangePicker } = DatePicker
// 设置可选择的最小和最大日期相隔7天
const disabledDate = (current: moment.Moment | null) => {
    return current ? (current < moment().startOf('day') || current > moment().add(6, 'days').endOf('day')) : false;

}
// console.log('styles.root2222', styles)

// 生成一个区间选择器
const MyRangePicker = () => {
    // const type: CCC = { name: '24' }
    // const type1: QQQ.wechat = { type: 'tools' }
    return (<RangePicker className={"root"} disabledDate={disabledDate}></RangePicker>)
}

export default MyRangePicker



