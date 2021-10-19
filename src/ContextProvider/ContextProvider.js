import React, { createContext } from 'react';
import GetServices from '../component/Hooks/getServices';
import useFirebase from '../component/Hooks/useFirebase';



export const ServiceContext=createContext()
export const AuthContext=createContext();
const ContextProvider = ({children}) => {
    const services=GetServices()
    const auth=useFirebase()
    return (
        <ServiceContext.Provider value={services}>
            <AuthContext.Provider value={auth}>
            {children}
            </AuthContext.Provider>
        </ServiceContext.Provider>
    );
};

export default ContextProvider;