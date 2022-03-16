
const Greeting = (props)=>{
    
    const displayContent = ()=>{
        let dispElement = <h1>Hello {props.someonename}. You are a {props.gender}</h1>

        switch(props.heading){
            case '1':
                dispElement = <h1>Hello {props.someonename}. You are a {props.gender}</h1>
                break;
            case '2':
                dispElement = <h2>Hello {props.someonename}. You are a {props.gender}</h2>
                break;
            default:
                dispElement = <h1>Hello {props.someonename}. You are a {props.gender}</h1>
                break;
        }
        console.log(dispElement);
        return dispElement;
   
    }

  
    return(
       <>
       {displayContent()}
     
        </>
        
    );
}

export default Greeting;