import List from "../../components/List";
import { IExperience } from "./IExperience";

/**
 * Returns experience component
 * @param experience of type IExperience containing data for one experience
 * @returns div block with experience information structured
 */
function Experience({ experience }: { experience: IExperience }) {
    let type = experience.Type;
    let name = experience.Name;
    let team = experience.Team;
    let isTeam = typeof team == "string";
    let title = experience.Title;
    let start = experience.Start;
    let end = experience.End;
    let location = experience.Location;
    let description = experience.Description;
    let skills = experience.Skills;

    return (
        <div className={"experience " + type}>
            <p className="name">{name}</p>
            {team && <p className="team"> {team} </p>}
            <p className="title">{title}</p>
            <p className="interval">{start + "-" + end}</p>
            <p className="location">{location}</p>
            <List content={description} />
            <List content={skills} header="Skills:" />
        </div>
    );
}

export default Experience;
