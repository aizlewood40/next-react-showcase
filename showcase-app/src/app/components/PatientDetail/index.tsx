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

    const { getPatient } = React.useContext(PatientContext);

    const patient: IPatient | null = getPatient(patientID);
    
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
            ) : ("an error occured")}
        </div>
    );
};

export default PatientDetail;