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

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        var positions = [

            //작성 형식, 타입 
            //{title : "마우스 호버시 나올 이름", latlng  <=이 latlng은 그저 잠시 사용하는 변수이름이기 때문에 소문자로 사용함: new kakao.maps.LatLng(latitude, longtude) <=기본 좌표 생성 코드  }
            /*못생긴 예시
            { title: "공학관", latlng: new kakao.maps.LatLng(37.8862885, 127.7357552) }, { title: "캠퍼스라이프센터", latlng: new kakao.maps.LatLng(37.8848667, 127.7372887) },{ title: "일송기념도서관",latlng: new kakao.maps.LatLng(37.8866485, 127.7401359)}
        ]
        */

            {
                title: "공학관",
                latlng: new kakao.maps.LatLng(37.8862885, 127.7357552)
            },
            {
                title: "캠퍼스라이프센터",
                latlng: new kakao.maps.LatLng(37.8848667, 127.7372887)
            },
            {
                title: "일송기념도서관",
                latlng: new kakao.maps.LatLng(37.8866485, 127.7401359)
            }
        ]
        //for 구문으로 좌표들이 들어가 있는 배열  positions의 갯수 만큼 Marker 명령어를 실행함.
        for (i = 0; i < positions.length; i++) {

            var marker = new kakao.maps.Marker({

                map: map,
                position: positions[i].latlng,
                title: positions[i].title,
                image : markerImage

            });
        }
        //---------------------------클릭시 마커 생성 이벤트---------------------------
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            var title = prompt("이 장소의 이름을 입력하세요 :")
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;
            //latlng에서 Latitude와 Longitude를 얻는 메소드
            var message = latlng.getLat()
            var message2 = latlng.getLng();
            var message3 = message + " " + message2;
            var test = [
                {
                    lat: message,
                    lng: message2,
                    title: title
                }
            ]
            console.log(message)
            console.log(message2)
            console.log(message3)
            console.log(test)
            // loca라는 변수에 위치저장
            var loca = new kakao.maps.LatLng(message, message2);
            //loca위치로 마커 생성
            var Tmark = new kakao.maps.Marker({
                position: loca,
                title: title
            });
            Tmark.setMap(map);
            //좌표값 쓰로잉은 위 쪽에 나온 변수를 mysql에 돌리는 전달하는 방법을 알아와야 할 것 같음.
        })

//---------------- geolocation 이용해서 현재 위치 받아 지도의 중심으로 설정------------
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
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

//이미지 들어간 마커 생성

// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
//     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//     imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//     markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//   position: markerPosition,
//   image: markerImage // 마커이미지 설정 
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);  

// // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
// var content = '<div class="customoverlay">' +
//     '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
//     '    <span class="title">구의야구공원</span>' +
//     '  </a>' +
//     '</div>';


// // 커스텀 오버레이가 표시될 위치입니다 
// var position = new kakao.maps.LatLng(37.54699, 127.09598);  

// // 커스텀 오버레이를 생성합니다
// var customOverlay = new kakao.maps.CustomOverlay({
//     map: map,
//     position: position,
//     content: content,
//     yAnchor: 1 
// });