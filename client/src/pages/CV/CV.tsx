import ExperienceSection from "./components/ExperienceSection";
import General from "./components/General";

function CV() {
  return (
    <div className="page">
      <h2>This is my CV.</h2>
      <General />
      <ExperienceSection type="work" header="Work Experience" />
      <ExperienceSection type="projects" header="Projects" />
      <ExperienceSection type="leadership" header="Leadership Experience" />
    </div>
  );
}

export default CV;
