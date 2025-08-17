import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-slate-300 shadow-xl/70">
        <section className="flex items-center pl-5">
          <img
            className="h-10 w-10"
            src="https://res.cloudinary.com/drzqzizv1/image/upload/v1755195051/NightKuro_xvhlbo.png"
          />
          <h2 className="font-extrabold text-blue-950 text-2xl ">NightKuro</h2>
        </section>
        <nav className="flex gap-6 pr-8">
          <Link
            to="/"
            className="text-blue-950 text-lg font-bold hover:text-sky-700 hover:underline hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out "
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-blue-950 text-lg font-bold hover:text-sky-700 hover:underline hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          >
            Collection
          </Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
