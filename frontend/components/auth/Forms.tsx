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

  // TODO: Add logic to show either login or signup form
  const router = useRouter();

  return (
    <>
      <div>{router.pathname === '/login' ? <LoginForm /> : <SignUpForm />}</div>
      <div>
        {router.pathname === '/login' ? (
          <Link href="/signup">Want an account? Sign up</Link>
        ) : (
          <Link href="/login">Already have an account? Log in</Link>
        )}
      </div>
    </>
  );
};

export default Forms;
