
import React,{useState} from "react";

function Incr(){
    
    const[val,setval] = useState(0); 
    const[click,setclick] = useState();
    const hndleop = (op) => {
    if(op === '+'){
        setval(val+1);
    }
    else{
        setval(val-1);
    }

    }

    const handleText=(e)=>{
        setclick (e.target.value);
    }
    return(
        <>
            <button type="button" onClick={()=>hndleop('+')} class="btn btn-secondary">"+"</button>
            <h1>{val}</h1>
            <button type="button" onClick={()=>hndleop('-')} class="btn btn-secondary">"-"</button>
            <input type="text" onChange={(e)=>handleText(e)} id="disabledTextInput" class="form-control" placeholder="Password" />
            <button type="button"  class="btn btn-secondary">"-"</button>
            <h2>name : {click}</h2>
        </>
    );
}

export default Incr;