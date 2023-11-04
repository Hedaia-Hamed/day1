import { useState } from "react";


const Counter = () => {


    const [counter, setCounter] = useState(0);


    const incremenet = () => {

         setCounter(counter + 1);
    }


    const incremenetBy = (value) => {
         setCounter(counter + value);


    }


    return (


        <>
            <h1>Counter App : {counter}</h1>
            <button onClick={incremenet}>Increment </button>
            <button onClick={() => {incremenetBy(3)}}>IncrementBy 3 </button>

        </>



    );
}

export default Counter;