// 实现链式调用函数
export default function chainFunc(step) {
    let steps = [step];

    return {
        break: function (time) {
            steps.push(() => new Promise((resolve) => {
                setTimeout(resolve, time * 1000)
            }))
            return this;
        },
        breakFirst: function (time) {
            steps.unshift(() => new Promise((resolve) => {
                setTimeout(resolve, time * 1000)
            }))
            return this;
        },
        continue: function (step) {
            steps.push(step);
            return this;
        },
        // dofirst: function (step) {
        //     steps.unshift(step);
        //     return this;
        // },
        execute: async function () {
            for (const t of steps) {
                await t()
            }
        }
    }
}



