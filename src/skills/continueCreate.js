export default function continueCreate() {
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

const datas = new Array(100).fill(0).map((_, i) => i)


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