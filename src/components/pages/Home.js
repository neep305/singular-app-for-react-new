import React from "react";
import { SingularContext } from "../../contexts/SingularContext";
import { useContext, useEffect, useState } from "react";

const Home = () => {
    const [sdid, setSdid] = useState(null);
    const [matchId, setMatchId] = useState(null);
    const [userId, setUserId] = useState(null);
    const singularSdk = useContext(SingularContext);

    useEffect(() => {
        const sdid = singularSdk.getSingularDeviceId();
        
        setSdid(sdid);
    }, []);


    const handleClick = () => {
        console.log("Set Custom User ID clicked");
        singularSdk.setCustomUserId(userId);
    }

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    }
    
    return (

        <div className="p-8 max-w-3xl mx-auto">
            { ! singularSdk && <div>Loading...</div>}
            { singularSdk && (
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold mb-4">Welcome to Singular React</h2>
                    <p className="text-gray-600 mb-8">This is the home page of the Singular React application.</p>
                    <div className="flex flex-col items-center gap-4">
                        <input className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" placeholder="Set your custom user ID" value={userId} onChange={handleUserIdChange}/>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200" onClick={handleClick}>Set User ID</button>
                    </div>
                    <h3 className="text-gray-600 mb-8">SDID: {sdid}</h3>
                    <h3 className="text-gray-600 mb-8">User ID: {userId}</h3>
                </div>
            )}
        </div>
    );
}

export default Home