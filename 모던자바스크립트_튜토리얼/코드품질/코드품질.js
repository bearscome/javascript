/*
    Chrome으로 디버깅하기
    1. 'sources'패널
        a. 파일 탐색 영역 : Html, Css, javascript를 트리형태로 보여줌
        b. 코드 에디터 영역 : 선택된 파일의 소스를 보여줌 편집 가능
        c. 자바스크립트 디버깅 영역
        
    2. 중단점
        a. 자바스크립트가 중단되는 코드 지점
        b. 중단점을 이용하면 실행이 중지된 시점에 변수가 어떤 값을 담고 있는지 확인 가능

    3. bebugger 명령어
        - 스크립트 내에 debugger 명령어를 적어주면 중단점을 설정한 것과 같은 효과

    4. 멈추면 보이는 것들
        a. watch - 표현식을 평가하고 결과 반영
        b. callstack - 코드를 해당 중단점으로 안내한 실행 경로를 역순으로 표시
            ㄱ. hello내에 중단점을 설정했기에 스택 맨위에 hello가 위치함. index.html에 hello함수를 정의하지(js에 정의함) 않았기 때문에 undefined로 나옴 
        c. Scope - 현재 정의된 모든 변수 출력
            ㄱ. Local : 함수의 지역변수 Local의 하위항목에 this에 대한 정보도 출력
            ㄴ. Global : 함수 밖에 선언 된 변수
    
    5. 스크립트 실행이 중단되는 경우
        a. 중단점을 만났을 때
        b. debugger문을 만났을 때
        c. 에러가 발생했을 때  

    구글 공식 개발자 모드 메뉴얼 https://developers.google.com/web/tools/chrome-devtools
*/