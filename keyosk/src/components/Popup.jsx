import * as React from 'react';
import '../css/common.css'

const Popup = ({selectedItem, clicked, chageItemListData}) => {
    console.log('selectedItem', selectedItem)
    console.log('변경할 아이템', chageItemListData);
    const [count, setCount] = React.useState(0)
    const [clickChange, setClickChange] = React.useState(false);
    const [addMenu, setAddMenu] = React.useState([])

    let chageItemList = null;
    let changeItem = null


    
    const plus = (el, idx) => {

        console.log('el', el)
        console.log('idx', idx)
        console.log(chageItemListData[idx].addItme.count = setCount(count + 1))
    }

    if(chageItemListData.length > 0) {
        
        
        chageItemList = chageItemListData.map((el, idx) => {

            changeItem = {
                name:chageItemListData[idx].name,
                price:chageItemListData[idx].price,
                count:count
            }

            chageItemListData[idx].addItme = changeItem;

            console.log(chageItemListData)
            console.log('asdsad',el)

            return(
                <li className="changeItem" key= {idx}>
                    <div className="itemWrap">
                        <img className="itemImg" src = {el.img}/>
                        <p className="itemInfo">
                            <span>{el.name}</span>
                            <span>&#65510; {el.price}</span>
                        </p>
                    </div>
                    <div className="itemfunc">
                        <button>-</button>
                        <p>{el.addItme.count}</p>
                        <button onClick = {(xxx) => {
                            plus(xxx, idx)
                        }}>+</button>
                    </div>
                </li>
            )
        });

    } else {
        alert('변경할 메뉴를 어드민에서 추가해주세요.')
    }

    // console.log(addMenu)
    // console.log(changeItem)



   

    return (
        <React.Fragment>
            <div className="popup" style={clicked ? {display:'block'} : {display:'none'}}>
                <header>
                    <button onClick = {() => {setClickChange(false)}}>{!clickChange ? 'X' : '<'}</button>
                </header>
                <main>
                    <section>
                        <img className="popup_img" src={!selectedItem == [] ? selectedItem[0]?.URL : ''}/>
                        <p>{!selectedItem == [] ? selectedItem[0]?.name : ''}</p>
                        <p>&#65510; {!selectedItem == [] ? selectedItem[0]?.price : ''}</p>
                    </section>
                    <section style={!clickChange ? {display:'block'} : {display:'none'}}>
                        <div>
                            <button onClick = {() => {count < 2 ? setCount(1) : setCount(count - 1)}}>-</button>
                            <p>{count}</p> 
                            <button onClick = {() => {count > 0 ? setCount(count + 1) : setCount(1)}}>+</button>
                        </div>    
                        <button onClick = {() => {setClickChange(true)}}>추가</button>
                        <button>담기</button>
                    </section>
                </main>
                <footer style={!clickChange ? {display:'block'} : {display:'none'}}>
                    <div>
                        <p>추천메뉴</p>
                        <img />
                        <div>
                            <p>추천 메뉴 이름</p>
                            <span>가격</span>
                            <button>이동</button>
                        </div>
                    </div>
                </footer>
                <section className="completeWrap" style={clickChange ? {display:'block'} : {display:'none'}}>
                    <ul>
                        {chageItemList}
                    </ul>
                </section>
                <section>
                    <p>추가된 메뉴</p>

                    <button className="completeFunc">변경 완료</button>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Popup;
