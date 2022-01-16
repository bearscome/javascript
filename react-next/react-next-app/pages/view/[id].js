import axios from "axios";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Item from "../../src/component/Item";
import { Divider, Header, Loader } from "semantic-ui-react";
import Head from "next/head";

const Post = ({item}) => {
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
        <Item item = {item} />
      </>
    )
  );

};

export default Post;

export async function getServerSideProps(context) {
  console.log('context',{context});

  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;



  return {
    props:{
      item: data
    }
  };
}