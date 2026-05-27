const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const loginUser = (payload) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getUsers = () => request("/users");

export const createUser = (payload) =>
  request("/users", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateUser = (id, payload) =>
  request(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteUser = (id) =>
  request(`/users/${id}`, {
    method: "DELETE",
  });

export const getArticles = () => request("/articles");

export const getArticleByName = (name) => request(`/articles/${name}`);

export const createArticle = (payload) =>
  request("/articles", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateArticle = (id, payload) =>
  request(`/articles/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteArticle = (id) =>
  request(`/articles/${id}`, {
    method: "DELETE",
  });
