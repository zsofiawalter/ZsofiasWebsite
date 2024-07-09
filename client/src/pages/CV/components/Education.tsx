import { getEducation } from "../util/getCvData";
import { formatInterval } from "../util/formatCvData";
import List from "../../../components/List";
import { IEducation } from "../ICvData";

/**
 * Must pass IEducation object to the function
 * Returns education div with title, degree, school and interval
 * @param {IEducation} education object containing data for one experience
 * @returns div block with experience information structured
 */
function Education() {
  let education = getEducation();
  let interval = formatInterval(education.Interval);
  return (
    <div className="education">
      <h4>Education</h4>
      <List content={education.Degrees} addtlClass="degrees nobullet" />
      <p className="school">{education.School}</p>
      <p className="interval">{interval}</p>
    </div>
  );
}

export default Education;
