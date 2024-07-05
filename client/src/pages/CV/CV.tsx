import List from "../../components/List";
import Experience from "./Experience";
import { getExperiences } from "./getData";

function CV() {
    let fakeContent = ["item1", "item2"];
    let fakeHeader = "header";

    // Get experiences data from json, convert to JSX
    let experiencesList = getExperiences();
    let experiencesJSX = experiencesList.map((exp) => (
        <Experience experience={exp} />
    ));

    return (
        <div className="page">
            <h2>This is my CV.</h2>
            <div className="general">
                <List content={fakeContent} header={fakeHeader} />
            </div>
            <div className="experiences">
                <h3>Experiences</h3>
                {experiencesJSX}
            </div>
        </div>
    );
}

export default CV;
