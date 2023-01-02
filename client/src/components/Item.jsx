export default function Item({note}) {
    const {title, body, date} = note
    return (
        <button className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{title}</h5>
                <small>{date}</small>
            </div>
            <p className="mb-1">{body}</p>
        </button>
    );
}

