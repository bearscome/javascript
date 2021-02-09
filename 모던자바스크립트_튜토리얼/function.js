// function test(a, b="테스트") {
//     console.log(a,b)
// }
// console.log(test("이것은"))
// //매개변수를 선언하고 인자 값을 안줘도 되긴하는데 인자값에서 undefined가 나오네

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('보호자의 동의를 받으셨나요?');
//     }
//   }

//   function checkAge(age) {
//       return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
//   }

//   function checkAge(age) {
//     return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
//   }

//   checkAge(20)

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function checkNumber(a,b) {
//     if(a > b) {
//         return true;
//     } else {
//         return false;
//     }
// }


function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
  } else {
    alert( pow(x, n) );
  }