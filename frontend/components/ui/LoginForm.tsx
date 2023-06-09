import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import Button from './Button';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const router = useRouter();

  const handleLogin = async (e: SyntheticEvent) => {
    // TODO: Add validation
    // TODO: Add error handling
    // TODO: Add loading state
    e.preventDefault();
    try {
      const resp = await fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await resp.json();
      const { tokens } = data;

      localStorage.setItem('token', JSON.stringify(tokens.access));
      localStorage.setItem('refreshToken', JSON.stringify(tokens.refresh));
      localStorage.setItem('isAuthenticated', JSON.stringify(true));

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 text-black" onSubmit={handleLogin}>
      <label className="relative" htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          className="w-full rounded px-1 py-2 tracking-wider"
          onChange={(e) => setEmail(e.target.value)}
        />
        <MdAlternateEmail className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </label>

      <label className="relative" htmlFor="password">
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          className="w-full rounded px-1 py-2 tracking-wider"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MdPassword className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </label>

      <div className="mt-3 flex items-center justify-center gap-3">
        <Button id="tertiary" type="button">
          <Link href="">Cancel</Link>
        </Button>
        <Button id="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
