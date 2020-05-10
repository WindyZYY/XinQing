// miniprogram/pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieSrc:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/movie/【微电影】《它》大学抑郁症患者的内心斗争.mp4',
    playlist:[{
      id:"1",
      corverImg:"",
      src:"cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/movie/什么是抑郁症？3分钟动画告诉你.mp4",
      title:'什么是抑郁症？3分钟动画告诉你.mp4'
    },{
      id:"2",
      corverImg:"",
      src:"cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/movie/动画短片《名为抑郁症的黑狗》世界卫生组织科普.mp4",
      title:'《名为抑郁症的黑狗》.mp4'
    },{
      id:"3",
      corverImg:"",
      src:"cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/movie/【微电影】《它》大学抑郁症患者的内心斗争.mp4",
      title:'【微电影】《它》.mp4'
    },{
      id:"4",
      corverImg:"",
      src:"cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/movie/【动画短片】抑郁与自杀中的心理斗争！_动画学术趴.mp4",
      title:'抑郁与自杀中的心理斗争.mp4'
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  changeList:function (e) {
    console.log(e)
    this.setData({
      movieSrc: e.currentTarget.dataset.link
    })
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