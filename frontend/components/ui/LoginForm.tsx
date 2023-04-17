import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <Link href="/">Cancel</Link>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
