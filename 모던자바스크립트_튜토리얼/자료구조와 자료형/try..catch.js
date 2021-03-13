/*
try..catch 문법을 사용하면 스크립트가 죽는 걸 방지하고, 에러를 ‘잡아서(catch)’ 더 합당한 무언가를 할 수 있게 됩니다.
문법 : try {
    //코드
} catch(error) {
    //에러 핸들링
}
try…catch 동작 알고리즘은 다음과 같습니다.

먼저, try {...} 안의 코드가 실행됩니다.
에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 건너뜁니다.
에러가 있다면, try 안 코드의 실행이 중단되고, catch(err) 블록으로 제어 흐름이 넘어갑니다. 
변수 err(아무 이름이나 사용 가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함합니다.

이렇게 try {…} 블록 안에서 에러가 발생해도 catch에서 에러를 처리하기 때문에 스크립트는 죽지 않습니다.

트라이 켓치는 오직 런타임 에러에만 작동
 - 문법적으로 잘못된 경우 트라이켓치 안먹음
트라이 켓치는 동기적으로 동작
 - 셋타임아웃 처럼 스케줄 된 코드에서 발생한 예외는 잡아낼 수 없음
 try {
  setTimeout(function() {
    noSuchVariable; // 스크립트는 여기서 죽습니다.
  }, 1000);
} catch (e) {
  alert( "작동 멈춤" );
} 이렇게 쓰면 안됨,


setTimeout(function() {
  try {
    noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
  } catch {
    alert( "에러를 잡았습니다!" );
  }
}, 1000); // 이렇게 써야함 셋타임아웃 안에 써야 작동



에러 객체

에러가 발생하면 자바스크립트는 에러 상세내용이 담긴 객체를 생성
그 후, catch 블록에 이 객체를 인수로 전달합니다.

try {
  // ...
} catch(err) { // <-- '에러 객체', err 대신 다른 이름으로도 쓸 수 있음
  // ...
}

내장 에러 전체와 에러 객체는 두 가지 주요 프로퍼티를 가집니다.

name
에러 이름. 정의되지 않은 변수 때문에 발생한 에러라면 "ReferenceError"가 이름이 됩니다.

message
에러 상세 내용을 담고 있는 문자 메시지
표준은 아니지만, name과 message 이외에 대부분의 호스트 환경에서 지원하는 프로퍼티도 있습니다. 
stack은 가장 널리 사용되는 비표준 프로퍼티 중 하나입니다.

stack
현재 호출 스택. 에러를 유발한 중첩 호출들의 순서 정보를 가진 문자열로 디버깅 목적으로 사용됩니다.

try {
  lalala; // 에러, 변수가 정의되지 않음!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

  // 에러 전체를 보여줄 수도 있습니다.
  // 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
  alert(err); // ReferenceError: lalala is not defined
}


let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  alert( e.name );
  alert( e.message );
}
위 예시에선 에러가 발생했다는 걸 보여주기 위해 간단히 예외처리했지만, 
catch 블록 안에서 새로운 네트워크 요청 보내기, 
사용자에게 대안 제안하기, 로깅 장치에 에러 정보 보내기 등과 같은 구체적인 일을 할 수 있습니다. 
스크립트가 죽도록 놔두는 것보다 훨씬 나은 대응이죠.


직접 에러를 만들어서 던지기

let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음
  alert( user.name ); // 이름이 없습니다!

} catch (e) {
  alert( "실행되지 않습니다." );
}

위 예시에서 JSON.parse는 정상적으로 실행되었지만 name이 없는 건 에러를 유발하는 상황입니다.

이제 throw 연산자를 사용해 에러 처리를 통합해 보도록 하겠습니다.


‘throw’ 연산자
문법 : throw <error object>
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);

일반 객체가 아닌 내장 생성자를 사용해 만든 내장 에러 객체의 name 프로퍼티는 생성자 이름과 동일한 값을 갖습니다. 
프로퍼티 message의 값은 인수에서 가져옵니다


let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}
(*)로 표시한 줄에서 throw 연산자는 message를 이용해 SyntaxError를 생성합니다. 에러 생성 방식은 자바스크립트가 자체적으로 에러를 생성하는 방식과 동일합니다. 에러가 발생했으므로 try의 실행은 즉시 중단되고 제어 흐름이 catch로 넘어간 것을 얼럿 창을 통해 확인할 수 있네요.

이제 JSON.parse에서 에러가 발생한 경우를 포함해서 모든 에러를 catch 블록 안에서 처리할 수 있게 되었습니다.


에러 다시 던지기

위 예시에선 불완전한 데이터를 try..catch로 처리하였습니다. 
그런데 또 다른 예기치 않은 에러가 try {...} 블록 안에서 발생 할 수도 있습니다. 
정의되지 않은 변수 사용 등의 프로그래밍 에러가 발생할 가능성은 항상 있습니다.

let json = '{ "age": 30 }'; // 불완전한 데이터

try {
  user = JSON.parse(json); // <-- user 앞에 let을 붙이는 걸 잊었네요.

  // ...
} catch(err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (실제론 JSON Error가 아닙니다.)
}
에러는 어떤 상황에서도 발생할 수 있습니다! 몇십 년간 몇백만 명이 사용한 오픈소스 유틸리티에서도 끔찍한 해킹으로 이어질 수 있는 엄청난 버그가 발견되죠.

위에선 '불완전한 데이터’를 다루려는 목적으로 try..catch를 썼습니다. 그런데 catch는 원래 try 블록에서 발생한 모든 에러를 잡으려는 목적으로 만들어졌습니다. 그런데 위 예시에서 catch는 예상치 못한 에러를 잡아내 주긴 했지만, 에러 종류와 관계없이 "JSON Error" 메시지를 보여줍니다. 이렇게 에러 종류와 관계없이 동일한 방식으로 에러를 처리하는 것은 디버깅을 어렵게 만들기 때문에 좋지 않습니다.

이런 문제를 피하고자 ‘다시 던지기(rethrowing)’ 기술을 사용합니다. 규칙은 간단합니다.

catch는 알고 있는 에러만 처리하고 나머지는 ‘다시 던져야’ 합니다.

‘다시 던지기’ 기술을 더 자세히 설명하겠습니다.

catch가 모든 에러를 받습니다.
catch(err) {...} 블록 안에서 에러 객체 err를 분석합니다.
에러 처리 방법을 알지 못하면 throw err를 합니다.
보통 에러 타입을 instanceof 명령어로 체크합니다.
try {
  user = { ... };
} catch(err) {
    if (err instanceof ReferenceError) {
      alert('ReferenceError'); //  정의되지 않은 변수에 접근하여 'ReferenceError' 발생
    }
  }

  err.name 프로퍼티로 에러 클래스 이름을 알 수도 있습니다. 기본형 에러는 모두 err.name 프로퍼티를 가집니다. 또는 err.constructor.name를 사용할 수도 있습니다.

에러를 다시 던져서 catch 블록에선 SyntaxError만 처리되도록 해보겠습니다.


let json = '{ "age": 30 }'; // 불완전한 데이터
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음");
  }

  blabla(); // 예상치 못한 에러

  alert( user.name );

} catch(e) {

  if (e instanceof SyntaxError) {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // 에러 다시 던지기 (*)
  }

}

catch 블록 안의 (*)로 표시한 줄에서 다시 던져진(rethrow) 에러는 try..catch ‘밖으로 던져집니다’. 이때 바깥에 try..catch가 있다면 여기서 에러를 잡습니다. 아니라면 스크립트는 죽을 겁니다.

이렇게 하면 catch 블록에선 어떻게 다룰지 알고 있는 에러만 처리하고, 알 수 없는 에러는 ‘건너뛸 수’ 있습니다.

이제 try..catch를 하나 더 만들어, 다시 던져진 예상치 못한 에러를 처리해 보겠습니다.

function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // 에러!
  } catch (e) {
    // ...
    if (!(e instanceof SyntaxError)) {
      throw e; // 알 수 없는 에러 다시 던지기
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // 에러를 잡음
}

try…catch…finally

try..catch는 finally라는 코드 절을 하나 더 가질 수 있습니다.

finally안의 코드는 다음과 같은 상황에서 실행됩니다.

에러가 없는 경우: try 실행이 끝난 후
에러가 있는 경우: catch 실행이 끝난 후
finally를 사용하면 try..catch를 다음과 같이 확장할 수 있습니다.

try {
   ... 코드를 실행 ...
} catch(e) {
   ... 에러 핸들링 ...
} finally {
   ... 항상 실행 ...
}

try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

위 코드는 두 가지 경로로 실행됩니다.

"에러를 만드시겠습니까?"에 'OK’로 답한 경우: try -> catch -> finally
'No’로 답한 경우: try -> finally

finally 절은 무언가를 실행하고, 실행 결과에 상관없이 실행을 완료하고 싶을 경우 사용됩니다.


피보나치 함수 fib(n)의 연산 시간을 측정하고 싶다고 해 봅시다. 함수 실행 전에 측정을 시작해서 실행이 끝난 후 측정을 종료하면 되겠죠. 그런데 함수 실행 도중 에러가 발생하면 어떻게 될까요? 아래 fib(n)에는 음수나 정수가 아닌 수를 입력할 경우 에러가 발생합니다.

이런 경우에 finally를 사용할 수 있습니다. finally 절은 무슨 일이 일어났든 관계없이 연산 시간 측정을 끝마치기 적절한 곳이죠.

fib 함수가 에러 없이 정상적으로 실행되든 에러가 발생하든 상관없이, finally를 사용하면 연산 시간을 제대로 측정할 수 있습니다.



let num = +prompt("양의 정수를 입력해주세요.", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("음수나 정수가 아닌 값은 처리할 수 없습니다.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "에러 발생");

alert( `연산 시간: ${diff}ms` );


코드를 실행하고 프롬프트 대화상자에 35를 입력하면 try 다음에 finally가 정상적으로 실행되면서 연산 시간을 확인할 수 있습니다. -1을 입력하면 에러가 발생하고, 연산 시간은 0ms가 됩니다. 두 경우 모두 연산 시간이 정상적으로 측정되었네요.

함수는 return 이나 throw를 만나면 종료되는데, 이렇게 finally 절을 사용하면 두 경우 모두를 처리할 수 있습니다.



try..catch..finally 안의 변수는 지역 변수입니다.
위 예시에서 변수 diff와 result는 try..catch 전 에 선언되었다는 점에 주의해 주세요.

try 블록 안에서 선언한 변수는 블록 안에서만 유효한 지역 변수가 됩니다.



finally 와 return
finally 절은 try..catch 절을 빠져나가는 어떤 경우에도 실행됩니다. return을 사용해 명시적으로 빠져나가려는 경우도 마찬가지입니다.

아래 예시의 try 블록 안엔 return이 있습니다. 이 경우엔 값이 바깥 코드로 반환되기 전에 finally가 실행됩니다.

function func() {

  try {
    return 1;

  } catch (e) {
    //
} finally {
    alert( 'finally' );
  }
}

alert( func() ); // finally 안의 alert가 실행되고 난 후, 실행됨

try..finally
catch 절이 없는 try..finally 구문도 상황에 따라 유용하게 쓸 수 있습니다. try..finally 안에선 에러를 처리하고 싶지 않지만, 시작한 프로세스가 마무리되었는지 확실히 하고 싶은 경우에 사용합니다.


function func() {
  // 무언가를 측정하는 경우와 같이 끝맺음이 있어야 하는 프로세스
  try {
    // ...
  } finally {
    // 스크립트가 죽더라도 완료됨
  }
}


요약

try..catch를 이용하면 런타임 에러를 처리할 수 있습니다. try에선 코드를 실행하고, 에러가 발생하면 catch에서 잡아냅니다.

문법은 다음과 같습니다.

try {
  // 이곳의 코드를 실행
} catch(err) {
  // 에러가 발생하면, 여기부터 실행됨
  // err는 에러 객체
} finally {
  // 에러 발생 여부와 상관없이 try/catch 이후에 실행됨
}
try..catch, try..catch..finally이외에도 try..finally를 사용할 수 있습니다.

에러 객체엔 다음과 같은 프로퍼티가 있습니다.

message – 사람이 읽을 수 있는 형태의 에러 메시지
name – 에러 이름을 담은 문자열 (에러 생성자 이름)
stack – 표준이 아니지만 대부분의 호스트 환경이 지원하는 프로퍼티로 에러가 발생한 순간의 스택을 나타냄
에러 객체가 필요 없으면 catch(err) { 대신 catch {를 쓸 수 있습니다.

throw 연산자를 사용하면 에러를 직접 만들 수 있습니다. 이론상으론, throw 인수에 모든 것을 넘길 수 있지만, 대개 내장 Error 클래스를 상속받은 에러 객체를 인수에 넘깁니다. 에러 상속에 대해선 다음 챕터에서 다룰 예정입니다.

다시 던지기는 에러 처리 시 사용되는 중요한 패턴입니다. catch 블록에선 대개 예상하였거나 어떻게 다룰지 알고 있는 에러를 다루고, 예상치 못한 에러는 다시 던지기 합니다.

try..catch가 없어도 대부분의 호스트 환경이 ‘전역’ 에러 핸들러를 지원하기 때문에 ‘떨어져 나온’ 에러를 잡을 수 있습니다. window.onerror는 브라우저 환경의 전역 에러 핸들러입니다.
*/