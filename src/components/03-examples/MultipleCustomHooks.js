import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './index.css';

const MultipleCustomHooks = () => {


    const {counter, increment} = useCounter(9);

    const {loading, data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote, quote_id } = !!data && data[0];

    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr/ >


            {/* <h5>Searching for...</h5>
            <input type="search" />

            <button onClick={ () => console.log('holamundo')}>
                Search
            </button> */}


            { loading 
                ?
            (   
                <div className="alert alert-info text-center">
                    Loading....
                </div>
            ) 
        : 
            ( 
                <>
                <h3 className="text-center">{quote_id}</h3>
                <blockquote className="blockquote text-right">
                    <p className="mb-0 text-center">{ quote }</p>
                    &nbsp;
                    <footer className="blockquote-footer text-center">{author}</footer> 
                </blockquote>
                </>
            )

            }


            <button     
                className="btn btn-primary"
                onClick={increment}                
            
            >

                Siguiente Frase
            </button>
            
            
        </>
    )
}

export default MultipleCustomHooks;
