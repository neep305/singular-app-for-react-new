import React from "react";
import { HiHand } from "react-icons/hi";

const Home = () => {
    return (
        <div>
            <h2>Welcome to Singular React</h2>
            <p>This is the home page of the Singular React application.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

const handleClick = () => {
    console.log("Button clicked");
}

export default Home