// export const dynamic = 'force-static'

import { patientMockData } from "@/app/context/PatientContext/data";

 
export async function GET() {
  return Response.json(patientMockData);
}