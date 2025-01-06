import axios from "axios";

async function GetConfig() {
    const result = await axios({
        method: 'get',
        url: 'http://192.168.31.251:3001',
    });
    return result.data;
}

export {
    GetConfig,
}