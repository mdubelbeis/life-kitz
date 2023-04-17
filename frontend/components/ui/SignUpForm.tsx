import Link from 'next/link';
import AuthFormWrapper from '../auth/AuthFormWrapper';
import Button from './Button';

const SignUpForm: React.FC = () => {
  return (
    // Form with email, username, and password fields
    <AuthFormWrapper>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
      </label>

      <label htmlFor="username">
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full rounded px-1 py-2 tracking-wider"
        />
      </label>
      <div className="flex items-center justify-center gap-3">
        <Link href="/">
          <Button type="button">Cancel</Button>
        </Link>
        <Button type="submit">Sign Up</Button>
      </div>
    </AuthFormWrapper>
  );
};

export default SignUpForm;
