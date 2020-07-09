async function start() {
    return await Promise.resolve('await is working')
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Util Id:', Util.id)