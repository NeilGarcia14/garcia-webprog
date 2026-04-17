import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-3xl border border-zinc-900 bg-zinc-900/70 overflow-hidden shadow-xl transition hover:-translate-y-1 hover:border-lime-500"
        >
          {article.image && (
            <div className="h-48 overflow-hidden bg-zinc-950">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          )}
          <div className="p-6">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Article {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
            <p className="text-sm leading-6 text-zinc-400 mb-6">{article.content[0].slice(0, 130)}...</p>
            <Link to={`/articles/${article.name}`}>
              <Button variant="primary" className="w-full text-sm px-5 py-3">
                Read More
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
