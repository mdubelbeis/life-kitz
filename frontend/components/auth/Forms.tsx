import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginForm from '../ui/LoginForm';
import SignUpForm from '../ui/SignUpForm';

const Forms: React.FC = () => {
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
          accessToken={accessToken}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      ) : (
        <SignUpForm />
      )}
      <div>
        {router.pathname === '/login' ? (
          <p className="flex justify-center gap-1">
            <span>Want an account?</span>
            <Link href="/signup" className="text-blue-700 underline">
              Sign up
            </Link>
          </p>
        ) : (
          <p className="flex justify-center gap-1">
            <span>Already have an account?</span>
            <Link href="/login" className="text-blue-700 underline">
              Log in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Forms;
