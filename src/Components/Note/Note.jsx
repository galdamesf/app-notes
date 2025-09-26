import React from 'react';
import deleteIcon from '../../assets/delete.png';
import './Note.css';

let timer = 500, timeout;
export default function Note(props) {
    const formatDate = (value) => {
        if (!value) return "";

        const date = new Date(value);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            day: 'numeric',
            month: 'short',
            timeZone: 'America/Santiago'
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    }

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
    }

    return <div className="note" style={{backgroundColor: props.note.color}}>
        <textarea className="note_text" defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props. note.id)}
        />
        <div className="note_footer">
            <p>{formatDate(props.note.time)}</p>
            <img src={deleteIcon} alt="DELETE" onClick={() => props.deleteNote(props.note.id)} />
        </div>
    </div>
}