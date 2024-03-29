import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  function getData() {
    axios.get(API_URL)
      .then(res => {
        console.log(res);
        setList(res.data);
        setIsloading(false);
      });
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>안녕~</title>
      </Head>
      {isLoading ? (
        <div style={{padding:'300px 0'}}>
          <Loader inline="centered" active >
            Loading
          </Loader> 
        </div> 
      ) :
        <>
          <Header as="h3" style = {{paddingTop:40}}>
            베스트상품
          </Header>
          <Divider/ >
          <ItemList list = {list.slice(0, 9)} />

          <Header as="h3" style = {{paddingTop:40}}>
            신상품
          </Header>
          <Divider/ >
          <ItemList list = {list.slice(9)} />
        </>
      }
    </div>
  );
}
