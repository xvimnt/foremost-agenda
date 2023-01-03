import Item from "./Item";
import Modal from "./Modal";
import { useState } from "react";


export default function ItemList({notes}) {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ date, setDate ] = useState('');

    const click = (note) => {
        setTitle(note.title);
        setBody(note.body);
        setDate(note.date);
    }

    return (
        <>
            <div className="list-group">
                {notes.map(note => {
                    return <Item key={note.title} note={note} click={click}></Item>
                })}
            </div>
            <Modal id="edit" title="View Note">
                <form>
                    <div className="text-center">
                        <p className="text-muted">{date}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <textarea rows="15" type="text" className="form-control" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                </form>
            </Modal>
        </>

    );
}

