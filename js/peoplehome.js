
var ZUserId = getUid();
var creatorId = $('#body').attr('data-id');
var language = getLanguage()

// 分享
$.ajax({
    type: "get",
    url: serverApi + "/wxshare/getMemberQrcode?id=" + creatorId,
    dataType: "json",
    contentType: 'application/json',
    success: function(data) {
       $('#app-code').append('<image src="' + data.data + '" />')
    }
})

navTypeTopFix()
//吸顶
$('.share-report-wrap').hover(function(){$('.share-report-item').css('margin-left',-$('.share-report-item').width() / 2)})
function showCate(cateobj) {
    $('.subnav-wrap .nav-hover-content-wraper ' + cateobj).removeClass('hide').siblings().addClass('hide');
    $('.subnav-wrap .nav-hover-content-wraper').removeClass('hide');
}

function hideCate(cateobj) {
    $('.subnav-wrap .nav-hover-content-wraper ' + cateobj).addClass('hide');
    $('.subnav-wrap .nav-hover-content-wraper').addClass('hide');
}

$('.subnav-wrap .subnav-content li.homecate,.subnav-wrap .people-home').on('mouseover', function() {
    showCate('.people-home')
})
$('.subnav-wrap .subnav-content li.homecate,.subnav-wrap .people-home').on('mouseout', function() {
    hideCate('.people-home')
})
$('.subnav-wrap .subnav-content li.favoritecate,.subnav-wrap .people-collect').on('mouseover', function() {
    showCate('.people-collect')
})
$('.subnav-wrap .subnav-content li.favoritecate,.subnav-wrap .people-collect').on('mouseout', function() {
    hideCate('.people-collect')
})
$('.radio label').on('click', function() {
    $("input[name=radio]").parent().removeClass().addClass('radio-1');
    $("input[name=radio]:checked").parent().removeClass().addClass('radio-0');
    $('#form-data-bgImgAlign').attr('data-bgImgAlign', $(this).find('input').val());
})

$('.share-report-wrap .decorate').on('click', function() {
    // showRemindBindLayer 用户未绑定手机号提示用户绑定layer 在login-window.js中定义 
    showRemindBindLayer(decorateHomeUnbindPhoneCb)
    function decorateHomeUnbindPhoneCb(){
        $('.docs-buttons .btn-default-main').val(messagesWeb.homepage.config_confirm_btn);
        $('#confighome').slideDown();
    }
})

