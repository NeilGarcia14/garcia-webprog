import Button from "../../components/Button";
import ArticleList from "../../components/ArticleList";
import articles from "../../assets/data/article-content.js";

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-gradient-to-b from-slate-900 via-zinc-900 to-indigo-900 text-white">
      <section className="border-y border-white/10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
          Articles
        </p>

        <h1 className="max-w-xl text-4xl sm:text-5xl font-extrabold leading-tight text-white">
          Thoughtful write-ups for modern web development.
        </h1>

        <p className="mt-4 max-w-lg text-zinc-300 leading-7">
          Explore a curated set of articles that dive into React patterns, UI design, routing, and component architecture.
          These posts are built to help you understand how I translate project ideas into polished user experiences.
        </p>

        <div className="mt-6">
          <Button to="/" variant="primary">
            Back Home
          </Button>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Featured Articles
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Articles that showcase core frontend skills.
          </h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;
