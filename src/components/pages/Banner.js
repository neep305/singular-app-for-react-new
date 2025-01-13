import React, { useEffect } from "react";
import { singularSdk } from "singular-sdk";
const Banner = () => {

    useEffect(() => {
        singularSdk.showBanner();
        console.log("Banner shown");
    }, []);

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Banner</h1>
            <p className="text-gray-600 mb-8">This is the banner page of the Singular React application.</p>
        </div>
    );
};

export default Banner;