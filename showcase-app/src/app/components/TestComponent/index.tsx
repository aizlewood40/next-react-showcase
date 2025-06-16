"use client"
import { PatientContext } from "@/app/context/PatientContext";
import * as React from "react";
import { useContext } from "react";
import { useFormStatus } from "react-dom"


const TestComponent: React.FC = (): React.JSX.Element => {
    const { state, setPatients } = useContext(PatientContext);
    console.log(state);
    return (
        <button onClick={() => setPatients([...state, state[0]])}>
            hello
        </button>
    )
};

export default TestComponent;