$(function() {
    // 动态设置背景图定位
    var height = parseInt($('.people-home-bg img').height()),
        px = ((height - 344) / 2) * -1;
    if (px > 0) {
        px *= -1;
    }
    // $('.people-home-bg img').css('bottom', px + 'px');

    $('.btn-submit .btn-default-secondary').on('click', function() {
        $('#inputImage').click();
    })
    // $('#share').on('click', function() {
    //     showGlobalMaskLayer();
    //     $('#pop-share').removeClass('hide');
    // })
    // $('#pop-share .pop-close').on('click', function() {
    //     $(this).parents('#pop-share').addClass('hide');
    //     hideGlobalMaskLayer();
    // })

    // $(window).resize(function() {
    //     var height = parseInt($('.people-home-bg img').height()),
    //         px = ((height - 344) / 2) * -1;
    //     $('.people-home-bg img').css('bottom', px + 'px');
    // });
    preview()
    cancelSaveData()
    $('#colorSelector').ColorPicker({
        color: $('#bgColor').val(),
        onShow: function(colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function(colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function(hsb, hex, rgb) {
            $('#colorSelector').css('backgroundColor', '#' + hex);
            $('#bgColor').val('#' + hex);
            preview();
        }
    });

})
// 上传封面图
$("div[id^='uploadSinceWriting']").find('input[type=file]').change(function(e){
    if(!$(this)[0].files[0]) return false;
    var fileSize = $(this)[0].files[0].size / (1024*1024);
    var fileType = $(this)[0].files[0].type;
    if (fileType == "image/gif" || fileType == "image/png" || fileType == "image/jpeg") {
        if(fileSize <= 3){
            var formData = new FormData();
            formData.append('file', $(this)[0].files[0]);
            $('#uploadSinceWriting').find('.statusBar').show();
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // $('.config-cover-pictrue .cover-loadding').remove();
                    var res = JSON.parse(xhr.responseText);
                    if (res.code !== 0) {
                      pageToastFail(res.msg)
                      $('#uploadSinceWriting .statusBar').hide();
                      return false;
                    }
                    $('#form-data-coverImg img').attr('src',res.data.imagePath);
                    $('#form-data-coverImg').attr('data-coverImg', res.data.path + '/' + res.data.name);
                   $('#uploadSinceWriting').find('.statusBar').hide();
                    preview();
                }
            }

            xhr.upload.onprogress = function(event) {　　　　
                if (event.lengthComputable) {　　　
                    console.log(event.current)　　　
                    var complete = (event.loaded / event.total * 100 | 0);　　　　　　
                    $('#uploadSinceWriting').find('.filling-progress').css('width', complete + '%');
                    $('#uploadSinceWriting').find('.per').html(complete + '%');　　　
                }　　
            };

            xhr.open('POST', proUploadZDomain + '/upload/image?uploadtype=memberCover', true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.withCredentials = true
            // xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.send(formData);
        }else{
            // 图片大小不能超过3M
            pageToastFail(messagesWeb.homepage.config_cover_limit3M)
        }
        
    }else{
        // 图片格式仅支持gif、png、jpeg
        pageToastFail(messagesWeb.homepage.config_cover_format);
    }
})

// 上传背景图
$('#uploadfile').change(function(e) {
    var fileName = $('#uploadfile')[0].files[0].name;
    var fileNum = $('#uploadfile')[0].files[0].name.lastIndexOf('.');
    var extend = fileName.substring(fileNum + 1).toLowerCase();
    if (extend == "png" || extend == "jpg" || extend == "jpeg" || extend == "gif") {
        var size = $('#uploadfile')[0].files[0].size / 1024;
        if (size < 300) {
            $('.config-bg-wrap .statusBar').show();
            var formData = new FormData();
            formData.append('file', $('#uploadfile')[0].files[0]);
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var res = JSON.parse(xhr.responseText);
                    if (res.code !== 0) {
                      pageToastFail(res.msg)
                      $('.config-bg-wrap .statusBar').hide();
                      return false;
                    }
                    $('#img-bg').attr('src', res.data.imagePath)
                    $('#form-data-bgImg').attr('data-bgImg', res.data.path + '/' + res.data.name);
                    $('.config-bg-wrap .statusBar').hide();
                    $('#form-data-bgImgShow label').removeClass('check-c').addClass('check-cd');
                    $('#showBgImg').prop('checked',true);
                    $('#form-data-bgImgShow').next().removeClass("disabled");
                    $('#form-data-bgImgShow').next().find("input").removeAttr("disabled");
                    preview();
                }
            }

            xhr.upload.onprogress = function(event) {　　　　
                if (event.lengthComputable) {　　　
                    var complete = (event.loaded / event.total * 100 | 0);　　　　　　
                    $('.filling-progress').css('width', complete + '%');
                    $('.config-bg-wrap .per').html(complete + '%');　　　
                }　　
            };

            xhr.open('POST', proUploadZDomain + '/upload/image?uploadtype=memberBg', true);
            xhr.withCredentials = true
            // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.send(formData);
        } else {
            // 暂时不支持300k以上图片上传
            pageToastFail(messagesWeb.homepage.config_bgmap_limit);
        }
    } else {
        // 暂时不支持此格式，请使用png、jpg、gif等常用格式
        pageToastFail(messagesWeb.homepage.config_bgmap_format);
    }
})



function _getRadioValueJS(RadioName) {
    var obj = document.getElementsByName(RadioName);
    if (obj != null) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
                return obj[i].value;
            }
        }
    }
    return null;
}
changeDisable($('#confighome').find('.show-bg-box')[0]);

function changeDisable(obj) {
    if ($(obj).find(':checkbox').is(':checked')) {
        $(obj).next().removeClass("disabled");
        $(obj).next().find("input").removeAttr(
            "disabled");
    } else {
        $(obj).next().addClass("disabled");
        $(obj).next().find("input").attr("disabled",
            "disabled");
    }
}

