import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === props.currentNote.id ? "select-note" : ""}`}
        onClick={() => props.setcurrentNoteId(note.id)}
      >
        <h4 className="text-snippet"> Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar-header">
        <h3>Notes</h3>
        <button className="new-notes" onClick={props.newNote}>+</button>
      </div>
      {noteElements}
    </section>
  );
}
