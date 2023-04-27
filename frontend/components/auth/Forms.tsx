import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginForm from '../ui/LoginForm';
import SignUpForm from '../ui/SignUpForm';

interface FormsProps {
  setIsAuthenticated?: (isAuthenticated: boolean) => void;
  setToken?: (token: { access: string; refresh: string }) => void;
}

const Forms: React.FC<FormsProps> = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-10">
      {router.pathname === '/login' || router.pathname === '/login/' ? (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      ) : (
        <SignUpForm
          email={email}
          password={password}
          username={username}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      )}

      <p className="flex justify-center gap-1 text-logo">
        {router.pathname === '/login' ? (
          <>
            <span>Don&apos;t have an account?</span>
            <Link href="/signup" className="text-tertiary underline">
              Sign-up
            </Link>
          </>
        ) : (
          <>
            <span>Already have an account?</span>
            <Link href="/login" className="text-tertiary underline">
              Log in
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default Forms;
