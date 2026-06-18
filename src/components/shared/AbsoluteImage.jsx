const AbsoluteImage = ({
  src,
  alt = "",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute ${className}`}
    />
  );
};

export default AbsoluteImage;