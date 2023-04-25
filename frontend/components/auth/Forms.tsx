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
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-10">
      {router.pathname === '/login' ? (
        <LoginForm
          email={email}
          setAccess={setAccessToken}
          setRefresh={setRefreshToken}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setToken={setToken}
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

      {router.pathname === '/login' ? (
        <Link href="/signup" className="flex justify-center gap-3 text-white">
          <span>Want an account?</span>
          <span className="text-quinary border-b">Sign-up</span>
        </Link>
      ) : (
        <p className="flex justify-center gap-1">
          <span>Already have an account?</span>
          <Link href="/login" className="text-quinary underline">
            Log in
          </Link>
        </p>
      )}
    </div>
  );
};

export default Forms;
