import React from "react";
import Note from "../Note/Note.jsx";
import "./NoteContainer.css";

export function NoteContainer(props) {

    const reverArray =(arr)=>{
        const array = []
        for(let i=arr.length -1; i >= 0; --i){
            array.push(arr[i])
        }
        return array
    }

    const notes = reverArray(props.notes);

    return (
        <div className="note-container">
            <h2>Notas</h2>
            <div className="note-container_notes custom-scroll">
                {notes?.length > 0 ? (
                    notes.map((item) => (
                        <Note
                            key={item.id}
                            note={item}
                            deleteNote={props.deleteNote}
                            updateText={props.updateText}
                        />
                    ))
                ) : (
                    <div className="empty-state">
                        <span className="empty-icon">📝</span>
                        <h3>No tienes notas todavía</h3>
                        <p>Haz clic en <strong>"Agregar Nota"</strong> para crear tu primera nota.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
