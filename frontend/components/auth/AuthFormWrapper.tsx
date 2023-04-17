interface AuthFormWrapperProps {
  children: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ children }) => {
  return <form className="flex flex-col gap-3">{children}</form>;
};

export default AuthFormWrapper;
