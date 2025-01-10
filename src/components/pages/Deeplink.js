import React from "react";
import "./Deeplink.css";

const Deeplink = () => {
    return (
        <div className="deeplink-container">
            <h1>Deeplink</h1>
            <p>This is the deeplink page of the Singular React application.</p>
            <textarea 
                placeholder="Enter your deeplink"
                disabled
                className="deeplink-textarea"
                defaultValue="https://example.com/deeplink?param1=value1&param2=value2"
            />
        </div>
    );
}

export default Deeplink