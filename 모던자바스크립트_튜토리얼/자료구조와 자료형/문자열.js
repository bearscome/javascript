/*
    문자열
        - 자바스크립트는 글자 하나만 저장할 수 있는 자료형이 없다.
        - 텍스트 형식의 데이터는 길이에 상관없이 문자열 형태로 저장됨
        - 자바스크립트에서 문자열은 페이지 인코딩 방식과 상관없이 항상 utf-18 형식을 따른다.
*/

/*
    따옴표
        - 작은따옴표
        - 큰따옴표
        - 빽틱 : 여러 줄의 문자열 가능
*/

/*
    특수기호
        - 종류
            1. \n	줄 바꿈
            2. \r	캐리지 리턴(carriage return). Windows에선 캐리지 리턴과 줄 바꿈 특수 문자를 조합(\r\n)해 줄을 바꿉니다. 캐리지 리턴을 단독으론 사용하는 경우는 없습니다.
            3. \', \"	따옴표
            4. \\	역슬래시
            5. \t	탭
            6. \b, \f, \v	각각 백스페이스(Backspace), 폼 피드(Form Feed), 세로 탭(Vertical Tab)을 나타냅니다. 호환성 유지를 위해 남아있는 기호로 요즘엔 사용하지 않습니다.
            7. \xXX	16진수 유니코드 XX로 표현한 유니코드 글자입니다(예시: 알파벳 'z'는 '\x7A'와 동일함).
            8. \uXXXX	UTF-16 인코딩 규칙을 사용하는 16진수 코드 XXXX로 표현한 유니코드 기호입니다. XXXX는 반드시 네 개의 16진수로 구성되어야 합니다(예시: \u00A9는 저작권 기호 ©의 유니코드임).
            9. \u{X…XXXXXX}(한 개에서 여섯 개 사이의 16진수 글자)	UTF-32로 표현한 유니코드 기호입니다. 몇몇 특수한 글자는 두 개의 유니코드 기호를 사용해 인코딩되므로 4바이트를 차지합니다. 이 방법을 사용하면 긴 코드를 삽입할 수 있습니다.

        - 줄 바꿈 문자는 |n을 사용하면 작은 따옴표, 큰 따옴표도 여러줄의 문자열 가능
            - let guestList = "손님 : |n * John|n * Pete|n"
            - 빽틱과 같음 다른 점이 없다.

        - 유니 코드
            - console.log( "\u00A9" ); // ©
            - console.log( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
            - console.log( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

            - 모든 특수 문자는 '이스케이프 문자'라고 불리며 역슬래시|로 시작한다.
                - console.log( 'I\'m the Walrus!' ); // I'm the Walrus! : 문자열 내의 따옴표는 |를 꼭 붙혀줘야 한다.
                - console.log( `I'm the Walrus!` ); // I'm the Walrus! : 백틱을 쓰면 좀더 간단하다.
            - 역 슬래시를 보여줘야 한다면
                - console.log( `I\\m the Walrus!` ); // 2개를 써주면 된다.
*/

/*
    특정 글자에 접근하기
        - [], charAt()을 사용
        
        let str = "hello"
        // 첫 번째 글자
        console.log(str[0]) //글자가 없으면 undefined 반환
        console.log(str.charAt(0)) //글자가 없으면 빈문자열 반환
        // 마지막 글자
        console.log(str[str.length - 1])

        //for..of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업이 가능하다.
        for(let char of str) {
            console.log("하나의 글자",char)
        }
*/

/*
    문자열의 불변성 : 문자열은 수정할 수 없습니다. 따라서 문자열의 중간 글자 하나를 바꾸려하면 에러가 발생한다.
    let str = 'HI';
    str[0] = 'h' //Error
    console.log(str) // 동작하지 않는다. 

    이런 문제를 피하려면 완전히 새로운 문자열을 하나 만든 다음, 이 문자열을 str에 할당하면 된다.
    let str = 'Hi'
    str = 'h' + str[1] // 문자열 전체를 교체함
    console.log(str)
*/

/*
    대소문자 변경하기
        - 메소드 toLowerCase(), toUpperCase()
*/
/*
    부분 문자열 찾기
        - str.indexOf(findstr, pos) : 이메서드는 문자열 str의 pos부터 시작해, 부분 문자열 findstr이 어디에 위치하는지를 찾아준다 찾지 못하면 -1를 반환한다.
        
        let str = "Widget with id";
        console.log(str.indexOf('Widget')) // 0, str은 'Widget'부터 시작함
        console.log(str.indexOf('widget')) // -1, indexOf는 대,소문자를 따진다
        console.log(str.indexOf('id')) // 1, "id"는 첫 번째 위치에서 발견 됨(Widget에 있는 W + id + get)
        console.log(str.indexOf('id',2)) // 첫 번째 아이디 말고 두번 째 아이디 찾는 것

        let str = 'As sly as a fox, as strong as an ox';
        let target = 'as';
        let pos = 0;


        while(true) { // 정식 버전 
            let foundPos = str.indexOf(target, pos);
            if(foundPos == -1) break;

            console.log(`위치 ${foundPos}`)
            pos = foundPos + 1;
        }


        while((pos = str.indexOf(target, pos + 1)) != -1) { // 짧게 줄인 버전
            console.log(`위치 ${pos}`)
        }
        str.lastIndexOf(substr, position) : indexOf랑 비슷함 하지만 문자열 끝부터 찾는다는 점이 다름


        if문의 조건식에 indexOf를 쓸 때 주의점이 있다.

        let str = "Widget with id";

        if (str.indexOf("Widget")) {
            console.log("찾았다!"); // 의도한 대로 동작한다.
        }

        str.indexOf("Widget")은 0을 반환하는데 if문에선 0은 false로 간주함으로 console.log()가 작동하지 않는다.

        if (str.indexOf("Widget") != -1) {
            console.log("찾았다!"); // 의도한 대로 동작한다.
        }
*/

/*
    비트 NOT 연사자를 사용한 기법
        - 오래전부터 전해 오는 bitNot연사자 '~'를 사용한 기법
        - 피연산자를 32비트 정수로 바꾼후(소수점 다 버림) 모든 비트를 반전한다
        - n이 32비트의 정수일 떄 ~n은 -(n+1)이 된다

        console.log( ~2 ); // -3, -(2+1)과 같음
        console.log( ~1 ); // -2, -(1+1)과 같음
        console.log( ~0 ); // -1, -(0+1)과 같음
        console.log( ~-1 ); // 0, -(-1+1)과 같음
        - n 중 ~n을 0으로 만드는 경우는 n == -`일 때가 유일하다.
        - 이를 응요해서 indexOf가 -1를 반환하지를 않을 경우 if(~str.indexOf("..."))로 검사하면 된다
        let str = "Widget";
        if(~str.indexOf("Widget")) {
            console.log('찾았당~')
        }
        하지만 이러한 코드는 직관적이지 않아서 추천하지 않는다. 그렇지만 오래된 스크립트에서 쉽게 만날 수 있기에 알아두어야 한다.
        모던 자바스크립트에선 .include메서드를 사용해 부분 문자열 포함 여부를 검사한다. 이러한 기법은 오래된 자바스크립트에서만 볼 수 있다.
*/

/*
    includes, startsWith, endsWith
    1. include : str.includes(findstr. pos)는 str에 부분 문자열인 findstr이 있는지에 따라 true, false를 반환한다.
        - 부분 문자열의 위치정보는 필요하지 않고 포함 여부만 알고 싶을 때 적합한 메서드 입니다.
        console.log("영어 존나 기네".includes('영어')) // true
        console.log("영어 존나 기네".includes('한글')) // false
        console.log("영어존나기네".includes('존나',3)) // 3번 째 이후부터는 존이 없으니 false
    
    2.  str.startsWith,  str.endsWith 특정 문자열로 시작하는지 끝나는지에 대한 여부를 확인 할 수 있다
        console.log('영어존나기네'.startsWith('영어존나기')) //true
        console.log('영어존나기네'.endsWith('네')) //true
*/

