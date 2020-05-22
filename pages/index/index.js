Page({
  data: {
    PageCur: 'main'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '心晴--让裂缝中洒满阳光',
      imageUrl: '/images/share.jpg',
      path: '/pages/loading/loading'
    }
  },
})