import React, { useEffect, useState } from "react";
import Area from "../components/Area.tsx";
import Header from "../components/Header.tsx";
import Note from "../components/Note.tsx";

type noteType = {
  title: string;
  content: string;
  Type: string;
};

const getLocalItems = () => {
  let list = localStorage.getItem("notes");

  if (list) {
    return JSON.parse(localStorage.getItem("notes"));
  } else {
    return [];
  }
};

const App = () => {
  const [notes, setNotes] = useState(getLocalItems());
  function newNote(newNote: noteType) {
    setNotes((prev): any => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id: number): any {
    setNotes((prevNotes): any => {
      return prevNotes.filter((item: noteType, index: number) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app">
      <Header />
      <Area onAdd={newNote} />
      {notes.length < 1 ? (
        <div
          style={{
            color: "var(--white)",
            textAlign: "center",
            margin: "2rem 0",
            height: "100px",
          }}
        >
          Note is empty
        </div>
      ) : (
        notes.map((note: noteType, index: number) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            Type={note.Type}
            onDelete={deleteNote}
          />
        ))
      )}
    </div>
  );
};

export default App;
