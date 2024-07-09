import { getEducation } from "../lib/getCvData";
import { formatInterval } from "../util/formatInterval";
import List from "../../../components/List";

/**
 * Retrieves education data
 * Returns education div with title, degree, school and interval
 * @returns div block with schol, degrees and interval for education
 */
function Education() {
  // Get education data as IEducation
  let education = getEducation();

  // Convert from IEducation to strings
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
