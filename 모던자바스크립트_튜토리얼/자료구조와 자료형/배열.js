/*
    배열 : 순서가 있는 컬렉션
        - 배열선언
            1. let arr = new Array()
            2. let arr = []
*/

/*
    pop, push, shift, unshift
    1. pop : 배열 끝 요소를 제거하고 제거한 요소를 반환
        let fruits = ["사과", "오렌지", "배"]
        console.log(fruits.pop())
        console.log(fruits) //사과, 오렌지
    2. push : 배열 끝에 요소를 추가
        let fruits = ["사과", "오렌지"];
        fruits.push("배")
        console.log(fruits) // 사과, 오렌지, 배
    3. shift : 배열 앞 요소를 제거하고, 제거한 요소를 반환
        let fruits = ["사과", "오렌지", "배"]
        console.log(fruits.shift())
        console.log(fruits) //오렌지, 배
    4. unshift : 배열 앞에 요소를 추가
        let fruits = ["오렌지", "배"]
        fruits.unshift("사과")
        console.log(fruits) // 사과,오렌지,배
*/

/*
    배열의 내부 동작 원리
        배열은 특별한 종류의 객체이다.
        배열은 원시자료형이 아닌 객체형에 속하기 때문에 객체처럼 동작한다.
        배열은 순서가 있는 자료를 저장하는 용도로 만들어진 특수한 자료구조입니다.
        배열 내장 메서드들은 이런 용도에 맞게 만들어졌죠
        자바스크립트 엔진은 이런 특성을 고려하여 배열을 신중하게 조정하고, 처리하므로 배열을 사용할 땐 이런 목적에 맞게 사용해 주시기 바랍니다.
        임의의 키를 사용해야 한다면 배열보단 일반 객체 {}가 적합한 자료구조일 확률이 높습니다.
*/

/*
    성능
        push, pop은 빠르지만 shift와 unshift는 느리다
        push,pop은 뒤에만 더하니까 배열순서를 안 움직여도 괜찮은데
        shift와 unshift는 앞에 요소를 삭제하고 순서를 움직여야 하니 느려진다
*/
/*
    반복문 : for문은 배열을 순회할 때 쓰는 가장 오래된 방법이다. 순회시엔 인덱스를 사용한다.
        let arr = ["사과", "오렌지", "배"]
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }

        for..of :  현재 요소의 인덱스는 얻을 수 없고 값만 얻을 수 있습니다. 
            let fruits = ["사과", "오렌지", "자두"];
            // 배열 요소를 대상으로 반복 작업을 수행합니다.
            for (let fruit of fruits) {
            console.log( fruit );
            }

        for..in을 써도 된다. 하지만 이건 객체를 위한 것이지 배열을 위한 반복문이 아니다 그래서 10 ~ 100배 정도 느리다
*/

/*
    ‘length’ 프로퍼티
        - length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값입니다.
            let fruits = [];
            fruits[123] = "사과";
            console.log( fruits.length ); // 124
            배열을 이렇게 쓰지말자
        - length 프로퍼티의 또 다른 독특한 특징 중 하나는 쓰기가 가능하다.
            let arr = [1, 2, 3, 4, 5];
            arr.length = 2; // 요소 2개만 남기고 잘라봅시다.
            console.log( arr ); // [1, 2]
            arr.length = 5; // 본래 길이로 되돌려 봅시다.
            console.log( arr[3] ); // undefined: 삭제된 기존 요소들이 복구되지 않습니다.
        - 이런 특징을 이용하면 arr.length = 0;을 사용해 아주 간단하게 배열을 비울 수 있습니다.
*/

/*
    new Array()
        - let arr = new Array("사과", "배", "기타");
        - 대괄호 []를 사용하면 더 짧은 문법으로 배열을 만들 수 있기 때문에 new Array()는 잘 사용되지 않는 편입니다.
        - new Array()엔 다루기 까다로운 기능도 있어서 더욱더 그렇습니다.
        - 숫자형 인수 하나를 넣어서 new Array를 호출하면 배열이 만들어지는데, 이 배열엔 요소가 없는 반면 길이는 인수와 같아집니다.
            let arr = new Array(2); // 이렇게 하면 배열 [2]가 만들어질까요?
            console.log( arr[0] ); // undefined가 출력됩니다. 요소가 하나도 없는 배열이 만들어졌네요.
            console.log( arr.length ); // 길이는 2입니다.
        - 위 예시에서 확인해 본 것처럼 new Array(number)를 이용해 만든 배열의 요소는 모두 undefined 입니다.
        - 이런 뜻밖의 상황을 마주치지 않기 위해 new Array의 기능을 잘 알지 않는 한 대부분의 개발자가 대괄호를 써서 배열을 만듭니다.
*/

/*
    다차원 배열 : 배열 역시 배열의 요소가 될 수 있습니다.  다차원 배열은 행렬을 저장하는 용도로 쓰입니다.
        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        console.log( matrix[1][1] ); // 5, 중심에 있는 요소
*/

/*
    toString : 배열엔 toString 메서드가 구현되어 있어 이를 호출하면 요소를 쉼표로 구분한 문자열이 반환됩니다.
        let arr = [1, 2, 3];
        console.log( arr ); // 1,2,3
        console.log( String(arr) === '1,2,3' ); // true

        console.log( [] + 1 ); // "1"
        console.log( [1] + 1 ); // "11"
        console.log( [1,2] + 1 ); // "1,21"
        - 배열엔 Symbol.toPrimitive나 valueOf 메서드가 없습니다.
        - 따라서 위 예시에선 문자열로의 형 변환이 일어나 []는 빈 문자열, [1]은 문자열 "1", [1,2]는 문자열 "1,2"로 변환됩니다.
        - 이항 덧셈 연산자 "+"는 피연산자 중 하나가 문자열인 경우 나머지 피연산자도 문자열로 변환합니다.

        -따라서 위 예시는 아래 예시와 동일하게 동작합니다.
            console.log( "" + 1 ); // "1"
            console.log( "1" + 1 ); // "11"
            console.log( "1,2" + 1 ); // "1,21"
*/

/*
    요약
        배열은 특수한 형태의 객체로, 순서가 있는 자료를 저장하고 관리하는 용도에 최적화된 자료구조입니다.
            - 선언방법
                // 대괄호 (가장 많이 쓰이는 방법임)
                let arr = [item1, item2...];
                // new Array (잘 쓰이지 않음)
                let arr = new Array(item1, item2...);
                new Array(number)을 호출하면 길이가 number인 배열이 만들어지는데, 이 때 요소는 비어있습니다.
            - length 프로퍼티는 배열의 길이를 나타내줍니다. 정확히는 숫자형 인덱스 중 가장 큰 값에 1을 더한 값입니다. 배열 메서드는 length 프로퍼티를 자동으로 조정해줍니다.
            - length 값을 수동으로 줄이면 배열 끝이 잘립니다.
            - push(...items) – items를 배열 끝에 더해줍니다.
            - pop() – 배열 끝 요소를 제거하고, 제거한 요소를 반환합니다.
            - shift() – 배열 처음 요소를 제거하고, 제거한 요소를 반환합니다.
            - unshift(...items) – items를 배열 처음에 더해줍니다.
            - for (let i=0; i<arr.length; i++) – 가장 빠른 방법이고 오래된 브라우저와도 호환됩니다.
            - for (let item of arr) – 배열 요소에만 사용되는 모던한 문법입니다.
            - for (let i in arr) – 배열엔 절대 사용하지 마세요.

*/
