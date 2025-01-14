import React, { useEffect } from "react";
import TagManager from 'react-gtm-module';

const Gtm = ({gtmId}) => {
    useEffect(() => {
        TagManager.initialize({ gtmId });
    }, [gtmId]);

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Gtm</h1>
            <p className="text-gray-600 mb-8">This is the Gtm page of the Singular React application.</p>
        </div>
    );
}

export default Gtm