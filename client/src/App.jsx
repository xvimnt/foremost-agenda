import './App.css';
import ItemList from './components/ItemList';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';

const notes = [
  {
    title: "my first note",
    body: "Lions are depicted on vases dating to about 2600 before present that were excavated near Lake Urmia.[16] In Iranian mythology, the lion is a symbol of courage and monarchy. It is portrayed standing beside the kings in artifacts and sitting on the graves of knights.",
    date: "16/02/1998"
  },
  {
    title: "my second note",
    body: "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
    date: "16/03/1998"
  },
  {
    title: "my third note",
    body: "Cultural depictions of lions are known in countries of Afro-Eurasia. The lion has been an important symbol to humans for tens of thousands of years. The earliest graphic representations feature lions as organized hunters with great strength, strategies, and skills.",
    date: "16/02/2022"
  },
  {
    title: "my fourth note",
    body: "The earliest tomb paintings in Ancient Egypt, at Nekhen, c. 3500 BC, classified as Naqada, possibly Gerzeh, culture include images of lions, including an image of a human (or deity) flanked by two lions in an upright posture.",
    date: "26/02/1998"
  },
]

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [search, setSearch] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  // Using the search field to filter the notes by title or body
  useEffect(() => {
    if (!search) {
      setFilteredNotes(notes);
    }
    else {
      setFilteredNotes(notes.filter((note) => {
        const noteBody = note.body.toLowerCase();
        const noteTitle = note.title.toLowerCase();
        return noteBody.includes(search) || noteTitle.includes(search);
      }))
    }
  }, [search]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-muted'>Agenda</h1>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-6'>
          <input type="text" placeholder='Search' className='form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className='col-6'>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#add">Add New</button>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><button className="dropdown-item">Title</button></li>
              <li><button className="dropdown-item">Body</button></li>
              <li><button className="dropdown-item">Date</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ItemList notes={filteredNotes}></ItemList>
      <Modal id="add" title="Add New Note">
        <form>
          <div class="mb-3">
            <label htmlFor="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="mb-3">
            <label htmlFor="body" class="form-label">Body</label>
            <textarea rows="15" type="text" class="form-control" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
