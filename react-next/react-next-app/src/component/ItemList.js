import {Grid} from 'semantic-ui-react';
import Image from 'next/image';
import styles from './ItemList.module.css';
import Link from 'next/link';

export default function ItemList({list}) {
  console.log(list.map(e => e));

  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((e, i) => {
            return (
              <Grid.Column key ={i}>
                <Link href={`/view/${e.id}`}>
                  <a>
                    <div className={styles.wrap}>
                      {/* <img src = {e.image.link} /> */}
                      <Image src={e.image_link} alt={e.name} width={'100%'} height={'100%'} className={styles.img_item}/>
                      <strong className={styles.tit_item}>{e.name}</strong>
                      <strong className={styles.txt_info}>{e.price}</strong>
                      <span className={styles.num_price}>
                        {e.category} {e.product_type}
                      </span>
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
      
    </div>
  );
};