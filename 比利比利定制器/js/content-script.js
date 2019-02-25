// (function() {
// 	console.log('这是 simple-chrome-plugin-demo 的content-script！');
// 	// console.log('这是jquery',$("#app").hide())
// 	$("#app").children(".bili-wrapper").children("#chief_recommend").hide();
// })()
// // $("#app").hide();
// console.log($('body'))
// console.log(JSON.parse(localStorage.getItem('chenyu')))
// var a = 1
// function xxx(e){
//   callback(2)
// }
// console.log(xxx(4))
// console.log(a)
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  var upname = JSON.parse(request.cmd)
  var $shouye = $("#app").children(".bili-wrapper").children("#chief_recommend").children(".recommend-module").children("div")
  // console.log($shouye)
  // console.log($("#app").children(".bili-wrapper").children("#chief_recommend").children(".recommend-module").children("div"))
  $shouye.each(function(index,value){
    var $div = $(value)
    var upmingcheng = $div.find(".author").html().replace("up主：","")
    console.log(upmingcheng)
    $.each(upname,function(i,v){
      if(upmingcheng == v){
        $div.hide()
      }
    })
  })
})