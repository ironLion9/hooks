import React from 'react';
import {useCounter} from '../../hooks/useCounter';

import './counter.css'; 

const CounterWithCustomHook = () => {

    const {
        state,
        increment,
        decrement,
        reset
    } = useCounter(1000);

    return (
        <>
            <h1>Counter with hook: { state }</h1>

            <hr />

            <button onClick={ increment } className="btn"> + 1</button>
            <button onClick={ decrement } className="btn"> - 1</button>
            <button onClick={ reset } className="btn"> Reset </button>
        </>
    )
}

export default CounterWithCustomHook;
