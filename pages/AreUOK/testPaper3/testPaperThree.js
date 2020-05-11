// pages/AreUOK/testPaperThree.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [{
      name: '从无'
    }, {
      name: '很轻'
    }, {
      name: '中等'
    }, {
      name: '偏重'
    }, {
      name: '严重'
    } ],
    step:0,
    quesList: [
      {
        num:0,
        ques:'头痛'
      },{
        num:0,
        ques:'神经过敏，心中不踏实'
      },{
        num:0,
        ques:'头脑中有不必要的想法或字句盘旋'
      },{
        num:0,
        ques:'头晕或晕倒'
      },{
        num:0,
        ques:'对异性的兴趣减退'
      },{
        num:0,
        ques:'对旁人的责备求全'
      },{
        num:0,
        ques:'感到别人能控制我的思想'
      },{
        num:0,
        ques:'责怪别人制造麻烦'
      },{
        num:0,
        ques:'忘性大'
      },{
        num:0,
        ques:'担心自己的衣饰整齐及仪态的端正'
      },{
        num:0,
        ques:'容易烦恼和激动'
      },{
        num:0,
        ques:'胸痛'
      },{
        num:0,
        ques:'害怕空旷的场所或街道'
      },{
        num:0,
        ques:'感觉自己的精力下降，活动减慢'
      },{
        num:0,
        ques:'想结束自己的生命'
      },{
        num:0,
        ques:'听到旁人听不到的声音'
      },{
        num:0,
        ques:'发抖'
      },{
        num:0,
        ques:'感到大多数人都不可信任'
      },{
        num:0,
        ques:'胃口不好'
      },{
        num:0,
        ques:'容易哭泣'
      },{
        num:0,
        ques:'同异性相处时感到害羞不自在'
      },{
        num:0,
        ques:'感到受骗，中了圈套或有人想抓住自己'
      },{
        num:0,
        ques:'无缘无故地突然感到害怕'
      },{
        num:0,
        ques:'自己不能控制地大发脾气'
      },{
        num:0,
        ques:'怕单独出门'
      },{
        num:0,
        ques:'经常责怪自己'
      },{
        num:0,
        ques:'腰痛'
      },{
        num:0,
        ques:'感到难以完成任务'
      },{
        num:0,
        ques:'感到孤独'
      },{
        num:0,
        ques:'感到苦闷'
      },{
        num:0,
        ques:'过分担忧'
      },{
        num:0,
        ques:'对事物不感兴趣'
      },{
        num:0,
        ques:'感到害怕'
      },{
        num:0,
        ques:'你的感情容易受到伤害'
      },{
        num:0,
        ques:'旁人能知道你的私下想法'
      },{
        num:0,
        ques:'感到别人不理解你、不同情你'
      },{
        num:0,
        ques:'感到人们对你不友好，不喜欢你'
      },{
        num:0,
        ques:'做事必须做得很慢以保证做得正确'
      },{
        num:0,
        ques:'心跳得很厉害'
      },{
        num:0,
        ques:'恶心或胃部不舒服'
      },{
        num:0,
        ques:'感到比不上他人'
      },{
        num:0,
        ques:'肌肉酸痛'
      },{
        num:0,
        ques:'感到有人在监视你、谈论你'
      },{
        num:0,
        ques:'难以入睡'
      },{
        num:0,
        ques:'做事必须反复检查'
      },{
        num:0,
        ques:'难以做出决定'
      },{
        num:0,
        ques:'怕乘电车、公共汽车、地铁或火车'
      },{
        num:0,
        ques:'呼吸有困难'
      },{
        num:0,
        ques:'一阵阵发冷或发热'
      },{
        num:0,
        ques:'因为感到害怕而避开某些东西、场合或活动'
      },{
        num:0,
        ques:'脑子变空了'
      },{
        num:0,
        ques:'身体发麻或刺痛'
      },{
        num:0,
        ques:'喉咙有梗塞感'
      },{
        num:0,
        ques:'感到前途没有希望'
      },{
        num:0,
        ques:'不能集中注意力'
      },{
        num:0,
        ques:'感到身体的某一部分软弱无力'
      },{
        num:0,
        ques:'感到紧张或容易紧张'
      },{
        num:0,
        ques:'感到手或脚发重'
      },{
        num:0,
        ques:'想到死亡的事'
      },{
        num:0,
        ques:'吃得太多'
      },{
        num:0,
        ques:'当别人看着你或者谈论你的时候感到不自在'
      },{
        num:0,
        ques:'有一些不属于你自己的想法'
      },{
        num:0,
        ques:'有想打人或伤害他人的冲动'
      },{
        num:0,
        ques:'醒的太早'
      },{
        num:0,
        ques:'必须反复洗手、点数'
      },{
        num:0,
        ques:'睡得不稳不深'
      },{
        num:0,
        ques:'有想摔坏或破坏东西的想法'
      },{
        num:0,
        ques:'有一些别人没有的想法'
      },{
        num:0,
        ques:'感到对别人神经过敏'
      },{
        num:0,
        ques:'在商店或电影院等人多的地方感到不自在'
      },{
        num:0,
        ques:'感到任何事情都很困难'
      },{
        num:0,
        ques:'一阵阵恐惧或惊恐'
      },{
        num:0,
        ques:'感到公共场合吃东西很不舒服'
      },{
        num:0,
        ques:'经常与人争论'
      },{
        num:0,
        ques:'单独一人时神经很紧张'
      },{
        num:0,
        ques:'认为别人对你的成绩没有做出恰当的评价'
      },{
        num:0,
        ques:'即使和别人在一起也感到孤单'
      },{
        num:0,
        ques:'感到坐立不安心神不定'
      },{
        num:0,
        ques:'感到自己没有什么价值'
      },{
        num:0,
        ques:'感到熟悉的东西变成陌生或不像是真的'
      },{
        num:0,
        ques:'大叫或摔东西'
      },{
        num:0,
        ques:'害怕会在公共场合晕倒'
      },{
        num:0,
        ques:'感到别人想占你的便宜'
      },{
        num:0,
        ques:'为一些有关性的想法很苦恼'
      },{
        num:0,
        ques:'你认为应该为自己的过错而受到惩罚'
      },{
        num:0,
        ques:'感到很快把事情做完'
      },{
        num:0,
        ques:'感到自己的身体有严重问题'
      },{
        num:0,
        ques:'从未感到和其他人很亲近'
      },{
        num:0,
        ques:'感到自己有罪'
      },{
        num:0,
        ques:'感到自己的脑子有毛病'
      }
    ],
    modalName:null,
    showRes:false,
    showAnalysis:false,
    myscore:[],
    avgscore:0,
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
    var score=this.data.myscore;
    var quesList=this.data.quesList
    var avg=this.data.avgscore
    for(var i=0;i<quesList.length;i++){
      if([0,3,11,26,39,41,47,48,51,52,55,57].includes(i)){
        score[0]=score[0] ? score[0]+quesList[i].num : quesList[i].num;
      }else if([2,8,9,27,37,44,45,50,54,64].includes(i)){
        score[1]=score[1] ? score[1]+quesList[i].num : quesList[i].num;
      }else if([5,20,33,35,36,41,61,68,72].includes(i)){
        score[2]=score[2] ? score[2]+quesList[i].num : quesList[i].num;
      }else if([4,13,14,19,21,25,28,29,30,31,53,70,78].includes(i)){
        score[3]=score[3] ? score[3]+quesList[i].num : quesList[i].num;
      }else if([1,16,22,32,38,56,71,77,79,85].includes(i)){
        score[4]=score[4] ? score[4]+quesList[i].num : quesList[i].num;
      }else if([10,23,62,66,73,80].includes(i)){
        score[5]=score[5] ? score[5]+quesList[i].num : quesList[i].num;
      }else if([12,24,46,49,67,74,81].includes(i)){
        score[6]=score[6] ? score[6]+quesList[i].num : quesList[i].num;
      }else if([7,17,42,67,75,82].includes(i)){
        score[7]=score[7] ? score[7]+quesList[i].num : quesList[i].num;
      }else if([6,15,34,61,76,83,84,86,87,89].includes(i)){
        score[8]=score[8] ? score[8]+quesList[i].num : quesList[i].num;
      }else{
        score[9]=score[9] ? socre[9]+quesList[i].num : quesList[i].num;
      }
      avg+=quesList[i].num;
    }
    var that=this
    setTimeout(function(){
      that.setData({
        myscore: score,
        avgscore: (avg/90).toFixed(1)
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