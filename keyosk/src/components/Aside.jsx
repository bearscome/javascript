import * as React from 'react';

const Aside = ({itmeInfo}) => {

    const test = React.useRef();
    const itemList = []
    
    console.log('test',test)

    const [item, setItem] = React.useState({
        id:null,
        name:null,
        price:null,
        url:null
    })
    

    const [totalList, setTotalLsit] = React.useState(itemList)

    const [count, setCount] = React.useState(0)

    

    React.useEffect(() => {
        setItem({
            id:itmeInfo === null ? '' : itmeInfo.id,
            name:itmeInfo === null ? '' : itmeInfo.name,
            price:itmeInfo === null ? '' : itmeInfo.Price,
            url:itmeInfo === null ? '' : itmeInfo.URL,
        })
       
        test.current = itemList.concat(itmeInfo);
    }, [itmeInfo])

    // itemList.push(itmeInfo)
    // console.log('itemList',itemList)
    // console.log('totalList',totalList)
    
    return (
        <>
            <header className="myorder_header">
                <h2>My Order</h2>
                <p>Take Out</p>
            </header>
            <main className="myorder_section"> 
                <ul className="myorder_wrap">
                    <li className="myorder_item">
                        <img 
                            src = {item.url === null ? '' : item.url} 
                            alt = {item.name === null ? '' : item.name} 
                        />
                        <p>{item.name === null ? '' : item.name}</p>
                        <p>{item.price === null ? '' : item.price}원</p>
                        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                        <span style= {{margin:'0 5%'}}>{count}</span>
                        <button onClick = {() => setCount(count + 1)}>+</button>
                        <button >cancel</button>
                    </li>
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