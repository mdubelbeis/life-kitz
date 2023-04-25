import { Note } from '@/pages';

interface NotesDisplayProps {
  notes: Note[];
}

const NotesDisplay: React.FC<NotesDisplayProps> = ({ notes }) => {
  return (
    <>
      {notes ? (
        <div className="overflow-x-auto">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Content</th>
                <th>Quick Action</th>
              </tr>
            </thead>
            <tbody>
              {notes?.map((note) => (
                <tr key={note.id}>
                  <td>{note.title}</td>
                  <td className="line-clamp-1">{note.content}</td>
                  <td>
                    <button className="mr-2">Completed</button>
                    <button className="mr-2">Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No notes</p>
      )}
    </>
  );
};

export default NotesDisplay;
