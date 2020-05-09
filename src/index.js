console.log('huray');

async function hello() {
    return await Promise.resolve('ssuka');
}

hello().then(console.log);
