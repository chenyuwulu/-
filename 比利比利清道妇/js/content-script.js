// (function() {
// 	console.log('这是 simple-chrome-plugin-demo 的content-script！');
// 	// console.log('这是jquery',$("#app").hide())
// 	$("#app").children(".bili-wrapper").children("#chief_recommend").hide();
// })()
// // $("#app").hide();
// console.log($('body'))
// console.log(JSON.parse(localStorage.getItem('chenyu')))
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  var upname = JSON.parse(request.cmd)
  var $shouye = $("#app").children(".bili-wrapper").children("#chief_recommend").children(".recommend-module").children("div")
  // console.log($shouye)
  // console.log($("#app").children(".bili-wrapper").children("#chief_recommend").children(".recommend-module").children("div"))
  $shouye.each(function(index,value){
    var $div = $(value)
    var upmingcheng = $div.find(".author").html().replace("up主：","")
    //这里干你想干的事情
    //用$(this)可以访问正在循环的元素
    console.log(upmingcheng)
    $.each(upname,function(i,v){
      if(upmingcheng == v){
        $div.hide()
      }
    })
  })
  // $.each($shouye,function(index,$value){
  //   // if($shouye[index].children('.author').val())
  //   console.log($value.children('.author').val())
  // })
  // console.log($("#app").children(".bili-wrapper").children("#chief_recommend").children(".recommend-module").children("div"))
})