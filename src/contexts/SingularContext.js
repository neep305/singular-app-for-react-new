import { createContext } from 'react';
import { singularSdk } from 'singular-sdk';

export const SingularContext = createContext(null);

export const SingularProvider = ({ children }) => {
    return (
        <SingularContext.Provider value={singularSdk}>
        {children}
        </SingularContext.Provider>
    );
}; 