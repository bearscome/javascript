/*
    옵셔널 체이닝 
        - 최근에 추가됨 구식 브라우저는 폴리필이 필요하다
        - 옵셔널 체이닝 '?.'을 사용하면 프로퍼티가 없는 중첩객체를 에러없이 안전하게 접근 가능

        let user = {};
        console.log(user.address.street
        //안에 주소에 접근을 할 수 없어서 에러남
        
        console.log(user && user.address && user.address.street) 
        // 이렇게 찾으면 undefined만 나옴 안에 있을 수도 있고 없을 수도 있을 때 사용
*/



/*
    ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
    //let user = {}
    //console.log(user?.address?.street)
    //기존에 .(닷)으로만 접근했다면 오류가 났음 하지만 ?.를 쓰면 undefined를 반환
    let user = null
    console.log(user?.address?.street)
    //user?.address로 주소를 읽으면 아래와 같이 user 객체가 존재하지 않더라도 에러가 발생하지 않습니다.
    //위 예시를 통해 우리는 ?.은 ?. ‘앞’ 평가 대상에만 동작되고, 확장은 되지 않는다는 사실을 알 수 있습니다.
*/


/*
    남용 금지!
    ?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.

    사용자 주소를 다루는 위 예시에서 논리상 user는 반드시 있어야 하는데 address는 필수값이 아닙니다. 
    그러니 user.address?.street를 사용하는 것이 바람직합니다.
    실수로 인해 user에 값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 합니다. 
    그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워집니다.
    
    ?.앞의 변수는 꼭 선언되어 있어야 합니다.
    변수 user가 선언되어있지 않으면 user?.anything 평가시 에러가 발생합니다.
    user을 선언하지 않고 접근하면 에러가 남
    console.log(user?.adrress)
*/

/*
    단락 평가
    - 왼쪽에 평가대상의 값이 없다면 바로 평가를 멈춤

    ?.은 연산자가 아닙니다. ?.은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)입니다.
    let user1 = {
    admin() {
        alert("관리자 계정입니다.");
        }   
    }

    let user2 = {};

    user1.admin?.(); // 관리자 계정입니다.
    user2.admin?.(); // 객체가 비워져 있음

    .대신 대괄호 []를 사용해 객체 프로퍼티에 접근하는 경우엔 ?.[]를 사용할 수도 있습니다. 
    위 예시와 마찬가지로 ?.[]를 사용하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있습니다.

    let user1 = {
        firstName: "Violet"
        };

        let user2 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.

        let key = "firstName";

        alert( user1?.[key] ); // Violet
        alert( user2?.[key] ); // undefined

        alert( user1?.[key]?.something?.not?.existing); // undefined

        delete user?.name; // user가 존재하면 user.name을 삭제합니다.



    ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없습니다.
    // user가 존재할 경우 user.name에 값을 쓰려는 의도로 아래와 같이 코드를 작성해 보았습니다.

    user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
    // 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문입니다.
*/

/*
    요약

    옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있습니다.

    obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
    obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
    obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함
    여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기도 쉽습니다. ?. 왼쪽 평가 대상이 null이나 undefined인지 확인하고 null이나 undefined가 아니라면 평가를 계속 진행합니다.

    ?.를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있습니다.

    ?.은 ?.왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 합니다.

    꼭 있어야 하는 값인데 없는 경우에 ?.을 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 만들지 말도록 합시다.
*/
let user = {

}

console.log(user2?.sex?.ss)