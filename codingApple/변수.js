// 변수는 선언, 할당, 범위, 호이스팅에 따라 다르다.

// var 
// 1. 재 선언이 가능하다
// 2. 재 할당이 가능하다.
// 3. 범위는 함수 내부
var a = '';


// let
// 1. 재 선언이 불가능 하다. 
// 2. 재 할당이 가능하다.
// 3. 범위는 {} 내부
let b = '';

// const 
// 1. 재 선언이 불가능 하다.
// 2. 재 할당이 불가능 하다.
// 3. 범위는 {} 내부
const c = '';

// 오브젝트
// 1. const로 지정을 해도 내부 값은 변경이 가능하다.
// c.name = abc -> 왜냐하면 오브젝트를 재 할당하는게 아닌 값을 변경하는 것이기 때문이다.
// 오브젝트를 수정을 불가능하게 하고 싶다면 Object.freeze();를 쓰면 된다.

// 호이스팅
// 변수의 선언을 변수 범위 맨위로 끌고오는 현상
// 자바스크립트는 선언 후 할당 순서대로 진행한다.
// var name -> name = 30;

if(true) {
    var ifa = 1;
    var ifb = 2;
    if(true) {
        let ifb = 3;
        // let은 중가로에서 못나온다. 그래서 ifb = 2다.
        // if문 안에 있으니까 당연히 못나오지....
    }
    console.log(ifb);
}

// 연습문제

// 함수();
// function 함수() {
//     console.log(안녕);
//     let 안녕 = "hello";
// };

// 함수2();
// var 함수2 = function() {
//     console.log('안녕');
//     var 안녕 = "hello"
// };

// let 에이 = 1;
// var 함수3 = function() {
//   a = 2;
// }
// console.log(에이);

// let q = 1;
// var w = 2;
// window.q = 3;
// window.w = 4;

// console.log(q + w);


// 연습문제1. 해설
// 함수();
// function 함수() {
//     console.log(안녕);
//     let 안녕 = "hello";
// };

// 함수를 넣으면 window.함수로 호이스팅되어서 선언 및 할당이 되기 때문에 실행이 된다.
// 하지만 함수안에 있는 console.log(안녕)을 출력시에 오류가 난다.
// let도 호이스팅이 되지만 undefined를 할당하지 않기 때문에 오류가 난다
// var같은 경우는 자동으로 호이스팅이 된 후 undefined를 할당한다.


// 연습문제3. 해설
// 함수2();
// var 함수2 = function() {
//     console.log('안녕');
//     var 안녕 = "hello"
// };

// 함수 선언식으로 작성하면 자바스크립트는 var함수2 -> 함수2=function 순으로 진행한다.
// 함수가 선언만되었고 할당이 안되어 있어서 함수 실행이 안된다 결국 함수를 못찾아서 실행을 못한다.


// 연습문제4. 해설
// let q = 1;
// var w = 2;
// window.q = 3;
// window.w = 4;
// console.log(q + w);

// var w = window.w와 같다. 결국 재할당을 한 것이다.
// let q = 1, window.q = 3으로 할당을 했지만, 제일 가까운 값으로 할당이 된다.
// window.q보다는 let q가 더 가깝나 보다.

// 연습문제6. 해설
// for (var i = 0; i < 5; i++) { 
//     setTimeout(function() { console.log(i); }, i*1000 ); 
// }

// for문안에 settimeout이 있다. 처음에 1초 ~ 5초로 변경되어 console.log()를 찍는다.
// 하지만 for문은 이미 끝나있다. 0.몇초도 안걸린다. 그래서 var i => 0부터 5까지 이미 다 더한 직후라서
// 5로 고정되어 있다.
// var를 let으로 변경한다.
// let의 범위는 중가로 안에 있어서 var랑 다르게 정상적으로 출력된다.