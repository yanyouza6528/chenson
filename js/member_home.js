/**
 * Created by yueqiuping on 1/18/17.
 */
$(function () {
    getRecentViewMember();
    getRecentActivity();
    getHotJob();
    getGogoupCourse();
    getHellorfPhoto();
    getTeamBymemberId();
})

//获取所属团队模块
function getTeamBymemberId(){
    var memberId = $("#body").attr("data-id")
    var url = proMainZDomain+"/u/"+memberId+"/teamsBymemberId";
    $.ajax({
       type: "GET",
       url: url,
       xhrFields: {
           withCredentials: true
       },
       crossDomain: true,
       headers: {
           "X-Requested-With": "XMLHttpRequest"
       },
       dataType: "json",
       success: function (result) {
           
           if (result) {
               var html = template("myTeam_templ", result);
               $('#myTeam').html(html).slideDown();
           }
       }
   })
}

function getHotJob() {
    var memberId = $("#body").attr("data-id")
    var url = proMainZDomain+"/u/"+memberId+"/hotJob";
    $.ajax({
       type: "GET",
       url: url,
       xhrFields: {
           withCredentials: true
       },
       crossDomain: true,
       headers: {
           "X-Requested-With": "XMLHttpRequest"
       },
       dataType: "json",
       success: function (result) {
           
           if (result.code == 0 && typeof(result.data)!="undefined") {
               // var data = {
               //     data:result.data,
               //     total:result.total,
               //     url:result.url
               // }
               var html = template("hot_job_templ",result);
               $('#hot_job').html(html).slideDown();
           }
       }
   })
}

//近期参加的活动
function getRecentActivity() {
    var memberId = $("#body").attr("data-id")
    var url = proMainZDomain+"/u/"+memberId+"/recentActivity";
    $.ajax({
           type: "GET",
           url: url,
           xhrFields: {
               withCredentials: true
           },
           crossDomain: true,
           headers: {
               "X-Requested-With": "XMLHttpRequest"
           },
           dataType: "json",
           success: function (result) {
               
               if (result.code == 0 && typeof(result.data)!="undefined") {
                   var html = template("recent_activity_templ",{data:result.data});
                   $('#recent_activity').html(html);
               }
           }
    })
}

//最近访问的人
function getRecentViewMember() {
    var memberId = $("#body").attr("data-id")
    var url = proMainZDomain+"/u/"+memberId+"/recentViewer"
    $.ajax({
       type: "GET",
       url: url,
       xhrFields: {
           withCredentials: true
       },
       crossDomain: true,
       headers: {
           "X-Requested-With": "XMLHttpRequest"
       },
       dataType: "json",
       success: function (result) {
           
           var data = {}
           if (result.code == 0) {
               data.data = result.data.content
               data.total = result.data.total
           }else{
               data.total = 0
           }

           var html = template("recent_view_member_templ",data);
           $('#recent_view_member').html(html);
       }
   })
}

//获取高高手视频
function  getGogoupCourse() {
    var memberId = $("#body").attr("data-id")
    var gogoup_url = serverApi + "/gogoup/course/" + memberId + "/?pageSize=1";
    $.getJSON(gogoup_url, function(res){
        if(res && res.success && res.total > 0){
            var result = {
                data:res.datas[0],
                total:res.total,
                memberId:memberId
            }

            var html = template('gogoup_course_templ',result)
            $('#gogoup_course').html(html)
        }
    });
}

function getHellorfPhoto() {
    var memberId = $("#body").data("id")
    var hellorf_url = proHellorfDomain + "/api/author/?author_id=" + memberId + "&pagesize=5&p=1&callback=?";
    $.getJSON(hellorf_url, function(data){
        if(data && data.total > 0){
            var moreUrl = proHellorfDomain + '/image/contributor/' + memberId
            var result = {
                data:data.items,
                total:data.total,
                moreUrl:moreUrl
            }

            var html = template('helloRf-templ',result)
            $('#helloRf').html(html)
        }
    });
}

function toOpenLoginWindow(fn) {
    var fns = new Array();
    fns[0] = fn;
    //获取所有id遍历调用
    openLoginWindow(fns);
}

