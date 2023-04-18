import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import Button from './Button';

interface LoginFormProps {
  email: string;
  password: string;
  setRefresh: (token: string) => void;
  setAccess: (token: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsAuthenticated?: (isAuthenticated: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setAccess,
  setRefresh,
  password,
  setEmail,
  setPassword,
  setIsAuthenticated,
}) => {
  const { push } = useRouter();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Logging in...');
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
      console.log(data);

      if (data.tokens) {
        setAccess(data.tokens.access);
        setRefresh(data.tokens.refresh);
        // USE STATE MGMT TO SET AUTH! (ZUSTAND)
        setIsAuthenticated(true); //? Set auth to true
        push('/'); //? Redirect to home page
      }
    } catch (error) {
      console.log(error);
    }

    console.log(email, password);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleLogin}>
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

      <div className="flex items-center justify-center gap-3">
        <Link href="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
