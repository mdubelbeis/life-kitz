import { Note } from '@/pages';
import { useState } from 'react';
import Button from '../ui/Button';

interface NotesDisplayProps {
  notes: Note[];
}

const NotesDisplay: React.FC<NotesDisplayProps> = ({ notes }) => {
  const [currentNote, setCurrentNote] = useState<number>();
  const [completedStyling, setCompletedStyling] = useState<string>('');

  const handleCompleteNote = async (id: number) => {
    setCurrentNote(id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/notes/${id.toString()}/`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      }
    );

    setCompletedStyling('text-green-500');

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const handleDeleteNote = async (id: number) => {
    setCurrentNote(id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/notes/${id.toString()}/`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      }
    );

    setCompletedStyling('text-red-500');

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };
  return (
    <>
      {notes?.length > 0 ? (
        <div className="overflow-x-auto shadow-lg">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes?.map((note) => (
                <tr
                  key={note.id}
                  className={`${
                    currentNote === note.id ? completedStyling : ''
                  }`}
                >
                  <td>{note.title}</td>
                  <td>{note.content}</td>
                  <td className="space-x-3">
                    <Button
                      id="primary"
                      type="button"
                      onClick={() => handleCompleteNote(note.id)}
                    >
                      Completed
                    </Button>
                    <Button
                      id="tertiary"
                      type="button"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>No notes found</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default NotesDisplay;
