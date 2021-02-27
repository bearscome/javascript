/*
    객체를 원시형으로 변환
        - 객체를 연산을 하면 객체는 자동으로 형 변환을 하고 의도한 연산을 수행함
            1. 객체는 논리 평가시 true를 반환 따라서 객체는 숫자형, 문자형으로만 변환 됌
            2. 숫자형의 형 변환은 객체끼리 뺴는 연산을 할 때나 수학 관련 함수를 적용할 때 일어남
            3. 문자형으로의 형 변환은 객체를 출력할 때 주로 일어남
            4. 객체 형 변환은 세 종류로 구분되는데, 'hint’라 불리는 값이 구분 기준이 됩니다.
*/

/*
    ToPrimitive : 숫자형이나 문자형으로 형을 변환 시킨다
        1. "string"
            - alert 함수 같이 문자열을 기대하는 연산을 수행할 때 hint가 string으로 된다.
            // 객체를 출력하려고 함
            alert(obj);

            // 객체를 프로퍼티 키로 사용하고 있음
            anotherObj[obj] = 123;

        2. "number"
            - 수학 연산을 적용하려 할 때, hint는 number가 된다
            // 명시적 형 변환
            let num = Number(obj);

            // (이항 덧셈 연산을 제외한) 수학 연산
            let n = +obj; // 단항 덧셈 연산
            let delta = date1 - date2;

            // 크고 작음 비교하기
            let greater = user1 > user2;

        3. "defualt"
            - 연산자가 기대하는 자료형이 '확실치 않을 떄' hint는 default가 됩니다
            - +는 피 연산자에 따라 문자열을 합치거나 숫자를 더하는 연산자가 도리 수 있다. 따라서 인수가 객체일 때는 default가 된다.
            - == 동등연산자는 객체-문자형, 객체-숫자형, 객체-심볼형 끼리 비교할 때도, 어떤 자료형으로 변환할지 확신이 안서므로 default 값을 반환한다.
            // 이항 덧셈 연산은 hint로 `default`를 사용합니다.
            let total = obj1 + obj2;

            // obj == number 연산은 hint로 `default`를 사용합니다.
            if (user == 1) { ... };

        4. <, > 비교연산자는 문자형과 숫자형을 모두 허용함. hint는 number로 고정한다.
        5. boolean는 hint값이 없다
        6. 형 변환이 필요할 때 아래와 같은 알고리즘에 따라 원하는 메서드를 찾고 호출
            - 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 메서드를 호출합니다. Symbol.toPrimitive는 시스템 심볼로, 심볼형 키로 사용됩니다.
            - 1에 해당하지 않고 hint가 "string"이라면,
                obj.toString()이나 obj.valueOf()를 호출합니다(존재하는 메서드만 실행됨).
            - 1과 2에 해당하지 않고, hint가 "number"나 "default"라면
                obj.valueOf()나 obj.toString()을 호출합니다(존재하는 메서드만 실행됨).
*/

/*
    Symbol.toPrimitive : 원시 값을 반환 받아야 할 때 쓰는 함수
        - obj[Symbol.toPrimitive] = function(hint) {
            // 반드시 원시값을 반환해야 합니다.
            // hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
            };

        let user = {
            name: "John",
            money: 1000,

            [Symbol.toPrimitive](hint) {
                alert(`hint: ${hint}`);
                return hint == "string" ? `{name: "${this.name}"}` : this.money;
            }
        };

            // 데모:
            alert(user); // hint: string -> {name: "John"}
            alert(+user); // hint: number -> 1000
            alert(user + 500); // hint: default -> 1500

            이렇게 메서드를 구현해 놓으면 user는 hint에 따라 (자기 자신을 설명해주는) 문자열로 변환되기도 하고 (가지고 있는 돈의 액수를 나타내는) 숫자로 변환되기도 합니다.
            user[Symbol.toPrimitive]를 사용하면 메서드 하나로 모든 종류의 형 변환을 다룰 수 있습니다.
*/

