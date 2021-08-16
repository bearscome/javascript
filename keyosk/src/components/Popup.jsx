import * as React from 'react';
import '../css/common.css'

const Popup = ({selectedItem, clicked, chageItemListData}) => {
    console.log('selectedItem', selectedItem)
    console.log('변경할 아이템', chageItemListData);

    const [mainItem, setMainItem] = React.useState(0);
    const [subMenuCount, setSubMenuCount] = React.useState({
        "beef":0,
        "chicken":0,
        "egg":0,
        "lettuce":0,
        "buns":0
    })

    const [clickChange, setClickChange] = React.useState(false);

    let chageItemList = null;
    let changeItem = null

    const plus = (el) => {
        switch(el.name) {
            case '소고기 패티' :
                setSubMenuCount({
                    ...subMenuCount,
                    'beef': subMenuCount.beef + 1
                });
                break;
            case '치킨 패티' :
                setSubMenuCount({
                    ...subMenuCount,
                    'chicken': subMenuCount.chicken + 1
                });
                break;
            case '계란' :
                setSubMenuCount({
                    ...subMenuCount,
                    'egg': subMenuCount.egg + 1
                });
                break;
            case '양상추' :
                setSubMenuCount({
                    ...subMenuCount,
                    'lettuce': subMenuCount.lettuce + 1
                });
                break;
            case '햄버거 빵' :
                setSubMenuCount({
                    ...subMenuCount,
                    'buns': subMenuCount.buns + 1
                });
                break;
        }
        console.log('왜 안올라? ㅅㅂㄹㅇ',subMenuCount)
        console.log('왜 안올라? ㅅㅂㄹㅇ',subMenuCount.beef)
        console.log('왜 안올라? ㅅㅂㄹㅇ',subMenuCount['beef'])
    }

    const minus = (el) => {
        switch(el.name) {
            case '소고기 패티' :
                setSubMenuCount({
                    ...subMenuCount,
                    'beef': subMenuCount.beef < 1 ? 0 : subMenuCount.beef - 1
                });
                break;
            case '치킨 패티' :
                setSubMenuCount({
                    ...subMenuCount,
                    'chicken': subMenuCount.chicken < 1 ? 0 : subMenuCount.chicken - 1
                });
                break;
            case '계란' :
                setSubMenuCount({
                    ...subMenuCount,
                    'egg': subMenuCount.egg < 1 ? 0 : subMenuCount.egg - 1
                });
                break;
            case '양상추' :
                setSubMenuCount({
                    ...subMenuCount,
                    'lettuce': subMenuCount.lettuce < 1 ? 0 : subMenuCount.lettuce - 1
                });
                break;
            case '햄버거 빵' :
                setSubMenuCount({
                    ...subMenuCount,
                    'buns': subMenuCount.buns < 1 ? 0 : subMenuCount.buns - 1
                });
                break;
        }
    }

    if(chageItemListData.length > 0) {
        
        
        chageItemList = chageItemListData.map((el, idx) => {

            changeItem = {
                name:el.name,
                price:el.price,
                count:0
            }

            el.addItem = subMenuCount;
            // el.addItem[0].count = subMenuCount["beef"];
            console.log(el);

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
                        }}>-</button>
                        <p style = {el.name == "소고기 패티" ? {display:'block'} : {display:'none'}}>{el.name === "소고기 패티" && el.addItem.beef}</p>
                        <p style = {el.name == "치킨 패티" ? {display:'block'} : {display:'none'}}>{el.name === "치킨 패티" && el.addItem.chicken}</p>
                        <p style = {el.name == "계란" ? {display:'block'} : {display:'none'}}>{el.name === "계란" && el.addItem.egg}</p>
                        <p style = {el.name == "양상추" ? {display:'block'} : {display:'none'}}>{el.name === "양상추" && el.addItem.lettuce}</p>
                        <p style = {el.name == "햄버거 빵" ? {display:'block'} : {display:'none'}}>{el.name === "햄버거 빵" && el.addItem.buns}</p>
                        <button onClick = {() => {
                            plus(el, idx);
                        }}>+</button>
                    </div>
                </li>
            )
        });

    } else {
        alert('변경할 메뉴를 어드민에서 추가해주세요.')
    }



   

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
