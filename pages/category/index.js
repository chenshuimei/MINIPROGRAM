/*
 * @Description: 这是分类页面
 * @Date: 2022-05-24 23:59:30
 * @Author: shuimei
 * @LastEditTime: 2022-08-25 18:04:13
 */
import { request } from "../../request/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letfMenuList: [], // 左侧菜单数据
    rightContent: [], // 右侧商品数据
    currentIndex: 0, // 当前被选中菜单索引
  },

  // 全部分类数据
  categoryList: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryList()
  },
  // 获取分类列表
  getCategoryList () {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories' }).then(res => {
      console.log(`res`, res);
      // this.setData({ categoryList: res.data.message })
      this.categoryList = res.data.message;
      let letfMenuList = this.categoryList.map(item => item.cat_name)
      let rightContent = this.categoryList[0].children
      this.setData({ letfMenuList, rightContent })
    })
  },
  // 左侧菜单点击事件
  handleItemTap (e) {
    console.log(`e`, e);
    const { index } = e.currentTarget.dataset
    this.setData({ currentIndex: index })
  }
})