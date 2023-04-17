import Link from 'next/link';
import AuthFormWrapper from '../auth/AuthFormWrapper';
import Button from './Button';

const LoginForm: React.FC = () => {
  return (
    <AuthFormWrapper>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
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
        <Button type="submit">Login</Button>
      </div>
    </AuthFormWrapper>
  );
};

export default LoginForm;
