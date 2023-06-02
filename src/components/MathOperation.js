import React, { useRef, useState } from "react";

const MathOperation = () => {

    const [plus, setPlus] = useState(0)
    const FirstNumber = useRef(null)
    const SecondNumber = useRef(null)

    const equation = () => {
        setPlus(Number(FirstNumber.current.value) +  Number(SecondNumber.current.value))
        console.log(FirstNumber.current.value)
        console.log(SecondNumber.current.value)
    }
    return (
        <div>
            <input type="number" ref={FirstNumber}/>
            <input type="number" ref={SecondNumber}/>
            <button name="Add" onClick={equation}>Add</button>
            <span>{plus > 0 ? plus : ''}</span>
            
        </div>
    )
}

export default MathOperation;