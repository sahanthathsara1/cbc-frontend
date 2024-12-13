import { useState } from "react";
import "./testing.css";

export default function Testing() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Students");

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function changeName(newName) {
        setName(newName);
    }

    return (
        <div className="background">
            <h1>{name}</h1>
            <div> 
          
            <button className="opr" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="opr" onClick={increment}>+</button></div>
            
            
            
           

            

            {/* Buttons wrapped in a container for row layout */}
            <div className="nmbtn-container">
                <button className="nmbtn" onClick={() => changeName("student")}>student</button>
                <button className="nmbtn" onClick={() => changeName("teacher")}>teacher</button>
                <button className="nmbtn" onClick={() => changeName("admins")}>admins</button>
            </div>
        </div>
    );
}
