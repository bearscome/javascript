let param1 = '안녕';
let param2 = '하세여';
let param3 = `백틱으로 했다 ${param1}, ${param2}`

function 분해(문자, 파람) {
    console.log(문자);
    console.log(파람);
};

분해`문자해체기 ${param3} 입니다`

let a = '안녕';
let b = '하세요';
let c = `${a}${b}`;

function 문자해체기(문자, 파람) {
    console.log(문자);
    console.log(파람)
};

문자해체기`백틱을 쓴다음 ${c}를 쓴다`;

// 함수에 백틱을 쓴다면 문자열과, 파람을 나눌수 있다.

var pants = 0;
var socks = 100;

function ChangeString(word, param1, param2) { 
    // 변수의 갯수에 맞게 적어야 한다. 변수가 2개라면 param1, param2 
    if(param1 == 0) {
        console.log(`바지가 매진되었습니다.`)
    } else {
        console.log(`${word[1]}${param1}개 ${word[0]}${param2}개`)
    }
}

ChangeString`바지 ${pants}  양말 ${socks}`