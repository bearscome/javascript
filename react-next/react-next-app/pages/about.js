import { Header } from "semantic-ui-react";

export default function About() {
  return (
    <div >
      <section style={{paddingTop: '50px'}}>
        <Header as={'h3'}>
          본인소개
        </Header>
        <p>각종 사항: 1</p>
        <p>각종 사항: 1</p>
        <p>각종 사항: 1</p>
        <p>각종 사항: 1</p>
      </section>
      <section style={{paddingTop: '50px'}}>
        <Header as={'h3'}>
          문의사항
        </Header>
        <div>
          <div>
            <label>이메일: </label>
            <input type={'text'} />
          </div>
          <div>
            <label>문의내용: </label>
            <input type={'textarea'} />         
          </div>
          <button>전송</button>
        </div>
      </section>
    </div>
  );
}