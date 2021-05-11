/*
    ajax函数
*/
import axios from 'axios'
export default function ajax(url, data = {}, type) {
    return new Promise(function (res, rej) {
        let promise
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(function (res) {
            res(res.data)
        }).catch(function (error) {
            rej(error)
        })
    })

}