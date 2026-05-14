import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-[0.7fr_1.3fr] bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      {/* Left side content */}
      <div className="flex flex-col justify-center px-10 py-16 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
          Sign In
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight max-w-md">
          Access your developer workspace.
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-300 max-w-md">
          Manage projects, settings, and drafts in one place with a consistent experience across devices.
        </p>
        <div className="mt-10 space-y-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 max-w-md">
          <p className="font-semibold text-white">Why sign in?</p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>• Store progress and manage your projects.</li>
            <li>• Keep settings, links, and article drafts in one place.</li>
            <li>• Use a consistent site experience across devices.</li>
          </ul>
        </div>

        {/* Back to Homepage */}
        <Link
          to="/"
          className="mt-10 inline-block rounded-3xl border border-lime-400 px-6 py-3 text-sm font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-slate-950"
        >
          ← Back to Homepage
        </Link>
      </div>

      {/* Right side content */}
      <main className="flex items-center justify-center px-10 py-16 lg:px-24">
        <div className="w-full max-w-md rounded-[2rem] bg-slate-900/80 p-12 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default AuthLayout;
