import List from "../../../components/List";
import { IExperience } from "../ICvData";
import { formatInterval } from "../util/formatCvData";

/**
 * Must pass IExperience object to the function
 * Returns experience component
 * @param {IExperience} experience of type IExperience containing data for one experience
 * @returns div block with experience information structured
 */
function Experience({ experience }: { experience: IExperience }) {
  let type = experience.Type;
  let name = experience.Name;
  let team = experience.Team;
  let title = experience.Title;
  let interval = formatInterval(experience.Interval);
  let location = experience.Location;
  let description = experience.Description;
  let skills = experience.Skills;

  return (
    <div className={"experience " + type}>
      <div className="header">
        <p className="name">{name}</p>
        {team && <p className="team"> {team} </p>}
        <p className="title">{title}</p>
        <p className="interval">{interval}</p>
        <p className="location">{location}</p>
      </div>
      <List content={description} addtlClass="description" />
      <List content={skills} header="Skills:" addtlClass="skills" />
    </div>
  );
}

export default Experience;
