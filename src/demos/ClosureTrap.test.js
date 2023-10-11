for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('i', i);
    }, 300);
}

let c = 0;

setTimeout(() => {
    console.log('c', c);
}, 3000);

while (++c < 10) {
    // ig
}
