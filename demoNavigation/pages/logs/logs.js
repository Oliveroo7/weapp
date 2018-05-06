//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'jeffrey'
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    wx.showNavigationBarLoading({
      
    })
  }
})
