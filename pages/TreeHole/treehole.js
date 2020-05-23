// pages/TreeHole/treehole.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    inputComment:"",
    datalist:[{
      id:1,
      url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      name:'守护小甜心',
      content:'今天的ddl好多，好辛苦QAQ',
      time:'2020年5月4日',
      comments:[{
        name:'UZIQAQ',
        comment:'加油鸭不要泄气呀！'  
      },
      {
        name:'G2大魔王',
        comment:'同意楼上！'
      }]
    },{
      id:2,
      url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
      name:'kaller小妹妹',
      content:'不开心，生活好无望',
      time:'2020年5月4日',
      comments:[{
        name:'UZIQAQ',
        comment:'怎么了？'  
      },
      {
        name:'小魏小魏 啥也不会',
        comment:'你没事吧'
      }]
    },{
      id:3,
      url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
      name:'mayumi第一大粉丝',
      time:'2020年5月4日',
      content:'在最黑暗的那段人生，是我自己把自己拉出深渊。没有那个人，我就做那个人。——中岛美嘉',
      comments:[]
    },{
      id:4,
        url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
        name:'ig三叉戟戟把',
        content:'冒个泡',
        time:'2020年5月4日',
        comments:[{
          name:'喻文波波没有芋泥',
          comment:'顶一下楼主'  
        },
      ]
      }
  ],
  userInfo:{
    avatarUrl:"../../images/share.png",//用户头像
    nickName:"请先登录",//用户昵称
  },
  inputReady: false,
  moment:true,
  reply:false
  },
  attached() {
    let that=this
    wx.getUserInfo({
      complete: (res) => {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]:res.userInfo.nickName,
        })
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput:function(e){
      this.setData({
        inputComment: e.detail.value
      })
    },
    pl:function(e){
      console.log(e);
      this.setData({
        inputReady: true,
        reply: true,
        moment:false
      })
    },
    addReply:function(e){
            let that=this;
      let dList=this.data.datalist;
      let item={
        name:this.data.userInfo.nickName,
        comment:this.data.inputComment,
      };
      dList[2].comments.push(item);
      that.setData({
        datalist:dList
      });
      setTimeout(function(){
        that.setData({
          inputComment: ""
        })
      },1000)
    },
    addMoment:function(e){
      console.log('111');
      let that=this;
      that.setData({
        inputReady: true,
        reply: false,
        moment: true
      })
      let dList=this.data.datalist;
      let item={
        id:dList.length,
        url:this.data.userInfo.avatarUrl,
        name:this.data.userInfo.nickName,
        time:'2020年5月23日',
        content:this.data.inputComment,
      };
      console.log('222');
      dList.push(item);
      that.setData({
        datalist:dList
      });

      setTimeout(function(){
        that.setData({
          inputComment: ""
        })
      },1000)
    },
    update:function(){
      wx.cloud.init({
        env: 'xinqing-wnqo5',
      })
      const db = wx.cloud.database()
      const _ = db.command
      
      const result = db.collection('moments').add({
        data: {
          _id: '123', // 用 {openid} 变量，后台会自动替换为当前用户 openid
          anonymous: true,
          content:"晚安世界！",
          due:"",
          like:2,
        },
      })
      
      console.log('创建结果', result)
    },
    dz:function(e){
      console.log(e)
    },
  }
})
