import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
export default function Note() {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem("note")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (note[0] && note[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };

    setNote((prevNote) => [newNote, ...prevNote]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNote((oldNote) =>
      oldNote.map((oldNote) =>
        oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote
      )
    );
  }

  return (
    <div>
      <h1>hi hello</h1>
      {/* Your JSX here */}
    </div>
  );
}
