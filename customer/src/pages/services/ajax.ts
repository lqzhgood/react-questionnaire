export async function get(url: string) {
    await sleep();
}

export async function post(url: string, body: any) {
    await sleep();
}

function sleep(t = 1000) {
    return new Promise(res => {
        setTimeout(res, t);
    });
}
