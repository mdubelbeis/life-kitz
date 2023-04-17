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
      {router.pathname === '/login' ? <LoginForm /> : <SignUpForm />}
      <div>
        {router.pathname === '/login' ? (
          <Link href="/signup">Want an account? Sign up</Link>
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
