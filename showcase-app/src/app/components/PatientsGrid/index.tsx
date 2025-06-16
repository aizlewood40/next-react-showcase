"use client"
import { PatientContext } from "@/app/context/PatientContext";
import * as React from "react";
import { useContext } from "react";
import { useFormStatus } from "react-dom"


const PatientsGrid: React.FC = (): React.JSX.Element => {
    const { state } = useContext(PatientContext);
    
    const patientTabletMap = state.map((patient, i) => (
        <div key={`patient-${i}`}>
            name: {patient.name}
            date of birth: {patient.dateOfBirth.toString()}
        </div>
    ));
    
    return (
        <div>
            {patientTabletMap}
        </div>
    )
};

export default PatientsGrid;