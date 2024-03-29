import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect( () => {
        // console.log('Hey!')
    }, []); 

    
    useEffect( () => {
        // console.log('Hey!')
    }, [name]); 


    useEffect( () => {
        // console.log('EmailCambio!')
    }, [email]);


    const handleInputChange = ({target}) => {

        setFormState( { 
            ...formState,
            [target.name]: target.value
        });
    };

    const handleSubmit = () => {
        alert("holamundo");
    }

    return (
        <>
        <h1>useEffect</h1>

        <hr/>

        <div className="form-group">
            <input
                autoComplete="off"
                className="form-control"
                placeholder="tu nombre"
                type="text"
                name="name"
                value={name}
                onChange={ handleInputChange }
            />
        </div>

        <div className="form-group">
            <input
                autoComplete="off"
                className="form-control"
                placeholder="tuemail@gmail.com"
                type="text"
                name="email"
                value={email}
                onChange={ handleInputChange }
            />  
        </div>
 
        <button
            onSubmit={ handleSubmit } 
            className="btn btn-primary"
            onSubmit={ handleSubmit }
            onClick={ () => {
                setFormState( {
                    name: '',
                    email: ''
                })
                
            }}
            
            >   
            Enviar 
        </button>


        { (name === 'Noelia') && <Message/> }
        </>
    )
};

export default SimpleForm;
