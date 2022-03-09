import axios from "axios";

async function Get(targetUrl, token = null) {
    let config = {};
    if (token !== null) {
        config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
    }
    try {
        let response = await axios.get(targetUrl, config);
        return {
            status: response.data.status,
            msg: response.data.msg,
            result: response.data.result,
        };
    } catch (error) {
        return {
            status: 0,
            msg: error.toString(),
            result: null,
        };
    }
}

async function Post(targetUrl, body, token = null) {
    let config = {};
    if (token !== null) {
        config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
    }
    try {
        let response = await axios.post(targetUrl, body, config);
        return {
            status: response.data.status,
            msg: response.data.msg,
            result: response.data.result,
        };
    } catch (error) {
        return {
            status: 0,
            msg: error.toString(),
            result: null,
        };
    }
}

export default {
    Get,
    Post,
};
