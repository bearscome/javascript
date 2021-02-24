/*
    메서드와 'this'

    메서드 만들기
        - 객체에 만들어진 함수를 메서드라고 한다.
        -let user = {
            name : "john",
            age : 30
        }

        user.sayHi = function() {
            console.log("안녕하세요")
        }
        user.sayHi()

        var sayHi = sayHi() 
        user.sayHi 변수에다가 저장을 했으니까 ()를 붙히필요가 없음
*/

/*
    메서드 단축 구문

    user = { // 기존 스타일
        sayHi : function() {
            console.log("안녕하세요")
        }
    }

    user = { // 단축 스타일
        sayHi() {
            console.log("안녕")
        }
    }

    user.sayHi()

    위처럼 function을 생략해도 된다
    실행하는 방법이 동일하진 않다
*/

/*
    메서드와 'this'
        - 메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있음.
        - 모든 메서드가 그런 것은 아니지만 대부분의 메서드가 객체의 프로퍼티의 값을 활용
        - 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있음
        - 'this'는 객체를 나타냄. 정확히는 메서드를 호출할 때 사용된 객체
    
    user = { 
        name : 'jogh',
        age : 30,
        sayHi() {
            console.log(this.name, "안녕")
        }
    }

    user.sayHi() //user.sayHi()가 실행되는 동안 this는 user을 나타냄 this를 사용하지 않고 외부 변수를 참조하여 객체에 접근하는 것도 가능

    user = { 
        name : 'jogs',
        age : 30,
        sayHi() {
            console.log(user.name, "안녕")
        }
    }
    user.sayHi()
    // 그런데 외부 변수를 사용하여 객체를 참조하면 예상치 못한 에러가 날 수 있다.
    // user를 복사해 다른 변수에 할당(admin = user)하고, user는 전혀 다른값을 덮어썻다고 가정을 하면 sayHi()는 null 값을 참조할 것이다

    user = { 
        name : 'jogs',
        age : 30,
        sayHi() {
            console.log(user.name, "안녕")
        }
    }
    let admin = user;
    user = null
    admin.sayHi() // user가 null값으로 변해서 오류가 난다
*/

/*
    자유로운 "this"
    모든 함수에서 this를 사용할 수 있다.
    function sayHi() {
        console.log(this.name) //this를 사용했는데 문법적 오류가 안난다
    }

    sayHi()
    // this 값은 런타임에 결정컨텍스트에 따라 달라짐 동일한 함수라도 다른 객체에서 호출했다면 "this"가 참조하는 값은 달라짐


    let user = { name: "John" };
    let admin = { name: "Admin" };

    function sayHi() {
    console.log( this.name );
    }

    // 별개의 객체에서 동일한 함수를 사용함
    user.f = sayHi;
    admin.f = sayHi;

    // 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
    // this 값이 달라짐
    user.f(); // John  (this == user)
    admin.f(); // Admin  (this == admin)

    admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
*/

/*
    요약
    객체 프로퍼티에 저장된 함수를 '메서드’라고 부릅니다.
    object.doSomthing()은 객체를 '행동’할 수 있게 해줍니다.
    메서드는 this로 객체를 참조합니다.
    this 값은 런타임에 결정됩니다.

    함수를 선언할 때 this를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 this엔 값이 할당되지 않습니다.
    함수를 복사해 객체 간 전달할 수 있습니다.
    함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조합니다.
*/




