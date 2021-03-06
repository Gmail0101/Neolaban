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
            $(".mobile_logo").attr("src", "./images/767/logo.png")    /* mobile_logo  */
            $(".menu li a").css({"color":"white"})       /* GNB Color */
            $(".menuBar>span").css({"background-color":"#fff"}) /* 햄버거 메뉴 */
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
            $(".mobile_logo").attr("src", "./images/767/logo_color.png")    /* mobile_logo  */
            $(".menu li a").css({"color":"#000"})       /* GNB Color */
            $(".menuBar>span").css({"background-color":"#000"}) /* 햄버거 메뉴 */

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

            // sec2 b2b 
            $(".sec_02_textbox").css({
                "bottom":"9px",
                "opacity": "1"
            })
            $(".sec_02_imgbox>img:nth-child(1)").css({
                "top":"22.5vh",
                "opacity": "1"
            })
            $(".sec_02_imgbox>img:nth-child(2)").css({
                "top":"10vh",
                "opacity": "1"
            })

		}

        //MainPage 3
        if(destination.index == 2){
            $("#fp-nav ul li .fp-tooltip").css({"color":"#222",})   /* tooptip 수정 */
            $("#fp-nav ul li a span").css({"background":"black"})   /* tooptip 수정 */
            $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
            $(".mobile_logo").attr("src", "./images/767/logo_color.png")    /* mobile_logo  */
            $(".menu li a").css({"color":"#000"})       /* GNB Color */
            $(".menuBar>span").css({"background-color":"#000"}) /* 햄버거 메뉴 */

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


            $(".sec_03_imgbox>img:nth-child(1)").css({"left":"0", "opacity":"1"})
            $(".sec_03_imgbox>img:nth-child(2)").css({"left":"132px", "opacity":"1"})
            $(".sec_03_imgbox>img:nth-child(3)").css({"left":"45px", "opacity":"1"})
            $(".sec_03_textbox").css({"top":"75px","opacity":"1"})

            $(".sec_03_imgbox").css({"top":"75px"})
		}

        //MainPage 4
        if(destination.index == 3){
            $("#fp-nav ul li .fp-tooltip").css({"color":"#222",})   /* tooptip 수정 */
            $("#fp-nav ul li a span").css({"background":"black"})   /* tooptip 수정 */
            $(".logo").attr("src", "./images/logo/logo_color.png")  /* logo Color */
            $(".mobile_logo").attr("src", "./images/767/logo_color.png")    /* mobile_logo  */
            $(".menu li a").css({"color":"#000"})       /* GNB Color */
            $(".menuBar>span").css({"background-color":"#000"}) /* 햄버거 메뉴 */

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


            $(".sec_03_imgbox").css({"top":"0"})
		}
	}
})