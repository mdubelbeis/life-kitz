import Link from 'next/link';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
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
  username,
  setEmail,
  setPassword,
  setUsername,
}) => {
  // TODO: Add validation
  // TODO: Add error handling
  // TODO: Add loading state
  const [userData, setUserData] = useState<{
    id: string;
    email: string;
    username: string;
  }>();

  const { push } = useRouter();

  const handleSignUp = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Signing up...');
    try {
      const resp = await fetch('http://127.0.0.1:8000/auth/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      const data = await resp.json();
      setUserData(data.data);

      if (data.message === 'User Created Successfully') {
        await push('/login');
      } else {
        console.log('User creation failed!');
      }
    } catch (error) {
      console.log(error);
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
