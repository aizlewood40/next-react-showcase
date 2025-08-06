// export const dynamic = 'force-static'

import { patientMockData } from "@/app/context/PatientContext/data";
import { NextRequest } from "next/server"; 

 
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

  const id = (await params).id;
  const patient = patientMockData.find((patient) => patient.patientID === id);
  console.log()
  return Response.json(patient);
}