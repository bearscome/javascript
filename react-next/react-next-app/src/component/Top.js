import Head from 'next/head';
import Image from 'next/image';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{display:'flex'}}>
        <div style = {{flex: "100px 0 0"}}>
          <Image src ="/images/me.png" alt='me' width={'80'} height={'100%'} style={{display:'block'}}/>
        </div>
        <Head>헤드</Head>
      </div>
      <Gnb />
    </div>
  );
}