//login 을 포함한 모든 페이지에 사용되는
const searchEl = document.querySelector('.search');/*search라는class 검색*/ 
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  //실행할 코드 logic...
  searchInputEl.focus();//searchEl부분에 focus가 적용된다.
  //img에는 가상요소가 적용이 되는지 
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');/*focus가 된상태*/
  searchInputEl.setAttribute('placeholder','통합검색'); //placeholder: html속성을 지정함, 속성에 들어갈 실제 값
});

searchInputEl.addEventListener('blur',function(){ //blur :focus가 해제됐을때
  searchEl.classList.remove('focused');/*focus가 된상태*/
  searchInputEl.setAttribute('placeholder',''); //placeholder: html속성을 지정함, 속성에 들어갈 실제 값, focus가 되지않을때 내용을 없앤다.
});
