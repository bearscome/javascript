import * as React from 'react';

const Menu = ({items}) => {

    const onClick = () => {
        console.log(this)
    }

    const menu = items.map((el) => {
        return (
            <li className = "menu_list" key = {el.id} onClick = {()=>{console.log(this)}}>
                <p>이미지{`${el.id}`}</p>
                <p>{el.name}</p>
                <p>{el.event == 'true' && '이벤트 중' }</p>
            </li>
        )
    })

    return (
        <>
            {menu}
        </>
    )
};

export default Menu;