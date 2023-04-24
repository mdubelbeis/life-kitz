import NotesDisplay from '@/components/notes/NotesDisplay';
import NotesForm from '@/components/notes/NotesForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Note } from '../index';

const NotesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [newNoteTitle, setNewNoteTitle] = useState<string>('');
  const [newNoteContent, setNewNoteContent] = useState<string>('');
  const router = useRouter();

  const getNotes = async () => {
    try {
      const notes_data = await fetch('http://localhost:8000/api/notes/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      });

      const notes_json = await notes_data.json();
      const notes = notes_json;

      if (notes) {
        setNotes(notes);
      } else {
        setNotes(null);
      }
    } catch (error) {
      console.log(error + 'Error fetching data from /api/notes/');
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
      getNotes();
    } else {
      router.push('/login');
    }
  }, []);

  const handleNewNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote = {
      title: newNoteTitle,
      content: newNoteContent,
    };

    try {
      const response = await fetch('http://localhost:8000/api/notes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
        body: JSON.stringify(newNote),
      });

      const data = await response.json();
      console.log(data);
      await getNotes();
    } catch (error) {
      console.log(error + 'Error creating new note');
    }
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  return (
    <>
      <Head>
        <title>Life-Kitz | Notes Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated ? (
        <section className="mx-auto flex w-11/12 max-w-6xl flex-col gap-10">
          <NotesForm
            newNoteTitle={newNoteTitle}
            newNoteContent={newNoteContent}
            setNewNoteContent={setNewNoteContent}
            setNewNoteTitle={setNewNoteTitle}
            handleNewNote={handleNewNote}
          />
          <NotesDisplay notes={notes} />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default NotesPage;