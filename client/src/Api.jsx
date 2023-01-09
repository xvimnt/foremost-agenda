import axios from "axios";

export async function get_all_notes() {
    // Getting all notes
    return axios.get('http://localhost:5000/api/getNotes');
}

export async function create_note(title, body) {
    // Adding new note
    var note = {
        title: title,
        body: body,
        date: new Date().toISOString().slice(0, 10),
    }

   return axios.post('http://localhost:5000/api/addNote', note);
}

export async function edit_note(title, body, id) {
    // Editing note
    var note = {
        title: title,
        body: body,
        date: new Date().toISOString().slice(0, 10),
        id: id
      }

      return axios.put(`http://localhost:5000/api/editNote`, note);
}