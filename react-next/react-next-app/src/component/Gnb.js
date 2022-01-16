import { useRouter } from 'next/router';
import {Menu} from 'semantic-ui-react';

const Gnb = () => {
  let activeItem;
  const router = useRouter();

  if(router.pathname === '/') {
    activeItem = 'home';
  } else if(router.pathname === '/about') {
    activeItem = 'about';
  }
  

  const goLink = (e, data) => {
    //data -> semantic-ui에서 제공한다 해당 컴포넌트의 props를 반환한다.
    const {name} = data;
    if(name === 'home') {
      router.push(`/`);
    } else {
      router.push(`/${name}`);
    }
  };

  return (
    <>
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
      </Menu>
    </>
  );
};

export default Gnb;
