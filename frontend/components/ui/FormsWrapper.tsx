interface FormsWrapperProps {
  children: React.ReactNode;
}

const FormsWrapper: React.FC<FormsWrapperProps> = ({ children }) => {
  return (
    <section className="mx-auto flex w-full max-w-2xl items-center justify-center text-center">
      {/* THIS DIV IS THE FORM WRAPPER FOR LOGIN AND SIGNUP */}
      <div className="flex h-[250px] w-full flex-col justify-center rounded bg-quinary p-2">
        {children}
      </div>
    </section>
  );
};

export default FormsWrapper;
