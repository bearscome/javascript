/*
    객체 : 원시형 자료와는 달리 다양한 데이터를 담을 수 있음
    객체는 중괄호를 이용해 만듬 키 : 값
    객체는 키를 이용하여 프로퍼티를 찾음
 */

 let user = new user(); //객체 생성자 문법
 let user = {} //객체 리터럴 문법 <- 객체를 선언할 때 주로 이용

 // 리터럴과 프로퍼티
 // 중괄호 {...} 안에는 '키' : '값' 쌍으로 구성된 프로퍼티가 들어감

 let user = { // 객체
     name : "john", // 키 : "name", 값 : "john" 
     age : 30 //키 : "age", 값 : 30
 }

 /*
    콜론 ":"을 기준으로 왼쪽엔 키, 오른쪽엔 값이 위치 프로퍼티 '이름' 혹은 '식별자'라고 부름
    객체 user에는 프로퍼티가 두 개 있습니다.
        1. 첫 번째 프로퍼티 - "name"(이름), "John"(값)
        2. 두 번째 프로퍼티 - "age"(이름), 30(값)

    프로퍼티 값 얻기
    alert(user.name) John
    alert(user.age) 30
 */

user.isAdmin = true; // 프로퍼티 값엔 모든 자료형이 올 수 있습니다. 블린형 프로퍼티를 추가
console.log(user)
delete user.age; //delete 연산자를 사용하면 프로퍼티를 삭제할 수 있음

/*
    대괄호 표기법
    점은 키가 유효한 변수 식별자인 경우에만 사용가능 식별자에는 공백이 없어야함
    키가 유효한 변수 식별자가 아닌 경우엔 점 표기법 대신 '대괄호 표기법'을 사용 키에 어떤한 문자열이 와도 동작
*/

let user = {};
//set
user["like birds"] = true; //대괄호 표기법 안에는 꼭 따움표를 사용해야함
//get
console.log(user["like birds"]);
//delete
delete user["like birds"];

//대괄호 표기법을 사용하면 아래 예시에서 변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있습니다.
let key = "like birds";
// user["like birds"]와 같음
user[key] = true;
//변수 key는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경될 수 있습니다. 어떤 경우든, 평가가 끝난 이후의 결과가 프로퍼티 키로 사용됩니다. 이를 응용하면 코드를 유연하게 작성할 수 있습니다.
let user = {
    name : "john",
    age : 30
};
let key = prompt("사용자의 어떤 정보를 얻고 싶은가요?", 'name');
alert(user[key]); // john을 입력한 경우


/*
    계산된 프로퍼티 잘 이해가 안돼..
*/
let fruit = prompt("어떤 과일을 구매하시겠습니까?", 'apple')
let bag = {
    [fruit] : 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아옴
}
alert(bag.apple) //fruit에 "apple"이 할당되었다면, 5가 출력
/*
fruit 결국 변수와 같은 것, [글자]가 있다면 해당하는 곳에 키와 값을 넣을 수 있음
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};

// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5;
*/

/*
    단축 프로퍼티 : 실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있음
*/
function makeUser(name, age) {
    return {
        name : name,
        age : age,
    };
}

let user = makeUser("john", 30)
console.log(user.name)

function makeUser(name, age) {
    name, // name : name name만 적어도 프로퍼티 설정가능
    age // age :age
}

/*
    프로퍼티 이름의 제약사항 
        - 객체이는 예약어를 써도 상관 없음(for, let, return)
        __proto__  = 5를 써놔도 object를 반환
*/

/*
    ‘in’ 연산자로 프로퍼티 존재 여부 확인하기
    let user = {}
    console.log(user.bbb === undefined) //true  존재하지 않는 프로퍼티를 접근해도 오류가 뜨는게 아닌 undefined를 반환

    "key" in object
    in 왼쪽에는 꼭 키가 있어야함 따움표를 생략하면 안됌

    //in을 쓰는 이유
    let obj = {
        test: undefined
        };

    alert( obj.test ); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.
    alert( "test" in obj ); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).
*/
let user = {name : "john", age : 30};
console.log("age" in user) //user.age가 존재함으로 true 반환
console.log("blalal" in user) //user.blalalal가 없음으로 false 반환

/*
    for .. in 반복문
    객체의 모든 키를 순회할 수 있습니다. for()문과는 다른거임

    문법 
        for(key in object) {
            code
        }
*/
let user = {
    name : "john",
    age : 30,
    isAdmin : true,
}

for(let key in user) {
    console.log(key) // 키 name, age, isAdmin
    console.log(user[key]) // 값 John, 30, true
    //for문 처럼 앞에 변수는 알아서 자기가 정하는 것
}

/*
    객체 정렬 방식
    프로퍼티에는 순서가 있을까? = 특별한 방법으로 정렬 됌 -> 정수프로퍼티는 자동으로 정렬 그외에는 객체의 추가한 순서대로 진행
*/
let codes = {
    "49": "독일",
    "41": "스위스",
    "44": "영국",
    // ..,
    "1": "미국"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49 이유는 키가 정수이기 때문에
  }
  /*
  	
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 프로퍼티를 하나 추가합니다.

// 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열됩니다.
for (let prop in user) {
  alert( prop ); // name, surname, age
}

//정수로 취급 안받으려면 앞에 + 붙여야함
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
  */

  let user = {};
  user.name = "john";
  user.surname = "Smith";

  user.name = "Pete";
  delete user.name
  

