import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Job salary={96688} position="Senior SDE" company="Amazon" />
      <Job
        salary={120000}
        position="Junior SDE"
        company="Google"
        nationality="Nigerian"
      />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1> {props.salary} </h1>
      <h1> {props.position} </h1>
      <h1> {props.company} </h1>
      <h4> {props.nationality} </h4>
    </div>
  );
};

export default App;
