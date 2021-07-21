//타입스크립트는 일반 변수, 매개 변수, 객체 속성 등에 :TYPE과 같은 형태로 타입을 지정할 수 있다.
function numAdd(a:number, b:number):number{
    //a,b :type :number -> 리턴할 타입
    return a + b;
}

let sss:number = numAdd(1,2);
//some:TYPE

console.log(`hello ${sss}`);

function stringAdd(a:string, b:string) {
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


//https://heropy.blog/2020/01/27/typescript/ 튜플부터 시작