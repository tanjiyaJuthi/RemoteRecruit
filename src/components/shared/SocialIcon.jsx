const SocialIcon = ({
  icon,
  href = "#",
  label,
  className = "",
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 ${className}`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;