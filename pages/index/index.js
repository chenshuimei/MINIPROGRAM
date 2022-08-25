/*
 * @Description: 这是***页面
 * @Date: 2021-01-24 10:10:35
 * @Author: shuimei
 * @LastEditTime: 2022-08-24 18:10:04
 */
import { request } from "../../request/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], //轮播图数组
    catesList: [], // 导航分类数组
    floorList: [], // 楼层数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送请求
    this.getSwiperList()
    this.getCatesList()
    this.getFloorList()
  },
  getSwiperList () {
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

  getCatesList () {

    let params = {
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      method: "GET",
    }
    request(params).then(res => {
      this.setData({
        catesList: res.data.message
      })
    })
  },

  getFloorList () {
    let params = {
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      method: "GET",
    }
    request(params).then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
  }

})