/*
    toString과 valueOf
        - toString과 valueOf는 심볼이 생기기 이전부터 존재해 왔던 ‘평범한’ 메서드입니다. 
           이 메서드를 이용하면 '구식’이긴 하지만 형 변환을 직접 구현할 수 있습니다.
        - 객체에 Symbol.toPrimitive가 없으면 자바스크립트는 아래 규칙에 따라 toString이나 valueOf를 호출합니다.
            1. hint가 'string’인 경우: toString -> valueOf 순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출함)
            2. 그 외: valueOf -> toString 순
        let user = {
            name: "John",
            money: 1000,

            // hint가 "string"인 경우
            toString() {
                return `{name: "${this.name}"}`;
            },

            // hint가 "number"나 "default"인 경우
            valueOf() {
                return this.money;
            }
        };

        alert(user); // toString -> {name: "John"}
        alert(+user); // valueOf -> 1000
        alert(user + 500); // valueOf -> 1500
        
        출력 결과가 Symbol.toPrimitive를 사용한 예제와 완전히 동일하다는 걸 확인할 수 있습니다.
        그런데 간혹 모든 형 변환을 한 곳에서 처리해야 하는 경우도 생깁니다. 이럴 땐 아래와 같이 toString만 구현해 주면 됩니다
        let user = {
            name: "John",

            toString() {
                return this.name;
            }
        };
        alert(user); // toString -> John
        alert(user + 500); // toString -> John500
        객체에 Symbol.toPrimitive와 valueOf가 없으면, toString이 모든 형 변환을 처리합니다.
*/

/*
    추가 형 반환
    - 곱셈을 해주는 연산자 *는 피연산자를 숫자형으로 변환시키죠.
    - 객체가 피연산자일 때는 다음과 같은 단계를 거쳐 형 변환이 일어납니다.
        객체는 원시형으로 변화됩니다. 변환 규칙은 위에서 설명했습니다.
        변환 후 원시값이 원하는 형이 아닌 경우엔 또다시 형 변환이 일어납니다.

    let obj = {
        // 다른 메서드가 없으면 toString에서 모든 형 변환을 처리합니다.
        toString() {
            return "2";
        }
    };
    alert(obj * 2); // 4, 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 문자열 "2"는 숫자 2로 변경됩니다.

    obj * 2에선 객체가 원시형으로 변화되므로 toString에의해 obj는 문자열 "2"가 됩니다.
    곱셈 연산은 문자열은 숫자형으로 변환시키므로 "2" * 2는 2 * 2가 됩니다.

    그런데 이항 덧셈 연산은 위와 같은 상황에서 문자열을 연결합니다.
    let obj = {
        toString() {
            return "2";
        }
    };

    alert(obj + 2); // 22("2" + 2), 문자열이 반환되기 때문에 문자열끼리의 병합이 일어났습니다.
*/

/*
    요약
        원시값을 기대하는 내장 함수나 연산자를 사용할 때 객체-원시형으로의 형 변환이 자동으로 일어납니다.

        객체-원시형으로의 형 변환은 hint를 기준으로 세 종류로 구분할 수 있습니다.

        "string" (alert 같이 문자열을 필요로 하는 연산)
        "number" (수학 연산)
        "default" (드물게 발생함)
        연산자별로 어떤 hint가 적용되는지는 명세서에서 찾아볼 수 있습니다. 
        연산자가 기대하는 피연산자를 '확신할 수 없을 때’에는 hint가 "default"가 됩니다. 
        이런 경우는 아주 드물게 발생합니다. 
        내장 객체는 대개 hint가 "default"일 때와 "number"일 때를 동일하게 처리합니다. 
        따라서 실무에선 hint가 "default"인 경우와 "number"인 경우를 합쳐서 처리하는 경우가 많습니다.


        객체-원시형 변환엔 다음 알고리즘이 적용됩니다.

        객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 호출합니다.
        1에 해당하지 않고 hint가 "string"이라면,
        obj.toString()이나 obj.valueOf()를 호출합니다.
        1과 2에 해당하지 않고, hint가 "number"나 "default"라면
        obj.valueOf()나 obj.toString()을 호출합니다.
        obj.toString()만 사용해도 '모든 변환’을 다 다룰 수 있기 때문에, 실무에선 obj.toString()만 구현해도 충분한 경우가 많습니다. 
        반환 값도 ‘사람이 읽고 이해할 수 있는’ 형식이기 때문에 실용성 측면에서 다른 메서드에 뒤처지지 않습니다.
        obj.toString()은 로깅이나 디버깅 목적으로도 자주 사용됩니다.
*/