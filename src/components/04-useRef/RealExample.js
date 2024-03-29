import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

const RealExample = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1 className="text-center">Real Example Ref</h1>

            <hr/>

            {show && <MultipleCustomHooks/>}

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show)
                }   
            }
            >
               Show/Hide
            </button>


        </div>
    )
}

export default RealExample;