/*
    부분 문자열 추출하기
    1. slice : str.slice(start [,end]) //start부터 end(end는 옵션)까지 반환 // 마지막 위치에 있는 놈은 포함하지 않음
        let str = "stringify";
        console.log( str.slice(0, 5) ); // 'strin', 0번째부터 5번째 위치까지(5번째 위치의 글자는 포함하지 않음)
        console.log( str.slice(0, 1) ); // 's', 0번째부터 1번째 위치까지(1번째 위치의 자는 포함하지 않음)
        console.log( str.slice(2) ); // ringify, 2번째부터 끝까지 // 두 번째 인수가 생략된 경우엔, 명시한 위치부터 문자열 끝까지를 반환합니다.
        console.log( str.slice(-4, -1) ); // gif // start와 end는 음수가 될 수도 있습니다. 음수를 넘기면 문자열 끝에서부터 카운팅을 시작합니다.

    1. substring : str.substring(start [, end]) start와 end 사이에 있는 문자열을 반환, substring은 slice와 아주 유사하지만 start가 end보다 커도 괜찮다는 데 차이가 있습니다.
        let str = "stringify";
        // 동일한 부분 문자열을 반환합니다. // 음수는 반영 안됨
        console.log( str.substring(2, 6) ); // "ring"
        console.log( str.substring(6, 2) ); // "ring"
        // slice를 사용하면 결과가 다릅니다.
        console.log( str.slice(2, 6) ); // "ring" (같음)
        console.log( str.slice(6, 2) ); // "" (빈 문자열)
    2. substr : str.substr(start [, length]) start에서부터 시작해 length 개의 글자를 반환합니다.
        let str = "stringify";
        console.log( str.substr(2, 4) ); // ring, 두 번째부터 글자 네 개
        let str = "stringify";
        console.log( str.substr(-4, 2) ); // gi, 끝에서 네 번째 위치부터 글자 두 개 음수면 뒤에서부터 센다


    
    메서드	                 추출할 부분 문자열	                  음수 허용 여부(인수)
    slice(start, end)	    start부터 end까지(end는 미포함)	     음수 허용
    substring(start, end)	start와 end 사이	                음수는 0으로 취급함
    substr(start, length)	start부터 length개의 글자	         음수 허용

    어떤 메서드를 선택해야 하나요?
    모두 사용해도 괜찮습니다. 그런데 substr에는 단점이 하나 있습니다. 
    substr는 코어 자바스크립트 명세서(ECMA-262 – 옮긴이)가 아닌, 구식 스크립트에 대응하기 위해 남겨 둔 브라우저 전용 기능들을 명시해 놓은 부록 B(Annex B)에 정의되어있습니다. 
    거의 모든 곳에서 이 메서드가 동작하긴 하지만 브라우저 이외의 호스트 환경에서는 제대로 동작하지 않을 수 있습니다.

    남은 두 메서드 중 slice는 음수 인수를 허용한다는 측면에서 substring보다 좀 더 유연합니다. 
    메서드 이름도 더 짧죠. 따라서 세 메서드 중 slice만 외워놓고 사용해도 충분할 것 같습니다.
*/

/*
    문자열 비교 : 자열을 비교할 땐 알파벳 순서를 기준으로 글자끼리 비교가 이뤄집니다.
        1. 소문자는 대문자보다 항상 크다.
            - console.log( 'a' > 'Z' ); // true
        2. 발음구별기호가 붙은 문자는 알파벳 순서 기준을 따르지 않는다
            - console.log( 'Österreich' > 'Zealand' ); // true (Österreich는 오스트리아를 독일어로 표기한 것임 - 옮긴이)
        3. 이런 예외사항 때문에 이름순으로 국가를 나열할 때 예상치 못한 결과가 나올 수 있습니다. 사람들은 Österreich가 Zealand보다 앞서 나올 것이라 예상하는데 그렇지 않죠.
        4. 자바스크립트 내부에서 문자열이 어떻게 표시되는지 상기하며 원인을 알아봅시다.
            - 모든 문자열은 UTF-16을 사용해 인코딩되는데, UTF-16에선 모든 글자가 숫자 형식의 코드와 매칭됩니다. 
              코드로 글자를 얻거나 글자에서 연관 코드를 알아낼 수 있는 메서드는 다음과 같습니다.
            - str.codePintAt(pos) : pos에 위치한 글자의 코드를 반환한다.
                - console.log( "z".codePointAt(0) ); // 122
                - console.log( "Z".codePointAt(0) ); // 90
            - String.fromCodePoint(code)
                - 숫자 형식의 code에 대응하는 글자를 만들어줍니다
                - console.log( String.fromCodePoint(90) ); // Z
                - \u 뒤에 특정 글자에 대응하는 16진수 코드를 붙이는 방식으로도 원하는 글자를 만들 수 있습니다.
                - // 90을 16진수로 변환하면 5a입니다. console.log( '\u005a' ); // Z
                - let str = '';
                    for (let i = 65; i <= 220; i++) {
                    str += String.fromCodePoint(i);
                    }
                    console.log( str );
                    // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
                    // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
                - 보이시나요? 대문자 알파벳이 가장 먼저 나오고 특수 문자 몇 개가 나온 다음에 소문자 알파벳이 나오네요. Ö은 거의 마지막에 출력됩니다.
                - 글자는 글자에 대응하는 숫자 형식의 코드를 기준으로 비교됩니다. 
                - 코드가 크면 대응하는 글자 역시 크다고 취급되죠. 따라서 a(코드:97)는 Z(코드:90) 보다 크다는 결론이 도출됩니다.
                - Ö 같은 글자는 일반 알파벳과 멀리 떨어져 있습니다. Ö의 코드는 알파벳 소문자의 코드보다 훨씬 큽니다.
*/

