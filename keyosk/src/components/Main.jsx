import * as React from "react"
import '../css/common.css'
import { Aside, Popup } from './index'

const Init = ({data}) => {
    const [listIdx, setListIdx] = React.useState(0)
    const [itemInfo, setItemsInfo] = React.useState(null);

    const menu = data.data.menu;
    let menuName = data.data.menu[listIdx].name;
    let menuList = data.data.menu[listIdx].childs;

    const menuOnClick = (idx) => {
        setListIdx(idx)
    }

    const itemOnclick = (idx) => {
        setItemsInfo(menuList[idx]);
    }
    
    menuName = data.data.menu[listIdx].name;
    menuList = data.data.menu[listIdx].childs;

    const returnEl = menu.map((el, idx) => {
        return (
            <li className = "menu_list" key = {el.id} onClick = {() => {menuOnClick(idx)}}>
                <img src = {el.img} alt = {el.name}/>
                <p>{el.name}</p>
                <p>{el.event == 'true' && '이벤트 중' }</p>
            </li>
        )
    })

    const returnELs = menuList.map((el, idx) => {
        return (
            <li className = "menu_list" key = {el.id} onClick = {() => itemOnclick(idx)}>
                <img src ={el.URL} alt = {el.name}/>
                <p>{el.name}</p>
                <p>{el.Price}원</p>
            </li>
        )
    })


    // console.log('menu',menu)
    // console.log('menuList',menuList)
    return (
        <React.Fragment>
            <div className="wrap">
                <div className="container">
                    <section className="main_wrap">
                        <header className="header">
                            <h1 className="logo">로고</h1>
                            <nav className="nav">
                                <p>Back</p>
                            </nav>
                        </header>
                        <main className="main">
                            <h2 className="title">상품을 담아주세요.</h2>
                            <section className="menu_section">
                                <ul className="menu_wrap">
                                {returnEl}
                                </ul>
                            </section>
                            <section className="item_main">
                                <h2 className="title">
                                    {menuName}
                                </h2>
                                <div className="item_section">
                                    <ul className="item_wrap">
                                        {returnELs}
                                    </ul>
                                </div>
                            </section>
                        </main>
                    </section>
                    <aside className="aside_wrap">
                        <Aside itmeInfo = {itemInfo}/>
                    </aside>
                </div>
                <Popup/>
            </div>
        </React.Fragment>
    )
}

export default Init