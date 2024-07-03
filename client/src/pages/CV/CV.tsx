import List from "../../components/List";
import Experience from "./Experience";

function CV() {
    let fakeContent = ["item1", "item2"];
    let fakeHeader = "header";
    let fakeWork = {
        Type: "string",
        Name: "string",
        Team: "string",
        Title: "string",
        Start: "06 2024",
        End: "08 2023",
        Location: "string",
        Description: fakeContent,
        Skills: fakeContent,
    };
    return (
        <div className="page">
            <h2>This is my CV.</h2>
            <div className="general">
                <h3>General</h3>
                <List content={fakeContent} header={fakeHeader} />
                <h3>Experiences</h3>
                <Experience experience={fakeWork} />
            </div>
        </div>
    );
}

export default CV;
