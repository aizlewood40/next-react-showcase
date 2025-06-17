"use client"
import { PatientContext } from "@/app/context/PatientContext";
import * as React from "react";
import { useContext } from "react";

import styles from "./index.module.css";
import PatientTablet from "../PatientTablet";


const PatientsGrid: React.FC = (): React.JSX.Element => {
    const { state } = useContext(PatientContext);

    // solution to handle server side hydration with local storage
    const [isClient, setIsClient] = React.useState(false);
 
    React.useEffect(() => {
      setIsClient(true)
    }, []);
    
    const patientTabletMap = isClient ? state?.map((patient, i) => (
        <PatientTablet name={patient.name} dateOfBirth={patient.dateOfBirth} patientID={patient.patientID} key={`patient-${i}`}/>
    )) : null;
    
    return (
        <div className={styles.patientTabletFlex}>
            {patientTabletMap}
        </div>
    )
};

export default PatientsGrid;