import React, {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteForm from './NoteForm.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObject = {
        title: noteTitle.trim() !== '' ? noteTitle : null,
        text: newNote,
        date: new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }),
      };

      setNotes([...notes, newNoteObject]);
      setNewNote('');
      setNoteTitle('');
    }
  };

  const deleteNote = (index) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete your note?'
    );

    if (isConfirmed) {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    }
  };

  const openModal = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setShowModal(false);
  };

  const editNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note === selectedNote
        ? {
            ...note,
            title: editedNote.title.trim() !== '' ? editedNote.title : null,
            text: editedNote.text,
            updatedDate: new Date().toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            }),
          }
        : note
    );

    setNotes(updatedNotes);
    closeModal();
  };
/* function App() {
  const [count, setCount] = useState(0) */

  return (
    <>
    <div className="app">
      <h1>Notebook</h1>

      <div className="note-form">
      <input
          type="text"
          placeholder="Type title here!"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <input
          placeholder="Type text here!"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-grid">
        {notes.map((note, index) => (
          <div key={index} className="note" onClick={() => openModal(note)}>
            <p>title: {note.title}</p>
            <p>text: {note.text}</p>
            <p>date: {note.date}</p>
            {note.updatedDate && <p>Updated: {note.updatedDate}</p>}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Popup modal: edit note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {selectedNote && (
            <div>
              <p>title: {selectedNote.title}</p>
              <p>text: {selectedNote.text}</p>
              <p>date: {selectedNote.date}</p>
            </div>
          )} */}
          <NoteForm
            note={selectedNote}
            onAddNote={addNote}
            onEditNote={editNote}
          />
          <Button variant="secondary" onClick={closeModal}>
            Happy end
          </Button>
          </Modal.Body>
          </Modal>
          
        



    </div>
 
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}


export default App
