chrome.runtime.onInstalled.addListener(function(ex){
	console.log('这里是QQ图标的',this)
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开百度才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
})//这个是原版的
chrome.runtime.getBackgroundPage(function (eee){
	console.log(eee)
})//获取后台页面的window对象
console.info('这个是获取清单文件详情',chrome.runtime.getManifest())
