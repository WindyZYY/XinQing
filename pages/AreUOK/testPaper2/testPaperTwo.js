// pages/AreUOK/testPaperTwo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [{
      name: '没有'
    }, {
      name: '轻度'
    }, {
      name: '中度'
    }, {
      name: '重度'
    }, ],
    step:0,
    quesList: [
      {
        num:0,
        ques:'你是否一直感到伤心或悲哀'
      },{
        num:0,
        ques:'你是否感到前景渺茫'
      },{
        num:0,
        ques:'你是否觉得自己没有价值或者自以为是个失败者'
      },{
        num:0,
        ques:'你是否觉得力不从心或自叹比不上别人'
      },{
        num:0,
        ques:'你是否对任何事都自责'
      },{
        num:0,
        ques:'你是否在做决定时犹豫不决'
      },{
        num:0,
        ques:'这段时间你是否一直处于愤怒和不满状态'
      },{
        num:0,
        ques:'你对事业、家庭、爱好或者朋友是否丧失了兴趣'
      },{
        num:0,
        ques:'你是否认为自己已衰老或失去魅力'
      },{
        num:0,
        ques:'你是否感到一蹶不振做事情毫无动力'
      },{
        num:0,
        ques:'你是否感觉食欲不振或情不自禁地暴饮暴食'
      },{
        num:0,
        ques:'你是否患有失眠症或整天感到体力不支、昏昏欲睡'
      },{
        num:0,
        ques:'你是否丧失了对性的兴趣'
      },{
        num:0,
        ques:'你是否经常担心自己的健康'
      },{
        num:0,
        ques:'你是否认为生存没有价值，或生不如死'
      },{
        num:0,
        ques:'你是否感到自己情绪不安'
      }
    ],
    modalName:null,
    showRes:false,
    showAnalysis:false,
    myscore:0,
    showScore:false,
    toggleDelay: false
  },
  chooseLevel:function(e){
    console.log(e)
    this.setData({
      ['quesList['+e.currentTarget.dataset.idx+'].num']: e.currentTarget.dataset.level
    })
  },
  prevQuestion:function(e){
    this.setData({
      step:this.data.step>0? this.data.step-1 : 0  
    })
  },
  nextQuestion:function(e){
    this.setData({
      step: this.data.step == this.data.quesList.length - 1 ? this.data.step : this.data.step + 1
    })
  },
  pushQuestion:function(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  getResult(e) {
    this.setData({
      modalName: null,
      showRes: true
    })
    var score=0
    var quesList=this.data.quesList
    for(var i=0;i<quesList.length;i++){
      score+=quesList[i].num;
    }
    var that=this
    setTimeout(function(){
      that.setData({
        myscore: Math.floor(score/45*100),
        showScore: true
      })
    },1000)
  },
  showResult:function(){
    console.log(this.data.myscore)
    this.setData({
      showAnalysis: true
    })
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
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