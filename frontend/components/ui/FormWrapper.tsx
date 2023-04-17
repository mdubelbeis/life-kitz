interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <section className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-6/12 bg-slate-100 p-10">{children}</div>
    </section>
  );
};

export default FormWrapper;
