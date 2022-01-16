1. 컴파일과 번들링이 자동으로 된다(webpack, babel)
2. 자동 리플레쉬 기능으로 수정하면 화면에 바로 반영된다.
3. 서버사이드 렌더링이 지원된다.
4. 스태틱 파일을 지원한다.


//
_app.js에서 Component는 해당 URL의 컴포넌트를 랜더링한다.
index.js는 맨 처음 localhost에 들어올 때 맨 처음 랜더링 되는 컴포넌트다



Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진 최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering);

차이점
 [정적생성]
    - 프로젝트가 빌드하는 시점에 html파일 생성
    - 모든 요청에 재사용
    - 퍼포먼스 이유로, NExt js는 정적 생성을 권고
    - getStaticProps / getStaticePaths

 [서버사이드-랜더링]
    - 매 요청시에 html파일 생성
    - getServerSideProps
    - 서버에서 console.log를 확인하고 싶지만 브라우저에선 확인이 불가하고, 서버에서 확인이 가능....



-> 동적 라우팅
-> appList -> get Item -> item.id -> 동적 URL 생성 -> 생성된 동적 URL의 id로 해당 product검색 -> 받은 product로 component rendering


Link, router를 쓰는 이유는
location.href 는 새로고침이 되면서 재랜더링이 된다. 그러면 ssp를 사용하는 의미가 없다.
그렇기 때문에 Link, router을 사용해야한다.