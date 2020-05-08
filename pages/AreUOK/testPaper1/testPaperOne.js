// pages/AreUOK/testPaperOne.js
const app = getApp();
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
      },{
        num:0,
        ques:'我容易心里烦乱或觉得惊恐'
      },{
        num:0,
        ques:'我觉得我可能将要发疯'
      },{
        num:0,
        ques:'我觉得一切都好，也不会发生什么不幸'
      },{
        num:0,
        ques:'我手脚发抖打颤'
      },{
        num:0,
        ques:'我因为头痛、颈痛和背痛而苦恼'
      },{
        num:0,
        ques:'我感到容易衰弱和疲乏'
      },{
        num:0,
        ques:'我心平气和，并且容易安静坐着'
      },{
        num:0,
        ques:'我觉得心跳得快'
      },{
        num:0,
        ques:'我因为一阵阵头晕而苦恼'
      },{
        num:0,
        ques:'我有晕倒发作，或者觉得要晕倒似的'
      },{
        num:0,
        ques:'我吸气呼气都感到很容易'
      },{
        num:0,
        ques:'我的手脚麻木和刺痛'
      },{
        num:0,
        ques:'我因为胃痛和消化不良而苦恼'
      },{
        num:0,
        ques:'我常常要小便'
      },{
        num:0,
        ques:'我的手脚常常是干燥温暖的'
      },{
        num:0,
        ques:'我脸红发热'
      },{
        num:0,
        ques:'我容易入睡并且一夜睡得很好'
      },{
        num:0,
        ques:'我做恶梦'
      }
    ],
    modalName:null,
    showRes:false,
    myscore:0
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
      if(i==5||i==9||i==13||i==17||i==19){
        score+=4-quesList[i].num;
      }else{
        score+=quesList[i].num+1;
      }
    }
    var that=this
    setTimeout(function(){
      that.setData({
        myscore: Math.floor(score*1.25)
      })
    },1000)
    this.showResult()
  },
  showResult:function(){
    console.log(this.data.myscore)
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