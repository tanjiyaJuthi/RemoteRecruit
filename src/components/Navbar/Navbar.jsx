import navLogo from "../../assets/images/nav-logo.png";

const Navbar = () => {
  return (
    <section className="navbar-wrapper mx-auto max-w-[1336px] px-5">
      <header className="flex items-center justify-between py-8">
        {/* Logo */}
        <div>
          <img
            src={navLogo}
            alt="RemoteRecruit Logo"
            className="h-auto w-40"
          />
        </div>

        {/* Auth Links */}
        <nav
          className="flex items-center gap-7 text-[14px]"
          data-purpose="auth-links"
        >
          <a
            href="#"
            className="font-semibold transition-colors hover:text-blue-200"
          >
            Sign In
          </a>

          <a
            href="#"
            className="rounded-xl border border-white/10 bg-[#49a1c7] px-6 py-2 font-bold text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#3d91b5]"
          >
            Sign Up
          </a>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;