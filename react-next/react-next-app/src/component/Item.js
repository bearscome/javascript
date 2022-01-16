import { Button } from "semantic-ui-react";
import Image from 'next/image';

const Item = ({item}) => {
  const {image_link, name, price, description} = item;
  

  return (
    <>
      <div>
        {/* <Image src = {image_link} alt = {name} width={100} height={100} layout="fill"/> */}
        <img src = {image_link} alt={name}/>
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <Button color ="orange">구매하기</Button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Item;