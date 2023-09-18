import React, { useEffect, useState, ChangeEvent } from 'react';
import "./Notepad.css"

interface NotesProps {
  saveProject: (data: { notesVal: string }) => void;
  notes: string;
}

export default function Notes({ saveProject, notes }: NotesProps) {
  const [text, setText] = useState<{ newText: string }>({ newText: '' });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setText({ newText: notes });
  }, [notes]);

  useEffect(() => {
    saveProject({ notesVal: text.newText });
  }, [text, saveProject]);

  return (
    <div className='notepad'>
      <h3>Notes</h3>
      <textarea
        name="newText"
        onChange={handleChange}
        value={text.newText}
        rows={20}
        cols={110}
      />
    </div>
  );
}
