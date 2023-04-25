import Link from 'next/link';
import Button from '../ui/Button';

interface NotesFormProps {
  newNoteTitle: string;
  newNoteContent: string;
  setNewNoteTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewNoteContent: React.Dispatch<React.SetStateAction<string>>;
  handleNewNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const NotesForm: React.FC<NotesFormProps> = ({
  newNoteTitle,
  newNoteContent,
  setNewNoteTitle,
  setNewNoteContent,
  handleNewNote,
}) => {
  return (
    <form
      onSubmit={handleNewNote}
      className="mx-auto flex w-11/12 max-w-6xl flex-col justify-center gap-3"
    >
      <label>
        <input
          type="text"
          placeholder="Title"
          className="input w-full rounded-md border-[1px] border-slate-100 shadow-lg"
          id="title"
          name="title"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
      </label>
      <label>
        <textarea
          placeholder="Content"
          className="input h-[200px] w-full rounded-md border-[1px] border-slate-100 py-2 shadow-lg"
          id="content"
          name="content"
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
        />
      </label>
      <div className="mt-3 flex items-center justify-center gap-3">
        <Button type="button" id="tertiary">
          <Link href="/notes">Cancel</Link>
        </Button>
        <Button type="submit" id="primary">
          Add Note
        </Button>
      </div>
    </form>
  );
};

export default NotesForm;
