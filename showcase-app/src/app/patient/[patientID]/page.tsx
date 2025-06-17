import * as React from "react";
import { NextPage } from "next"
import PatientDetail from "@/app/components/PatientDetail";

const PatientPage: NextPage = async ({params}: {params: {patientID: string}}) => {

    const { patientID } = await params;
    return (
        <main>
            <PatientDetail patientID={patientID}/>
        </main>
    )

};

export default PatientPage;