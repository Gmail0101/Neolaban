new fullpage('#fullpage', {
    autoScrolling:true,     // 스크롤 적용할지 안할지
    scrollHorizontally: true,   // 마우스 휠 또는 트랙패드를 써서 수평으로 미끄러지듯 움직일지
    fitToSection: true,     // 구역을 모바일 지원(viewport)에 맞출지 말지를 결정
    scrollingSpeed: 700,   // 스크롤 이동 속도
    // sectionsColor : ['green', '#CCC', 'blue', 'green'],


    navigation: true,           //  작은 원으로 이루어진 Nav
    navigationPosition: 'left',     // Nav Position
    navigationTooltips: ['COMPANY', 'B2B BUSINESS', 'B2C BUSINESS', 'PARTNERSHIP'],  // Nav 이름
    showActiveTooltip:true,     // 말풍선 위젯

    onLeave: function(origin, destination, direction){

		//MainPage 1
        if(destination.index == 0){
            $("#fp-nav ul li .fp-tooltip").css({            /* tooptip 수정 */
                "color":"#fff",
                "font-weight":"bold"
            })
            $("#fp-nav ul li a span").css({"background":"white"})   /* tooptip 수정 */
            $(".logo").attr("src", "./images/logo/logo.png")    /* logo white */
            $(".menu li a").css({"color":"white"})       /* GNB Color */
		}
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

        
        //MainPage 2
		if(destination.index == 1){
            $("#fp-nav ul li .fp-tooltip").css({"color":"#222",})   /* tooptip 수정 */
            $("#fp-nav ul li a span").css({"background":"black"})   /* tooptip 수정 */
            $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
            $(".menu li a").css({"color":"#000"})       /* GNB Color */

            $(".menu>li").on({
                mouseover : function(){
                    $(".submenu").stop().slideDown();
                    $(".nav").css({
                        "height":"320px",
                        "background":"rgba(255,255,255,0.7)"
                    })
                    // $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
                    // $(".menu li a").css({"color":"#000"})       /* GNB Color */
                },
                mouseleave : function(){
                    $(".submenu").stop().slideUp();
                    $(".nav").css({
                        "height":"120px",
                        "background":"none"
                    })
                    $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
                    $(".menu li a").css({"color":"#000"})       /* GNB Color */
                }
            })
		}

        //MainPage 3
        if(destination.index == 2){

		}

        //MainPage 4
        if(destination.index == 3){

		}
	}
})