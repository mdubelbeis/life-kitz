import Link from 'next/link';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import Button from './Button';

interface LoginFormProps {
  email: string;
  accessToken: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  accessToken,
  password,
  setEmail,
  setPassword,
}) => {
  const handleLogin = () => {};

  return (
    <form className="flex flex-col gap-3" onSubmit={handleLogin}>
      <label className="relative" htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
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
