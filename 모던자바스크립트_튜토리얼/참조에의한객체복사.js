/*
    객체는 원시값과 다르게 ‘참조에 의해(by reference)’ 저장되고 복사 된다.
    객체에 있는 변수는 값이 저장되는 것이 아니라 메모리 주소 즉 참조 값이 저장 됨


    객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작합니다.
    비교 시 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환하죠.

    let a = {};
    let b = a; // 참조에 의한 복사

    alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
    alert( a === b ); // true


    독립 된 객체
    let a = {};
    let b = {}; // 독립된 두 객체

    alert( a == b ); // false
*/

/*
    객체 복사.
    변수에 객체를 담으면 값이 담기는게 아닌 메모리 주소가 저장됨.
    그러면 주소 값이 아닌 객체 그 자체를 복사하고 독립적으로 관리하고 싶다면 객체 하나하나씩 복사해야함

    let user = {
    name: "John",
    age: 30
    };

    let clone = {}; // 새로운 빈 객체

    // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
    for (let key in user) {
    clone[key] = user[key];
    }

    // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
    clone.name = "Pete"; // clone의 데이터를 변경합니다.

    alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.

    OR
    Object.assign 반복문 없이 복사 가능
    문법 : Object.assign(dest, [src1, src2, src3...])
    desk를 복사하고 src에다가 붙혀넣음

    let user = { name: "John" };

    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };

    // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
    Object.assign(user, permissions1, permissions2);

    // now user = { name: "John", canView: true, canEdit: true }

    객체 안에 있는 객체는 복사로 객체 복제 불가
    참조 값만 복사되기 떄문이다. 객체 자체가 복사가 안됌
    let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
    };

    alert( user.sizes.height ); // 182

    size 복사 불가 참조 주소만 복사됌
    
    Object.assign: 얉은 복사
    cloneDeep(obj) : 깊은 복사
*/