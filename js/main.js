// 헤더 색상 변하기

$(function(){
  var $header = $('.header'); //헤더를 변수에 넣기
  var $page = $('.swiper-wrapper'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
});


// search 배경 슬라이드 
// 섹션 슬라이드
var swiperHeader = new Swiper('.swiper-head', {
  mousewheel: false,
  keyboard: false,
  slidesPerView: 1,
  autoplay: {
      delay: 3000,
  },
  speed: 4000,
  effect : 'fade'
});




//  비디오 타이핑 효과

var typingBool = false; 
  var typingIdx=0; 
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      
      var tyInt = setInterval(typing,100); // 반복동작 
    } 
    
    function typing(){ 
      if(typingIdx<typingTxt.length){  
        $(".typing-text").append(typingTxt[typingIdx]); 
        typingIdx++; 
      } else{ 
        clearInterval(tyInt);
      } 
    }  


// 로그인 페이지
// const id = document.getElementById('id')
// const password = document.getElementById('password')
// const login = document.getElementById('login')
// let errStack = 0;

// login.addEventListener('click', () => {
//     if (id.value == 'js1004') {
//         if (password.value == '1234') {
//             alert('로그인 되었습니다!')
//         }
//         else {
//             alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
//             errStack ++;
//         }
//     }
//     else {
//         alert('존재하지 않는 계정입니다.')
//     }

//     if (errStack >= 5) {
//         alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
//     }
// })



// 모바일 nav 메뉴바

const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.mobile_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

$(document).ready(function(){
  $(".toggle_btn").click(function(){
      $(".mobile_menu").slideToggle(1000)
  })
})

///////////////////////////////////////////////////////////////

//로그인 페이지 유효성 검사 

// $(function(){
//   // 유효성체크
//   $(".signBtn").bind("click",function(){
//     checkLoginForm();		
//   });
//   function checkLoginForm(){
//     // 유저 아이디가 비어있을 때(공백만 있을때) 유효성 체크
//     var email_obj = $("['.email']");
//     var email_val = email_obj.val();
//       if( typeof(email_val)!="string" ) { email_val = ""; }
//     if ( email_val.split(" ").join("")=="" ){
//       alert("이메일를 입력해 주십시오.")
//       email_obj.val("");
//       email_obj.focus();
//       return;
//     }
//   }
// })

