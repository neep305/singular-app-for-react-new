import React from "react";
import { singularSdk } from "singular-sdk";

const WebToApp = () => {
    const handleWebToApp = () => {
        // WebToApp 로직 구현
        console.log("WebToApp clicked");
    };
    
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">WebToApp</h1>
            <p className="text-gray-600 mb-8">This is the WebToApp page of the Singular React application.</p>
            <div className="flex flex-col gap-4">
                <button 
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
                    onClick={handleWebToApp}
                >
                    WebToApp
                </button>
            </div>
        </div>
    );
}

export default WebToApp;