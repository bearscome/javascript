/*
    가비지 컬렉션 
        - 자바스크립트는 메모리 관리를 수행
        - 원시 값, 객체, 함수 등 우리가 만드는 모든 것은 메모리 차지

        - 자바스크립트는 도달 가능성(reachability)이라는 개념을 사용해 메모리를 관리하고 수행함
            - 도달 가능한 값은 어떻게든 접근하거나 사용할 수 있는 값 메모리에서 삭제 불가
            1. 현재 함수의 지역변수와 매개변수
            2. 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
            3. 전역 변수
            4. 기타 등등
                - 이러한 값은 root라고 부름
                - 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 됩니다.

        - 변수로 참조가 가능하면 메모리에서 삭제 안함
        - 객체로 참조 안하면 결국 메모리에서 삭제
        - 결국 참조하는 것이 없으면 삭제됨

        - <global>
              I 객체
            ---- <-- 참조되는 
           I    I  <- 2개 객체
          참조되는 것을 null 값을 하면 객체 2개는 도달할 수 없는 섬이 됨
          이러한 섬형태는 결국 메모리에서 지워짐 
          왜냐하면 참조할 수 없으니까


    내부 알고리즘
    'mark-and-sweep’이라 불리는 가비지 컬렉션 기본 알고리즘에 대해 알아봅시다.

    '가비지 컬렉션’은 대개 다음 단계를 거쳐 수행됩니다.

    가비지 컬렉터는 루트(root) 정보를 수집하고 이를 ‘mark(기억)’ 합니다.
    루트가 참조하고 있는 모든 객체를 방문하고 이것들을 ‘mark’ 합니다.
    mark 된 모든 객체에 방문하고 그 객체들이 참조하는 객체도 mark 합니다. 한번 방문한 객체는 전부 mark 하기 때문에 같은 객체를 다시 방문하는 일은 없습니다.
    루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복합니다.
    mark 되지 않은 모든 객체를 메모리에서 삭제합니다.
    다음과 같은 객체 구조가 있다고 해봅시다.

    지금까지 가비지 컬렉션이 어떻게 동작하는지에 대한 개념을 알아보았습니다.
    자바스크립트 엔진은 실행에 영향을 미치지 않으면서 가비지 컬렉션을 더 빠르게 하는 다양한 최적화 기법을 적용합니다.
    generational collection(세대별 수집) – 객체를 '새로운 객체’와 '오래된 객체’로 나눕니다. 
    객체 상당수는 생성 이후 제 역할을 빠르게 수행해 금방 쓸모가 없어지는데, 이런 객체를 '새로운 객체’로 구분합니다. 
    가비지 컬렉터는 이런 객체를 공격적으로 메모리에서 제거합니다. 일정 시간 이상 동안 살아남은 객체는 '오래된 객체’로 분류하고, 가비지 컬렉터가 덜 감시합니다.

    incremental collection(점진적 수집) – 방문해야 할 객체가 많다면 모든 객체를 한 번에 방문하고 mark 하는데 상당한 시간이 소모됩니다. 
    가비지 컬렉션에 많은 리소스가 사용되어 실행 속도도 눈에 띄게 느려지겠죠. 자바스크립트 엔진은 이런 현상을 개선하기 위해 가비지 컬렉션을 여러 부분으로 분리한 다음,
    각 부분을 별도로 수행합니다. 작업을 분리하고, 변경 사항을 추적하는 데 추가 작업이 필요하긴 하지만, 긴 지연을 짧은 지연 여러 개로 분산시킬 수 있다는 장점이 있습니다.

    idle-time collection(유휴 시간 수집) – 가비지 컬렉터는 실행에 주는 영향을 최소화하기 위해 CPU가 유휴 상태일 때에만 가비지 컬렉션을 실행합니다.

    요약
    가비지 컬렉션은 엔진이 자동으로 수행하므로 개발자는 이를 억지로 실행하거나 막을 수 없습니다.
    객체는 도달 가능한 상태일 때 메모리에 남습니다.
    참조된다고 해서 도달 가능한 것은 아닙니다. 서로 연결된 객체들도 도달 불가능할 수 있습니다. ex)null
*/