import React from "react";
import { SingularContext } from "../../contexts/SingularContext";
import { useContext, useEffect, useState } from "react";

const Home = () => {
    const [sdid, setSdid] = useState(null);
    const [matchId, setMatchId] = useState(null);
    const singularSdk = useContext(SingularContext);

    useEffect(() => {
        const sdid = singularSdk.getSingularDeviceId();
        
        setSdid(sdid);
    }, []);

    return (

        <div>
            { ! singularSdk && <div>Loading...</div>}
            { singularSdk && (
                <div>
                    <h2>Welcome to Singular React</h2>
                    <p>This is the home page of the Singular React application.</p>
                    <button onClick={handleClick}>Click me</button>
                    <h3>SDID: {sdid}</h3>
                </div>
            )}
        </div>
    );
}

const handleClick = () => {
    console.log("Button clicked");
}

export default Home