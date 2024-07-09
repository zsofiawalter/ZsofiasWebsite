import Experiences from "./components/Experiences";
import General from "./components/General";

function CV() {
  return (
    <div className="page">
      <h2>This is my CV.</h2>
      <General />
      <Experiences />
    </div>
  );
}

export default CV;