function preview() {
    if ($('#img-bg').attr('src').indexOf(staticDomain) == -1) {
        var bgImg = $('#img-bg').attr('src');
        var bgImg = bgImg;
    }else{
        bgImg = ''
    }
    if($('#form-data-coverImg img').attr('src').indexOf(staticDomain) == -1){
        var coverImg = $('#form-data-coverImg img').attr('src');
    }
    var show = $("#showBgImg").prop('checked') ? 1 : 0;
    var lock = $("#lockBgImg").prop('checked') ? 1 : 0;
    var align = _getRadioValueJS('radio');
    align = align == null ? 0 : align;
    var bgColor = $("#bgColor").val();
    var repeat = 0;
    if ($("#repeatBgImgA").prop('checked')) {
        repeat = 1;
        if ($("#repeatBgImgB").prop('checked')) {
            repeat = 3;
        }
    } else {
        if ($("#repeatBgImgB").prop('checked')) {
            repeat = 2;
        }
    }
    var css = "background:" + bgColor + (show == 1 ? ' url( ' + bgImg + ')' : '') + (show == 1 && repeat == 1 ? ' repeat-y' : '') + (show == 1 && repeat == 2 ? ' repeat-x' : '') + (show == 1 && repeat == 3 ? ' repeat' : '') + (show == 1 && align == '1' ? ' left' : '') + (show == 1 && align == '2' ? ' center' : '') + (show == 1 && align == '3' ? ' right' : '') + (show == 1 ? ' top; ' : ';') + (lock == 1 ? ' background-attachment:fixed;' : '') + " word-break:break-all;";

    $("#body").removeClass("editbg");
    $("#body").attr("style", css);
    $('#coverImg').attr('src',coverImg);

}

function cancelSaveData() {
    if ($('#img-bg').attr('src').indexOf(staticDomain) == -1) {
        var bgImg = $('#img-bg').attr('src');
        var bgImg = bgImg;
    }
    if($('#form-data-coverImg img').attr('src').indexOf(staticDomain) == -1){
        var coverImg = $('#form-data-coverImg img').attr('src');
    }
    var show = $("#showBgImg").prop('checked') ? 1 : 0;
    var lock = $("#lockBgImg").prop('checked') ? 1 : 0;
    var align = _getRadioValueJS('radio');
    align = align == null ? 0 : align;
    var bgColor = $("#bgColor").val();
    var repeat = 0;
    if ($("#repeatBgImgA").prop('checked')) {
        repeat = 1;
        if ($("#repeatBgImgB").prop('checked')) {
            repeat = 3;
        }
    } else {
        if ($("#repeatBgImgB").prop('checked')) {
            repeat = 2;
        }
    }
    body.editbgcss = "background:" + bgColor + (show == 1 ? ' url( ' + bgImg + ')' : '') + (show == 1 && repeat == 1 ? ' repeat-y' : '') + (show == 1 && repeat == 2 ? ' repeat-x' : '') + (show == 1 && repeat == 3 ? ' repeat' : '') + (show == 1 && align == '1' ? ' left' : '') + (show == 1 && align == '2' ? ' center' : '') + (show == 1 && align == '3' ? ' right' : '') + (show == 1 ? ' top; ' : ';') + (lock == 1 ? ' background-attachment:fixed;' : '') + " word-break:break-all;";
    body.coverSrc = coverImg;

    if($('input[name=zhanLock]').prop('checked') && $('#zhanLink').attr('href')){
      $('.js-zhan-entry').css('display', 'flex').attr('href', $('#zhanLink').attr('href'))
    } else{
      $('.js-zhan-entry').hide().attr('href', $('#zhanLink').attr('href'))
    }
}

function cancelConfig() {
    $('#confighome').slideUp();
    $('#body').removeAttr('style');
    $('#body').addClass('editbg');
    $('.editbg').attr('style', body.editbgcss);
    $('#coverImg').attr('src',body.coverSrc);
    $('#form-data-coverImg img').attr('src',body.coverSrc);
    // $('#form-data-coverImg').attr('data-coverimg',body.coverSrc);
    $("div[id^='uploadSinceWriting']").find('input[type=file]').val("");
}

function saveConfig() {
    var align = _getRadioValueJS('radio');
    align = align == null ? 0 : align;
    var repeat = 0;
    if ($("#repeatBgImgB").prop('checked')) {
        repeat = 1;
        if ($("#repeatBgImgA").prop('checked')) {
            repeat = 3;
        }
    } else {
        if ($("#repeatBgImgA").prop('checked')) {
            repeat = 2;
        }
    }
    $('.docs-buttons .btn-default-main').attr('disabled', 'disabled').val(messagesWeb.common_draft_save).addClass('cursor-default');
    var params = {
        bgColor: $("#bgColor").val(),
        bgImg: !$("#form-data-bgImg").attr('data-bgImg') ? "" : $("#form-data-bgImg").attr('data-bgImg'),
        bgImgAlign: align,
        bgImgLock: $('#form-data-bgImgLock .check-cd').length ? 1 : 0,
        bgImgRepeat: repeat,
        bgImgShow: $('#form-data-bgImgShow .check-cd').length ? 1 : 0,
        coverImg: $('#form-data-coverImg').attr('data-coverimg'),
        webShow: $('input[name=zhanLock]').prop('checked') ? 1 : 0,
        webAddress: $('#zhanLink').text()
    };
    $.ajax({
        type: "post",
        url: proMyZDomain + '/setting/homeSkin',
        data: JSON.stringify(params),
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {
            $('.docs-buttons .btn-default-main').removeAttr('disabled').val(messagesWeb.homepage.config_confirm_btn).removeClass('cursor-default');
            if (data.msg == 'success') {
                $('#confighome').slideUp();
                cancelSaveData()
            } else {
                alert(data.msg);
                return;
            }
        }
    })
}

