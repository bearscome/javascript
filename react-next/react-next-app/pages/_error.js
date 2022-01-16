import Error from 'next/error';

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
}


// 500error 커스텀, 서버에러, 클라이언트 에러 