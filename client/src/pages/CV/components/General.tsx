import Education from "./Education";
import List from "../../../components/List";
import { getCitizenship, getContact, getLanguages } from "../lib/getCvData";
import { formatLanguages } from "../util/formatLanguage";

/**
 * Retrieves general data from data folder
 * Returns general section with citizenships, education, contact info, languages
 * @returns general section with citizenships, education, contact info, languages
 */
function General() {
  // Get general data as string[] and Language[]
  let citizenship = getCitizenship();
  let contact = getContact();
  let languages = getLanguages();

  // Convert Language[] to string[]
  let stringLanguages = formatLanguages(languages);

  return (
    <div className="general">
      <List
        content={citizenship}
        header={"Citizenships"}
        addtlClass="citizenship nobullet"
      />
      <Education />
      <List
        content={contact}
        header={"Contact"}
        addtlClass="contact nobullet"
      />
      <List
        content={stringLanguages}
        header={"Languages"}
        addtlClass="languages nobullet"
      />
    </div>
  );
}

export default General;
