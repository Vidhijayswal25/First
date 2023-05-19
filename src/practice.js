import React from 'react';
// import Practice1 from './practice1';
import Registration from './registration';

function Practice(props){
    //let name = props.name;

//logic
const{name,surname} = props;
    return(
        
        <>
        <h1>this is component</h1>
        this is name {name};
        this is name2{props.surname}
        <Practice1 name={name} surname={surname}/>
        </>
    );
}

export default Practice;