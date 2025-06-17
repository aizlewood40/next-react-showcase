"use client"
import * as React from "react";
import { PatientContext } from "@/app/context/PatientContext";
import { IPatient } from "@/app/context/PatientContext/data";

const NewPatientForm: React.FC = (): React.JSX.Element => {

    const { addPatient, state } = React.useContext(PatientContext)

    const formSubmitAction = (formData: any) => {
        // input sanitation
        const name = formData.get("name");
        const dateOfBirth = formData.get("dateOfBirth");
        const patientID = formData.get("patientID");

        if(!name.length) {
            return alert("Enter a name");
        }

        console.log(dateOfBirth);
        if(new Date(dateOfBirth) > new Date()) {
            return alert("Enter a valid date of birth");
        }

        if(state.find((existingPatient) => patientID === existingPatient.patientID)) {
            return alert("Enter a unique patient ID");
        }
        const newPatient: IPatient = {
            name,
            dateOfBirth: new Date(dateOfBirth).toString(),
            patientID: patientID,
            appointments: [],
        }

        addPatient(newPatient);
    }
    
    
    return (
        <>
        Create new patient
            <form action={formSubmitAction}>
                <input name="name" required/>
                <input name="dateOfBirth" type="date" required/>
                <input name="patientID" required/>
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default NewPatientForm;