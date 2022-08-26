/*
 * @Description: 这是***页面
 * @Date: 2022-05-24 23:59:30
 * @Author: shuimei
 * @LastEditTime: 2022-08-26 16:09:06
 */
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: '综合',
        isActive: true
      },
      {
        id: 1,
        value: '销量',
        isActive: false
      },
      {
        id: 2,
        value: '价格',
        isActive: false
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(`options`, options);
  },
  handleTabsItemChange (e) {
    console.log(`handleTabsItemChange`, e);
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.map(item => item.id === index ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  }


})