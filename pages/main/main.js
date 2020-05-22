const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data:{
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  methods: {
    callon:function() {
      wx.makePhoneCall({
        phoneNumber: '01082951332',
      })
    },
    toMovie:function () {
      wx.navigateTo({
        url: '../Emotion/movie/movie'
      })
    },
    toMusic:function () {
      wx.navigateTo({
        url: '../Emotion/music/music'
      })
    },
    toScience:function(){
      wx.navigateTo({
        url: '../science/science'
      })
    },
    toTestOne:function(){
      wx.navigateTo({
        url: '../AreUOK/testPaper1/testPaperOne',
      })
    },
    toTestTwo:function(){
      wx.navigateTo({
        url: '../AreUOK/testPaper2/testPaperTwo',
      })
    },
    toTestThree:function(){
      wx.navigateTo({
        url: '../AreUOK/testPaper3/testPaperThree',
      })
    }
  }
});