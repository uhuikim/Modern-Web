//라이트박스
    $(".lightgallery").lightGallery({
        thumbnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    }); 

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명","팝업이름","옵셥설정")
    //옵션 : left(위치), top(위치), width, height, status(상태),toolbar(툴바),location(주소창),menubar,scroollbars,fullscreen
    window.open("sample_popup.html","popup01","width=800,height=590, left=50, top=50, scrollbar=0,toolbar=0, menubar=0");
})


//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$('#layer').css("display","block");
    //$('#layer').show();
    // $('#layer').fadeIn();
    $('#layer').slideDown();
})
$("#layer .close").click(function(e){
    e.preventDefault();
    //$('#layer').css("display","none");
    //$('#layer').hide();
    // $('#layer').fadeOut();
    $('#layer').slideUp();
})


//탭메뉴
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active>ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


//배너
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickplay")
})
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause")
})
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev")
})
$(".next").click(function(){
    $(".gallery_img").slick("slickNext")
})


//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault();//클릭했을때 #은 0,0으로 이동하게 되어있음, 이걸 차단시킬 필요가 
                        //내가 어디에서 클릭하던 0,0 위치로 이동해서 보여주는 것을 바꿈 
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show(); 제이쿼리의 애니메이션 메서드 , 위랑 같은 효과
    //$("#cont_nav").fadeIn(); 서서히 나타나기
    //$("#cont_nav").slideDown(); 슬라이드 처럼 나옴
    //$("#cont_nav").toggle(); show + hide 가 합쳐짐 , 한번 클릭하면 보이고 또 클릭하면 사라짐
    //$("#cont_nav").fadeToggle(); 서서히 나타났다가 사라졌다함
    $("#cont_nav").slideToggle(200); // 제일 자연스러움 200은 0.2초를 의미함
    $(this).toggleClass("on"); //on이 붙었을때 css작업을 해주기-> 백그라운드 포지션을 바꾸어서 화살표 방향을 바꿈
                                //toggle 은 add+ remove를 합쳐서 자동으로 class를 붙였다 없앴다 해준다.
}) 

//var btn = document.querySelector(".btn");
//var content = document.querySelector("#cont_nav");
//btn.addEventListener('click', function(event){
//    event.preventDefault();
//    content.style.display="block"
//} ) 