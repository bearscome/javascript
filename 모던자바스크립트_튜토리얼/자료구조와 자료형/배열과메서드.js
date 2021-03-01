/*
    [,] : 써도 되고 안써도 되고
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

    2. slice
        - arr.slice는 arr.splice와 유사해 보이지만 훨씬 간단
        - 문법 : arr.slice([start], [end])
            인덱스부터 ("end"를 제외한) "end"인덱스까지의 요소를 복사한 새로운 배열을 반환
            let arr = ["t", "e", "s", "t"];
            console.log( arr.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))
            console.log( arr.slice(-2) ); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

            arr.slice()는 인수를 하나도 넘기지 않고 호출하여 arr의 복사본을 만들 수 있습니다. 
            이런 방식은 기존의 배열을 건드리지 않으면서 배열을 조작해 새로운 배열을 만들고자 할 때 자주 사용됩니다.

    3. concat
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




