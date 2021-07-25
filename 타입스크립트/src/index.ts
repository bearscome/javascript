//타입스크립트는 일반 변수, 매개 변수, 객체 속성 등에 :TYPE과 같은 형태로 타입을 지정할 수 있다.
function numAdd(a:number, b:number):number{
    //a,b :type :number -> 리턴할 타입
    return a + b;
}

let sss:number = numAdd(1,2);
//some:TYPE

console.log(`hello ${sss}`);

function stringAdd(a:string, b:string):string {
    return a + b;
};

let bbb = stringAdd('hello', 'wolrd')

console.log(`hellow String ${bbb}`)

// boolean
let isBoolean:boolean = true;
let isDone = false;

console.log(isBoolean, isDone);

//숫자 : number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

//문자 : string
let str: string;
let red: string = 'Red';
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;

//배열 : Array 배열은 2가지의 방법이 있다
//문자만
let fruits: string[] = ['apple', 'banana'];
let furits: Array<string> = ['APPLE', 'BANANAN'];

//숫자만
let asdasds: number[] = [1,2,3,4,5];
let stst: Array<number> = [1,2,3,4,5,1];

//유니언 타입(다중타입) '문자열과 숫자를 동시에 가지는 배열'
let abc : (string | number)[] = [1,2,3,'aa'];
let def : Array<string | number> = [1,2,'bb'];  

//배열이 가지는 항목의 값을 단언할 수 없을 때는 any사용
let qqq : any[] = [1,2,true,'ff'];
let www : Array<any> = ['asd'];

//인터페이스나 커스텀 타입 사용 가능
interface adc{
    name : string,
    age : number
}

let aaaaa = [
    {
        name:'age',
        age:15
    }
]


console.log(`${aaaaa}, aaaaa`)

//Tuple 배열과 유사하다 다른점은 정해진 타입의 고정된 길이 배열을 표현한다
let tuple : [string, number];

console.log(tuple = ['aa', 3]);
//console.log(tuple = ['3', 33,33]); typeError가 난다. 정해진 값으로 대입을 안했기 때문에

//Enum 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입, 값의 종류가 일정한 범위로 정해져 있을 경우 유용
//기본적으로 0붙 시작하여 1씩 증가
enum Week {
    sun,
    mon,
    tue,
    wed, // wed = 22로 설정하면 다음부터 23
    thu,
    fri,
    set
}
console.log(Week)
console.log(Week.mon)
console.log(Week[1])
console.log(Week['mon'])
//enum은 역으로 맵핑이 가능하다.


//모든 타입 : any
/*
    any는 모든 탑을 의미한다. 변수와 동일하게 어떤 값도 할당할 수 있다.
    외부 자원을 활용해 개발할 때 불가피하게 타입을 단언할 수 없을 경우, 유용하다
    강한 타입을 적용하여 Any 사용을 금지하려면 컴파일 옵션 "noImplicitAny": true를 설정한다.
 */
 let any:any = 123;
 any='hello';
 any={};
 any=undefined;

//알 수없는 타입 : UnKnown
/*
    any와 같이 최상위 타입인 Unknown은 알수 없는 타입이다
    unKnown은 any말고 다른 타입을 정의 할 수 없다
 */

let a: any = 123;
let u: unknown = 123;

let v1: boolean = a; // 모든 타입(any)은 어디든 할당할 수 있습니다.
//let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없습니다.
let v3: any = u; // OK!
//let v4: number = u as number; // 타입을 단언하면 할당할 수 있습니다.



//객체 :Object
//기본적으로 typeof연산자가 object로 변환하는 모든 타입을 나타냅니다.
//컴파일러 옵션에서 엄격한 타입 검사 (strict)를 true로 설정하면, null은 포함하지 않습니다.
let userA : {name:string, age:number} = {
    name : 'ㅗㅇ',
    age : 12
};

//null, undefined

/*
 기본적으로 null과 undefined는 모든 타입의 하위 타입으로, 다음과 같이 각 타입에 할당할 수 있습니다.
 심지어 서로의 타엡에도 할당이 가능합니다.

 이는 컴파일 옵션에서  "strictNullChecks": true을 통해 엄격하게 Null, undefined 서로의 타입까지 더이상 할당할 수 없게 합니다.
 단, Void에는 undefined를 할당할 수 있습니다.
 */

 let num1: number = undefined;
let str2: string = null;
let obj3: { a: 1, b: false } = undefined;
let arr4: any[] = null;
let und5: undefined = null;
let nul6: null = undefined;
let voi6: void = null;

console.log('obj', obj3);

//Void : 일반적으로 값을 반환하지 않는 함수에서 사용합니다.
//Void 위치는 함수가 반환 타입을 명시하는 곳입니다.
function hello2(msg: string) : void {
    console.log(`Hello ${msg}`);
}

hello2('2222')

let abcdef = hello2('시발 왜 되냐?');
console.log(abcdef);


//Never : 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없습니다.
function error(message:string) : never {
    throw new Error(message);
}

// error('zzzzz')

const never123 : [] = [];
console.log('never123', never123)

//Union : 2개 이상의 타입을 허용하는 경우, 이를 유니언이라고 한다 '|'를 통해 타입을 구분하며, ()는 선택사항이다.
let union1 : (string | number);
union1 = 'hh';
union1 = 123;
//union1 = true; // str,num 이외의 값은 할당 안됌 


