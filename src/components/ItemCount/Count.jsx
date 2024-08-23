import React from "react";

const Count = ({cantidad, handleRestar, handleSumar}) =>{


    return(
        <div className="Count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
    )
} 

export default Count