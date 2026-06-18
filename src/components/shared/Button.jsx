const Button = ({ children, href = "#", className = "" }) => {
  return (
    <a
      href={href}
      className={`rounded-xl border border-white/10 bg-[#49a1c7] px-6 py-2 font-bold text-sm text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#3d91b5] ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;