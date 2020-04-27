/**
 * 1人 
 * 22团队 
 * 28收藏夹
 */

/**
 * 0 未关注 ；
 * 1 已关注 ；
 * 2 互相关注 ；
 * 3 粉丝
 */


  // objParentsEle.on('click', '.attention, .js-attention', function() {
  //   var followBtn = $(this);
  //   var isUnFollowStatus = createFollow.followstatus(followBtn);
  //   var succesCb;
  //   var errorCb;
  //   var Follow;
  //   var isLogined = islogin();
  //   var objectType = 1;
  //   var followBtnParent = followBtn.parents(".author-info");
  //   var cardLayerAttentionParent = followBtn.parents(".author-info-card");
  //   var objectId;
  //   if (followBtnParent.length > 0) {
  //       objectId = followBtnParent.attr("data-id");
  //       var dataType = followBtnParent.attr("data-type");
  //       if(dataType){
  //           objectType = dataType;
  //       }
  //   } else if(cardLayerAttentionParent.length > 0){
  //       objectId = cardLayerAttentionParent.attr("data-id");
  //   }else {
  //       objectId = followBtn.attr("data-id");
  //       var dataType = followBtn.attr("data-type");
  //       if(dataType){
  //           objectType = dataType;
  //       }
  //   }

  //   if (isUnFollowStatus) {
  //       succesCb = function(followStatus) {

  //         objectType !== '28' ?  settingFollow(followStatus,followBtn) : typeof settingAlbumFollow === 'function' && settingAlbumFollow(followStatus,followBtn);
  //       }; //前端实现
  //       errorCb = function(msg) {
  //           pageToastFail(msg);
  //           cancelLoadingFocusDis(followBtn);
  //           if(followBtn.attr('data-val')){
  //               followBtn.val(followBtn.attr('data-val'))
  //           }
  //       }; //前端实现
  //   } else {
  //       succesCb = function(followStatus) {
  //         objectType !== '28' ?  settingFollow(followStatus,followBtn) : typeof settingAlbumFollow === 'function' && settingAlbumFollow(followStatus,followBtn);

  //       }; //前端实现
  //       errorCb = function(msg) {
  //           pageToastFail(msg);
  //           cancelLoadingFocusDis(followBtn);
  //           if(followBtn.attr('data-val')){
  //               followBtn.val(followBtn.attr('data-val'))
  //           }
  //       }; //前端实现
  //   }
    
  //   var caozuo = function () {
  //       Follow = new createFollow(objectId, objectType, succesCb, errorCb, isUnFollowStatus);
  //       Follow.doOrCancelFollow();
  //   }

  //   if (isLogined) {
  //       loadingFocusDis(followBtn)
  //       caozuo()
  //   } else {
  //       toOpenLoginWindow(caozuo)
  //   }
  // })

// var settingFollow = function (followStatus,followBtn) {
//   if (followStatus == 1) {
//       followBtn.addClass('btn-default-secondary').addClass('following')
//           .removeClass('notfollow').removeClass('btn-default-main')
//       followBtn.attr('value',messagesWeb.common_followed);
//   } else if (followStatus == 2) {
//       followBtn.addClass('btn-default-secondary').removeClass('following')
//           .removeClass('notfollow').removeClass('btn-default-main')
//       followBtn.attr('value',messagesWeb.common_mutual_concern);
//   } else if (followStatus == 3 || followStatus == 0) {
//       followBtn.removeClass('btn-default-secondary').addClass('btn-default-main')
//           .addClass('notfollow').removeClass('following')
//       followBtn.attr('value',messagesWeb.common_follow)
//   } else {
//       // 不存在这个关注状态
//       pageToastFail(messagesWeb.common_no_state_concern);
//   }
//   cancelLoadingFocusDis(followBtn);
// }

var ZclickFollowLoginedUpldateOtherStatusCb = new Array();

function toOpenLoginWindow(fn){
    var fns = new Array();
    fns[0] = fn;
    
    fns.push(function() {
      if(ZclickFollowLoginedUpldateOtherStatusCb instanceof Array && ZclickFollowLoginedUpldateOtherStatusCb.length){
        $.each(ZclickFollowLoginedUpldateOtherStatusCb, function (index, fn) {
          fn();
        });
      }
    })
    openLoginWindow(fns);
}

//关注
$(function () {
  $('.btn-area,.designer_interested,.js-attention-parents').on('click', '.attention', function() {
    attentionClickAfterCaozuo($(this), null, function() {
      if(ZclickFollowLoginedUpldateOtherStatusCb instanceof Array && ZclickFollowLoginedUpldateOtherStatusCb.length){
        $.each(ZclickFollowLoginedUpldateOtherStatusCb, function (index, fn) {
          fn();
        });
      }
    })
  })

    $('.btn-area,.designer_interested').on('click', '.private-letter', function() {
        var privateBtn = $(this);
        var followBtnParent = privateBtn.parents(".author-info");
        var objectId;
        var objectName;
        if (followBtnParent.length > 0) {
            objectId = followBtnParent.attr("data-id");
            objectName = followBtnParent.attr("data-name");
        } else {
            objectId = privateBtn.attr("data-id");
            objectName = privateBtn.attr("data-name");
        }

        function openPrivateWindow() {
            var privatePop = new PrivatePOP({memberId:objectId,memberName:objectName});
            privatePop.openPrivateWindow()
        }

        if(islogin()){
            openPrivateWindow()
        }else{
            toOpenLoginWindow(openPrivateWindow);
        }
    })
})
