export interface IPatient {
    name: string;
    dateOfBirth: Date;
    patientID: string;
    appointments: IAppointment[];

}

interface IAppointment {
    date: Date;
    type: "CONSULTATION" | "CHECKUP";
    status: "SCHEDULED" | "ATTENDED" | "CANCELLED";
}

export const patientMockData: IPatient[] = [
    {
        name: "John Doe",
        dateOfBirth: new Date(),
        patientID: "0",
        appointments: [
            {
                date: new Date(),
                type: "CONSULTATION",
                status: "SCHEDULED"
            }
        ]
    },
    {
        name: "Jane Doe",
        dateOfBirth: new Date(),
        patientID: "1",
        appointments: [
            {
                date: new Date(),
                type: "CHECKUP",
                status: "SCHEDULED"
            }
        ]
    }
];