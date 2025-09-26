import React from 'react';
import deleteIcon from '../../assets/delete.png';
import './Note.css';

export default function Note(props) {
    const note = props.note || {
        text: "Hello, this is a sample note",
        time: "2:12 AM",
        color: "red"
    }
    return <div className="note" style={{backgroundColor: note.color}}>
        <textarea className="note_text" defaultValue={note.text} />
        <div className="note_footer">
            <p>{note.time}</p>
            <img src={deleteIcon} alt="DELETE" onClick={() => props.deleteNote(props.note.id)} />
        </div>
    </div>
}