//banner举报
$('.report-event').on('click', function() {
    var objectType = 1;
    var objectId = $('#body').attr('data-id');
    if (getUid() > 0) {
        ZcJubaoNew.jubaoPop(objectId, objectType);
    } else {
        toOpenLoginWindow(function() {
            ZcJubaoNew.jubaoPop(objectId, objectType);
        });
    }
})

// 获取基本信息 在招职位TAb
var getPathName = location.pathname;
var peopleUserId = $('#body').attr('data-id');
if(getPathName.lastIndexOf('onlineJob') == -1){
  // <!-- #####urgent###### -->
    // $.ajax({
    //     type: "GET",
    //     url: proMainZDomain + "/ijob/isExistJob?mid=" + peopleUserId,
    //      xhrFields: {
    //         withCredentials: true
    //     },
    //     crossDomain: true,
    //     headers: {
    //         "X-Requested-With": "XMLHttpRequest"
    //     },
    //     dataType: "json",
    //     success:function(data){
    //         if(data.data){
    //             $('#collection').after('<li><a href="' + proMainZDomain + '/u/' + peopleUserId + '/onlineJob#tab_anchor" z-st="userHome_tab_job">' + messagesWeb.homepage.subnav_vacancies + '</a></li>')
                
    //         }
    //     }
    // })
    if($('#basic-info').length){
        $.ajax({
            type: "GET",
            url: proMainZDomain + "/ijob/companyInfo?mid=" + peopleUserId,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            dataType: "json",
            success:function(data){
                if(data.code == 0){
                    var html = '<div class="show-content-wrap">'+
                        '<ul class="att-basic-info">';
                                if(data.data.website){
                                    html += '<li class="enterprise-link">' +
                                    '<a href="' + data.data.website + '">' + data.data.show_websit + '</a>' +
                                '</li>';
                                }
                                if(data.data.stageName){
                                    html += '<li class="stage">' + data.data.stageName + '</li>';
                                }
                                if(data.data.sizeName){
                                    html += '<li class="number-enterprises">' + data.data.sizeName + '</li>';
                                }
                                if(data.data.address){
                                    html += '<li class="business-address">' + data.data.address + '</li>';
                                }
                            
                        html += '</ul>';
                        if(data.data.tags && data.data.tags.length != 0){
                            html += '<div class="material-benefits">';
                            $.each(data.data.tags,function(i,v){
                                html += '<span class="mark">' + v + '</span>';
                            }) 
                                
                        html += '</div>';
                        }
                        
                            
                        
                    html += '</div>';
                    $('#basic-info-content').html(html);

                }
            }
        })
    }
}

// var zhanList = []
// var selectContent = ''
// var zhanContent = ''
// var memberZhanLock = parseInt($('#zhanData').val())
// // var memberSelectedUrl = $('#zhanData').attr('data-url')
// var userName = getUsername()

// function labelCheckboxDisabled() {
//   var label = $('.label-checkbox')
//   label.each(function(i, val) {
//     var checkbox = $(val).find('input')
//     $(val).hasClass('disabled') ? checkbox.attr('disabled', true) : checkbox.removeAttr('disabled');
//   });
// }

// function getCurrentSelectedName(array) {
//   var memberSelectedUrl = $('#zhanLink').attr('href')

//   if(array.length){
//     var site = {}

//     array.forEach(function(ele) {
//       if(ele['siteUrl'] === memberSelectedUrl)
//       site = ele
//     })
//     return site;
//   }
// }

// function updateSiteList() {
//   var selectList = ''
//   var siteUrl = getCurrentSelectedName(zhanList).siteUrl

//   $('.js-select-container').off('click')

//   zhanList.forEach(function(element) {
//     selectList += `<li data-link="${element.siteUrl}" class="${siteUrl == element.siteUrl ? 'active' : ''}" title="${element.siteName}">${element.siteName}</li>`
//   });

