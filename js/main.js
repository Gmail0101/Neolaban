

/* Nav */
$(function(){
    $(".menu>li").on({
        mouseover : function(){
            $(".submenu").stop().slideDown();
            $(".nav").css({
                "height":"320px",
                "background":"rgba(255,255,255,0.7)"
            })
            $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
            $(".menu li a").css({"color":"#000"})       /* GNB Color */
        },
        mouseleave : function(){
            $(".submenu").stop().slideUp();
            $(".nav").css({
                "height":"120px",
                "background":"none"
            })
            $(".logo").attr("src", "./images/logo/logo.png")    /* logo white */
            $(".menu li a").css({"color":"white"})       /* GNB Color */
        }
    })
})


/* slideMenu */
$(function(){
    $(".menuBar").click(function(){
        $(".slide_menu").css({"transform":"translateX(0%)"})       // 닫기
    })
    $(".menu_close").click(function(){
        $(".slide_menu").css({"transform":"translateX(100%)"})         // 열기
    })

})