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
/**
 * Create a React application that has a component called Calculator
 * the component should have 2 input fields a button and a H1 to display results
 * The component should have a prop called OPERATOR
 * the Operator prop should manage whether the operation performed is 
 * Add, Multiply, Divide or subtract
 */