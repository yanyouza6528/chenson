'use strict';

/**
 * Created by yueqiuping on 1/27/17.
 */
//回复

function zShowLoginLayer() {
    doLoginWindow(function () {
        $('.expression-box .biaoqing').removeClass('biaoqing-disabled');
        $('.unlogin-textarea-wrap').remove();

        $.each($("#gbook_content li"), function (i, item) {
            if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
            }
        });
        if ($('#body').attr('data-id') === getUid()) {
            $("#gbook_content li").find('.gbook-delete').removeClass('hide');
        }
    });
}

function unloginCommentsTextarea() {
    var unlogined = '<div class="unlogin-textarea-wrap flex-center">\n  <button class="btn-default-main btn-current-small mr-10" onclick="zShowLoginLayer()">' + messagesWeb.logIn.login_copy + '</button>' + messagesWeb.gbook_login_tips + '\n  </div>';

    $('#detail-do-comment .pinlunt').append(unlogined);
    $('.expression-box .biaoqing').addClass('biaoqing-disabled');

    $("#gbook_content li").find('.comment-news').removeClass('hide');
    $("#gbook_content li").find('.comment-report').removeClass('hide');
    $("#gbook_content li").find('.gbook-delete').addClass('hide');
}

function loginedUpdateCommentsTextarea() {
  $('.expression-box .biaoqing').removeClass('biaoqing-disabled');
  $('.unlogin-textarea-wrap').remove()
  $.each($("#gbook_content li"),function(i,item){
    if($(item).attr('data-member-id') == getUid()){
      $("#gbook_content li").eq(i).find('.comment-news, .comment-report').addClass('hide')
      $("#gbook_content li").eq(i).find('.gbook-delete').removeClass('hide');
    }
  })
}

