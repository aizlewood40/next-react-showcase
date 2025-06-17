export interface IPatient {
    name: string;
    dateOfBirth: string;
    patientID: string;
    appointments: IAppointment[];

}

export interface IAppointment {
    date: string;
    type: "CONSULTATION" | "CHECKUP";
    status: "SCHEDULED" | "ATTENDED" | "CANCELLED";
}

export const patientMockData: IPatient[] = [
    {
        name: "John Doe",
        dateOfBirth: "Tue Jun 17 2025 09:07:10 GMT+0100 (British Summer Time)",
        patientID: "0",
        appointments: [
            {
                date: "Tue Jun 17 2025 09:07:10 GMT+0100 (British Summer Time)",
                type: "CONSULTATION",
                status: "CANCELLED"
            },
            {
                date: "Tue Jun 18 2025 09:07:10 GMT+0100 (British Summer Time)",
                type: "CONSULTATION",
                status: "SCHEDULED"
            }
        ]
    },
    {
        name: "Jane Doe",
        dateOfBirth: "Tue Jun 17 2025 09:07:10 GMT+0100 (British Summer Time)",
        patientID: "1",
        appointments: [
            {
                date: "Tue Jun 17 2025 09:07:10 GMT+0100 (British Summer Time)",
                type: "CHECKUP",
                status: "SCHEDULED"
            }
        ]
    },
    {
        name: "Joe Shmoe",
        dateOfBirth: "Tue Jun 17 2025 09:07:10 GMT+0100 (British Summer Time)",
        patientID: "2",
        appointments: []
    },
];