//인터렉션 : '&'를 2개를 사용해 ㅌ타입을 조합하는 경우
interface aa {
    name : string,
    age : number
}

interface bb {
     aaa: boolean
};

// const test : aa  = {
//     name : 'gg',
//     age: 123,
//     aaa : false
// }

const test2 : aa & bb = {
    name : 'gg',
    age: 123,
    aaa : false
}

//함수 : 화살표 함수를 이용해 타입을 지정할 수 있다. 인수의 타입과 반환 값의 타입을 입력한다

let myFunc: (arg1:number, arg2:number) => number;
// myFunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수
myFunc = function(x,y) {
    return x + y;
}

let yourFunc: () => void;
// 인수가 없고 반환 값의 타입을 입력

yourFunc = function() {
    console.log('hello world');
};

console.log('yourFunc', yourFunc)

let test = () :void => {
    console.log('123')
}
test();


// 타입
// function some (aa:string | number, b:boolean) => {
//     if(b) {
//         aa.tofixed(2)
//     }
// }
// aa에 문자형이 들어올 수 있어서 tofixed가 안먹힌다

function someFunc(val: string | number, isNumber: boolean) {
  // some logics
  if (isNumber) {
    // 1. 변수 as 타입
    (val as number).toFixed(2);
    // Or
    // 2. <타입>변수
    // (<number>val).toFixed(2);
  }
}


//제네릭 재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공합니다.
function toArray(a: number, b: number): number[] {
  return [a, b];
}
toArray(1, 2);
//toArray('1', '2') error

function toArray2<T>(a:T, b:T) : T[] {
    return [a,b];
}

toArray2<number>(1, 2);
toArray2<string>('1', '2');
toArray2<string | number>(1, '2');
//toArray2<number>(1, '2'); // Error



//제약 조건 : 인터페이스나 , 타입 별칭을 사용하는 제네릭을 작성할 수 있다.
interface MyType<T> {
    name:string,
    value:T
}

const dataA: MyType<string> = {
    name:'DATAA',
    value:'Hello World',
}

const dataB: MyType<number> = {
    name:'DATAA',
    value:12,
}

const dataD: MyType<number[]> = {
  name: 'Data D',
  value: [1, 2, 3, 4]
};

//만약 타입 변수 T가 string과 number인 경우만 허용하려면 아래 예제와 같이 extends키워드를 사용하여 제약 조건을 추가할 수있다
interface MyType2<T extends string | number> {
    name:string,
    value:T
}

const dataBB :MyType2<string> = {
    name:'aaa',
    value:'111'
}


// const datacc :MyType2<number[]> = { string, number가 아니라서 오류
//     name:'aaa',
//     value:'111'
// }


type U = string | number | boolean;

type MyType3< T extends U> = string | U;

interface aaa<T extends U > {
    name:string,
    age:T
}
/**
 * 조건부 타입
 * 제약 조건과 다르게 '타입구현' 영역에서 사용하는 exteds는 삼항 연산자를 사용할 수 있다.
 * T extends U ? X: Y
 */
// type U = string | number | boolean; 위랑 중복

type MyType4<T> = T extends U ? string : never;
// type4는 T에 스트링 넘버, 불린형이 넘어오면 string 이고 아니면 나머지는 안됌

interface IUser<T> {
    name:string,
    age : T extends U ? number : string
}

interface bbb<T extends boolean> {
    name:string,
    age : T extends true ? string : number
    // age에서 true이면 스트링, 아니면 number타입 써야함
    isString: T
};

const str1: bbb <true> = {
    name:'bb',
    age:'13',
    isString:true
}



/**
 * infer : 키워드를 사용해 타입 변수의 타입 추론 여부를 확인 할 수 있다.
 * T extends infer U ? X : Y
 * U가 추론 가능한 타입이면 참 아니면 거짓
 */


 type MyType34<T> = T extends infer R ? R : null;

 const a34: MyType34<number> = 123;

 //타입 변수 'R'은 MyType34<number>에서 받은 타입 number가 되고 infer 키워드를 통해 타입 추론이 가능한지 확인 한다.
 //number 타입은 다연히 타입 추론이 가능하니 R을 반환 (만약 R을 타입 추론할 수 없다면 null 반환)


 type ReturnType12<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function fn(num: number) {
  return num.toString();
}

const a12: ReturnType<typeof fn> = 'Hello';
console.log(`흠 ${a12} ${typeof(a12)}`);

//위 예제에서 typeof fn은 (num: number) => string으로 반환 타입은 string입니다.
//따라서 R은 string이고 역시 infer 키워드를 통해서 타입 추론이 가능하기 때문에 R을 반환합니다.
//즉, string을 반환합니다.

//infer 키워드는 제약 조건 extends가 아닌 조건부 타입 extends 절에서만 사용 가능
//infer 키워드는 같은 타입 변수를 여러 위치에서 사용 가능
//일반적인 공변성(co-variant) 위치에선 유니언 타입으로 추론
//함수 인수인 반공변성(contra-variant) 위치에선 인터섹션 타입으로 추론
//여러 호출 시그니처(함수 오버로드)의 경우 마지막 시그니처에서 추론
//https://heropy.blog/2020/01/27/typescript/ 조건부타입
