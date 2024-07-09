import { getEducation } from "../util/getCvData";
import { formatInterval } from "../util/formatCvData";
import List from "../../../components/List";

/**
 * Must pass IEducation object to the function
 * Returns education div with title, degree, school and interval
 * @param {IEducation} education object containing data for one experience
 * @returns div block with experience information structured
 */
function Education() {
  let education = getEducation();

  let school = education.School;
  let degrees = education.Degrees;
  let interval = formatInterval(education.Interval);

  return (
    <div className="education">
      <h4>Education</h4>
      <p className="school">{school}</p>
      <List content={degrees} addtlClass="degrees nobullet" />
      <p className="interval">{interval}</p>
    </div>
  );
}

export default Education;
