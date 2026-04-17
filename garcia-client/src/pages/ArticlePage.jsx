import { useParams } from "react-router-dom";
import Button from "../components/Button";
import articles from "../assets/article-content";

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 via-zinc-900 to-indigo-900 text-white px-4">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-950/75 p-10 text-center">
          <h2 className="text-4xl font-semibold mb-6">Article not found</h2>
          <p className="text-zinc-400 mb-8">
            The article you requested is not available. Please choose another one from the list.
          </p>
          <Button to="/articles" variant="primary" className="px-8 py-3">
            Back to Articles
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className="flex w-full flex-col gap-10 bg-gradient-to-b from-slate-900 via-zinc-900 to-indigo-900 text-white">
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Article
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            {article.title}
          </h1>
          {article.image && (
            <>
              <div className="mt-8 mx-auto overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl max-w-4xl">
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  className="h-[400px] w-full object-cover"
                />
              </div>
              {article.imageCaption && (
                <p className="mt-3 mx-auto max-w-3xl text-sm text-zinc-400">
                  {article.imageCaption}
                </p>
              )}
            </>
          )}
          <p className="mt-6 mx-auto max-w-3xl text-center text-zinc-300 leading-7">
            {article.content[0]}
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/articles" variant="primary" className="px-8 py-3">
              Back to Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/60 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center text-zinc-300">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
