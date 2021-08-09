import * as React from 'react';

interface Istate {
    counter: number
}

const Counter = () => {
    const [counter, setCounter] = React.useState({
        counter : 0
    })

    const onIncrement = () => {
        setCounter({
            counter: counter.counter - 1
        })
    }

    const onDecrement = () => {
        setCounter({
            counter: counter.counter + 1
        })
    }

    return (
        <div>
            <h2>카운터</h2>
                <div>
                    {counter.counter}
                </div>
                <div>
                    <button onClick = {onDecrement}>+</button>
                    <button onClick = {onIncrement}>-</button>
                </div>    
        </div>
    )
}

export default Counter;