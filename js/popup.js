/**
 * Created by Kevin liu on 2015/12/2.
 */
//var tmp_json = {
//    "title": [
//        {"enName": "Brett", "cnName": "这是一个有趣的题目"}
//    ]
//}
//

function Popup(tit, content, component, richText, btnInfo1, btnInfo2, methis, fn, popupWidth, classnamep) {
    console.log(fn)
    this.tit = tit;
    this.content = content;
    this.richText = richText;
    this.component = component;
    this.btnInfo1 = btnInfo1;
    this.btnInfo2 = btnInfo2;
    this.classnamep = classnamep;
    if(popupWidth){
        this.popupWidth = popupWidth;
    }else {
       this.popupWidth = 440
    }
    this.methis = methis;
    this.fn = function (selfBtn) {
        if(typeof fn === 'function'){
          fn(selfBtn)
        }
    }
}

Popup.prototype = {
    //organDom: function () {//组织 dom
    //    var str = "",
    //        me = this
    //        ;
    //    str += "<div class='outer' id='outer'>";
    //    str += "<div class='popup'>";
    //    str += "<p class='popup-tit'>"+me.tit+"<span id='close_btn'>x</span></p>";
    //    str += "<div class='popup-content'>"+me.content+"</div>";
    //    str += "<div class='btn'>";
    //    str += "<input type='button' value='"+me.btnInfo1+"' id='btn_yes'/>";
    //    str += "<input type='button' value='"+me.btnInfo2+"' id='btn_cancel'/>";
    //    str += "</div>";
    //    str += "</div>";
    //    str += "</div>";
    //    return str;
    //},
    organDom: function () {//组织 dom
        var str = "",
            me = this
            ;
        str += "<div class='mask-layer' id='maskLayer' class=''>";
        str += "</div>";
        str += "<div class='popup-box " + (typeof me.classnamep !== 'undefined' ? me.classnamep : '') + "' style='width: "+me.popupWidth+"px'>";
        str += "<p class='popup-tit'>" + me.tit + "<span id='close_btn'></span><span id='popup-header-close'></span></p>";
        str += "<div class='popup-content'>" + me.content + "</div>";
        str += "<section class='classify-select'>"+me.component+"</section>";
        if(me.richText != ""){
            str += "<p class='rich-text'>"+ me.richText +"</p>";
        }
        str += "<div class='btn'>";
        if (me.btnInfo1 != "") {
            str += "<input type='button' value='" + me.btnInfo1 + "' id='btn_yes' class='btn-default-main btn-current-middle mr-20'/>";
        }
        if (me.btnInfo2 != "") {
            str += "<input type='button' value='" + me.btnInfo2 + "' id='btn_cancel' class='btn-default-secondary btn-current-middle'/>";
        }

        str += "</div>";
        str += "</div>";
        return str;
    },
    showDom: function () {//显示dom && 关闭dom
        var me = this
            ;
        $('body').append(me.organDom());
        $('html').addClass('confirm-body-fixed');
        me.initEvent();
    },
    initEvent: function () {
        var me = this;
        // $('#popup-header-close,#btn_cancel').add($(".mask-layer")).on('click', me.callBack);
        $('#popup-header-close,#btn_cancel').on('click', me.callBack);
        $('#btn_yes').on('click',function (e) {
            var selfBtn = $(this)
            e.stopPropagation()
            me.callBackFn(selfBtn)
            me.callBack()
        })
    },
    callBack: function () {
        var me = $(this)
            ;
        me.parents().find('.popup-box').prev().find('.mask-layer').remove();
        me.parents().find('.popup-box').remove();
        $(".mask-layer").remove();
        $(".popup-box").remove();
        $('html').removeClass('confirm-body-fixed');
    },
    callBackFn: function (selfBtn) {
        var me = this
        me.fn(selfBtn)
    }
}

function Tip(content) {
    this.content = content;
}

Tip.prototype = {
    organDom: function () {
        var str = "",
            me = this
            ;
        str += "<div id='tip'>";
        str += "<p>" + me.content + "</p>";
        str += "<div>";

        return str;
    },
    showDom: function () {
        var me = this
            ;
        $('body').append(me.organDom());
        me.initEvent();
    },
    initEvent: function () {
        var me = this
            ;
        setTimeout(function () {
            me.callBack();
        }, 2000)
    },
    callBack: function () {
        var me = this
            ;
        $('#tip').remove();
        $('#maskLayer').remove();
    }
}