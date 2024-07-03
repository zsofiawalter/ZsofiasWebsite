import List from "../../components/List";
import { IExperience } from "./IExperience";

function Experience({ experience }: { experience: IExperience }) {
    let type = experience.Type;
    let team = experience.Team;
    let isTeam = typeof team == "string";
    let title = experience.Title;
    let start = experience.Interval.at(0)?.toDateString();
    let end = experience.Interval.at(1)?.toDateString();
    let location = experience.Location;
    let description = experience.Description;
    let skills = experience.Skills;
    return (
        <div className={"experience " + type}>
            <p className="name">{experience.Name}</p>
            {isTeam && <p className="name"> {team} </p>}
            <p className="title">{title}</p>
            <p className="interval">{start + "-" + end}</p>
            <p className="location">{location}</p>
            <List content={description} />
            <List content={skills} />
        </div>
    );
}

export default Experience;
