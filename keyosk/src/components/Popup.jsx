import * as React from 'react';
import '../css/common.css'

const Popup = ({selectedItem, clicked, chageItemListData, returnItem}) => {
    console.log('selectedItem', selectedItem)
    console.log('변경할 아이템', chageItemListData);

    const [mainItem, setMainItem] = React.useState(1);
    const [subMenuCount, setSubMenuCount] = React.useState({
        beef: {
            count: 0,
            info: chageItemListData[0]
        },
        chicken: {
            count: 0,
            info: chageItemListData[1]
        },
        egg: {
            count: 0,
            info: chageItemListData[2]
        },
        lettuce: {
            count: 0,
            info: chageItemListData[3]
        },
        buns: {
            count: 0,
            info: chageItemListData[4]
        }
    })
    const [clickChange, setClickChange] = React.useState(false);
    
    let chageItemList = null;
    let sendItem = null;
    let showSubItem = null;

    const plus = (el) => {
        switch(el.name) {
            case '소고기 패티' :
                setSubMenuCount((state) =>({
                    ...state,
                    beef: {
                        count: state.beef.count + 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
                // setSubMenuCount({
                //     ...subMenuCount,
                //     subMenuCount: {
                //         beef: {
                //             count : subMenuCount.chicken.count += 1
                //         }
                //     }
                // });
                /**
                 * () => ()이건 무슨 뜻 일까? 즉시 실행 함수인가?
                 * setState할 때, 함수를 선언하는 것과 객체를 넣는것의 차이는 무엇인가?
                 */
            case '치킨 패티' :
                setSubMenuCount((state) =>({
                    ...state,
                    chicken: {
                        count: state.chicken.count + 1,
                        info:chageItemListData[1]
                    }
                }));
                break;
            case '계란' :
                setSubMenuCount((state) =>({
                    ...state,
                    egg: {
                        count: state.egg.count + 1,
                        info:chageItemListData[2]
                    }
                }));
                break;
            case '양상추' :
                setSubMenuCount((state) =>({
                    ...state,
                    lettuce: {
                        count: state.lettuce.count + 1,
                        info:chageItemListData[3]
                    }
                }));
                break;
            case '햄버거 빵' :
                setSubMenuCount((state) =>({
                    ...state,
                    buns: {
                        count: state.buns.count + 1,
                        info:chageItemListData[4]
                    }
                }));
                break;
        }
    }

    const minus = (el) => {
        switch(el.name) {
            case '소고기 패티' :
                setSubMenuCount(state => ({
                    ...state,
                    beef: {
                        count: state.beef.count < 1 ? 0 : state.beef.count - 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
            case '치킨 패티' :
                setSubMenuCount((state) => ({
                    ...state,
                    chicken: {
                        count: state.chicken.count < 1 ? 0 : state.chicken.count - 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
            case '계란' :
                setSubMenuCount((state) => ({
                    ...state,
                    egg: {
                        count: state.egg.count < 1 ? 0 : state.egg.count - 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
            case '양상추' :
                setSubMenuCount((state) => ({
                    ...state,
                    lettuce: {
                        count: state.lettuce.count < 1 ? 0 : state.lettuce.count - 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
            case '햄버거 빵' :
                setSubMenuCount((state) => ({
                    ...state,
                    buns: {
                        count: state.buns.count < 1 ? 0 : state.buns.count - 1,
                        info:chageItemListData[0]
                    }
                }));
                break;
        }
    }

    const isDoneChange = () => {
        returnItem(sendItem);
        setClickChange(!clickChange)
    }

    if(chageItemListData.length > 0) {
        
        chageItemList = chageItemListData.map((el, idx) => {
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
                        <button onClick = {()=> {
                            minus(el);
                            console.log('elel', el);
                        }}>-</button>
                            <p style = {el.name == "소고기 패티" ? {display:'block'} : {display:'none'}}>{el.name === "소고기 패티" && subMenuCount?.beef?.count}</p>
                            <p style = {el.name == "치킨 패티" ? {display:'block'} : {display:'none'}}>{el.name === "치킨 패티" && subMenuCount?.chicken?.count}</p>
                            <p style = {el.name == "계란" ? {display:'block'} : {display:'none'}}>{el.name === "계란" && subMenuCount?.egg?.count}</p>
                            <p style = {el.name == "양상추" ? {display:'block'} : {display:'none'}}>{el.name === "양상추" && subMenuCount?.lettuce?.count}</p>
                            <p style = {el.name == "햄버거 빵" ? {display:'block'} : {display:'none'}}>{el.name === "햄버거 빵" && subMenuCount?.buns?.count}</p>
                        <button onClick = {() => {
                            plus(el);
                        }}>+</button>
                    </div>
                </li>
            )
        });

        if(selectedItem) {
            sendItem = selectedItem ? selectedItem : '';
            sendItem['addItem'] = subMenuCount
        }
        console.log('selectedItem', selectedItem)
        console.log('sendItem' ,sendItem)
    } else {
        alert('변경할 메뉴를 어드민에서 추가해주세요.')
    }

    if(sendItem?.addItem) {
        console.log('sendItem?.addItem', sendItem?.addItem)
        showSubItem = Object.entries(sendItem?.addItem).map((el, idx) => {
            const itemName = el[1]?.info?.name;
            const itemCount = el[1]?.count;
            const itemPrice = el[1]?.info?.price
            const totalPrice = (Number(itemCount) * Number(itemPrice.replace(',', ''))).toLocaleString()
            console.log('itemPrice', Number(itemPrice.replace(',', '')))
            console.log('itemCount', itemCount)
            return (
                <li className ="selectAdd" key={idx}>
                    <p>고르신 메뉴: {el && itemName}</p>
                    <p>고르신 개수: {el && itemCount}</p>
                    <p>가격: {el && `￦${(itemCount > 0 ? totalPrice : 0)}`}</p>
                </li>
            )
        }) 
    }
    

    return (
        <React.Fragment>
            <div className="popup" style={clicked ? {display:'block'} : {display:'none'}}>
                <header>
                    <button onClick = {() => {setClickChange(false)}}>{!clickChange ? 'X' : '<'}</button>
                </header>
                <main>
                    <section>
                        <img className="popup_img" src={selectedItem && selectedItem?.URL}/>
                        <p>{selectedItem && selectedItem?.name}</p>
                        <p>&#65510; {selectedItem && selectedItem?.Price}</p>
                    </section>
                    <section style={!clickChange ? {display:'block'} : {display:'none'}}>
                        <div>
                            <button onClick = {() => {mainItem < 2 ? setMainItem(1) : setMainItem(mainItem - 1)}}>-</button>
                            <p>{mainItem}</p> 
                            <button onClick = {() => {mainItem > 0 ? setMainItem(mainItem + 1) : setMainItem(1)}}>+</button>
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
                <section className="completeWrap" style={!clickChange ? {display:'none'} : {display:'block'}}>
                    <ul>
                        {chageItemList}
                    </ul>
                    <button onClick = {isDoneChange}>변경 완료</button>
                </section>
                <section style={!clickChange ? {display:'block'} : {display:'none'}}>
                    <p>추가된 메뉴</p>
                    <ul>
                        {showSubItem}
                    </ul>
                    <button className="completeFunc">변경 완료</button>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Popup;
