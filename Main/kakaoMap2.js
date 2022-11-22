

var container = document.getElementById('map');  //container = html파일에서 map이라는 id를 가진 태그 = div, 전체 맵 표시
var options = {
    center: new kakao.maps.LatLng(37.8862885, 127.7357552),   //맵을 기본으로 불렀을때 중심좌표 설정
    level: 3  //지도의 확대 레벨
};
var map = new kakao.maps.Map(container, options);  //지도 생성 위치 = container, 설정값 = options

var trashCan = '../Main/trashCan.png'
var water = '../Main/waterDispancer.png'
var toilet = '../Main/toilet.png'
var smoke = '../Main/smoke.png'


var global_lat;
var global_lng

imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

var markers = new Array();
markers[0] = ["공학관", 37.8862885, 127.7357552, water]
markers[1] = ["캠퍼스라이프센터", 37.8866485, 127.7401359, toilet]
markers[2] = ["일송기념도서관", 37.8848667, 127.7372887, trashCan]
markers[3] = ["체육기자재실 옆 흡연구역", 37.887549635515896, 127.73865471029242, smoke]

for (i = 0; i < markers.length; i++) {
    marker = new kakao.maps.Marker({
        map: map,
        title: markers[i][0],
        position: new kakao.maps.LatLng(markers[i][1], markers[i][2]),
        image: new kakao.maps.MarkerImage(markers[i][3], imageSize, imageOption)
    })
}



var submitbtn = document.getElementById("submitButton")
var resetBtn = document.getElementById("resetButton")
var typeTags = document.querySelectorAll(".typeTag")
var titleText = document.getElementById("opinion_txt")
var select

resetBtn.addEventListener('click', function () {
    titleText.value = ""
    select = undefined
})
typeTags.forEach(type => {
    type.addEventListener('click', function () {
        select = type.id 
        switch (select) {
            case 'smoke': select= smoke; break;
            case 'toilet': select= toilet; break;
            case 'water': select = water; break;
            case 'trashCan': select = trashCan; break;
        }
    })
});

submitbtn.addEventListener('click', function () {
    console.log(select);  //선택된 태그 
    document.getElementById("mainDiv").style.display = "none"
    document.getElementById("blackside").style.display = "none"
    // addMarker(lat, lng, titleText.value, select)
    testmark(global_lat,global_lng,titleText.value,select);
    titleText.value = ""
})


function testmark(lat,lng,title,image){
    this.lat = lat
    this.lng = lng
    this.title = title;
    this.image = image;
    var thisMarker = [this.title,this.lat,this.lng,this.image];
    markers.push(thisMarker);
    let i = markers.length-1
    console.log(markers)
    console.log(markers.length)
    // console.log(markers[markers.length-1][0])
    marker = new kakao.maps.Marker({
        map: map,
        title: markers[i][0],
        position: new kakao.maps.LatLng(markers[i][1], markers[i][2]),
        image: new kakao.maps.MarkerImage(markers[i][3], imageSize, imageOption)
    })
}


kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    document.getElementById("mainDiv").style.display = "block"
    document.getElementById("blackside").style.display = "block"
    var latlng = mouseEvent.latLng;
    global_lat = latlng.getLat()
    global_lng = latlng.getLng();

})


document.getElementById("centerMarker").addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        global_lat = position.coords.latitude, // 위도
        global_lng = position.coords.longitude; // 경도
        
        document.getElementById("mainDiv").style.display = "block"
        document.getElementById("blackside").style.display = "block"

    })

})
//div창 안의 버튼들

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
