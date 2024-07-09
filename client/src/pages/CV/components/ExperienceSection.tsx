import { getExperiences } from "../lib/getCvData";
import { IExperience } from "../types/IExperience";
import Experience from "./Experience";

interface ExperienceSectionProps {
  type: string;
  header: string;
}

function experienceToJSX(exp: IExperience) {
  return <Experience experience={exp} key={exp.ID} />;
}

/**
 * Retrieves experiences with matching type
 * Returns section with header header and list of experiences matching type
 * @param {ExperienceSectionProps}
 * @property {string} type string to filter experiences by type
 * @property {string} header string to display as header of section
 * @returns section with header header and list of experiences matching type
 */
function ExperienceSection({ type, header }: ExperienceSectionProps) {
  // Get experiences data as IExperience[]
  let experiencesList = getExperiences();

  // Separate by experience types
  let experiences = experiencesList.filter((e) => e.Type === type);

  // IExperience[] to JSX[]
  let experiencesJSX = experiences.map(experienceToJSX);

  return (
    <section className={type}>
      <h3>{header}</h3>
      {experiencesJSX}
    </section>
  );
}

export default ExperienceSection;
