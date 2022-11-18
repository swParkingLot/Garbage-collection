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


function addMarker(lat, lng, title, image) {
    var thisMarker = [title, lat, lng, image]
    markers.push(thisMarker);
    console.log(markers)
}
kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;
    var lat = latlng.getLat()
    var lng = latlng.getLng();
    var title = "새로 생성된 마커"
    var image = trashCan;
    addMarker(lat, lng, title, image)
})