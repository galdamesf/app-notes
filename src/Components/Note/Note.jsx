import React from 'react';
import './Note.css';

export default function Note(props) {
    const note = props.note || {
        text: "Hello, this is a sample note",
        time: "2:12 AM",
        color: "red"
    }
    return <div className="note" style={{backgroundColor: note.color}}>
        <textarea className="note_text" defaultValue={note.text} />
        <p>{note.time}</p>
    </div>
}