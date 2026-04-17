import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-[calc(100vh-6rem)] bg-gradient-to-b from-slate-900 via-zinc-900 to-indigo-900 text-white py-24">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-lime-500 mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-zinc-300 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" className="px-8 py-3">
            Go Home
          </Button>
          <Button to="/articles" variant="secondary" className="px-8 py-3">
            View Articles
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-zinc-500 text-sm">Lost in the digital void? 🕳️</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;