import List from "../../components/List";

function CV() {
    let fakeContent = ["item1", "item2"];
    let fakeHeader = "header";
    return (
        <div className="page">
            <h2>This is my CV.</h2>
            <div className="general">
                <h3>General</h3>
                <List content={fakeContent} header={fakeHeader} />
            </div>
        </div>
    );
}

export default CV;
