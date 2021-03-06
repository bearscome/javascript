/*
    [,] : 써도 되고 안써도 되고
    요소 추가,제거 메서드
    1. splice
        - 요소를 추가, 삭제, 교체
        - 문법 : splice(index [,deleteCount, elem1, ...., elemN])
            index : 조작을 가할 첫 번째 요소
            deleteCount : 제거하고자 하는 요소의 개수
            elem1, ...., elemN : 배열에 추가할 요소

            let arr = ["i", "go", "home"]
            arr.splice(0, 3, "Let's", "dance");
            console.log(arr)

            let arr = [1, 2, 5];

            // 인덱스 -1부터 (배열 끝에서부터 첫 번째 요소)
            // 0개의 요소를 삭제하고
            // 3과 4를 추가합니다.
            arr.splice(-1, 0, 3, 4);

            console.log( arr ); // 1,2,3,4,5

    2. slice : 원하는 요소 복사
        - arr.slice는 arr.splice와 유사해 보이지만 훨씬 간단
        - 문법 : arr.slice([start], [end])
            인덱스부터 ("end"를 제외한) "end"인덱스까지의 요소를 복사한 새로운 배열을 반환
            let arr = ["t", "e", "s", "t"];
            console.log( arr.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))
            console.log( arr.slice(-2) ); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

            arr.slice()는 인수를 하나도 넘기지 않고 호출하여 arr의 복사본을 만들 수 있습니다. 
            이런 방식은 기존의 배열을 건드리지 않으면서 배열을 조작해 새로운 배열을 만들고자 할 때 자주 사용됩니다.

    3. concat : 기존 배열에 추가 요소 넣기
        - 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때
        - 문법 : arr.concat(arg1, arg2...)
        - 인수엔 배열이나 값이 올 수 있는데, 인수 개수엔 제한이 없습니다
        - 메서드를 호출하면 arr에 속한 모든 요소와 arg1, arg2 등에 속한 모든 요소를 한데 모은 새로운 배열이 반환됩니다.
        - 인수 argN가 배열일 경우 배열의 모든 요소가 복사됩니다. 
        - 그렇지 않은경우(단순 값인 경우)는 인수가 그대로 복사됩니다.

            arr에 객체를 추가한다 원본에다 추가한다
            let arr = [1, 2];
            // arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
            console.log( arr.concat([3, 4]) ); // 1,2,3,4
            // arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
            console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
            // arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
            console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

            배열에 객체가 들어오면
            let arr = [1, 2];
            let arrayLike = {
            0: "something",
            length: 1
            };
            console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

    4. forEach
        - 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해줍니다.
        - 문법 : arr.forEach(function(item, index, array) {
                    // 요소에 무언가를 할 수 있습니다.
                });
                item : 배열에 있는 아이템
                index : 현재 반복문에 들어가있는 인덱스 값
                array : 현재 어레이
*/

