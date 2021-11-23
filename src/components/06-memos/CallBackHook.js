import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effects.css';


const CallBackHook = () => {

    const [counter, setCounter] = useState( 9 );

    // const increment = () => { 
    //     setCounter( counter + 1 );
    // };

    const increment = useCallback( () => { 
        setCounter( c => c + 1 );
    }, [ setCounter ] )



    return (
        <div>
            <h1>UseCallBackHook: { counter } </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallBackHook;