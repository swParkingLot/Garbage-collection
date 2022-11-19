var btn = document.querySelector('.navbar__toggle-btn');
var menu = document.querySelector('.navbar__menu');
var iconBars = true;

// 햄버거 메뉴 클릭 시
btn.addEventListener('click', ()=>{
  // 1. 메뉴 보이기  
  if(menu.style.display=='none') {
      menu.style.display = 'block';
    } else{
      menu.style.display = 'none';
    }

   
  // 햄버거 아이콘을 X로 변환
  if(iconBars == true) {
      iconBars = !iconBars;
      while(btn.firstChild) { btn.removeChild(btn.firstChild); } 
      btn.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else if(iconBars == false) {
        iconBars = !iconBars;
        while(btn.firstChild) { btn.removeChild(btn.firstChild); } 
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    
})

//--------------------- 로고 클릭 시 맵 한림대로 원위치
function panTo() {
  navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude, // 위도
  lon = position.coords.longitude; // 경도    

  // 이동할 위도 경도 위치를 생성합니다 
  var moveLatLon = new kakao.maps.LatLng(lat, lon);
  
  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
})

}
var logo = document.querySelector('.navbar__logo');
logo.addEventListener('click', panTo);

document.getElementById("blackside").addEventListener('click',function(){
  this.style.display = "none"
  document.getElementById("mainDiv").style.display = "none"
})

var submitbtn = document.getElementById("submitButton")
var resetBtn = document.getElementById("resetButton")

submitbtn.addEventListener('click',function(){

})
resetBtn.addEventListener('click',function(){
  
})