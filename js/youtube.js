 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 //유튜브 재생
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8',
    playerVars:{
      autoplay: true, //자동재생유무
      loop: true, //반복 재생 유무
      playlist:'An6LvWQuj_8'
    },
    events: {
      onReady: function (event){ //메소드
        event.target.mute() //음소거
      }
    }
   });
 }
