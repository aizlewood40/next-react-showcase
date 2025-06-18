"use client"
import React, { Dispatch, SetStateAction, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { IPatient, patientMockData } from "./data";

export interface IPatientContextConfig {
    state: IPatient[];
    setPatients: Dispatch<SetStateAction<IPatient[]>>;
    addPatient: (patient: IPatient) => void;
    getPatient: (patientID: string) => IPatient | null;
}

// to be used within internal components
export const PatientContext = createContext<IPatientContextConfig>({
    state: patientMockData,
    setPatients: () => null,
    addPatient: () => null,
    getPatient: () => null,
});

interface IProps {
    children: React.ReactNode,
    overrideDefaultState?: IPatient[],
}

const PatientContextProvider: React.FC<IProps> = ({children, overrideDefaultState}: IProps) => {
    
    const contextInitialState = !overrideDefaultState ? patientMockData : overrideDefaultState;

    const [state, setPatients] = useLocalStorage('patients-key', contextInitialState);


    const addPatient = (patient: IPatient): void => {
        const stateCopy = state;
        stateCopy.push(patient);
        setPatients(stateCopy);
    }

    const getPatient = (patientID: string): IPatient | null => {
        return state?.find((patient) => patientID === patient.patientID) || null;
    }

    return (
        <PatientContext.Provider value={{state, setPatients, addPatient, getPatient}}>
            {children}
        </PatientContext.Provider>
    )

}

export default PatientContextProvider;