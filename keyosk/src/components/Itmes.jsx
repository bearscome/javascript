import * as React from 'react';

const Items = ({set}) => {
    const item = set.map((el) => {
        return (
            <li className = "menu_list" key = {el.id}>
                <p>이미지{`${el.id}`}</p>
                <p>{el.name}</p>
                <p>{el.event == 'true' && '이벤트 중' }</p>
            </li>
        )
    })

    return (
        <React.Fragment>
            {item}
        </React.Fragment>
    )
};

export default Items;