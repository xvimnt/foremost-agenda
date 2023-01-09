import './App.css';
import ItemList from './components/ItemList';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';
import { create_note, get_all_notes } from './Api';

const sortChoice = {
  title: 1,
  body: 2,
  date: 3,
}

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  // Get all the notes from our server
  useEffect(() => {
    get_all_notes().then(res => {
      setNotes(res.data)
    });
  }, [])

  // Add a new note to our server
  const addNote = () => {
    if (title && body) {
      create_note(title, body).then(() => {
        setTitle('')
        setBody('')
        window.location.reload(false);
      })
    } else {
      alert('Empty fields');
    }
  }


  // Using the sort field to order the notes 
  useEffect(() => {
    if (!sort) {
      setFilteredNotes(notes);
    }
    else {
      switch (sort) {
        case sortChoice.title:
          setFilteredNotes([...notes].sort((a, b) => a.title.localeCompare(b.title)));
          break;
        case sortChoice.body:
          setFilteredNotes([...notes].sort((a, b) => a.body.localeCompare(b.body)));
          break;
        case sortChoice.date:
          setFilteredNotes(notes.sort((a, b) => {
            var d1 = new Date(a.date);
            var d2 = new Date(b.date);
            return d1.getTime() - d2.getTime();
          }));
          break;
        default:
          setFilteredNotes(notes);
          break;
      }
    }
  }, [sort, notes]);

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
  }, [search, notes]);

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
              <li><button className="dropdown-item" onClick={(e) => setSort(sortChoice.title)}>Title</button></li>
              <li><button className="dropdown-item" onClick={(e) => setSort(sortChoice.body)}>Body</button></li>
              <li><button className="dropdown-item" onClick={(e) => setSort(sortChoice.date)}>Date</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ItemList notes={filteredNotes}></ItemList>
      <Modal id="add" title="Add New Note" submit={addNote}>
        <form>
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
    </div>
  );
}

export default App;
