import axios from "axios";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Item from "../../src/component/Item";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function ID() {
  const router = useRouter();
  const {id} = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API_URL)
      .then(res => {
        setItem(res.data);
        setIsLoading(false);
      });
  };

  

  useEffect(() => {
    if(id && id > 0) {
      getData();

    }
  }, [id]);


  return (
    isLoading ? 
      (
        <div style={{padding: '300px 0'}}>
          <Loader active inline="centered">Loading</Loader>
        </div>
      ) 
      : 
      (<Item item = {item} />)
  );

}