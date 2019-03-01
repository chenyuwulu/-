
$(function() {
	get_upname_list()
})

$('#ceshi').click((e)=>{
	localStorage.setItem('chenyu',JSON.stringify({
			a:1,
			b:2
		})
	);
  // chrome.storage.sync.set({'chenyu': '123456789'}, function() {
  //   // 通知保存完成。
  //     console.log(chrome.storage.sync.get('chenyu'))
  // });
	// chrome.tabs.query({
	// 		active: true, 
	// 		currentWindow: true
	// 	}, 
	// 	function(tabs){
	// 	if(callback) callback(tabs.length ? tabs[0].id: null);
	// 	// console.log(tabs)
	// })
	// executeScriptToCurrentTab('document.body.style.backgroundColor="red";console.log(111111111)')
	// getCurrentTabId((tabId) =>{
	// 	chrome.tabs.executeScript(tabId, {
	// 		code: '$("#app").children(".bili-wrapper").children("#chief_recommend").hide();'
	// 	});
	// });
})

$('#getname').click((e)=>{
	console.log(JSON.parse(localStorage.getItem('chenyu')))
})

$('#remote').click((e)=>{
	localStorage.removeItem('upname')
	$("#tablede").html('');
})


$('#insert').click((e)=>{
	var name = $("#upname").val()
	set_upname(name)
	console.log($("#upname").val())
})


function set_upname(x) {
	var upname = localStorage.getItem('upname')
	let x_array = x.split(" ")
	if(upname){
		upname = JSON.parse(upname)
		if(x_array.length>0){
			$.each(x_array,function(index,value){
				var a =0
				$.each(upname,function(k,v){
					if(value ==v){
						// alert('已经有了')
						a=1
					}
				})
				if(a==0){
					upname.push(value)
					localStorage.setItem('upname', JSON.stringify(upname))
				}
			})
		} else{
			var a =0
			$.each(upname,function(k,v){
				if(value ==v){
					// alert('已经有了')
					a=1
				}
			})
			if(a==0){
				upname.push(value)
				localStorage.setItem('upname', JSON.stringify(upname))
			}
		}
	} else{
		upname = []
		if(x_array.length>0){
			$.each(x_array,function(index,value){
				upname.push(value)
			})
		} else{
			upname.push(x)
		}
		localStorage.setItem('upname', JSON.stringify(upname))
	}
	get_upname_list()
}

$(".deleteupname").live("click",function(){
	console.log(this.dataset.index)
	var upname = JSON.parse(localStorage.getItem('upname'))
	upname.splice(this.dataset.index,1)
	localStorage.setItem('upname', JSON.stringify(upname))
	get_upname_list()
})

function get_upname_list() {
	var upname = localStorage.getItem('upname')
	upname = JSON.parse(upname)
	var html =''
	$.each(upname,function(index,value){
		html+='<tr><td class="table-name">'+value+'</td><td><button data-index="'+ index +'" class="deleteupname">删除</button></td></tr>'
	})
	$("#tablede").html(html);
} //获取到本地存储里的up名字列表