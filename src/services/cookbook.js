// import request from './request';
import axios from 'axios'
// export function get() {
//     return request({
//         url: ''
//     })
// }

export const get = ({url}) => {
    return new Promise((resolve, reject) => {
        axios({
            url
        }).then(res => {
            resolve(res)
        }).then(err => {
            reject(err)
        })
    })
}