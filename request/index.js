/*
 * @Description: 这是***页面
 * @Date: 2022-06-02 23:26:22
 * @Author: shuimei
 * @LastEditTime: 2022-06-02 23:29:35
 */
export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })

}