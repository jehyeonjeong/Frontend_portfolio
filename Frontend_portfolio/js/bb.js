function bbb() {
    $("#brand").animate({marginLeft:parseInt($("#brand").css("margin-left"))-185 + "px"},"slow",function(){
            $("#brand li:first").appendTo("#brand");
            $("#brand").css("margin-left","-185px");
        });
}

$(document).ready(function(){

    var page = 1;
    $(window).mousewheel(function(){
        return false;
    });
    $(".box").on("mousewheel",function(event,delta){
        page = $(this).attr("data-n") - delta;
        var target = $(".box" + page).offset().top;
        $("body, html").stop().animate({scrollTop:target},1000);
        return false;
    });

    $(window).scroll(function(){
        var offset1 = $(".box1").offset().top;
        var offset2 = $(".box2").offset().top;
        var offset3 = $(".box3").offset().top;
        var offset4 = $(".box4").offset().top;
        var offset5 = $(".box5").offset().top;
        var st = $(window).scrollTop();

        $("#gnb li a").removeClass("sel1"); //공통
        $(".circle").removeClass("sel2"); //공통

        if(st < offset2){ // 1페이지
            $(".menu1").addClass("sel1"); 
            $(".circle1").addClass("sel2");
            page = 1; 
        } else if(st >= offset2 && st <offset3 ){ // 2페이지
            $(".menu2").addClass("sel1"); 
            $(".circle2").addClass("sel2");
            page = 2;
        } else if(st >= offset3 && st <offset4 ){ // 3페이지
            $(".menu3").addClass("sel1"); 
            $(".circle3").addClass("sel2");
            page = 3;   
        } else if (st >= offset4 && st < offset5) { // 4페이지
            $(".menu4").addClass("sel1"); 
            $(".circle4").addClass("sel2");
            page = 4;   
        } else {
            $(".menu5").addClass("sel1");
            $(".circle5").addClass("sel2");
            page = 5;   
        }
        return false;
    });//scroll

    $("#gnb ul li a, .circle").click(function(){//클릭 공통
        page = $(this).attr("data-n"); 
        var target = $(".box"+page).offset().top; 
        $("body, html").stop().animate({"scrollTop" : target }, 1000);
        return false; 
    });



    //brand
    var width = 185 * $("#brand li").size() + "px";
    $("#brand").css("width", width); //185*17 = 3145px;
    $("#brand li").last().prependTo("#brand");
    $("#brand").css("margin-left","-185px");

    var banner = setInterval("bbb()",2500);

    $("#brand li").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
    }).mouseout(function(){
        banner = setInterval("bbb()",2500);
        $(this).find("img").css("opacity","1");
    });

    //https://bxslider.com/options/
    var slider = $('.bxslider').bxSlider({
        auto:true,
        mode:'horizontal',
        pagerCustom:'#bx-pager', //사용자
        autoHover:true, //마우스올렸을때 멈추기
    });

    
    

    $("#family_site > ul").stop().animate({top: 200},0); //speed를 0으로 주면 안나옴
        var cnt2 = 1;

    $("#family_site > button").click(function(){
        if(cnt2 == 1) {
            $("#family_site > ul").stop().animate({top: 1},"fast");
            $(".f_icon").text("-");
            cnt2 = 0;
        } else {
            $("#family_site > ul").stop().animate({top: 200},"fast");
            $(".f_icon").text("+");
            cnt2 = 1;
        }
    });
    $("#family_site5 ul li a").click(function(){
        $("#family_site > ul").stop().animate({top: 200},"fast");
        $(".f_icon").text("+");
        cnt2 = 1;
    });

});//
    



