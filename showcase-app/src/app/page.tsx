import styles from "./page.module.css";
import TestComponent from "./components/TestComponent";
import PatientsGrid from "./components/PatientsGrid";
import NewPatientForm from "./components/NewPatientForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <PatientsGrid />
      <NewPatientForm />
    </div>
  );
}
