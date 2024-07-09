import Education from "./Education";
import List from "../../../components/List";
import { getCitizenship, getContact, getLanguages } from "../util/getCvData";
import { formatLanguages } from "../util/formatCvData";
import Section from "../../../components/Section";

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
    <Section addtlClass="general">
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
    </Section>
  );
}

export default General;
