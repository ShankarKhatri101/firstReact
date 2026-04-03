import {useState} from 'react';

function Try(){
    const [a,setA] = useState(0)
    function increase(){
        setA(a+1);
    }
    function decrease(){
        setA(a-1);
    }
    function clear(){
        setA(0);
    }
    return(
        <div>
            <h1>Score : {a}</h1>
            <button onClick={increase}> Increse</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={clear}>clear</button>

        </div>
    )

}
export default Try;