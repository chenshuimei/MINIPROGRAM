/*
 * @Description: 这是***页面
 * @Date: 2022-06-02 23:26:22
 * @Author: shuimei
 * @LastEditTime: 2022-08-26 14:46:12
 */

const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })

}