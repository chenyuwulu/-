const $top_header = $("#app").children(".bili-header-m") //获取顶部的dom元素
const $nav_menu = $top_header.children(".nav-menu")
//顶部元素和主体元素的分界线

const $wrapper = $("#app").children(".bili-wrapper") //获取中间主要内容的dom元素
const $chief_recommend = $wrapper.children("#chief_recommend") //获取到首页推荐dom
const $recommend_module = $chief_recommend.children(".recommend-module") //获取到首页推荐右侧dom
const $prev = $recommend_module.children(".prev") //昨日按钮
const $next = $recommend_module.children(".next") //一周按钮

const $home_popularize = $wrapper.children("#home_popularize")
const $bili_live = $wrapper.children("#bili_live")

// $bili_live.find(".gg-floor-module").hide()

// $wrapper.children("#home_popularize").hide()
// console.log('测试jquery',$("#app").children(".bili-wrapper").children("#home_popularize").children(".l-con"))
function recommend_module_clear(x){
  $recommend_module.children("div").each(function(index,value){
    var $div = $(value)
    var upmingcheng = $div.find(".author").html().replace("up主：","")
    console.log(upmingcheng)
    $.each(x,function(i,v){
      if(upmingcheng == v){
        $div.hide()
      }
    })
  })
}//用于将在列表内的成员去除
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  upname = JSON.parse(request.cmd)
  recommend_module_clear(upname)
  $prev.click((e) => {
    // recommend_module_clear(upname)
    console.log(this)
  })//昨日按钮点击触发
  $next.click((e) => {
    console.log(this)
    // recommend_module_clear(upname)
  })//一周按钮点击触发
})