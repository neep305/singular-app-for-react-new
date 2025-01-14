import React, { useEffect } from "react";
import TagManager from 'react-gtm-module';

const GoogleTagManager = ({gtmId}) => {
    useEffect(() => {
        TagManager.initialize({ gtmId });
    }, [gtmId]);
}

export default GoogleTagManager;