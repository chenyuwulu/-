chrome.runtime.onInstalled.addListener(function(ex){//程序第一次安装或更新时会执行此方法
	console.info('这里是QQ图标的this',this)
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([{
				conditions: [
					// 只有打开百度才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
		}])//添加规则调用
	})//移除规则后调用
})//这个是原版的
chrome.runtime.getBackgroundPage(function (eee){
	console.info('获取到当前的后台页面',eee)
})//获取后台页面的window对象
console.info('这个是获取清单文件详情',chrome.runtime.getManifest())

























