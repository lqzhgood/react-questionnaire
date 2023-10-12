import CryptoJS from 'crypto-js';

const SECRET = "I'm Groot";

export function getToken(payload: Record<string, any>) {
    const token = CryptoJS.AES.encrypt(JSON.stringify(payload), SECRET).toString();
    return token;
}
export function decodeToken(token: string) {
    try {
        const str = CryptoJS.AES.decrypt(token, SECRET).toString(CryptoJS.enc.Utf8);
        return JSON.parse(str);
    } catch (error) {
        return {};
    }
}

export function checkUser(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
        return true;
    } else {
        return false;
    }
}
