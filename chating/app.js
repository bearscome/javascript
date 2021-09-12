//서버 구동 파일
const express = require("express"); 
//require nodeJS에서 다른 패키지를 불러올 때 사용하는 키워드 // Path가 지정되지 않으면 기본적인 Path()./src/express로 설정된다.
const http = require("http");
const app = express(); //app에 express 변수 값 저장
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");
const moment = require("moment");


const io = socketIO(server);


//보여줄 파일 설정
app.use(express.static(path.join(__dirname, "src")));
//__dirname : 프로젝트 디렉토리
const PORT = process.env.PORT || 5000;
// process.env는 nodeJs에서 환경 변수를 가져올 때 사용, 



io.on("connection", (socket) => {
    socket.on("chatting", (data) => {
        //http에서 넘어온 데이터 
        const {name, msg} = data;
        console.log(`HTML TO APP`, data);
        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("h:ss A")
        });
    })
});


server.listen(PORT, () => console.log(`server is running ${PORT}`));
// express 서버를 실핼할 때, 필요한 포트 정의 및 실행시 callback함수를 받는다.
// nodemon -> js파일이 수정될 때마다 서버를 재실행 해야하는 번거러움이 있다. 그걸 자동으로 해주는 라이브러리

