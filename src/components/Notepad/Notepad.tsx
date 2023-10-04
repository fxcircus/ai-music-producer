import React, { useEffect, useState, ChangeEvent } from 'react';
import "./Notepad.css"

interface NotesProps {
  notes: string;
  setNotes: (notes: string) => void;
}

export default function Notes({ notes, setNotes }: NotesProps) {
  const [text, setText] = useState<{ newText: string }>({ newText: '' });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setText({ newText: notes });
  }, [notes]);

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
