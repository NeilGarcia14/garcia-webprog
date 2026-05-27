import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { createUser } from "../../services/api";

const inputClasses =
  "mt-2 w-full rounded-3xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((current) => ({
      ...current,
      [field]: value,
      ...(field === "email" && !current.username ? { username: value.split("@")[0] } : {}),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await createUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username || formData.email.split("@")[0],
        password: formData.password,
        type: "Viewer",
        isActive: true,
      });
      setMessage("Account created successfully. You can now log in if your role is allowed.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white">Create your account</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Sign up to access your personalized portfolio dashboard.
      </p>

      {message && <p className="mt-4 text-sm leading-5 text-lime-300">{message}</p>}
      {error && <p className="mt-4 text-sm leading-5 text-red-400">Error: {error}</p>}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signup-name" className="block text-sm font-semibold text-slate-200">
            First Name
          </label>
          <input
            id="signup-name"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-last-name" className="block text-sm font-semibold text-slate-200">
            Last Name
          </label>
          <input
            id="signup-last-name"
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            required
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
            value={formData.email}
            onChange={handleChange("email")}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-username" className="block text-sm font-semibold text-slate-200">
            Username
          </label>
          <input
            id="signup-username"
            type="text"
            placeholder="johndoe"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange("username")}
            required
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
            value={formData.password}
            onChange={handleChange("password")}
            minLength={8}
            required
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
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            minLength={8}
            required
            className={inputClasses}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="w-full rounded-3xl py-3 text-xs font-bold uppercase tracking-wider"
        >
          {loading ? "Signing Up..." : "Sign Up"}
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
