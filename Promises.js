const rand = (min, max) => {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const simulateRequest = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Callback Error:'))

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

console.log('no');
simulateRequest('First Request', rand(1,3))
    .then(res => {
        console.log(res);
        return simulateRequest('Second Request', rand(1,3));
    })
    .then(res => {
        console.log(res);
        return simulateRequest(89, rand(1,3));
    })
    .then(res => {
        console.log(res)
        return simulateRequest('Last Request', rand(1,3));
    })
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
rand(1,9)
