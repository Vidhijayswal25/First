import React,{useState} from "react";


function Hook1(){
    const [val,setVal] = useState();
    const handleClick= (type)=>{
        console.log("clicked",type);
        if(type === "blue")
        {
            setVal("blue")
            console.log("blue");
        }
        else if(type === "green")
        {
            setVal("green")
            console.log("green");
        }
        else if(type === "Red")
        {
            setVal("red")
            console.log("Red");
        }
    }
 
return(
<>
<button type="button" onClick={()=> handleClick('Red')} class="btn btn-secondary">Red</button>
<button type="button" onClick={()=> handleClick ( "blue")} class="btn btn-secondary">blue</button>
<button type="button" onClick={()=>handleClick ("green")} class="btn btn-secondary">green</button>
<h1>color:{val}</h1>
</>

);

}

export default Hook1;