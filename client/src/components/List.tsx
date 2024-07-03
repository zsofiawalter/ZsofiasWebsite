/**
 * @param content string[], required
 * @param header string, optional
 * @returns span containing optional header and unordered list of content's items
 * */
function List({ content, header }: { content: string[]; header?: string }) {
    let isHeader = typeof header == "string";
    let listHeader = <h4>{header}</h4>;
    let listItems = content.map((text) => <li>{text}</li>);
    return (
        <div className="list">
            {isHeader && listHeader}
            <ul>{listItems}</ul>
        </div>
    );
}

export default List;
