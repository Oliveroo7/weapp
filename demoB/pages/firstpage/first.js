Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义text
    text:"this is text",
    buttonTxt:"this is default button",
    show : false,
    news : ['a','b','c']
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
    
  },
  btnClick:function(){
    console.log("点击primary")
    // define the value of the button
    var isShow = this.data.show;
    // fefine the news data
    var newsData = this.data.news
    // delete the data in news
    newsData.shift()

    console.log(isShow)
    this.setData({ text: "click the primary button",show: !isShow,news:newsData})


  },
})