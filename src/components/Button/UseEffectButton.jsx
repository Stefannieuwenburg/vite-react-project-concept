import {useRef} from 'react'

export const UseEffectButton = ({ name }) => {
    const divRef = useRef()

    const changeStyles = () => {
        console.log(divRef.current.style.color = 'red')
    }
   
    
    return (
        <button ref={ divRef } onClick={changeStyles} style={{ color:"orange"}} >
            I am {name}
        </button>
    );
}
 
