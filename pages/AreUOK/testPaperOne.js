// pages/AreUOK/testPaperOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [{
      name: '几乎没有'
    }, {
      name: '有时有'
    }, {
      name: '大部分时间有'
    }, {
      name: '绝大部分时间有'
    }, ],
    step:0,
    quesList: [
      {
        num:0,
        ques:'我觉得比平常容易紧张或着急'
      },{
        num:0,
        ques:'我无缘无故地感到害怕'
      }
    ]
  },
  chooseLevel:function(e){
    console.log(e)
    this.setData({
      ['quesList['+e.currentTarget.dataset.idx+'].num']: e.currentTarget.dataset.level-1
    })
  },
  prevQuestion:function(e){
    this.setData({
      step:this.data.step>0? this.data.step-1 : 0  
    })
  },
  nextQuestion:function(e){
    this.setData({
      step:this.data.step == this.data.numList.length - 1 ? this.data.step : this.data.step + 1
    })
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