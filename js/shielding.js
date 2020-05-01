



var BlackSubscriber = {
	objId:$('.shielding').attr('data-id'),
	getBlackSEle:null
}
$('.shielding').on('click',function(){
	BlackSubscriber.getBlackSEle = $(this);
	if(islogin() == true){
		blackPullOperation()
	}else{
		var fns = new Array();
		    fns[0] = blackPullOperation;
		    //获取所有id遍历调用
		    openLoginWindow(fns);
	}
	
})

function blackPullOperation(){
	if(BlackSubscriber.getBlackSEle.attr('data-shielding') == 1){
		pageConfirm(messagesWeb.shieldingFunction.pop_prompt_copy,'',confirmBlack)
		// if($('#lanage').val() == "en"){
			$('.pop-up-confirm').addClass('shielding-pop-confirm')
		// }
	}else{
		cancelBlack()
	}
}

function confirmBlack(){
		$.ajax({
			type: "GET",
	        xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
	        headers: {
	            "X-Requested-With": "XMLHttpRequest"
	        },
	        url: proMyZDomain + '/block/saveBlock?blockId=' + BlackSubscriber.objId + '&blockType=0',
	        dataType: "json",
	        contentType:"application/json",
			success:function(data){
				if(data.code == 0){
					// 屏蔽成功
					pageToastFail(messagesWeb.shieldingFunction.shielding_success);
					$('.shielding .shielding-show-text').html(messagesWeb.shieldingFunction.unblock);
					$('.shielding').attr('data-shielding','0');
				}
			}      	
		})
}
function cancelBlack(){
	
		$.ajax({
			type: "GET",
	        xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
	        headers: {
	            "X-Requested-With": "XMLHttpRequest"
	        },
	        url: proMyZDomain + '/block/saveBlock?blockId=' + BlackSubscriber.objId,
	        dataType: "json",
			success:function(data){
				if(data.code == 0){
					// 已取消屏蔽
					pageToastFail(messagesWeb.shieldingFunction.unblocked);
					$('.shielding .shielding-show-text').html(messagesWeb.shieldingFunction.shielded_ta);
					$('.shielding').attr('data-shielding','1');
				}
			}      	
		})
}
function getUserPullblackState(blackSubscriberId){
	$.ajax({
		type: "GET",
        url: proMyZDomain + '/block/isBlock?blockId=' + blackSubscriberId,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        dataType: "json",
        contentType:"application/json",
		success:function(data){
			if(data.code == 0){
				var PullblackStatus = data.data;
				settingPullblack(PullblackStatus);
			}
		}       	
	})
}

function settingPullblack(PullblackStatus){
	if(PullblackStatus){
		// 未屏蔽状态
		$('.shielding .shielding-show-text').text(messagesWeb.shieldingFunction.unblock);
		$('.shielding').attr('data-shielding','0');
		
	}else{
		// 屏蔽状态
		$('.shielding .shielding-show-text').text(messagesWeb.shieldingFunction.shielded_ta);
		$('.shielding').attr('data-shielding','1');
	}
}
var blackSubscriberId = $('.shielding').attr('data-id');
getUserPullblackState(blackSubscriberId)