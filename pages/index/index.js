/*
 * @Description: 这是***页面
 * @Date: 2021-01-24 10:10:35
 * @Author: shuimei
 * @LastEditTime: 2022-06-02 23:32:33
 */
import { request } from "../../request/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [] //轮播图数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送请求

    // wx.request({
    //   url: 'https://csaa.bjbzms.cn/api/h5/advert/list',
    //   method: "post",
    //   data: {
    //     "position": 2,
    //     "status": 1
    //   },
    //   success: (res) => {
    //     console.log(`获取轮播图数据`, res);
    //     this.setData({
    //       swiperList: res.data.data.list
    //     })
    //   },
    // })

    let params = {
      url: 'https://csaa.bjbzms.cn/api/h5/advert/list',
      method: "post",
      data: {
        "position": 2,
        "status": 1
      },
    }
    request(params).then(res => {
      this.setData({
        swiperList: res.data.data.list
      })
    })
  },
})