/*
    배열 탐색
    indexOf, lastIndexOf, includes : 해당 인덱스 반환
        1. arr.indexOf(item, from) : from부터 item을 찾음, 요소를 발견하면 해당 요소 인덱스 반환하고 발견 못하면 -1 반환
        2. arr.lastIndexOf(item, from) : indexOf와 같은 하지만 끝에서 부터 시작
        3. arr.includes(item, from) : 인덱스from부터 시작해 item이 있는지 검색. 해당 요소를 발견하면 true 반환
    
        let arr = [1, 0, false];
        console.log( arr.indexOf(0) ); // 1
        console.log( arr.indexOf(false) ); // 2
        console.log( arr.indexOf(null) ); // -1
        console.log( arr.includes(1) ); // true

        - 위 메서드들은 완전 항등 연산자로 ===를 사용
        - 요소의 위치가 아니라 존재여부만 알고 싶은면 includes를 사용


    find, findIndex : 객체를 찾는거
        - 객체로 이루어진 배열이 있다고 가정해 봅시다. 특정 조건에 부합하는 객체를 배열 내에서 어떻게 찾을 수 있을까요?
        - 문법 : let result = arr.find(function(item, index, array) {
                    //true가 반환되면 반복을 멈추고 해당요소를 반환
                    // 조건에 해당하는 요소가 없으면 undefined를 반환
                    item : 함수를 호출할 요소
                    index : 요소의 인덱스
                    array : 배열 자기 자신
                })

                let users = [
                    {id: 1, name: "John"},
                    {id: 2, name: "Pete"},
                    {id: 3, name: "Mary"}
                ];
                
                let user = users.find(function(item) {
                    return item.id == 1
                });
                
                console.log(user.name); // John
                실무에서 객체로 구성된 배열을 다뤄야 할 일이 잦기 때문에 find 메서드 활용법을 알아두면 좋습니다.
                그런데 위 예시에서 find 안의 함수가 인자를 하나만 가지고 있다는 점에 주목해주시기 바랍니다
                (item => item.id == 1). 이런 패턴이 가장 많이 사용되는 편입니다. 
                다른 인자들(index, array)은 잘 사용되지 않습니다.
                arr.findIndex는 find와 동일한 일을 하나, 조건에 맞는 요소를 반환하는 대신 해당 요소의 인덱스를 반환한다는 점이 다릅니다. 
                조건에 맞는 요소가 없으면 -1이 반환됩니다.

    filter : 객체를 필터링 하는거
        - find 메서드는 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾습니다.
        - 조건을 충족하는 요소가 여러 개라면 arr.filter(fn)를 사용하면 됩니다.
        - filter는 find와 문법이 유사하지만, 조건에 맞는 요소 전체를 담은 배열을 반환한다는 점에서 차이가 있습니다.
        - 문법 : let result = arr.filter(function(item, index, array) {
                    // 조건을 충족하는 요소는 result에 순차적으로 더해진다.
                    // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환된다.
                })
                let users = [
                    {id: 1, name: "John"},
                    {id: 2, name: "Pete"},
                    {id: 3, name: "Mary"}
                ];
                
                // 앞쪽 사용자 두 명을 반환합니다.
                let someUsers = users.filter(item => item.id < 3);
                
                console.log(someUsers); // 2
*/

/*
    배열을 변형하는 메서드
    map
        - map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.
        - 문법 : let result = arr.map(function(item, index, array) {
                    // 요소 대신 새로운 값 반환
                })
                let length = ["Bilbo", "Gandalf", "Nazgul"].map(function(item) {
                    return item.length
                })
                console.log(length)

    sort(fn)
        - arr.sort()는 배열의 요소를 정렬해줍니다. 배열 자체가 변경됩니다.
        - 요소는 문자열로 취급되어 재 정렬되기 때문입니다.
        - 기본 정렬 기준 대신 새로운 정렬 기준을 만들려면 arr.sort()에 새로운 함수를 넘겨줘야 합니다.
        - 인수로 넘겨주는 함수는 반드시 값 두 개를 비교해야 하고 반환 값도 있어야 합니다.
            function compare(a, b) {
                if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
                if (a == b) return 0; // 두 값이 같은 경우
                if (a < b) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
            }
            let arr = [ 1, 2, 15 ];
            arr.sort(function(a, b) { return a - b; });
            alert(arr);  // 1, 2, 15

    revers
        - 요소를 역순으로 정렬
            let arr = [1, 2, 3, 4, 5];
            arr.reverse();
            alert( arr ); // 5,4,3,2,1

    split
        - 긴 문자열 형태의 수신자 리스트를 배열 형태로 전환해 처리
            let names = 'Bilbo, Gandalf, Nazgul';
            let str = names.split(', ')
            console.log(str)
        - 한 글자씩 자르기 
            let str = 'test'
            console.log(str.split(''))

    join
        - 배열 요소를 모두 합친 후 하나의 문자열을 만들어줍니다.
            let names = ['Bilbo, Gandalf, Nazgul'];
            let str = names.join()
            console.log(str)

    reduce
        - 배열 내 요소를 대상으로 반복 작업을 할 수 있습니다.
        - 문법 : let value = arr.reduce(function(accumulator, item, index, array) {
                    // ...
                }, [initial]);
                - accumulator – 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
                - item – 현재 배열 요소
                - index – 요소의 위치
                - array – 배열
        - 첫 번째 인수는 앞서 호출했던 함수들의 결과가 누적되어 저장되는 '누산기(accumulator)'라고 생각하면 됩니다. 
        - 마지막 함수까지 호출되면 이 값은 reduce의 반환 값이 됩니다.
            let arr = [1, 2, 3, 4, 5];
            let result = arr.reduce((sum, current) => sum + current, 0);
            console.log(result); // 15
            함수 최초 호출 시, reduce의 마지막 인수인 0(초깃값)이 sum에 할당됩니다. current엔 배열의 첫 번째 요소인 1이 할당됩니다. 따라서 함수의 결과는 1이 됩니다.
            두 번째 호출 시, sum = 1 이고 여기에 배열의 두 번째 요소(2)가 더해지므로 결과는 3이 됩니다.
            세 번째 호출 시, sum = 3 이고 여기에 배열의 다음 요소가 더해집니다. 이런 과정이 계속 이어집니다.
    
    배열 메서드와 ‘thisArg’
        - 함수를 호출하는 대부분의 배열 메서드(find, filter, map 등. sort는 제외)는 thisArg라는 매개변수를 옵션으로 받을 수 있습니다.
        - callback 함수
    
*/


