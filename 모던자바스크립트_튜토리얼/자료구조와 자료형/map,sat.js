/*
    맵과 셋
    맵 : 키가 있는 데이터를 저장, 객체와 유사, 맵은 키에 다양한 자료형을 허용
    new Map() – 맵을 만듭니다.
    map.set(key, value) – key를 이용해 value를 저장합니다.
    map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
    map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
    map.delete(key) – key에 해당하는 값을 삭제합니다.
    map.clear() – 맵 안의 모든 요소를 제거합니다.
    map.size – 요소의 개수를 반환합니다.


    맵
    let map = new Map();

    map.set('1', 'str1') //문자형 키
    map.set(1, 'num1') //숫자형 키
    map.set(true, 'bool1') //불린형 키

    //객체는 키를 문자형으로 변환
    //맵은 키의 탑을 변환시키지 않고 그대로 유지 타입에 따라 달리진다 값이

    console.log(map.get('1')) //str1
    console.log(map.get(1)) //num1
    console.log(map.get(true)) //bool1

    console.log(map.size) //3

    //map[key]는 map을 쓰는 옳바른 방법이 아니다.


    //맵의 요소에 반복 작업하기
    map.keys() – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.
    map.values() – 각 요소의 값을 모은 이터러블 객체를 반환합니다.
    map.entries() – 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환합니다. 이 이터러블 객체는 for..of반복문의 기초로 쓰입니다.



    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    //키 대상으로 순회
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion
    }
    // 값 대상으로 순회
    for (let amount  of recipeMap.values()) {
        console.log(amount ); // cucumber, tomatoes, onion
    }
    // 키, 값 모두 순회
    for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
        console.log(entry); // cucumber,500 ...
    }

    // 맵은 삽입 순서를 기억합니다.
    // 맵은 값이 삽업된 순서대로 순회를 한다.

    // 각 (키, 값)을 대상으로 함수를 실행
    recipeMap.forEach( (value, key, map) => {
        console.log(`${key}: ${value}`); // cucumber: 500 ...
    });



    Object.entries: 객체를 맵으로 바꾸기
        - 각 요소가 키 - 값 쌍인 배열이나 이터러블 객체를 초기화 용도로 맵에 전달해 새로운 맵을 만들 수 있습니다.

    // 각 요소가 [키, 값] 쌍인 배열

    let map = new Map([
        ['1',  'str1'],
        [1,    'num1'],
        [true, 'bool1']
    ])

    console.log(map.get('1')) //str1


    // 평범한 객체를 가지고 맵을 만들고 싶다면 object.entries(obj)를 활용, 객체의 키-값 쌍을 요소([key, value]) 배열로 반환
    let obj = {
        name: 'john',
        age: 30
    }

    let map = new Map(Object.entries(obj));

    console.log(map)
    console.log(map.get('name'))
    //Object.entries를 사용해 객체 obj를 배열 [ ["name","John"], ["age", 30] ]로 바꾸고, 이배열을 새로운 맵으로 만듦





    Object.fromEntries: 맵을 객체로 바꾸기
    let prices = Object.fromEntries([
     ['banana', 1],
    ['orange', 2],
    ['meat', 4]
    ]);

    console.log(prices)
    
    let map = new Map();
    map.set('banana', 1)
    map.set('orange', 1)
    map.set('meat', 1)

    let obj = Object.fromEntries(map.entries())
    console.log(obj)
    //map.entries()를 호출하면 맵의 [키, 값]을 요소로 가지는 이터러블을 반환


    셋
    new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
    set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
    set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
    set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
    set.clear() – 셋을 비웁니다.
    set.size – 셋에 몇 개의 값이 있는지 세줍니다.

    셋 내에 동일한 값(value)이 있다면 set.add(value)을 아무리 많이 호출하더라도 아무런 반응이 없을 겁니다. 
    셋 내의 값에 중복이 없는 이유가 바로 이 때문이죠.
    방문자 방명록을 만든다고 가정해 봅시다. 한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황입니다.
    즉, 한 방문자는 '단 한 번만 기록’되어야 합니다.
    이때 적합한 자료구조가 바로 셋입니다.


    
    let set = new Set();
    let john = {name: 'john'}
    let pete  = {name: 'pete '}
    let mary  = {name: 'mary '}

    //어떤 고객은 여러번 방문할 수 있다.
    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    //셋에서는 유일무이한 값만 저장됨
    console.log(set.size)

    셋 대신 배열을 사용하여 방문자 정보를 저장한 후, 중복 값 여부는 배열 메서드인 arr.find를 이용해 확인할 수도 있습니다. 
    하지만 arr.find는 배열 내 요소 전체를 뒤져 중복 값을 찾기 때문에, 셋보다 성능 면에서 떨어집니다. 
    반면, 셋은 값의 유일무이함을 확인하는데 최적화되어있습니다.


    셋의 값에 반복 작업하기
    for..of나 forEach를 사용하면 셋의 값을 대상으로 반복작업 가능

    let set = new Set(["oranges", "apples", "bananas"]);
    //for (let value of set) console.log(value);
    set.forEach(function(value, valueAgain, set) {
        console.log(value)
        console.log(valueAgain)
        console.log(set)
    })

    흥미로운 점이 눈에 띄네요. forEach에 쓰인 콜백 함수는 세 개의 인수를 받는데, 첫 번째는 값, 두 번째도 같은 값인 valueAgain을 받고 있습니다.
    이렇게 구현된 이유는 맵과의 호환성 때문입니다. 
    맵의 forEach에 쓰인 콜백이 세 개의 인수를 받을 때를 위해서죠. 
    이상해 보이겠지만 이렇게 구현해 놓았기 때문에 맵을 셋으로 혹은 셋을 맵으로 교체하기가 쉽습니다.

    set.keys() – 셋 내의 모든 값을 포함하는 이터러블 객체를 반환합니다.
    set.values() – set.keys와 동일한 작업을 합니다. 맵과의 호환성을 위해 만들어진 메서드입니다.
    set.entries() – 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들어졌습니다.


    요약
    맵은 키가 있는 값이 저장된 컬렉션입니다.

주요 메서드와 프로퍼티:

new Map([iterable]) – 맵을 만듭니다. [key,value]쌍이 있는 iterable(예: 배열)을 선택적으로 넘길 수 있는데, 이때 넘긴 이터러블 객체는 맵 초기화에 사용됩니다.
map.set(key, value) – 키를 이용해 값을 저장합니다.
map.get(key) – 키에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
map.has(key) – 키가 있으면 true, 없으면 false를 반환합니다.
map.delete(key) – 키에 해당하는 값을 삭제합니다.
map.clear() – 맵 안의 모든 요소를 제거합니다.
map.size – 요소의 개수를 반환합니다.
일반적인 객체와의 차이점:

키의 타입에 제약이 없습니다. 객체도 키가 될 수 있습니다.
size 프로퍼티 등의 유용한 메서드나 프로퍼티가 있습니다.
셋은 중복이 없는 값을 저장할 때 쓰이는 컬렉션입니다.

주요 메서드와 프로퍼티:

new Set([iterable]) – 셋을 만듭니다. iterable 객체를 선택적으로 전달받을 수 있는데(대개 배열을 전달받음), 이터러블 객체 안의 요소는 셋을 초기화하는데 쓰입니다.
set.add(value) – 값을 추가하고 셋 자신을 반환합니다. 셋 내에 이미 value가 있는 경우 아무런 작업을 하지 않습니다.
set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
set.clear() – 셋을 비웁니다.
set.size – 셋에 몇 개의 값이 있는지 세줍니다.

맵과 셋에 반복 작업을 할 땐, 해당 컬렉션에 요소나 값을 추가한 순서대로 반복 작업이 수행됩니다.
따라서 이 두 컬렉션은 정렬이 되어있지 않다고 할 수 없습니다. 
그렇지만 컬렉션 내 요소나 값을 재 정렬하거나 (배열에서 인덱스를 이용해 요소를 가져오는 것처럼) 숫자를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다.


    */

