import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-3xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white";

const SignUpPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">Create your account</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Sign up to access your personalized portfolio dashboard.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="signup-name" className="block text-sm font-semibold text-slate-200">
            Full Name
          </label>
          <input
            id="signup-name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-200">
            Email address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-200">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a strong password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Must be at least 8 characters long.
          </p>
        </div>

        <div>
          <label htmlFor="signup-confirm" className="block text-sm font-semibold text-slate-200">
            Confirm Password
          </label>
          <input
            id="signup-confirm"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            className={inputClasses}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full rounded-3xl py-3 text-xs font-bold uppercase tracking-wider"
        >
          Sign Up
        </Button>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className="rounded-3xl py-3 text-xs font-bold uppercase tracking-wider">
            Google
          </Button>
          <Button type="button" variant="secondary" className="rounded-3xl py-3 text-xs font-bold uppercase tracking-wider">
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link to="/auth/signin" className="font-bold text-white transition hover:text-lime-300">
          Log In
        </Link>
      </div>

    </div>
  );
};

export default SignUpPage;
