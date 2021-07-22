//타입스크립트는 일반 변수, 매개 변수, 객체 속성 등에 :TYPE과 같은 형태로 타입을 지정할 수 있다.
function numAdd(a, b) {
    //a,b :type :number -> 리턴할 타입
    return a + b;
}
let sss = numAdd(1, 2);
//some:TYPE
console.log(`hello ${sss}`);
function stringAdd(a, b) {
    return a + b;
}
;
let bbb = stringAdd('hello', 'wolrd');
console.log(`hellow String ${bbb}`);
// boolean
let isBoolean = true;
let isDone = false;
console.log(isBoolean, isDone);
//숫자 : number
let num;
let integer = 6;
let float = 3.14;
let hex = 0xf00d; // 61453
let binary = 0b1010; // 10
let octal = 0o744; // 484
let infinity = Infinity;
let nan = NaN;
//문자 : string
let str;
let red = 'Red';
let green = "Green";
let myColor = `My color is ${red}.`;
let yourColor = 'Your color is' + green;
//배열 : Array 배열은 2가지의 방법이 있다
//문자만
let fruits = ['apple', 'banana'];
let furits = ['APPLE', 'BANANAN'];
//숫자만
let asdasds = [1, 2, 3, 4, 5];
let stst = [1, 2, 3, 4, 5, 1];
//유니언 타입(다중타입) '문자열과 숫자를 동시에 가지는 배열'
let abc = [1, 2, 3, 'aa'];
let def = [1, 2, 'bb'];
//배열이 가지는 항목의 값을 단언할 수 없을 때는 any사용
let qqq = [1, 2, true, 'ff'];
let www = ['asd'];
let aaaaa = [
    {
        name: 'age',
        age: 15
    }
];
console.log(`${aaaaa}, aaaaa`);
//Tuple 배열과 유사하다 다른점은 정해진 타입의 고정된 길이 배열을 표현한다
let tuple;
console.log(tuple = ['aa', 3]);
//console.log(tuple = ['3', 33,33]); typeError가 난다. 정해진 값으로 대입을 안했기 때문에
//Enum 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입, 값의 종류가 일정한 범위로 정해져 있을 경우 유용
//기본적으로 0붙 시작하여 1씩 증가
var Week;
(function (Week) {
    Week[Week["sun"] = 0] = "sun";
    Week[Week["mon"] = 1] = "mon";
    Week[Week["tue"] = 2] = "tue";
    Week[Week["wed"] = 3] = "wed";
    Week[Week["thu"] = 4] = "thu";
    Week[Week["fri"] = 5] = "fri";
    Week[Week["set"] = 6] = "set";
})(Week || (Week = {}));
console.log(Week);
console.log(Week.mon);
console.log(Week[1]);
console.log(Week['mon']);
//enum은 역으로 맵핑이 가능하다.
//모든 타입 : any
/*
    any는 모든 탑을 의미한다. 변수와 동일하게 어떤 값도 할당할 수 있다.
    외부 자원을 활용해 개발할 때 불가피하게 타입을 단언할 수 없을 경우, 유용하다
    강한 타입을 적용하여 Any 사용을 금지하려면 컴파일 옵션 "noImplicitAny": true를 설정한다.
 */
let any = 123;
any = 'hello';
any = {};
any = undefined;
//알 수없는 타입 : UnKnown
/*
    any와 같이 최상위 타입인 Unknown은 알수 없는 타입이다
    unKnown은 any말고 다른 타입을 정의 할 수 없다
 */
let a = 123;
let u = 123;
let v1 = a; // 모든 타입(any)은 어디든 할당할 수 있습니다.
//let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없습니다.
let v3 = u; // OK!
//let v4: number = u as number; // 타입을 단언하면 할당할 수 있습니다.
//객체 :Object
//기본적으로 typeof연산자가 object로 변환하는 모든 타입을 나타냅니다.
//컴파일러 옵션에서 엄격한 타입 검사 (strict)를 true로 설정하면, null은 포함하지 않습니다.
let userA = {
    name: 'ㅗㅇ',
    age: 12
};
//null, undefined
/*
 기본적으로 null과 undefined는 모든 타입의 하위 타입으로, 다음과 같이 각 타입에 할당할 수 있습니다.
 심지어 서로의 타엡에도 할당이 가능합니다.

 이는 컴파일 옵션에서  "strictNullChecks": true을 통해 엄격하게 Null, undefined 서로의 타입까지 더이상 할당할 수 없게 합니다.
 단, Void에는 undefined를 할당할 수 있습니다.
 */
let num1 = undefined;
let str2 = null;
let obj3 = undefined;
let arr4 = null;
let und5 = null;
let nul6 = undefined;
let voi6 = null;
console.log('obj', obj3);
//Void : 일반적으로 값을 반환하지 않는 함수에서 사용합니다.
//Void 위치는 함수가 반환 타입을 명시하는 곳입니다.
function hello2(msg) {
    console.log(`Hello ${msg}`);
}
hello2('2222');
let abcdef = hello2('시발 왜 되냐?');
console.log(abcdef);
//Never : 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없습니다.
function error(message) {
    throw new Error(message);
}
// error('zzzzz')
const never123 = [];
console.log('never123', never123);
//Union : 2개 이상의 타입을 허용하는 경우, 이를 유니언이라고 한다 '|'를 통해 타입을 구분하며, ()는 선택사항이다.
let union1;
union1 = 'hh';
union1 = 123;
;
// const test : aa  = {
//     name : 'gg',
//     age: 123,
//     aaa : false
// }
const test2 = {
    name: 'gg',
    age: 123,
    aaa: false
};
//함수 : 화살표 함수를 이용해 타입을 지정할 수 있다. 인수의 타입과 반환 값의 타입을 입력한다
let myFunc;
// myFunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수
myFunc = function (x, y) {
    return x + y;
};
let yourFunc;
// 인수가 없고 반환 값의 타입을 입력
yourFunc = function () {
    console.log('hello world');
};
console.log('yourFunc', yourFunc);
let test = () => {
    console.log('123');
};
test();
// 타입
// function some (aa:string | number, b:boolean) => {
//     if(b) {
//         aa.tofixed(2)
//     }
// }
// aa에 문자형이 들어올 수 있어서 tofixed가 안먹힌다
function someFunc(val, isNumber) {
    // some logics
    if (isNumber) {
        // 1. 변수 as 타입
        val.toFixed(2);
        // Or
        // 2. <타입>변수
        // (<number>val).toFixed(2);
    }
}
//제네릭 재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공합니다.
function toArray(a, b) {
    return [a, b];
}
toArray(1, 2);
//toArray('1', '2') error
function toArray2(a, b) {
    return [a, b];
}
toArray2(1, 2);
toArray2('1', '2');
toArray2(1, '2');
const dataA = {
    name: 'DATAA',
    value: 'Hello World',
};
const dataB = {
    name: 'DATAA',
    value: 12,
};
const dataD = {
    name: 'Data D',
    value: [1, 2, 3, 4]
};
const dataBB = {
    name: 'aaa',
    value: '111'
};
//https://heropy.blog/2020/01/27/typescript/ 조건부타입
//# sourceMappingURL=index.js.map