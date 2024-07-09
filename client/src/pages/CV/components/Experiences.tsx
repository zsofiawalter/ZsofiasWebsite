import { IExperience } from "../ICvData";
import { getExperiences } from "../util/getCvData";
import Experience from "./Experience";

function experienceToJSX(exp: IExperience) {
  return <Experience experience={exp} key={exp.ID} />;
}

function Experiences() {
  // Get experiences data from json, convert to JSX
  let experiencesList = getExperiences();

  // Separate into experience types
  let projects = experiencesList.filter((e) => e.Type === "project");
  let work = experiencesList.filter((e) => e.Type === "work");
  let leadership = experiencesList.filter((e) => e.Type === "leadership");

  // Convert into JSX
  let projectsJSX = projects.map(experienceToJSX);
  let workJSX = work.map(experienceToJSX);
  let leadershipJSX = leadership.map(experienceToJSX);

  return (
    <div className="experiences">
      <h3>Experiences</h3>
      <div className="projects">{projectsJSX}</div>
      <div className="work">{workJSX}</div>
      <div className="leadership">{leadershipJSX}</div>
    </div>
  );
}

export default Experiences;
