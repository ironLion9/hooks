import React, { useEffect } from 'react';


const Message = () => {

    useEffect(() => {

        const mouseMove = ( (e) => {
           console.log('=D')
            })

        window.addEventListener('mousemove', mouseMove);
          

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial!!!!</h3>
        </div>
    )
}

export default Message
