/*
 * @Description: 这是分类页面
 * @Date: 2022-05-24 23:59:30
 * @Author: shuimei
 * @LastEditTime: 2022-08-26 15:13:46
 */
import { request } from "../../request/index";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letfMenuList: [], // 左侧菜单数据
    rightContent: [], // 右侧商品数据
    currentIndex: 0, // 当前被选中菜单索引
    scrollTop: 0
  },

  // 全部分类数据
  categoryList: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取缓存
    const cates = wx.getStorageSync('cates')
    if (!cates) {
      this.getCategoryList()
    } else {
      // 判断是否过期，过期的话重新请求接口
      if (Date.now() - cates.time > 1000 * 10) {
        console.log(`时间过期`);
        this.getCategoryList()
      } else {
        console.log('时间没过期');
        this.categoryList = cates.data
        let letfMenuList = this.categoryList.map(item => item.cat_name)
        let rightContent = this.categoryList[0].children
        this.setData({ letfMenuList, rightContent })
      }
    }
  },
  // 获取分类列表
  async getCategoryList () {
    // request({ url: '/categories' }).then(res => {
    //   this.categoryList = res.data.message;
    //   // 设置缓存
    //   wx.setStorageSync('cates', { time: Date.now(), data: this.categoryList })

    //   let letfMenuList = this.categoryList.map(item => item.cat_name)
    //   let rightContent = this.categoryList[0].children
    //   this.setData({ letfMenuList, rightContent })
    // })

    // 使用async await方法
    const res = await request({ url: '/categories' });
    this.categoryList = res;
    // 设置缓存
    wx.setStorageSync('cates', { time: Date.now(), data: this.categoryList })

    let letfMenuList = this.categoryList.map(item => item.cat_name)
    let rightContent = this.categoryList[0].children
    this.setData({ letfMenuList, rightContent })

  },
  // 左侧菜单点击事件
  handleItemTap (e) {
    const { index } = e.currentTarget.dataset
    let rightContent = this.categoryList[index].children
    this.setData({ currentIndex: index, rightContent, scrollTop: 0 })
  }
})