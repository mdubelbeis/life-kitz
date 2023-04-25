import { useRouter } from "next/router";
import Link from "next/link";

interface FormsWrapperProps {
  children: React.ReactNode;
}

const FormsWrapper: React.FC<FormsWrapperProps> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <section className="mx-auto flex h-full w-full max-w-2xl items-center justify-center text-center">
      {/* THIS DIV IS THE FORM WRAPPER FOR LOGIN AND SIGNUP */}
      <div className="flex w-full flex-col justify-center rounded bg-secondary p-2">
        {children}
      </div>
      <div>
        {pathname === '/login' ? (
          <Link href="/signup" className="flex justify-center gap-3 text-white">
            <span>Want an account?</span>
            <span className="text-quinary underline underline-quinary">Sign-up</span>
          </Link>
        ) : (
          <Link href="/login" className="flex justify-center gap-3 text-white">
            <span>Already have an account?</span>
            <span className="text-quinary underline underline-quinary">
              Log in
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default FormsWrapper;
