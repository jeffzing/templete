import React, { useState, useEffect, useCallback } from "react";

export default function TestView() {
    const [state, setState] = useState(0);
    function onClick() {
        setState((prevState) => prevState + 1);
        console.log("state", state);
    }
    useEffect(() => {
        console.log("useEffect", state);
    });
    return <div onClick={onClick}>Mmmmmmmmmm{state}</div>;
}
/**
 * hooks理解
 */
// userCallback 这个hook的作用是存储一个函数，并返回这个函数，除非配置的依赖改变，否则会一直返回同一个函数地址，适用于优化子组件属性刷新重新render
export const useSyncCallback = (callback: Function) => {
    const [proxyState, setProxyState] = useState({ current: false });
    const [params, setParams] = useState([]);

    const Func = useCallback(
        (...args: any) => {
            setParams(args);
            setProxyState({ current: true });
        },
        [proxyState]
    );

    useEffect(() => {
        if (proxyState.current) setProxyState({ current: false });
    }, [proxyState]);

    useEffect(() => {
        proxyState.current && callback(...params);
    });

    return Func;
};
