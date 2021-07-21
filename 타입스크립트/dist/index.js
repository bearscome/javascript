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
//https://heropy.blog/2020/01/27/typescript/ 튜플부터 시작
//# sourceMappingURL=index.js.map