import * as React from 'react';

const Aside = ({itemList}) => {

    const [count, setCount] = React.useState(1)

    const items = itemList.map((item, idx) => {
        console.log('item', item)
        return (
             <li className="myorder_item" key={idx}>
                <img 
                    src = {item.URL === null ? '' : item.URL} 
                    alt = {item.name === null ? '' : item.name} 
                />
                <p>{item.name === null ? '' : item.name}</p>
                <p>{item.price === null ? '' : item.price}원</p>
                <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                <span style= {{margin:'0 5%'}}>{count}</span>
                <button onClick = {() => setCount(count + 1)}>+</button>
                <button >cancel</button>
            </li>
        )
    })


    

    

    
    return (
        <>
            <header className="myorder_header">
                <h2>My Order</h2>
                <p>Take Out</p>
            </header>
            <main className="myorder_section" style={!itemList ? {display:"none"} : {display:"block"}}> 
                <ul className="myorder_wrap">
                    {items}
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