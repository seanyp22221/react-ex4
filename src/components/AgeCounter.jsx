import React, {useState} from 'react';

const AgeCounter = (props) =>{
    const [age, setAge] = useState(1);
    
    const updateIt = () =>{
        // age = 12;
        setAge(parseInt(age) + parseInt(props.increment));
    }
    return(
        <>
        <span>Age is now: {age}</span>
        <button onClick={updateIt}>Add Age</button>
        </>
    );
}
export default AgeCounter;
