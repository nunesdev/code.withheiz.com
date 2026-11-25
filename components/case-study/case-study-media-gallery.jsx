"use client";

import { useCallback, useEffect, useState } from "react";

function FigureCard({ figure, onOpen }) {
  return (
    <figure className="flex max-h-[500px] w-full shrink-0 flex-col rounded-md border border-zinc-200 bg-surface dark:border-zinc-800 md:w-[calc(50%-0.5rem)]">
      <button
        type="button"
        onClick={() => onOpen(figure)}
        className="flex min-h-0 flex-1 cursor-zoom-in flex-col items-center justify-center rounded-t-md border-0 bg-zinc-50 p-3 dark:bg-zinc-900/50"
      >
        <img
          src={figure.src}
          alt={figure.alt}
          className="mx-auto max-h-[410px] w-auto object-contain"
        />
      </button>
      {figure.caption ? (
        <figcaption className="border-t border-zinc-200 px-3 py-2 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function GalleryCarousel({ figures, onOpen, lightboxOpen }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsMd(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const visibleCount = isMd ? 2 : 1;
  const maxIndex = Math.max(0, figures.length - visibleCount);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  useEffect(() => {
    if (paused || lightboxOpen || figures.length <= visibleCount) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, lightboxOpen, maxIndex, figures.length, visibleCount]);

  const trackOffset = isMd
    ? `translateX(calc(-${index} * (50% + 0.5rem)))`
    : `translateX(calc(-${index} * (100% + 1rem)))`;

  const isBulletActive = (slideIndex) => {
    if (!isMd) return slideIndex === index;
    if (index === maxIndex) return slideIndex === figures.length - 1;
    return slideIndex === index;
  };

  const goToSlide = (slideIndex) => {
    const nextIndex = isMd ? Math.min(slideIndex, maxIndex) : slideIndex;
    setIndex(nextIndex);
    setPaused(true);
  };

  return (
    <div
      className="space-y-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden" aria-roledescription="carousel">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ transform: trackOffset }}
        >
          {figures.map((figure) => (
            <FigureCard
              key={figure.src}
              figure={figure}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Gallery slides"
      >
        {figures.map((figure, slideIndex) => {
          const active = isBulletActive(slideIndex);
          return (
            <button
              key={figure.src}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Go to slide ${slideIndex + 1} of ${figures.length}: ${figure.alt}`}
              onClick={() => goToSlide(slideIndex)}
              className={
                active
                  ? "h-2 w-5 rounded-full bg-zinc-900 transition-all dark:bg-zinc-100"
                  : "h-2 w-2 rounded-full bg-zinc-300 transition-all hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-500"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export function CaseStudyMediaGallery({ heroFigure, galleryFigures }) {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  const openLightbox = useCallback((figure) => {
    setActive(figure);
  }, []);

  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  if (!heroFigure && !galleryFigures?.length) return null;

  return (
    <section className="not-prose space-y-6" aria-label="Project visuals">
      {heroFigure ? (
        <figure className="space-y-2">
          <button
            type="button"
            onClick={() => openLightbox(heroFigure)}
            className="flex w-full cursor-zoom-in justify-center overflow-hidden rounded-md border border-border bg-background p-3"
          >
            <img
              src={heroFigure.src}
              alt={heroFigure.alt}
              className="mx-auto max-h-[500px] w-auto object-contain"
            />
          </button>
          {heroFigure.caption ? (
            <figcaption className="text-center text-xs leading-relaxed text-muted-foreground">
              {heroFigure.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {galleryFigures?.length ? (
        <GalleryCarousel
          figures={galleryFigures}
          onOpen={openLightbox}
          lightboxOpen={Boolean(active)}
        />
      ) : null}

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] max-w-[min(96vw,56rem)] rounded-md border border-border bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[calc(90vh-4rem)] w-auto object-contain"
            />
            {active.caption ? (
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {active.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}