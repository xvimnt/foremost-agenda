import './App.css';
import ItemList from './components/ItemList';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-muted'>Agenda</h1>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-6'>
          <input type="text" placeholder='Search' className='form-control' />
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
      <ItemList></ItemList>
      <Modal id="add" title="Add New Note">
        <form>
          <div class="mb-3">
            <label htmlFor="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label htmlFor="body" class="form-label">Body</label>
            <textarea rows="15" type="text" class="form-control" id="body" value={body} onChange={(e) => setBody(e.target.value)}/>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
