import { useState, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='hsl(220 15%25 18%25)' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='hsl(220 10%25 40%25)'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const OptimizedImage = ({
  src,
  alt = "",
  fallbackSrc,
  className,
  loading = "lazy",
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc || PLACEHOLDER);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
