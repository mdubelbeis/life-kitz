const SignUpForm: React.FC = () => {
  return (
    // Form with email, username, and password fields
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="button">Cancel</button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
