<h1>Garbage collection</h1>
씨애랑 소프트웨어전시회

<h1>참여자</h1>
<hr>
<p>
    학번 20211719 20225141 20225123 20193529
    <br>
    이름 이소미 김지윤 김성호 이승주
    <br>
    소속 팀: 태그
    <br>

<h1>주제</h1>
<hr>
<p>카카오맵 api를 메인으로 사용하여 학교 근처 편의시설의 위치를 사용자들이 직접 업로드 하여 다른 사용자들에게 공유 할 수 있는 웹 사이트 제작을 목표로 한다.</p>
</p>


<ul>
    <li>플랫폼<ul>
            <li>MySQL, NodeJs, 카카오 API, Visual Studio Code,엑셀 </li>
        </ul>
    </li>
    <li>개발 도구 및 기술<ul>
            <li>기본적으로 카카오맵 api활용 및 백엔드 데이터 처리의 연습을 목표로 한다.</li>
            <li>기본적으로 사용자에게 쓰레기통 위치를 업로드 받아 등록, Marking하는 방식.</li>
            <li>우선 사용자에게 위치 받아 Marking을 하는 기술만을 개발</li>
            <li>이후 Mark의 id 를 바꿔가며 화장실, 흡연장 등 다른 장소로도 표시 가능하게끔 개발.</li>
        </ul>
    </li>
</ul>
<h1>FlowChart</h1>
<hr>
<ul>
    <img src="flowchart.drawio.png" style="width: 100%;">
</ul>
</li>
<hr>
<h1>로드맵</h1>
<ul>
    <li>카카오맵 api이용한 기본 틀 제작</li>
    <li>EXIF이용 현재 위치 출력, import기술 구현 및 데이터베이스 저장(백엔드)</li>
    <li>데이터베이스 데이터 > 프론트로 importing 구현, 카카오맵에 Marking</li>
    <li>카카오맵에 만들어지는 Mark의 Id에 따른 옵션(쓰레기통, 화장실, 흡연장 등) 구분</li>
    <li>id 구분에 따른 카카오맵에서 보이는 이미지(스타일) 구분 및 변경 구현</li>
</ul>
</li>
<li>참고강의
    <ul>
        <li>프론트<ul>
                <li>https://apis.map.kakao.com/web/</li>
                <li>https://apis.map.kakao.com/web/sample/basicMarkerImage/</li>
                <li>https://www.youtube.com/watch?v=TrC2x4N0XqY&t=7761s</li>
                <li>https://youtu.be/1JgpDcHEkFg</li>
            </ul>
        </li>
        <li>백엔드
            <ul>
                <li>https://www.youtube.com/watch?v=h_XDmyz--0w&list=PLuHgQVnccGMCgrP_9HL3dAcvdt8qOZxjW</li>
                <li>https://youtu.be/GXaMOxB0gq8</li>
                <li>https://apis.map.kakao.com/web/guide/#step3</li>
                <li>https://www.youtube.com/watch?v=T23PHQbeZ6E</li>
            </ul>
        </li>
</ul>

<h1>진행상황 </h1>
<hr>
<ul>
        <li><input type="checkbox" checked> 카카오맵 Api키 발급 및 기본 페이지 제작</li>
        <li><input type="checkbox" checked> 기본 마커 생성 (공학관, 도서관, clc)</li>
        <li><input type="checkbox" checked> 클릭시 마커 생성 이벤트 구현</li>
        <li><input type="checkbox"> 마커 타입 지정을 위한 popUiDiv Design밑 기능 구현</li>
        <li><input type="checkbox"> 지도에 Marker의 type별로 display되는 marker를 다르게 하는 기능 구현</li>
        <li><input type="checkbox"> 마커의 필터기능 : 전체 마커중 필터링 기능</li>
</ul>