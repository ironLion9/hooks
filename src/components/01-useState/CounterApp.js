import React, { useState } from 'react';

import  './counter.css';

const CounterApp = () => {


    const [counter, setCounter] = useState( { 
        counter1: 10,
        counter2: 20
    });

    const {counter1, counter2} = counter;

    
    return (
        <>
            <h1 className="title">
                Counter1
            &nbsp;
            &nbsp;
            { counter1 }
            </h1>
            <h1 className="title">
                Counter2
            &nbsp;
            &nbsp;
            { counter2 }
            </h1>
            <hr />

            <button 
                className= "btn btn-primary"
                onClick={ () => {
                    setCounter( {...counter, counter1: counter1 +1})
                }}
                
                >
                +1
            </button>
            &nbsp;
            &nbsp;
            <button 
                className= "btn btn-primary"
                onClick={ () => {
                    setCounter( {...counter, counter2: counter2 +11})
                }}
                
                >
                +1
            </button>
        </>
    
    )
}

export default CounterApp;
 