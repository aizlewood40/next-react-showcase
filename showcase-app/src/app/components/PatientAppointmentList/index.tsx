import * as React from "react";
import { IAppointment } from "@/app/context/PatientContext/data";

import style from "./index.module.css";

interface IProps {
    appointments: IAppointment[];
}

const PatientAppointmentList: React.FC<IProps> = ({appointments}: IProps): React.JSX.Element => {

    if(!appointments?.length) {
        return (
            <>
                no appointments exist for this patient
            </>
        )
    }

    const appointmentsHTML = appointments.map((appointment: IAppointment, i) => {
        return (
            <tr key={`appointment-${i}`}>
                <td className={style.td}>
                    {appointment.type}
                </td>
                <td className={style.td}>
                    {appointment.date}
                </td>
                <td className={style.td}>
                    {appointment.status}
                </td>
            </tr>
        );
    });

    return (
        <>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.th}>
                            Appointment Type
                        </th>
                        <th className={style.th}>
                            Date/Time
                        </th>
                        <th className={style.th}>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentsHTML}
                </tbody>
            </table>
        </>
    );
};

export default PatientAppointmentList;