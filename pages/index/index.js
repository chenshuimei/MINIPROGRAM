/*
 * @Description: 这是***页面
 * @Date: 2021-01-24 10:10:35
 * @Author: shuimei
 * @LastEditTime: 2022-08-26 14:46:57
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
    let params = {
      url: '/home/swiperdata',
      method: "get",
    }
    request(params).then(res => {
      this.setData({
        swiperList: res.data.message
      })
    })
  },

  getCatesList () {

    let params = {
      url: '/home/catitems',
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
      url: '/home/floordata',
      method: "GET",
    }
    request(params).then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
  }

})