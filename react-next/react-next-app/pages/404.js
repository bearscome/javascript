import { Icon } from "semantic-ui-react";

const ErrorPage = () => {
  return(
    <div style={{padding:"200px 0", textAlign:"center", fontSize:30}}>
      <Icon name="warning circle" color="red" />
      404: 페이지를 찾을 수 없습니다.
    </div>
  );
};

export default ErrorPage;

//Error page -> 404 Error -> 404는 정적페이지가 더 좋음