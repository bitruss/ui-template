import axios from "axios";
import config from "../config/config"
import request from "./request";

if (config.plugins.mock.enable) {
    let MockAdapter = require("axios-mock-adapter");
    let mock = new MockAdapter(axios);
    mock.onPost('/api/user/login').reply(config => {
        return new Promise(function (resolve) {
            setTimeout(function () {
                const data = JSON.parse(config.data);
                if (data.email == 'admin@test.com') {
                    resolve([200, {
                        status: 1, // correct status
                        msg: '',
                        result: {
                            roles: ['admin'],
                            permissions: [],
                            name: 'admin',
                            web_token: 'this_is_the_mocked_web_token'
                        }
                    }]);
                } else {
                    resolve([200, {
                        status: -1, //error status
                        msg: 'User not found',
                        result: {}
                    }]);
                }
            }, 3000); //5 seconds delay
        })
    });
}

async function login(email, password) {
    let url = "/api/user/login";
    return await request.Post(url, {
        email: email,
        password: password,
    });
}

export default {
    login
}