/*
    요약

    요소를 더하거나 지우기
        push(...items) – 맨 끝에 요소 추가하기
        pop() – 맨 끝 요소 추출하기
        shift() – 첫 요소 추출하기
        unshift(...items) – 맨 앞에 요소 추가하기
        splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
        slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
        concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
    
    원하는 요소 찾기
        indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
        includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
        find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
        findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함

    배열 전체 순회하기
        forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음

    배열 변형하기

        map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
        sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
        reverse() – 배열을 뒤집어 반환함
        split/join – 문자열을 배열로, 배열을 문자열로 변환함
        reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨
    
        기타
            Array.isArray(arr) – arr이 배열인지 여부를 판단함
            sort, reverse, splice는 기존 배열을 변형시킨다는 점에 주의하시기 바랍니다.
            

        지금까지 배운 메서드만으로 배열과 관련된 작업 99%를 해결할 수 있습니다. 이 외의 배열 메서드도 있긴 한데 잠시 언급하고 넘어가겠습니다.
        arr.some(fn)과 arr.every(fn)는 배열을 확인합니다.
        두 메서드는 map과 유사하게 모든 요소를 대상으로 함수를 호출합니다. some은 함수의 반환 값을 true로 만드는 요소가 하나라도 있는지 여부를 확인하고 every는 모든 요소가 함수의 반환 값을 true로 만드는지 여부를 확인합니다. 두 메서드 모두 조건을 충족하면 true를, 그렇지 않으면 false를 반환합니다.
        arr.fill(value, start, end)은 start부터 end까지 value를 채워 넣습니다.
        arr.copyWithin(target, start, end)은 start부터 end까지 요소를 복사하고, 복사한 요소를 target에 붙여넣습니다. 기존 요소가 있다면 덮어씁니다.
*/

/** 연습문제
function change(text) {// border-left-width를 borderLeftWidth로 변경하기
    return(text
        .split('-')
        .map(function(word, index) {
            return index == 0 ? word : word[0].toUpperCase() + word.slice(1) 
        })
        .join('')
    )
}
console.log(change('list-style-image'))


function filterRange(arr, a, b) { //특정 범위에 속하는 요소 찾기
    return arr.filter(function(item) {
        return a <= item && item <= b 
    });
}
let arr = [5,3,8,1]
let test = filterRange(arr, 1, 4)
console.log(test)


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b ) {
    for(let i = 0; i < arr.length; i++) {
        let val = arr[i]

        if(val < a || val > b) {
            arr.splice(i, 1);
            i--
        }
    }
} 

function filterRangeInPlace(arr, a, b) {
    arr.forEach(function(items, index) {
        if(items <= b || items >= a ) {
           arr.splice(index,1)
        }
    })
}

let arr = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
arr.sort(function(a,b) {
    return b-a
})

console.log( arr ); // 8, 5, 2, 1, -10




let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(function(items) {
    return items.name
})

console.log( names ); // John, Pete, Mar




let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(function(items, index) {
    let fullName = items.name + items.surname
    let userNameID = {
        fullName : fullName,
        id : items.id
    }
    return userNameID
})

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));


usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName)
 */









