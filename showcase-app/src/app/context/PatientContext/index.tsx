"use client"
import React, { Dispatch, SetStateAction, createContext } from "react";
import { IPatient, patientMockData } from "./data";
import { useLocalStorage } from "usehooks-ts";

export interface IPatientContextConfig {
    state: IPatient[];
    setPatients: Dispatch<SetStateAction<IPatient[]>>;
}

// to be used within internal components
export const PatientContext = createContext<IPatientContextConfig>({
    state: patientMockData,
    setPatients: () => null,
});

interface IProps {
    children: React.ReactNode,
    overrideDefaultState?: IPatient[],
}

const PatientContextProvider: React.FC<IProps> = ({children, overrideDefaultState}) => {
    const contextInitialState = !overrideDefaultState ? patientMockData : overrideDefaultState;

    const [state, setPatients, removeState] = useLocalStorage('patients-key', contextInitialState);

    return (
        <PatientContext.Provider value={{state, setPatients}}>
            {children}
        </PatientContext.Provider>
    )

}

export default PatientContextProvider;