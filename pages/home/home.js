/*
 * @Description: 这是***页面
 * @Date: 2021-03-05 09:38:03
 * @Author: shuimei
 * @LastEditTime: 2021-07-16 10:35:13
 */
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'chenshuimei',
    age: 16,
    students: [
      { id: 1, name: '小明', age: 12 },
      { id: 2, name: 'ctyyg', age: 22 },
      { id: 3, name: '小花', age: 32 },
      { id: 4, name: '花花1111', age: 45 },
    ],
    counter: 0
  },
  handerBtn1 () {
    console.log('点击了+');
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handerBtn2 () {
    console.log('点击了-');
    this.setData({
      counter: this.data.counter - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //第二次提交
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})