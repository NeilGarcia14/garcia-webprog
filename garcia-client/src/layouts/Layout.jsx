import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-stone-900 to-indigo-900 text-white">
      <NavBar />
      <main className="pb-16 pt-24 px-4 sm:px-6 lg:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
