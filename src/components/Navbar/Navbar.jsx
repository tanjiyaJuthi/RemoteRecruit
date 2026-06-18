import navLogo from "../../assets/images/nav-logo.png";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <section className="navbar-wrapper mx-auto max-w-[1336px] px-5 lg:px-0">
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

          <Button href="/signup">
            Sign Up
          </Button>
        </nav>

      </header>
    </section>
  );
};

export default Navbar;