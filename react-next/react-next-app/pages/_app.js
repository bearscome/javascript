import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp({ Component, pageProps }) {
  console.log('App.js');
  console.log({
    pageProps,
    Component
  });
  return (
    <div style ={{width:1000, margin: "0 auto"}}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
  /**
   * Component -> 각종 페이지 컴포넌트
   * pageProps -> 처음 진입 시 데이터
   */
}

export default MyApp;
