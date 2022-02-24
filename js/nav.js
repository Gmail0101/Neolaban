

    // 사이브 메뉴
$(".slide_menu").html(`
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 slide_head">
                    <img src="./images/logo/logo.png" alt="로고" class="slide_logo visible-sm visible-md visible-lg">
                    <img src="./images/767/logo.png" alt="로고" class="mobile_logo visible-xs">
                    <div class="menu_close">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="col-lg-12" style="overflow: hidden;">
                    <div class="slide_link">
                        <ul class="slide_gnb">
                            <li>회사소개
                                <ul class="slide_lnb">
                                    <li onclick="location.href='./index.html';">인사말</li>
                                    <li onclick="location.href='./ci.html';">CI</li>
                                    <li onclick="location.href='./map.html';">오시는길</li>
                                </ul>
                            </li>
                            <li>B2B Business
                                <ul class="slide_lnb">
                                    <li onclick="location.href='./mask.html';">마스크 제조 및 유통</li>
                                    <li onclick="location.href='./phone.html';">휴대폰 수출 및 유통</li>
                                </ul>
                            </li>
                            <li>B2C Business
                                <ul class="slide_lnb">
                                    <li>분양대행</li>
                                    <li>밀키트 사업</li>
                                </ul>
                            </li>
                            <li>미디어센터</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `)



    

    // GNB 링크
    $("header").html(`
    <div class="nav">
            <div class="container">
                <div class="row">
                    <div class="gnb">
                        <img onclick="location.href='/index.html';" style="cursor:pointer;" src="./images/logo/logo.png" alt="로고" class="logo visible-sm visible-md visible-lg">
                        <img src="./images/767/logo.png" alt="로고" class="mobile_logo visible-xs">
                        <ul class="menu visible-lg">
                            <li><a href="/company.html">회사소개</a>
                                <ul class="submenu">
                                    <li><a href="./company.html">인사말</a></li>
                                    <li><a href="./ci.html">CI</a></li>
                                    <li><a href="./map.html">오시는길</a></li>
                                </ul>
                            </li>
                            <li><a href="/mask.html">B2B Business</a>
                                <ul class="submenu">
                                    <li><a href="./mask.html">마스크 제조 및 유통</a></li>
                                    <li><a href="./phone.html">휴대폰 수출 및 유통</a></li>
                                </ul>
                            </li>
                            <li><a href="#">B2C Business</a>
                                <ul class="submenu">
                                    <li><a href="#">분양대행</a></li>
                                    <li><a href="#">밀키트 사업</a></li>
                                </ul>
                            </li>
                            <li><a href="#">미디어센터</a></li>
                        </ul>
                        <div class="menuBar hidden-lg">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)



    /* footer */
    $("#ft").html(`
        <div class="container">
            <div class="ft_logo">
                <img src="./images/logo/ft_logo.png" alt="푸터로고">
            </div>
            <div class="foot_addr">
                <ul class="foot_list">
                    <li>상호명 / 네오라벤</li>
                    <li>대표자 / 이종철</li>
                    <li>사업자번호 / 250-86-00410</li>
                    <li>주소 / 경기 부천시 오정로 20-22, 2층</li>
                </ul>
                <strong>개인정보처리방침</strong>
                <strong>이메일무단수집거부</strong>
                <p>Copyright &copy; NEO LABEN. All rights reserved.</p>
            </div>
        </div>
    `)