$(function () {
    var ZcoolGbook = {

        PageSize: 10,

        init: function init() {
            $('#detail-do-comment .textarea-style').initTextareaStyle({
                height: 60
            });
        },
        getMemberGbook: function getMemberGbook() {
            var memberId = $('#body').attr('data-id');
            var recentOffset = $('.comment-box').find('#gbook_content_wrap > ul > li').length || 0;
            $.ajax({
                type: 'GET',
                url: proMainZDomain + '/u/' + memberId + '/getGbookDetail',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                dataType: 'json',
                data: { 'offset': recentOffset },
                success: function success(result) {
                    if (result.offset == 0) {
                        var allData = {
                            total: result.total,
                            profileFlag: result.profileFlag
                        };

                        var allHtml = template('all_gbook_content_templ', allData);
                        $('#all_gbook_content').append(allHtml);
                        $('#all_gbook_content .commentcon li').addClass('isFadeIn');
                    }

                    if (result.total && result.total > 0) {
                        var offset = result.offset + ZcoolGbook.PageSize;
                        var data = {
                            result: result.data,
                            profileFlag: result.profileFlag
                        };

                        var html = template('gbook_content_templ', data);
                        $('#gbook_content').append(html).show();
                        $('#gbook_content li').addClass('isFadeIn');
                        $.each($("#gbook_content li"), function (i, item) {
                            if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                                $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                                $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
                            }
                        });
                        if (result.total > offset) {
                            $('.more-gbook-div').removeClass('hide');
                        } else {
                            $('.more-gbook-div').addClass('hide');
                        }
                    }
                }
            });
        },

        replyGbookListen: function replyGbookListen() {
            $('.comment-box').on('click', '.gbook_reply', function () {
                var _this = $(this);
                if ($(this).hasClass('btn-default-main') && !$(this).attr('disabled')) {
                    var gbookReplyHasBindPhoneCb = function gbookReplyHasBindPhoneCb() {
                        if (countPlace < 0) {
                            pageToastFail(messagesWeb.textFieldPrompt.character_limit);
                            return false;
                        } else {
                            var fn = ZcoolGbook.replyGoobk;
                        }

                        if (content.length <= 0) {
                            //   回复内容不能为空
                            pageToastFail(messagesWeb.comments.reply_not_empty);
                            return;
                        }

                        if (islogin()) {
                            fn(content, originalId, memberId, _this);
                            return;
                        }

                        toOpenLoginWindow(function () {
                            fn(content, originalId, memberId, _this);
                            ZcoolGbook.loginCb()
                        });
                    };

                    var parentDom = $(this).parents('.gbook-list-box');
                    var content = parentDom.find('textarea').val();
                    var originalId = parentDom.data('id');
                    var memberId = $("#body").data('id');
                    var countPlace = parseInt(parentDom.find('textarea').siblings('.count').html());
                    showRemindBindLayer(gbookReplyHasBindPhoneCb);
                }
            });
        },

        replyGoobk: function replyGoobk(content, originalId, memberId, thisDom) {
            $(thisDom).html(messagesWeb.common_submitting).attr('disabled', true);
            $.each($("#gbook_content li"), function (i, item) {
                if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                    $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                    $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
                }
            });
            if ($(thisDom).parents('li').find('.gbook-list-box').attr('data-member-id') == getUid()) {
                $(thisDom).parents('#detail-reply-comment').hide();
                $(thisDom).parents('li').find('.comment-news').addClass('hide');
                $(thisDom).parents('li').find('.comment-report').addClass('hide');
                pageToastFail(messagesWeb.comments.not_reply_oneself);
                return;
            }
            $.ajax({
                url: proMyZDomain + '/gbook/replyGbook',
                type: 'post',
                data: { 'originalId': originalId, 'gbookContent': content, 'toMemberId': memberId },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                success: function success(result) {
                    if (result.code == 0) {
                        ZcoolGbook.addGbookStyle(result.data);
                        ZcoolGbook.initReplyInput();
                        $(thisDom).addClass('btn-disabled').removeClass('btn-default-main');
                        $.each($("#gbook_content li"), function (i, item) {
                            if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                                $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                                $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
                            }
                        });
                    } else {
                        pageToastFail(result.msg);
                        $(thisDom).parents('.reply-content-wrap').find('textarea').focus();
                    }
                    $(thisDom).html(messagesWeb.comment_btn_reply).removeAttr('disabled');
                }
            });
        },

        addGbookListen: function addGbookListen() {
            $('.gbook-content-list').on('click', '.add-gbook', function () {
                var _this = $(this);
                if ($(this).hasClass('btn-default-main') && !$(this).attr('disabled')) {
                    var gbookHasBindPhoneCb = function gbookHasBindPhoneCb() {
                        if (countPlace < 0) {
                            pageToastFail(messagesWeb.textFieldPrompt.character_limit);
                            return false;
                        }
                        var fn = ZcoolGbook.doGbook;
                        if (content.length < 0) {
                            pageToastFail(messagesWeb.comments.comment_not_empty);
                            return;
                        }

                        if (islogin()) {
                            fn(memberId, content, _this);
                        } else {
                            toOpenLoginWindow(function () {
                                fn(memberId, content, _this);
                                ZcoolGbook.loginCb()
                            });
                        }
                    };

                    var content = $(this).parents('.editcomment').find('textarea').val();
                    var memberId = $(this).parents('#body').attr('data-id');
                    var countPlace = parseInt($(this).parents('.editcomment').find('textarea').siblings('.count').html());
                    // 用户未绑定手机号提示用户绑定layer 在login-window.js中定义
                    showRemindBindLayer(gbookHasBindPhoneCb);
                }
            });
        },

        initDoInput: function initDoInput(thisDom) {
            $('#detail-do-comment .textarea-style').val('').initTextareaStyle({
                height: 60
            });
            var parents = $(thisDom).parents('.editcomment');
            // parents.find('textarea').val('').css({
            //     'height': '42px',
            //     'overflow': 'auto'
            // });
            parents.find('.pinlunt .count').text('200');
        },
        initReplyInput: function initReplyInput() {
            $('#detail-reply-comment textarea').val('').initTextareaStyle();
            // $("#detail-reply-comment textarea").val('').css({
            //     'height': '42px',
            //     'overflow': 'auto'
            // });
            $("#detail-reply-comment .pinlunt .count").text('200');
        },

        doGbook: function doGbook(memberId, content, thisDom) {
            $(thisDom).html(messagesWeb.common_submitting).attr('disabled', true);
            $.each($("#gbook_content li"), function (i, item) {
                if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                    $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                    $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
                }
            });
            if ($(thisDom).parents('li').find('.gbook-list-box').attr('data-member-id') == getUid()) {
                $(thisDom).parents('#detail-reply-comment').hide();
                $(thisDom).parents('li').find('.comment-news').addClass('hide');
                $(thisDom).parents('li').find('.comment-report').addClass('hide');
                pageToastFail(messagesWeb.comments.not_reply_oneself);
                return;
            }
            $.ajax({
                url: proMyZDomain + '/gbook/doGbook',
                type: 'post',
                data: { 'gbookContent': content, 'toMemberId': memberId },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                success: function success(result) {

                    if (result.code == 0) {

                        ZcoolGbook.addGbookStyle(result.data);
                        ZcoolGbook.initDoInput(thisDom);
                        $(thisDom).addClass('btn-disabled').removeClass('btn-default-main');
                        if (result.data.memberObj.id == getUid()) {
                            $("#gbook_content li:first").find('.comment-news').addClass('hide');
                            $("#gbook_content li:first").find('.comment-report').addClass('hide');
                        }
                    } else {
                        pageToastFail(result.msg);
                        $(thisDom).parents('.editcomment').find('textarea').focus();
                    }
                    $(thisDom).html(messagesWeb.comments.leave_message).removeAttr('disabled');
                    // $(thisDom).addClass('btn-disabled').removeClass('btn-default-main');
                }
            });
        },

        deleteGbookListen: function deleteGbookListen() {
            $('.comment-box').on('click', '.gbook-delete', function () {
                var gbookId = $(this).parents('.gbook-list-box').attr('data-id');
                var fn = ZcoolGbook.deleteGbook;
                var thisDom = $(this);

                if (islogin()) {
                    var popup = new Popup(messagesWeb.comments.pop_title, messagesWeb.comments.pop_delete_message, '', '', messagesWeb.common_btn_confirm, messagesWeb.common_cancel, '', function () {
                        fn(gbookId, thisDom);
                    });
                    popup.showDom();
                } else {
                    toOpenLoginWindow(function () {
                        var popup = new Popup(messagesWeb.comments.pop_title, messagesWeb.comments.pop_delete_message, '', '', messagesWeb.common_btn_confirm, messagesWeb.common_cancel, '', function () {
                            fn(gbookId, thisDom);
                        });
                        popup.showDom();
                        ZcoolGbook.loginCb()
                    });
                }
            });
        },

        deleteGbook: function deleteGbook(gbookId, thisDom) {
            $.ajax({
                url: proMyZDomain + '/gbook/removeGbook',
                type: 'post',
                data: { 'gbookId': gbookId },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                success: function success(result) {

                    if (result.code == 0) {

                        ZcoolGbook.deleteGbookStyle(thisDom);
                    } else {
                        pageToastFail(result.msg);
                    }
                }
            });
        },

        jubaoGbookListen: function jubaoGbookListen() {
            $('.comment-box').on('click', '.comment-report', function () {
                var objectType = 7;
                var objectId = $(this).parents('.gbook-list-box').attr('data-id');
                if (getUid() > 0) {
                    ZcJubaoNew.jubaoPop(objectId, objectType);
                } else {
                    toOpenLoginWindow(function () {
                        ZcJubaoNew.jubaoPop(objectId, objectType);
                        ZcoolGbook.loginCb()
                    });
                }
            });
        },

        moreGbookListListen: function moreGbookListListen() {
            $('.comment-box').on('click', '.more-gbook', function () {
                ZcoolGbook.getMemberGbook();
            });
        },

        onClickListen: function onClickListen() {
            //添加评论加监听
            ZcoolGbook.addGbookListen();
            ZcoolGbook.jubaoGbookListen();
            ZcoolGbook.deleteGbookListen();
            ZcoolGbook.replyGbookListen();
            ZcoolGbook.moreGbookListListen();
        },

        addGbookStyle: function addGbookStyle(data) {
            var offset = $('#gbook_content_wrap > ul > li').length || 0;
            var loginId = getUid();
            var profileFlag = 0;
            //判断是否为当前用户
            if (loginId > 0 && loginId == data.memberId) {
                profileFlag = 1;
            }
            if (offset == 0) {
                $('.comment-box').html('');
                ZcoolGbook.getMemberGbook();
            } else {
                var allList = [];
                allList.push(data);
                var normalData = {
                    result: allList,
                    profileFlag: profileFlag
                };
                var normalListHtml = template('gbook_content_templ', normalData);
                $('#gbook_content').prepend(normalListHtml);
                $('#gbook_content li').addClass('isFadeIn');

                //数字加1
                var commentnum = $('.commenttxt span').text();
                $('.commenttxt span').text(parseInt(commentnum) + 1);
            }
        },

        deleteGbookStyle: function deleteGbookStyle(thisDom) {
            var offset = $('#gbook_content_wrap > ul > li').length || 0;
            if (offset <= 1) {
                $('.comment-box').html('');
                ZcoolGbook.getMemberGbook();
            } else {
                var parent = $(thisDom).parents('.comment-list');
                parent.remove();

                //数字减1
                var commentnum = $('.commenttxt span').text();
                $('.commenttxt span').text(parseInt(commentnum) - 1);
            }
        },
        // 评论登录之后,状态更新
        loginCb: function () {
          $.each($("#gbook_content li"), function (i, item) {
            if ($(item).find('.gbook-list-box').attr('data-member-id') == getUid()) {
                $("#gbook_content li").eq(i).find('.comment-news').addClass('hide');
                $("#gbook_content li").eq(i).find('.comment-report').addClass('hide');
            }
          });
          loginedUpdateCommentsTextarea()
            console.log("comment login callback ===========================");
        }

    };

    ZcoolGbook.init();
    //添加监听事件
    ZcoolGbook.onClickListen();

    //获取列表
    ZcoolGbook.getMemberGbook();

    //显示回复的输入框
    $('.comment-box').on('click', '.gbook-news-reply', function () {
        var commentItemJq = $(this).parents('div.gbook-list-box');
        var replyHtmlJq = $("#detail-reply-comment");

        if (getUid() <= 0) {
            zShowLoginLayer();
            return false;
        }
        // 回复框已经在这个评论
        if (commentItemJq.find("#detail-reply-comment").length > 0) {
            // replyHtmlJq.toggle();

            replyHtmlJq.find('textarea').focus();
            if (replyHtmlJq.is('.isFadeIn')) {
                replyHtmlJq.addClass('isFadeOutEffect').removeClass('isFadeIn');
            } else {
                replyHtmlJq.toggleClass('isFadeIn').removeClass('isFadeOutEffect');
            }
        } else {
            commentItemJq.append(replyHtmlJq);
            replyHtmlJq.addClass('isFadeIn').removeClass('isFadeOutEffect');
            ZcoolGbook.initReplyInput(this);
            replyHtmlJq.show();
            var originalid = commentItemJq.data('id');
            var username = commentItemJq.data('member-name');
            replyHtmlJq.find("textarea.textarea").attr('data-originalid', originalid);

            replyHtmlJq.find("textarea.textarea").attr("placeholder", messagesWeb.comment_placeholder + username + " :");
            replyHtmlJq.find('textarea').focus();
        }
    });

    // function inputBtnUseable(textAreaJq, minLength) {
    //     var btnJq = textAreaJq.parent().parent().find(".btn-current-middle");
    //     if (textAreaJq.val() != "" && textAreaJq.val().length >= minLength) {
    //         btnJq.addClass('btn-default-main').removeClass('btn-disabled')
    //     } else {
    //         btnJq.removeClass('btn-default-main').addClass('btn-disabled')
    //     }
    // }

    inputKeyDownBtnUseable($("#detail-do-comment textarea"), $("#detail-do-comment textarea").parent().parent().find(".btn-current-middle"), 1);
    inputKeyDownBtnUseable($("#detail-reply-comment textarea"), $("#detail-reply-comment textarea").parent().parent().find(".btn-current-middle"), 1);
    // $("#detail-do-comment textarea, #detail-reply-comment textarea").on('change keyup paste', function () {
    //   var textAreaJq = $(this);
    //   var btnJq = textAreaJq.parent().parent().find(".btn-current-middle");
    //   inputKeyDownBtnUseable(textAreaJq, btnJq, 1)
    //     // inputBtnUseable(textAreaJq,  1);
    // });

    // $("#detail-reply-comment textarea").on('change keyup paste', function () {
    //     var textAreaJq = $(this);
    //     var btnJq = textAreaJq.parent().parent().find(".btn-current-middle");
    //     inputKeyDownBtnUseable(textAreaJq, btnJq, 1)
    //     // inputBtnUseable(textAreaJq, 1);
    // });

    zCharCount_withExceedCount($(".textarea"), {
        allowed: 200
    });

    $('.comment-box').on('click', '.first-people', function () {
        if (getUid() <= 0) {
            zShowLoginLayer();
            return false;
        }
        $('#first-comment').focus();
    });
});

ZunloginedUpdateStatusCbs.push(function () {
    unloginCommentsTextarea();
});