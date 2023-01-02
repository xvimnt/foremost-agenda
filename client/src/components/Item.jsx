export default function Item({note, click}) {
    const {title, body, date} = note
    return (
        <button className="list-group-item list-group-item-action flex-column align-items-start" onClick={() => click(note)} data-bs-toggle="modal" data-bs-target="#edit">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{title}</h5>
                <small className="text-muted">{date}</small>
            </div>
            <p className="mb-1">{body}</p>
        </button>
    );
}

