// miniprogram/pages/music/music.js
Page({
  /**
   * 页面的初始数据
   */  

  data: {
    playlist:[{
      id:1,title:' 棕发少女',singer:'Claude Debussy',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Claude Debussy - 棕发少女.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/1.JPG'
    },
    {
      id:2,title:'离别曲',singer:'Frédéric François Chopin ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Frédéric François Chopin - 离别曲.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/2.JPG'
    },{
      id:3,title:'Variations on the Kanon By Pachelbel',singer:'George Winston',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/George Winston - Variations on the Kanon By Pachelbel.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/3.JPG'
    },{
      id:4,title:'Lagrima (Prelude)',singer:'Julian Bream ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Julian Bream - Lagrima (Prelude).mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/4.JPG'
    },{
      id:5,title:'Adelita',singer:'Kurt Schneeweiss ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Kurt Schneeweiss - Adelita.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/5.JPG'
    },
    {
      id:6,title:'Cache-cache',singer:'Ludovico Einaudi',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludovico Einaudi - Cache-cache.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/6.JPG'
    },{
      id:7,title:'Estudio 5',singer:'Lars Hannibal ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Lars Hannibal - Estudio 5.ncm',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/7.JPG'
    },{
      id:8,title:'Lorigine Nascosta',singer:'Ludovico Einaudi ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludovico Einaudi - Lorigine Nascosta.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/8.JPG'
    },{
      id:9,title:'Primavera',singer:'Ludovico Einaudi ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludovico Einaudi - Primavera.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/9.JPG'
    },
    {
      id:10,title:'Stella Del Mattino',singer:'Ludovico Einaudi',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludovico Einaudi - Stella Del Mattino.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/10.JPG'
    },{
      id:11,title:' Moonlight Sonata',singer:'Ludwig van Beethoven ',
      src:'	cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludwig van Beethoven - Moonlight Sonata.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/11.JPG'
    },{
      id:12,title:'悲怆奏鸣曲',singer:'Ludwig van Beethoven',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Ludwig van Beethoven - 悲怆奏鸣曲.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/12.JPG'
    },{
      id:13,title:' Piano Concerto No.23 in A',singer:'Vladimir Horowitz ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Vladimir Horowitz,Orchestra Del Teatro Alla Scala di Milano,Carlo Maria Giulini - Piano Concerto No.23 in A, K.488：2. Adagio.ncm',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/13.JPG'
    },
    {
      id:14,title:'小星星变奏曲',singer:'Wolfgang Amadeus Mozart',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Wolfgang Amadeus Mozart - 小星星变奏曲.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/14.JPG'
    },{
      id:15,title:'Liebesleid',singer:'Yo-Yo Ma ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/Yo-Yo Ma - Liebesleid.ncm',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/15.JPG'
    },{
      id:16,title:' Andantino In E Flat, K236',singer:'傅聪',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/傅聪 - Andantino In E Flat, K236.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/16.JPG'
    },{
      id:17,title:' Piano Sonata No.1 in C, K.279：2. Andante',singer:'内田光子',
      src:'	cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/内田光子 - Piano Sonata No.1 in C, K.279：2. Andante.ncm',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/17.JPG'
    },{
      id:18,title:'绿袖子',singer:'爱尔兰民谣 ',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/爱尔兰民谣 - 绿袖子.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/18.JPG'
    },
    {
      id:19,title:'Piano Sonata No.10 In C Major, K.330：2. Andante cantabile',singer:'郎朗 ',
      src:'	cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/郎朗 - Piano Sonata No.10 In C Major, K.330：2. Andante cantabile.ncm',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/19.JPG'
    },{
      id:20,title:'棕发少女3',singer:'肖邦',
      src:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/music/George Winston - Variations on the Kanon By Pachelbel.mp3',
      coverImgUrl:'cloud://xinqing-wnqo5.7869-xinqing-wnqo5-1302060285/jpg/20.JPG'
    }
  
  ],    
  item:0,
  tab:0,
  state:'paused',
  playIndex:0,
  play:{
    currentTime:'00:00',
    duration:'00:00',
    percent:0,
    title:'',
    singer:'',
    coverImgUrl:'./img/1.png',
  },
  },
  audioCtx:null,
  changeTabItem:function(e){
    this.setData({item:e.target.dataset.item})
  },
  changeTab:function(e){
    this.setData({tab:e.detail.current})
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
this.audioCtx=wx.createInnerAudioContext();
this.setMusic(0);
var that=this;
this.audioCtx.onError(()=> {
  console.log('播放失败：'+this.audioCtx.src)
})
this.audioCtx.onEnded(()=>{
  this.next();
})
this.audioCtx.onPlay(()=>{})
this.audioCtx.onTimeUpdate(()=>{
  console.log("onTimeUpdate1");
 that.setData({
    'play.duration':formatTime(that.audioCtx.duration),
    'play.currentTime':formatTime(that.audioCtx.currentTime),
    'play.percent':that.audioCtx.currentTime/that.audioCtx.duration*100
  })
})

function formatTime(time) {
  var minute = Math.floor(time/60)%60;
  var second = Math.floor(time)%60
  return (minute<10?'0'+minute:minute)+":"+
  (second<10?'0'+second:second)
  
}

this.setMusic(0)
  },

  sliderChange:function(e){
    
this.pause()
var second = e.detail.value*this.audioCtx.duration/100
this.audioCtx.seek(second)


setTimeout(
  this.play.bind(this),300 
)



  },
  setMusic:function (index) {
    var music=this.data.playlist[index]
    this.audioCtx.src=music.src
    this.setData({
      playIndex:index,
      'play.title':music.title,
      'play.singer':music.singer,
      'play.coverImgUrl':music.coverImgUrl,
      'play.currentTime':'00:00',
      'play.percent':0
    })
  },
  play: function () {
    this.audioCtx.play()
    this.setData({state:'running'})
  },
  pause:function(){
this.audioCtx.pause()
this.setData({state:'paused'})
  },
  next:function(){
    var index=this.data.playIndex>=this.data.playlist.length-1?0:this.data.playIndex+1
    this.setMusic(index)
    if(this.data.state=="running"){
      this.pause();
      setTimeout(this.play.bind(this),1000);
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  change:function (e) {
    this.setMusic(e.currentTarget.dataset.index)
    this.play()
  },
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