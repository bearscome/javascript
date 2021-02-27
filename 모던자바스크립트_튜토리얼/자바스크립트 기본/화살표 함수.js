/*
//let fucn = (ar1,ar2) => extentd

let sum = (a, b) => a + b;
let sum = function(a, b) {
    return a + b
}

// arrow func는 리턴 값 자동반환

//파라미터가 하나일 때
let double = n => n * 2 
let double = function(n) {
    return n * 2
}

//파라미터가 없을 때
let sayHi = () => alert("안녕")
let sayHi = function() { 
    alert("안녕")
}

let age = prompt("나이",10)

let welcome = (age < 18) ? () => alert("안녕") : () => alert("안녕하세요")*/
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다."); },
    function() { alert("취소 버튼을 누르셨습니다."); }
  );


let ask = (question,yes,no) => {
    confirm(question) ? yes : no
}
ask("동의하십니까?", ()=>{alert("동의하셨습니다")}, ()=>{alert("취소버튼 누르셨습니다.")})