//   selectContent = `<div class="select-con ptb-6 select-scroll-box js-select-con" style="width: 100%; max-height: 220px;">
//     <ul>${selectList}</ul>
//   </div>`

//   if($('.js-select-container .js-select-con').length){
//     $('.js-select-container .js-select-con').replaceWith(selectContent)
//   }else{
//     $('.js-select-container').append(selectContent)
//   }

//   // 建站列表
//   zcustomScrollbarFadeout($('.select-scroll-box'))
//   // $('.select-scroll-box').mCustomScrollbar({
//   //   theme:"dark",
//   //   autoHideScrollbar: true,
//   //   callbacks: {
//   //     onScrollStart: function(){
//   //         $('.mCustomScrollBox .mCSB_scrollTools').css({"opacity":'1','-webkit-animation':'none'})
//   //     }, 
//   //     whileScrolling:function(){
//   //         $('.mCustomScrollBox .mCSB_scrollTools').css({"opacity":'1','-webkit-animation':'none'})
//   //     },
//   //     onScroll:function(){
//   //         //滚动完成后触发事件
//   //         $('.mCustomScrollBox .mCSB_scrollTools').removeAttr('style')
//   //     }
//   //   }
//   // })

//   // select.firstHaveBgClick('.js-select-container', {
//   //   updateListClick: function() {
//   //     getSiteList()
//   //   },
//   //   click: function(me) {
//   //     var href = me.attr('data-link')
//   //     $('#zhanLink').text(href).attr('href', href)
//   //     // memberSelectedUrl = href
//   //   }
//   // })
// }

// function getSiteList () {
//   ZAjax('post', `${proMyZDomain}/setting/getSiteList`).then(function(data) {
//     zhanList = data.data
//   }).then(function() {
//     updateSiteList()
//   })
// }

// ZAjax('post', `${proMyZDomain}/setting/getSiteList`).then(function(data) {
//   zhanList = data.data
// }).then(function() {
//   var selectList = ''
//   var siteName = getCurrentSelectedName(zhanList).siteName

//   if(zhanList.length){
//     zhanContent = `<div class="flex-between mt-20 ${!memberZhanLock ? 'disabled' : ''}" id="zhan-content">
//       ${messagesWeb.homepage.config_website_builder}
//         <div style="flex: auto;" class="p-relative ml-30 select-have-bg-container js-select-container ${!memberZhanLock ? 'disabled' : 'select-hover'}">
//           <div class="selected-box flex-between js-selected-box"><span class="ellipsis js-seleted">${userName}的作品集网站</span><i class="select-shixin-arrow"></i></div>
//         </div>
//       </div>`

//     $('#zhan-wraper').append(zhanContent)
    
//     if(siteName) {
//       $('.js-seleted').text(siteName)
//     } else {
//       $('.js-seleted').text(zhanList[0].siteName)
//       $('#zhanLink').text(zhanList[0].siteUrl).attr('href', zhanList[0].siteUrl)
//     }
//   }
//   select.firstHaveBgClick('.js-select-container', {
//     updateListClick: function() {
//       getSiteList()
//     }
//   })
// }).catch(function(){
//   if(memberZhanLock !== 1)
//   $('#zhanLock').addClass('disabled')
//   labelCheckboxDisabled()
//   zhanContent = `<div class="flex between mt-20">
//     ${messagesWeb.homepage.config_website_builder}
//     <div style="flex: auto; max-width: ${language === 'en_US' ? '520px' : '610px'};" class="ml-30">
//       ${messagesWeb.homepage.config_zhan_location_tips1} ${userName} ${messagesWeb.homepage.config_zhan_location_tips2} <a href="https://s.growingio.com/YN7La1" target="_blank" class="link">https://51.design </a> ${messagesWeb.homepage.config_zhan_location_tips3}
//     </div>
//   </div>`

//   $('#zhan-wraper').append(zhanContent)
// })

// $.zCheckbox({
//   click: function(me) {
//     if(me.prop('checked')){
//       $('#zhan-content').removeClass('disabled')
//       $('.select-have-bg-container').removeClass('disabled').addClass('select-hover')
//     }else{
//       $('#zhan-content').addClass('disabled')
//       $('.select-have-bg-container').addClass('disabled').removeClass('select-hover')

//       if(!zhanList.length) $('#zhanLock').addClass('disabled')
//       labelCheckboxDisabled()
//     }
//   }
// })