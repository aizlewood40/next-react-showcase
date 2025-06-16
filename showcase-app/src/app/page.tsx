import Image from "next/image";
import styles from "./page.module.css";
import PatientContextProvider from "./context/PatientContext";
import TestComponent from "./components/TestComponent";
import PatientsGrid from "./components/PatientsGrid";

export default function Home() {
  return (
    <PatientContextProvider>
    <div className={styles.page}>
      <PatientsGrid />
      <TestComponent />
    </div>
    </PatientContextProvider>
  );
}
