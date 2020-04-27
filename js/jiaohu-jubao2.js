var ZcJubaoNew = {
    flag:true,
    URL: {
        DO: proMyZDomain + "/jubao/tipOffNew.json"
    },
    jubaoDo: function (objectId, objectType) {
        if (!$('#report-pop .pop-confirm').hasClass('btn-disabled') && ZcJubaoNew.flag) {
            // var content = $('#report-pop').attr('data-content').trim();
            var type = $('#report-pop').attr('data-type')
            var type_child = $('#report-pop').attr('data-child-type');
            
            // formData = new FormData();
            // formData.append("objId", objectId)
            // formData.append("objType", objectType)
            // formData.append("type", type)
            // formData.append("type_child", type_child)
            // formData.append("content", $('#other-infrin').val())

            // ZcJubaoNew.flag = false;
            // ZAjax('POST', ZcJubaoNew.URL.DO, {
            //   params: formData
            // }).then(function(data) {
            //   ZcJubaoNew.jubaoCallback(data);
            //   ZcJubaoNew.flag = true;
            // }).catch(function(err) {
            //   pageToastFail(messagesWeb.comment_exception_hints);
            //   ZcJubaoNew.flag = true;
            // })
            $.ajax({
                type: "POST",
                url: ZcJubaoNew.URL.DO,
                data: { objId: objectId, objType: objectType, type: type, type_child: type_child, content: $('#other-infrin').val() },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                dataType: "json",
                success: function (data) {
                    console.info("jubao data:" + data)
                    ZcJubaoNew.jubaoCallback(data);
                    ZcJubaoNew.flag = true;
                },
                error: function (data) {
                    pageToastFail(messagesWeb.comment_exception_hints);
                    ZcJubaoNew.flag = true;
                }
            })
        }
    },
    jubaoDoListen: function (objectId, objectType) {
        $('body .js-pop-report').on('click','.pop-confirm', function () {
          if ($('#report-pop').attr('data-type') == '4' && $('#report-pop').attr('data-child-type') === '2') {
            window.open('//' + zMainDomain + '/violationClaim')
            $('.js-pop-report').hide().remove();
            hideGlobalMaskLayer();
          } else {
            ZcJubaoNew.jubaoDo(objectId, objectType);
          }
        });
        $('body').on('click','#report-infringement', function () {
            $('.infrin-item').show();
            $('.report-item').hide();
            $('.js-pop-report').find('.pop-cancel').val(messagesWeb.common_btn_return);
            // $('#report-pop').attr('data-val', $('#report-infringement').attr('data-val'))
        })
        $('body').on('click','#report-illegal', function () {
            $('.illegal-item').show();
            $('.infrin-item').hide();
            $('.report-item').hide();
            $('.js-pop-report').find('.pop-cancel').val(messagesWeb.common_btn_return);
        })
        $('body .js-pop-report').on('click','.pop-close,.pop-cancel',function(){
                
            if(!$('.infrin-item,.illegal-item').is(':visible')){
                $('body .js-pop-report').off('click')
                $('.js-pop-report').hide();
                 $('.js-pop-report').remove();
                hideGlobalMaskLayer();
            }
            $('.infrin-item,.illegal-item').hide();
            $('.report-item').show();
            $('.js-pop-report').find('.pop-cancel').val(messagesWeb.common_btn_cancel);
        })
        
        $('body').on('click','label', function () {
            var checkedVal = $("input[name=r-radio]:checked").attr('value');
            var showItem = $('.radio[data-val=' + checkedVal + ']');
            var inputInfrimRadio = showItem.find('input[name=r-infrin-radio]:checked');
            $("input[name=r-radio]").parent().removeClass().addClass('radio-1');
            $("input[name=r-radio]:checked").parent().removeClass().addClass('radio-0 current');
            $("input[name=r-infrin-radio]").parent().removeClass().addClass('radio-1');
            $("input[name=r-infrin-radio]:checked").parent().removeClass().addClass('radio-0 current');
            
            $('body').off('change keyup paste')
            // 如果是侵权没有子类型
            if($("input[name=r-radio]:checked").attr('value') == 4 || $("input[name=r-radio]:checked").attr('value') == 2){
                $('.js-pop-report .pop-confirm').removeClass('btn-default-main').addClass('btn-disabled')
                $('#report-pop').attr({
                    'data-type':$("input[name=r-radio]:checked").val(),
                    'data-child-type':$("input[name=r-infrin-radio]:checked").val(),
                    'data-content':$("input[name=r-infrin-radio]:checked").parent().text()
                })
                if($("input[name=r-radio]:checked").attr('value') == 4){
                    // 侵权
                    if((inputInfrimRadio.attr("data-required") == "1" && $.trim($('#other-infrin').val()) != "") || inputInfrimRadio.attr("data-required") == "1"){
                        $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled')
                        inputKeyDownBtnUseable($('#other-infrin'),$('.js-pop-report .pop-confirm'),1)
                    }else if(inputInfrimRadio.length){
                        $('body').off('change keyup paste')
                        $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled')
                    }
                }else{
                    // 涉黄，违法
                    if(inputInfrimRadio.length){
                        $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled')
                    }else{
                        $('.js-pop-report .pop-confirm').removeClass('btn-default-main').addClass('btn-disabled')
                    }
                }
            }else{
                $('#report-pop').attr({
                    'data-type':$("input[name=r-radio]:checked").val(),
                    'data-child-type':'0',
                    'data-content':$("input[name=r-radio]:checked").parent().text()
                })
                $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled')
            }
            // if($("input[name=r-radio]:checked").attr('value') == 4 || $("input[name=r-radio]:checked").attr('value') == 2){
            //     $('.js-pop-report .pop-confirm').removeClass('btn-default-main').addClass('btn-disabled')
            //     $('#report-pop').attr({
            //         'data-type':$("input[name=r-radio]:checked").val(),
            //         'data-child-type':$("input[name=r-radio]:checked").val() + "-" + $("input[name=r-infrin-radio]:checked").val(),
            //         'data-content':$("input[name=r-infrin-radio]:checked").parent().text()
            //     })
                
            //     if($("input[name=r-infrin-radio]:checked").attr("data-required") == "1" && $.trim($('#other-infrin').val()) == ""){
            //         $('.js-pop-report .pop-confirm').removeClass('btn-default-main').addClass('btn-disabled')
            //     }else if($("input[name=r-infrin-radio]:checked").length){
            //         $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled')
            //     }
            // }else{
            //     $('#report-pop').attr({
            //         'data-type':$("input[name=r-radio]:checked").val(),
            //         'data-child-type':'0',
            //         'data-content':$("input[name=r-radio]:checked").parent().text()
            //     })
            //     $('.js-pop-report .pop-confirm').addClass('btn-default-main').removeClass('btn-disabled')
            // }
        })
        // inputKeyDownBtnUseable($('#other-infrin'),$('.pop-confirm'),1)
    },
    jubaoPop: function (objectId, objectType) {
    var htmlRportTpl = '<div class="pop-up centre-pop js-pop-report hide" id="report-pop">' +
        '<div class="popup-title">' + messagesWeb.comment_report_copy + '</div>' +
        '<div class="popup-con reportpop-con">' +
        '<div class="report-con-covers">' +
        '<div class="radio report-item">' +
        '<div class="report-option-row">' +
        '<label for="radio0" class="radio-1"><input type="radio" name="r-radio" id="radio0" value="1" class="">' + messagesWeb['reportFunction'].spam_information + '</label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio1" class="radio-1" id="report-illegal"><input type="radio" name="r-radio" id="radio1" value="2" class="">' + messagesWeb['reportFunction'].illegal + ' <i class="mt-5 right arrow-small-r"></i></label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio2" class="radio-1"><input type="radio" name="r-radio" id="radio2" value="3" class="">' + messagesWeb['reportFunction'].malice_and_abusive + '</label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio3" class="radio-1" id="report-infringement"><input type="radio" name="r-radio" id="radio3" value="4" class="">' + messagesWeb['reportFunction'].infringement + '<i class="mt-5 right arrow-small-r"></i></label>' +
        '</div>' +
        '</div>' +
        '<div>' +
        '<div class="radio illegal-item hide" data-val="2">' +
        '<div class="report-option-row">' +
        '<label for="radio21" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio21" value="1" class="">' + messagesWeb['reportFunction'].politically_harmful + ' </label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio22" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio22" value="2" class="">' + messagesWeb['reportFunction'].vulgar_porn + ' </label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio23" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio23" value="3" class="">' + messagesWeb['reportFunction'].violent_terror + ' </label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio24" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio24" value="4" class="">' + messagesWeb['reportFunction'].gambling + ' </label>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio25" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio25" value="5" class="">' + messagesWeb['reportFunction'].fraud + ' </label>' +
        '</div>' +
        '</div>' +
        '<div class="radio infrin-item hide" data-val="4">' +
        '<div class="report-option-row">' +
        '<label for="radio31" class="radio-0"><input type="radio" name="r-infrin-radio" checked id="radio31" data-required="1" value="1" class="">' + messagesWeb['reportFunction'].infringement_content1 + '</label>' +
        '<div><textarea type="text" class="textarea-style2" placeholder="' + messagesWeb['reportFunction'].infringement_content_placeholder + '" id="other-infrin"></textarea></div>' +
        '</div>' +
        '<div class="report-option-row">' +
        '<label for="radio32" class="radio-1"><input type="radio" name="r-infrin-radio" id="radio32" value="2" class="">' + messagesWeb['reportFunction'].infringement_content2 + '</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="text-center mt-10">' +
        '<input type="button" name="" class="btn-disabled pop-confirm" value="' + messagesWeb.common_btn_confirm + '">' +
        '<input type="button" name="" class="btn-default-secondary pop-cancel" value="' + messagesWeb.common_btn_cancel + '">' +
        '</div>' +
        '</div>' +
        '<i class="pop-close"></i>' +
        '</div>';
        if (!$('.js-pop-report').length) {
            $('body').append(htmlRportTpl)
        }
        if (getUid() > 0) {
            $('.js-pop-report').show();
            showGlobalMaskLayer();
            
            $('.js-pop-report').css('margin-top',-($('.js-pop-report').height() / 2))
            // 在main.js中定义获取光标到input
            popFirstInputFocus($('#report'))
            ZcJubaoNew.jubaoDoListen(objectId, objectType);
        } else {
            var successCallback = [];
            successCallback.push(function () {
                ZcJubaoNew.jubaoPop(objectId, objectType);
            });
            successCallback.push(function() {
              typeof loginedUpdateCommentsTextarea === 'function' && loginedUpdateCommentsTextarea()
            })
            openLoginWindow(successCallback);
        }
    },
    jubaoCallback: function (data) {
        var jubaoTip1 = '<div class="pop-up centre-pop js-report-success-tips">' +
            '<div class="popup-title">' + messagesWeb.comment_report_copy + '</div>' +
            '<div class="popup-con">' +
            '<div class="border-bottom text-center" style="padding-bottom:28px;">' +
            '<p class="f-18">' + messagesWeb['reportFunction'].report_success + '</p>' +
            '<p>' + messagesWeb['reportFunction'].success_content_tips1 + '</p>' +
            '</div>' +
            '<div style="margin-top:28px;">' + messagesWeb['reportFunction'].success_content_tips2 +
            '<br />' +
            'liuchengdong@zcool.com.cn' +
            '<br />' + messagesWeb['reportFunction'].success_content_tips3 +
            '<br />' +
            '<p class="c-000" style="margin-top:20px;">' + messagesWeb['reportFunction'].personal_ID + '</p>' + messagesWeb['reportFunction'].personal_ID_ex + '<br />' +
            '<p class="c-000">' + messagesWeb['reportFunction'].original_proof + '</p>' + messagesWeb['reportFunction'].original_proof_ex + '<br />' +
            '<p class="c-000">' + messagesWeb['reportFunction'].reported_link + '</p>' +
            '<p class="c-000">' + messagesWeb['reportFunction'].reporting_instructions + '</p>' +
            '</div>' +
            '</div>' +
            '<i class="pop-close"></i>' +
            '</div>';
        var jubaoTip2 = '<div class="pop-up centre-pop js-report-success-tips">' +
            '<div class="popup-title">' + messagesWeb.comment_report_copy + '</div>' +
            '<div class="popup-con text-center" style="margin:30px 0 56px;">' +
            '<p class="f-18">' + messagesWeb['reportFunction'].report_success + '</p>' +
            '<p>' + messagesWeb['reportFunction'].success_content_tips1 + '</p>' +
            '</div>' +
            '<i class="pop-close"></i>' +
            '</div>';
        if (data.code == 0) {
            //  if ($('#report-pop').attr('data-type') == '4' && $('#report-pop').attr('data-child-type') == '2') {
            //     $(body).append(jubaoTip1)
            // } else {
                $(body).append(jubaoTip2)
            // }
            $('.js-report-success-tips').css('margin-top',-($('.js-report-success-tips').height() / 2))
            $('.js-pop-report').hide().remove();
            // hideGlobalMaskLayer();
            // pageToastSuccess(messagesWeb.reportFunction.report_success);
            // $('#report').val('');
            $('body .js-report-success-tips').on('click','.pop-close',function(){
                $('.js-report-success-tips').remove()
                hideGlobalMaskLayer();
            })
        } else {
            pageToastFail(messagesWeb.reportFunction.report_failed);
        }
    }
};
