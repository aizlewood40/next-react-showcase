"use client"
import * as React from "react";

import styles from "./index.module.css";
import Link from "next/link";

interface IProps {
    name: string;
    dateOfBirth: string;
    patientID: string;
}

const PatientTablet: React.FC<IProps> = ({name, dateOfBirth, patientID}: IProps): React.JSX.Element => {
    return (
        <div className={styles.patientTabletContainer}>
            <div className={styles.name}>Name: {name}</div>
            <div className={styles.dateOfBirth}>DOB: {dateOfBirth}</div>
            <div className={styles.patientID}>Patient ID: {patientID}</div>
            <Link href={`/patient/${patientID}`}>Open</Link>
        </div>
    )
};

export default PatientTablet;