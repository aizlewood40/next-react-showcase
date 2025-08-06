"use client"
import { PatientContext } from "@/app/context/PatientContext";
import * as React from "react";
import { useContext } from "react";

import styles from "./index.module.css";
import PatientTablet from "../PatientTablet";


const PatientsGrid: React.FC = (): React.JSX.Element => {

    const [patients, setPatients] = React.useState(null);
    const [searchInput, setSearchInput] = React.useState(""); 
    const [filteredPatients, setFilteredPatients] = React.useState(patients);

    React.useEffect(() => {
        fetch("/api/patients").then(async (response) => {
            setPatients(await response.json());
        });
    }, []);

    const handleSearch = () => {
        if(!searchInput.length) {
            setFilteredPatients(patients);
            return;
        }
        
        const filtered = patients?.filter((patient) => {
            return patient.name.toLowerCase().includes(searchInput.toLowerCase());
        })

        setFilteredPatients(filtered);

    }

    React.useEffect(() => {
        handleSearch();
    }
    ,[searchInput, patients])


    const patientTabletMap = filteredPatients ? filteredPatients?.map((patient, i) => (
        <PatientTablet name={patient.name} dateOfBirth={patient.dateOfBirth} patientID={patient.patientID} key={`patient-${i}`}/>
    )) : (
        <>
            Awaiting patient results
        </>
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(e.target.value);
    }
    
    return (
        <div className={styles.patientTabletFlex}>
            <input type="text" onChange={handleInputChange}/>
            {patientTabletMap}
        </div>
    );
};

export default PatientsGrid;