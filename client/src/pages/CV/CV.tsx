import Experience from "./components/Experience";
import General from "./components/General";
import { getExperiences } from "./util/getCvData";

function CV() {
    // Get experiences data from json, convert to JSX
    let experiencesList = getExperiences();
    let experiencesJSX = experiencesList.map((exp) => (
        <Experience experience={exp} />
    ));

    return (
        <div className="page">
            <h2>This is my CV.</h2>
            <General />
            <div className="experiences">
                <h3>Experiences</h3>
                {experiencesJSX}
            </div>
        </div>
    );
}

export default CV;
