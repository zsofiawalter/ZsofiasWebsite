import { IExperience } from "../types/IExperience";
import { getExperiences } from "../util/getCvData";
import Experience from "./Experience";
import Section from "../../../components/Section";

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
    <Section addtlClass="experiences">
      <Section title="Projects">{projectsJSX}</Section>
      <Section title="Work">{workJSX}</Section>
      <Section title="Leadership">{leadershipJSX}</Section>
    </Section>
  );
}

export default Experiences;
