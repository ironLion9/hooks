import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import procesoPesado from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

const MemoHook = () => {


    const {counter, increment }  = useCounter(50);

    const [ show, setShow ]  = useState( true );


    const memoProceso =  useMemo(() => procesoPesado(counter), [ counter ]);




    return (
        <div>
            <h1>MemoHook</h1>
            <h3> Counter <small>{ counter }</small> </h3>
            <hr />

            <p>    {   memoProceso   }   </p>

            <button className="btn btn-primary"
                    onClick={ increment } 
            
            >
                +1
            </button>

            <button className="btn btn-outline-primary ml-5"
                    onClick={ () => {
                        setShow(!show);
                    }} 
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}

export default MemoHook;