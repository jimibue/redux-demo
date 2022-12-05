import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, incrementByAmount, selectCount } from '../counterSlice';
import {increment} from '../counterSlice'

const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <p>count: {count}</p>
            <button onClick={()=> dispatch(increment())}>add</button>
            <button disabled={count === 0} onClick={()=> dispatch(decrement())}>minus</button>
            <hr />
            <input type='number' value={incrementAmount} onChange={(e)=> setIncrementAmount(e.target.value)}/>

            <button onClick={()=> dispatch(incrementByAmount(incrementAmount))}>increment by amount</button>
        </div>
    )
}

export  default Counter;