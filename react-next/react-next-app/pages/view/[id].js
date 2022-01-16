import axios from "axios";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({item, name}) => {
  console.warn({item});
  return (
    item && (
      <>
        <Head>
          <title>
            {item.name}
            <meta name="description" content={item.description}></meta>
          </title>
        </Head>
        {name}환경입니다.
        <Item item = {item} />
      </>
    )
  );

};

export default Post;

export async function getServerSideProps(context) {
  console.log('context',{context});
  //서버에서 동작한다. 브라우저에선 동작안함

  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;



  return {
    props:{
      item: data,
      name:process.env.name
    }
  };
}