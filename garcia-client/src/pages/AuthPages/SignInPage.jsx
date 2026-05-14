import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-3xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white";

const SignInPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">Welcome back</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Enter your credentials to continue to the portfolio dashboard.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="signin-email" className="block text-sm font-semibold text-slate-200">
            Email address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="block text-sm font-semibold text-slate-200">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Use a password with at least 8 characters for secure access.
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-slate-950 accent-lime-500"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-semibold text-lime-400 transition hover:text-lime-200"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full rounded-3xl py-3 text-xs font-bold uppercase tracking-wider"
        >
          Log In
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
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="font-bold text-white transition hover:text-lime-300">
          Create one now
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
