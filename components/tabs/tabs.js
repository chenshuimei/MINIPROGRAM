/*
 * @Description: 这是***页面
 * @Date: 2022-08-26 15:36:32
 * @Author: shuimei
 * @LastEditTime: 2022-08-26 16:03:23
 */
// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab
    handleItemTap (e) {
      const { index } = e.currentTarget.dataset
      // 触发父组件中的事件
      this.triggerEvent("tabsItemChange", { index: index })
    }
  }
})
