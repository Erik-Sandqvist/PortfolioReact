import React, { useState, useEffect, useRef, useCallback } from "react";

export function Carousel({
  images = [],          // [{ src, alt, caption }]
  autoPlay = 5000,      // ms eller false
  showIndicators = true,
  showArrows = true,
  loop = true,
  className = ""
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const timerRef = useRef(null);

  const goTo = useCallback(
    (i) => {
      if (!total) return;
      setIndex(loop ? (i + total) % total : Math.max(0, Math.min(i, total - 1)));
    },
    [total, loop]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    timerRef.current = setTimeout(next, autoPlay);
    return () => clearTimeout(timerRef.current);
  }, [index, autoPlay, next, total]);

  if (!total) return null;

  return (
    <div className={`relative ${className}`} role="region" aria-label="Bildkarusell">
      <div className="overflow-hidden rounded-lg mb-5">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <figure key={i} className="w-full shrink-0 flex flex-col items-center bg-black/5 dark:bg-white/5">
              <img
                src={img.src}
                alt={img.alt || `Bild ${i + 1}`}
                className="w-full object-cover aspect-video"
                draggable="false"
                loading="lazy"
              />
              {img.caption && (
                <figcaption className="p-2 text-sm text-center text-text-secondary">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {showArrows && total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-primary hover:bg-secondary px-2 py-1 rounded shadow"
            aria-label="Föregående"
          >‹</button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-primary hover:bg-secondary px-2 py-1 rounded shadow"
            aria-label="Nästa"
          >›</button>
        </>
      )}

      {showIndicators && total > 1 && (
        <div className="flex gap-2 justify-center mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Gå till bild ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-primary scale-125" : "bg-primary/50 hover:bg-primary/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}