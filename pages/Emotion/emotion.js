// pages/Emotion/emotion.js
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    top: '',
    left: ''
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  methods:{
    Movie:function(e){
      wx.navigateTo({
        url: './movie/movie',
      })
    },
    Music:function(e){
      wx.navigateTo({
        url: './music/music',
      })
    },
    viewTouchMove: function (e) {
      const widthHalf = app.globalData.width / 2;
      console.log(widthHalf)
      console.log(e.touches[0].clientX);
  
      this.setData({
        left: e.touches[0].clientX - 30,
        top: e.touches[0].clientY - 30
      })
  
      if (e.touches[0].clientX < 0) {
        e.touches[0].clientX = 0;
      };
  
      //这里要注意一下条件：位移X > 宽度-图片宽度
      if (e.touches[0].clientX > app.globalData.width - 60) {
        e.touches[0].clientX = app.globalData.width - 60;
      };
  
      if (app.globalData.heighttwo - e.touches[0].clientY - 35 <= 0) {
        e.touches[0].clientY = app.globalData.heighttwo -35;
  
      };
  
      if (e.touches[0].clientY < 0) {
        e.touches[0].clientY = 0;
      };
      this.setData({
        left: e.touches[0].clientX-10 ,
        top: e.touches[0].clientY-30
      })
    },
    //拖拽结束后的事件
    viewTouchend(e) {
      
      const widthHalf = app.globalData.width / 2;
  
      if (e.changedTouches[0].clientX > widthHalf) {
        console.log("我是右边")
        e.changedTouches[0].clientX = app.globalData.width - 60;
      }
  
      if (e.changedTouches[0].clientX < widthHalf) {
        console.log("我是左边")
        e.changedTouches[0].clientX = 0;
      }
      this.setData({
        left: e.changedTouches[0].clientX - 0,
      
      })
    },
  
    /* 添加授权判断 */
    //star 修改 点击不要赠送 
    onClose() {
      const that = this;
      console.log('点击关闭我')
      that.setData({
        showUserInfo: false
      })
    },
  }
})