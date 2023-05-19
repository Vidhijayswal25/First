
import React,{useState} from "react";
function Practice2(){
    const[val,setVal] = useState(0)
    const[color,setColor] = useState()
    const[text,setText] = useState();
    const handlebtn=(type)=>{
        type === '+' ? setVal(val+1) : setVal(val-1) ;

    } 

    const colorpick=(type)=>{
        if(type==="Red"){
            setColor("Red");
        }
        else if(type === "Blue"){
            setColor("Blue");
        }
        else{
            setColor("Green");
        }
    }
    const ok=()=>{
        document.write("nice to meet you");
    }

    const change=(e)=>{
        setText(e.target.value)
    }
    return(

        <>
        <button type="button" onClick={()=>handlebtn('+')}>inc</button>
        value : {val};
        <button type="button" onClick={()=>handlebtn('-')}>dec</button>
        

        <button type="button" onClick={()=>colorpick('Red')}>Red</button>
        <button type="button" onClick={()=>colorpick('Blue')}>Blue</button>
        <button type="button" onClick={()=>colorpick('Green')}>Green</button>
        <button type="button" onClick={()=>change('hm')}>say</button>
        color : {color}
       <br/> 
       <br/><input type="text" ></input>
       <button type="button" onClick={()=>change('e')}>Text</button>
       <h1>{text}</h1>
        
        
        </>
    );
}

export default Practice2;