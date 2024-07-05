import { getEducation } from "../util/getCvData";
import { formatInterval } from "../util/formatCvData";
import List from "../../../components/List";

function Education() {
    let education = getEducation();
    let interval = formatInterval(education.Interval);
    return (
        <div className="education">
            <h4>Education</h4>
            <List content={education.Degrees} addtlClass="degrees" />
            <p className="school">{education.School}</p>
            <p className="interval">{interval}</p>
        </div>
    );
}

export default Education;
