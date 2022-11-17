var container = document.getElementById('map');  //container = html파일에서 map이라는 id를 가진 태그 = div, 전체 맵 표시
var options = {
    center: new kakao.maps.LatLng(38.8862885, 127.7357552),   //맵을 기본으로 불렀을때 중심좌표 설정
    level: 3  //지도의 확대 레벨
};
var map = new kakao.maps.Map(container, options);  //지도 생성 위치 = container, 설정값 = options

//---------------------------기본 마커 생성---------------------------
/*
  var marker1 = new kakao.maps.LatLng(37.8862885, 127.7357552);  //한림대학교 공학관 좌표로 생성될 위치 설정
    var marker = new kakao.maps.Marker({
        position: marker1
    })
    marker.setMap(map);
    // 단일 마커 생성
*/


//---------------------------여러개의 마커 생성---------------------------

//마커 이미지 지정
var trashCan = '../Main/trashCan.png'
var water = '../Main/waterDispancer.png'
var toilet = '../Main/toilet.png'


imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//마커의 세부(크기, 좌표와의 위치)
var typeOfMarker = {
    toilet: new kakao.maps.MarkerImage(toilet, imageSize, imageOption),
    trash: new kakao.maps.MarkerImage(trashCan, imageSize, imageOption),
    water: new kakao.maps.MarkerImage(water, imageSize, imageOption)
}

var markers = [
    //마커들의 목록
    //{title : "마우스 호버시 나올 이름", latlng  <=이 latlng은 그저 잠시 사용하는 변수이름이기 때문에 소문자로 사용함: new kakao.maps.LatLng(latitude, longtude) <=기본 좌표 생성 코드  }
    //마커의 타입, 이름, 위치 등을 지정 해 줌.
    /*못생긴 예시
    { title: "공학관", latlng: new kakao.maps.LatLng(37.8862885, 127.7357552) }, { title: "캠퍼스라이프센터", latlng: new kakao.maps.LatLng(37.8848667, 127.7372887) },{ title: "일송기념도서관",latlng: new kakao.maps.LatLng(37.8866485, 127.7401359)}
    */


    {
        title: "공학관",
        latlng: new kakao.maps.LatLng(37.8862885, 127.7357552),
        type: typeOfMarker.water
    },
    {
        title: "캠퍼스라이프센터",
        latlng: new kakao.maps.LatLng(37.8848667, 127.7372887),
        type: typeOfMarker.toilet
    },
    {
        title: "일송기념도서관",
        latlng: new kakao.maps.LatLng(37.8866485, 127.7401359),
        type: typeOfMarker.trash
    }
]
//for 구문으로 좌표들이 들어가 있는 배열  markers의 갯수 만큼 Marker 명령어를 실행함.
for (i = 0; i < markers.length; i++) {

    var marker = new kakao.maps.Marker({

        map: map,
        position: markers[i].latlng,
        title: markers[i].title,
        image: markers[i].type

    });
}



//---------------------------클릭시 마커 생성 이벤트---------------------------
kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;
    var message = latlng.getLat()
    var message2 = latlng.getLng();
    var message3 = message + " " + message2;
    console.log(message)
    console.log(message2)
    console.log(message3)
    var position = new kakao.maps.LatLng(message, message2);
     
document.getElementById("mainDiv").style.display = "block"
document.getElementById("blackside").style.display = "block"

})

//div창 안의 버튼들
var submitbtn = document.getElementById("submitButton")
var resetBtn = document.getElementById("resetButton")
var typeTags = document.querySelectorAll(".typeTag")
var titleText = document.getElementById("opinion_txt")
var select
typeTags.forEach(type => {
    type.addEventListener('click', function () {
        console.log(type.id)
        select = type.id
    })
});
submitbtn.addEventListener('click',function(){
    console.log(select);
    console.log(titleText.value)
})
resetBtn.addEventListener('click',function(){
  
})
//---------------- geolocation 이용해서 현재 위치 받아 지도의 중심으로 설정------------
if (navigator.geolocation) {

    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        console.log

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '여기에 계신가요?!'; // 인포윈도우에 표시될 내용입니다
        map.setCenter(locPosition);
        alert(message)



    });

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다


    function setCenter() {
        // 이동할 위도 경도 위치를 생성합니다 
        var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
        // 지도 중심을 이동 시킵니다
        map.setCenter(moveLatLon);
    }
    alert("위치를 찾을 수 없어요")

}