/*
    문자열 제대로 비교하기
        언어마다 문자 체계가 다르기 때문에 문자열을 ‘제대로’ 비교하는 알고리즘을 만드는 건 생각보다 간단하지 않습니다.
        문자열을 비교하려면 일단 페이지에서 어떤 언어를 사용하고 있는지 브라우저가 알아야 합니다.
        다행히도 모던 브라우저 대부분이 국제화 관련 표준인 ECMA-402를 지원합니다(IE10은 아쉽게도 Intl.js 라이브러리를 사용해야 합니다).
        ECMA-402엔 언어가 다를 때 적용할 수 있는 문자열 비교 규칙과 이를 준수하는 메서드가 정의되어있습니다.
        str.localeCompare(str2)를 호출하면 ECMA-402에서 정의한 규칙에 따라 str이 str2보다 작은지, 같은지, 큰지를 나타내주는 정수가 반환됩니다.

        str이 str2보다 작으면 음수를 반환합니다.
        str이 str2보다 크면 양수를 반환합니다.
        str과 str2이 같으면 0을 반환합니다.

        예시:
        alert( 'Österreich'.localeCompare('Zealand') ); // -1

        localeCompare엔 선택 인수 두 개를 더 전달할 수 있습니다. 
        기준이 되는 언어를 지정(아무것도 지정하지 않았으면 호스트 환경의 언어가 기준 언어가 됨)해주는 인수와 대·소문자를 구분할지나 "a"와 "á"를 다르게 취급할지에 대한 것을 설정해주는 인수가 더 있죠. 
        자세한 사항은 관련 페이지에서 확인해 보시기 바랍니다.
*/

/*
    요약
        자바스크립트엔 세 종류의 따옴표가 있는데, 이 중 하나인 백틱은 문자열을 여러 줄에 걸쳐 쓸 수 있게 해주고 문자열 중간에 ${…}을 사용해 표현식도 넣을 수 있다는 점이 특징입니다.
        자바스크립트에선 UTF-16을 사용해 문자열을 인코딩합니다.
        \n 같은 특수 문자를 사용할 수 있습니다. \u...를 사용하면 해당 문자의 유니코드를 사용해 글자를 만들 수 있습니다.
        문자열 내의 글자 하나를 얻으려면 대괄호 []를 사용하세요.
        부분 문자열을 얻으려면 slice나 substring을 사용하세요.
        소문자로 바꾸려면 toLowerCase, 대문자로 바꾸려면 toUpperCase를 사용하세요.
        indexOf를 사용하면 부분 문자열의 위치를 얻을 수 있습니다. 부분 문자열 여부만 알고 싶다면 includes/startsWith/endsWith를 사용하면 됩니다.
        특정 언어에 적합한 비교 기준 사용해 문자열을 비교하려면 localeCompare를 사용하세요. 이 메서드를 사용하지 않으면 글자 코드를 기준으로 문자열이 비교됩니다.
        이외에도 문자열에 쓸 수 있는 유용한 메서드 몇 가지가 있습니다.

        str.trim() – 문자열 앞과 끝의 공백 문자를 다듬어 줍니다(제거함).
        str.repeat(n) – 문자열을 n번 반복합니다.
        이 외의 메서드는 MDN 문서에서 확인해보시기 바랍니다.
        정규 표현식을 사용해 문자열을 찾거나 교체해주는 메서드도 여러 개 있는데 이는 아주 큰 주제이기 때문에 별도의 섹션 정규 표현식에서 다루겠습니다.
*/

