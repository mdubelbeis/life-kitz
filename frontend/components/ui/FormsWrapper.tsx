interface FormsWrapperProps {
  children: React.ReactNode;
}

const FormsWrapper: React.FC<FormsWrapperProps> = ({ children }) => {
  return (
    <section className="mx-auto h-full w-full max-w-2xl">
      {/* THIS DIV IS THE FORM WRAPPER FOR LOGIN AND SIGNUP */}
      <div className="rounded bg-secondary px-4 py-20">{children}</div>
    </section>
  );
};

export default FormsWrapper;
