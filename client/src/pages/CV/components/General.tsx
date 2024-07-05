import Education from "./Education";
import List from "../../../components/List";
import { getCitizenship, getContact, getLanguages } from "../util/getCvData";
import { formatLanguages } from "../util/formatCvData";

function General() {
    let citizenship = getCitizenship();
    let contact = getContact();
    let languages = formatLanguages(getLanguages());
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
                content={languages}
                header={"Languages"}
                addtlClass="languages nobullet"
            />
        </div>
    );
}

export default General;
