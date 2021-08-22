import * as React from "react"
import '../css/common.css'
import { Aside, Popup } from './index'

const Init = ({data}) => {
    const [listIdx, setListIdx] = React.useState(0)
    const [itemList, setItemsInfo] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [item, setItem] = React.useState()

    const menu = data.data.menu;
    const chageItemListData = data.data.chaneItem;
    let menuName = data.data.menu[listIdx].name;
    let menuList = data.data.menu[listIdx].childs;

    const menuOnClick = (idx) => {
        setListIdx(idx)
    }

    const itemOnclick = (idx) => {
        
        console.log('클릭을 했을 경우', menuList[idx])
        setItem(menuList[idx])
        setClicked(true);
        // setItemsInfo([...itemList, {id:menuList[idx].id, name:menuList[idx].name, price:menuList[idx].Price, URL:menuList[idx].URL}]);
    }
    
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

    const returnItme = (data) => {
        console.log('data', data);
        setClicked(false);
        if(data) {
            setItemsInfo(prev => (
               [...prev, data]
            ))
        }
    }


    return (
        <React.Fragment>
            <div className="wrap" className = {clicked ? 'background-block, wrap' : ''}>
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
                        <Aside itemList = {itemList && itemList}/>
                    </aside>
                </div>
                <Popup 
                    selectedItem = {item} 
                    clicked={clicked}
                    chageItemListData = {chageItemListData}
                    returnItem = {returnItme}
                />
            </div>
        </React.Fragment>
    )
}

export default Init