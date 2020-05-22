// pages/AreUOK/moreTest/moreTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '抑郁自查'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '焦虑自查'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '体征自查'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: 'test1'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: 'test2'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: 'test3'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: 'test4'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: 'test5'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: 'test6'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: 'test7'
    }],
    gridCol:3,
    skin: false
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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