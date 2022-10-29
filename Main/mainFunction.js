const btn = document.querySelector('.navbar__toggle-btn');
const menu = document.querySelector('.navbar__menu');

let iconBars = true;

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