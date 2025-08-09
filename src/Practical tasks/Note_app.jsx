import React, {useState, useEffect} from 'react';
import './Note_app.css';

const moods = ["😞", "😐", "😊", "😆", "😍"];

function Note_app() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('😊');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleAddNote = () => {
    if (!text || !date) return;

    const newNote = { text, date, mood };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setText('');
    setDate('');
    setMood('😊');
  };

  const handleDelete = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  
  return (
    <div className="app">
      <h1>My Diary</h1>

      <div className="note-form">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your thoughts..."/>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <div className="mood-selector">
          {moods.map((m, index) => (
            <span
              key={index}
              className={`mood ${m === mood ? 'selected' : ''}`}
              onClick={() => setMood(m)}
            >
              {m}
            </span>
          ))}
        </div>

        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.map((note, index) => (
          <div className="note-card" key={index}>
            <div className="note-header">
              <span className="note-date">{note.date}</span>
              <span className="note-mood">{note.mood}</span>
            </div>
            <p className="note-text">{note.text}</p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note_app;