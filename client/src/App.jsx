import './App.css';
import ItemList from './components/ItemList';
function App() {
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
            <button type="button" className="btn btn-dark">Add New</button>
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
    </div>
  );
}

export default App;
