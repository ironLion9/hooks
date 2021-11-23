import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';


const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('Email cambio')
    }, [email]);



    return (
        <>
        <h1>FormWithCustomHook</h1>

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

        <div className="form-group">
            <input
                className="form-control"
                placeholder="*********"
                type="password"
                name="password"
                value={password}
                onChange={ handleInputChange }
            />  
        </div>
 
        <button
            className="btn btn-primary"
            onClick={ () => {
              
            }}
        >   
            Enviar 
        </button>


        </>
    )
};

export default FormWithCustomHook;
