import List from "../../components/List";
import { IExperience } from "./ICvData";

/**
 * Returns experience component
 * @param experience of type IExperience containing data for one experience
 * @returns div block with experience information structured
 */
function Experience({ experience }: { experience: IExperience }) {
    return (
        <div className={"experience " + experience.Type}>
            <p className="name">{experience.Name}</p>
            {experience.Team && <p className="team"> {experience.Team} </p>}
            <p className="title">{experience.Title}</p>
            <p className="interval">
                {experience.Start + "-" + experience.End}
            </p>
            <p className="location">{experience.Location}</p>
            <List content={experience.Description} />
            <List content={experience.Skills} header="Skills:" />
        </div>
    );
}

export default Experience;
