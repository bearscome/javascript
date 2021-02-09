//제일 쉬운 방법
function sum(a, b, callback){
    const result = a + b;
    callback(result)
}
sum(1, 2, function(e){
    console.log(e)
})

//회사에서 웹앱프로젝트 시작하라고 소스를 줬는데 넘 어렵다..