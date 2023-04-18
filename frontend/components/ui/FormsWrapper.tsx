interface FormsWrapperProps {
  children: React.ReactNode;
}

const FormsWrapper: React.FC<FormsWrapperProps> = ({ children }) => {
  return (
    <section className="mx-auto flex h-screen w-screen max-w-3xl items-center justify-center bg-white text-center">
      {/* THIS DIV IS THE FORM WRAPPER FOR LOGIN AND SIGNUP */}
      <div className="flex h-[500px] w-11/12 flex-col justify-center bg-slate-100 p-2">
        {children}
      </div>
    </section>
  );
};

export default FormsWrapper;
