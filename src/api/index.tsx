import axios from 'axios';
import { stringify } from 'qs';
import { message } from 'antd';

const httpRequestError = (status: number, statusText: string) => {
    message.info(`请求出错 status: ${status} statusText: ${statusText}`);
};

// axios.defaults.withCredentials = true;

// 创建axios实例
const request = axios.create({
    timeout: 4000, // 请求超时时间
});

// request拦截器
request.interceptors.request.use(
    (config) => {
        config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = stringify(config.data || {});
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// respone拦截器
request.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            httpRequestError(response.status, response.statusText);
            return Promise.reject(response);
        }
    },
    (error) => {
        return Promise.reject(error);
    },
);

export function getNoticeConfig() {
    return request.get('/r/MeiTuanBridge_Notice/getNoticeConfig');
}
