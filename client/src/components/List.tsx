/**
 * @param content string[], required content to be displayed in list
 * @param header string, optional content to be used as list header
 * @param addtlClass string, optional string to add to list class name
 * @returns span containing optional header and unordered list of content's items
 * */
function List({
    content,
    header,
    addtlClass,
}: {
    content: string[];
    header?: string;
    addtlClass?: string;
}) {
    let listHeader = <h4>{header}</h4>;
    let listItems = content.map((text) => <li>{text}</li>);
    return (
        <div className={"list" + addtlClass}>
            {header && listHeader}
            <ul>{listItems}</ul>
        </div>
    );
}

export default List;
