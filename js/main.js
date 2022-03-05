
//일정값으로 스크롤을 내리면 배지가 사라지게 만드는 코드
const badgeEl = document.querySelector('header .badges');

//함수가 한번에 많이 실행되는것을 방지한다. _.throttle
// _.throttle(함수,시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){ //window.scrollY :window객체의 scrollY의 속성값을 나타낸다.
    // 배지 숨기기
   // gsap.to(적용되는 요소,지속시간,옵션);
   // {} : 객체데이터
   // opacity:투명도 설정 0 - 불투명 시각적으로만 사라진다.
   gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none' //요소를 없어지게 한다. css의 단어는 '' 처리함
   });
  }
  else{
    //배지보이기
    gsap.to(badgeEl,.6,{
      opacity: 1,
      display: 'block'
   });
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index){
  gsap.to(fadeEl,1,{
    delay: (index + 1) * .7, //0.7 1.4 2.1 2.8초 후에 진행된다. 
    opacity:1 
  });
});

//new 생성자(클래스)
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay:true,
  loop:true //반복재생여부
})

new Swiper('.promotion .swiper-container',{
  slidesPerView :3, //한번에 보여줄 슬라이드 개수
  spaceBetween:10,//슬라이드 사이 여백
  centeredSlides:true,//1번슬라이드가 가운데 보이기
  loop:true, //반복재생이 가능
  autoplay: {
  delay: 5000,//5초
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true//사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
 slidesPerView : 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

//클래스를 추가한다.
//보이거나 안보이거나 처리는 css에서 제어하는것이 좋다.
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //값이 바뀔 수 있다. 프로모션이 숨겨져있는가에대한 변수
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion //true
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }
  else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay , size){
 // gsap.to(요소,시간,옵션); 애니메이션 라이브러리
 gsap.to(selector,random(1.5,2.5),
 { //random으로 나온 수를 넣는다.
   y: 20,
   repeat:-1,//무한반복
   yoyo:true, //뒤로 반복함
   ease: Power1.easeOuteaseOut,
   delay:random(0,delay)
 });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,15);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 정함
    triggerHook:.8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller()); //클래스를 넣었다 뺐다하도록 지정
  
});