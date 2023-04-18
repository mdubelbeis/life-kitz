import Link from 'next/link';
import { SyntheticEvent } from 'react';
import { MdAccountCircle, MdAlternateEmail, MdPassword } from 'react-icons/md';
import Button from './Button';

interface SignUpFormProps {
  email: string;
  password: string;
  username: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  setUsername,
}) => {
  const handleSignUp = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Signing up...');
  };

  return (
    // Form with email, username, and password fields
    <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
      <label className="relative" htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
        <MdAlternateEmail className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </label>

      <label className="relative" htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
        <MdAccountCircle className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </label>
      <label className="relative" htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
        <MdPassword className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </label>
      <div className="flex items-center justify-center gap-3">
        <Link href="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
