const rand = (min, max) => {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

const simulateRequest = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Callback Error:'))

        setTimeout(() => {
            resolve(msg.toUpperCase() + 'Promise Ok');
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
        return simulateRequest('Get data from DB', rand(1,3));
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

//PROMISES ALL 

const promises = [
    'First value',
    simulateRequest('Promise 1', 3000),
    simulateRequest('Promise 2', 200),
    simulateRequest('Promise 3', 1000),
    'Another value to test'
];

Promise.all(promises)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
