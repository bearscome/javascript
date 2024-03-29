import * as React from 'react';

const Aside = ({itemList}) => {

    let addItemPrice = null;
    console.log('***ItsLst', itemList)
    
    const cancelItem = (idx) => {
        console.log('idx', idx)
        const returnItem = itemList.filter((el) => {
            return itemList[idx] !== el;
        });

        itemList = returnItem
    }
    
    return (
        <>
            <header className="myorder_header">
                <h2>My Order</h2>
                <p>Take Out</p>
            </header>
            <main className="myorder_section" style={!itemList ? {display:"none"} : {display:"block"}}> 
                <ul className="myorder_wrap">
                    { itemList && itemList.map((item, idx) => {
                        return (
                            <li className="myorder_item" key={idx}>
                                <img 
                                    src = {item.URL === null ? '' : item.URL} 
                                    alt = {item.name === null ? '' : item.name} 
                                />
                                <p>{item.name === null ? '' : item.name}</p>
                                    {
                                        Object.entries(item?.addItem).map((item2, idx2) => {
                                            addItemPrice =+ item2[1].count * Number((item2[1].info.price).replace(',', ''))
                                            return(
                                                <div style = {item2[1].count > 0 ? {display : 'block'} : {display : 'none'}} key = {idx2}>
                                                    <p>
                                                        { item2[1].count > 0 ? `${item2[1].info.name}` : '' } : {item2[1].count > 0 ? `${item2[1].count}` : '' }개
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                <button onClick = {() => {
                                    cancelItem(idx)
                                }}>cancel</button>
                            </li>
                        )}
                    )}
                </ul>
            </main>
            <footer className="myorder_footer">
                <div>
                    <p>Total</p>
                    <p>19999</p>
                </div>
                <button>Done</button>
            </footer>
        </>
    )
};

export default Aside;