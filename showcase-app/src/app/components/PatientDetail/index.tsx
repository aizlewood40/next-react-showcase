"use client"
import * as React from "react";
import { PatientContext } from "@/app/context/PatientContext";
import { IPatient } from "@/app/context/PatientContext/data";
import PatientAppointmentList from "../PatientAppointmentList";

import styles from "./index.module.css";

interface IProps {
    patientID: string;
}

const PatientDetail: React.FC<IProps> = ({patientID}: IProps): React.JSX.Element => {

    const [patient, setPatient] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/patients/${patientID}`).then(async (response) => {
            setPatient(await response.json());
        });
    }, []);
    
    return (
        <div>
            {patient ? (
            <>
                <h1>Patient Details</h1>
                <div>
                    <ul className={styles.personalDetailsList}>
                       <li> Name: {patient.name}</li>
                       <li> DOB: {patient.dateOfBirth}</li>
                       <li> Patient ID: {patient.patientID}</li>
                    </ul>
                    <PatientAppointmentList appointments={patient.appointments} />
                </div>
            </>    
            ) : ("Awaiting patient data")}
        </div>
    );
};

export default PatientDetail;