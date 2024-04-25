import { useState } from 'react' 

const SimpleCounter = () => { 
    const [count, setCount] = useState(0); 

    const handleMinus = () => {
        setCount((prevState) => prevState - 1 )
    } 

    const handlePlus = () => {
        setCount((prevState) => prevState + 1 )
    }

    return (
        <div className='counter-container'> 
            <div className='counter-number'> 
            <h1>{count}</h1>
            </div>
            <div className='counter-button'> 
                <button onClick={handlePlus}> + </button>
                <button onClick={handleMinus} > - </button>
            </div>
        </div>
    )
}