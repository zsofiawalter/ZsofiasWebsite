import { IExperience } from "../types/IExperience";
import { getExperiences } from "../lib/getCvData";
import Experience from "./Experience";

function experienceToJSX(exp: IExperience) {
  return <Experience experience={exp} key={exp.ID} />;
}

/**
 * Retrieves data for experiences
 * Returns projects, work and leadership sections with corresponding experiences
 * @returns three sections, projects, work and leadership with list of experiences
 */
function Experiences() {
  // Get experiences data as IExperience[]
  let experiencesList = getExperiences();

  // Separate by experience types
  let projects = experiencesList.filter((e) => e.Type === "project");
  let work = experiencesList.filter((e) => e.Type === "work");
  let leadership = experiencesList.filter((e) => e.Type === "leadership");

  // IExperience[] to JSX[]
  let projectsJSX = projects.map(experienceToJSX);
  let workJSX = work.map(experienceToJSX);
  let leadershipJSX = leadership.map(experienceToJSX);

  return (
    <div className="experiences">
      <section className="work">
        <h3>Work Experience</h3>
        {workJSX}
      </section>
      <section className="projects">
        <h3>Projects</h3>
        {projectsJSX}
      </section>
      <section className="Leadership">
        <h3>Leadership Experience</h3>
        {leadershipJSX}
      </section>
    </div>
  );
}

export default Experiences;
