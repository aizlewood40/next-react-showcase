"use client"
import { PatientContext } from "@/app/context/PatientContext";
import * as React from "react";
import { useContext } from "react";


const TestComponent: React.FC = (): React.JSX.Element => {
    const { state, setPatients, addPatient } = useContext(PatientContext);
    console.log(state);
    return (
        <button onClick={() => addPatient(state[0])}>
            hello
        </button>
    )
};

export default TestComponent;