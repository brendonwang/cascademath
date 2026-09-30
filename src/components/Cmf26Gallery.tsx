import { useEffect, useLayoutEffect, useRef } from "react";
import { PageSection, SectionIntro } from "@/components/PageSection";
import type { Cmf26PhotoSection } from "@/content/cmf26-photos";

const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function masonryPlacements(heights: readonly number[], columnCount: number, gap: number) {
  const columnHeights = Array<number>(columnCount).fill(0);
  let nextColumn = 0;
  const positions = heights.map((height) => {
    const shortestHeight = Math.min(...columnHeights);
    const column = columnHeights[nextColumn] <= shortestHeight + gap
      ? nextColumn
      : columnHeights.indexOf(shortestHeight);
    const top = columnHeights[column];
    columnHeights[column] += height + gap;
    nextColumn = (column + 1) % columnCount;
    return { column, top };
  });

  return {
    positions,
    height: Math.max(0, ...columnHeights) - (heights.length ? gap : 0),
  };
}

function Cmf26PhotoMasonry({ photos }: { photos: Cmf26PhotoSection["photos"] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useBrowserLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || typeof ResizeObserver === "undefined") return;

    let active = true;
    let lastWidth = 0;
    let lastColumnCount = 0;
    const layout = (force = false) => {
      if (!active) return;
      const width = grid.clientWidth;
      if (!width) return;

      const styles = window.getComputedStyle(grid);
      const columnCount = styles.gridTemplateColumns.split(/\s+/).filter(Boolean).length;
      if (!force && width === lastWidth && columnCount === lastColumnCount) return;

      const columnGap = Number.parseFloat(styles.columnGap) || 0;
      const rowGap = Number.parseFloat(styles.rowGap) || 0;
      const columnWidth = (width - columnGap * (columnCount - 1)) / columnCount;
      const figures = Array.from(grid.children) as HTMLElement[];

      figures.forEach((figure) => {
        figure.style.position = "absolute";
        figure.style.width = `${columnWidth}px`;
      });

      const layout = masonryPlacements(
        figures.map((figure) => figure.getBoundingClientRect().height),
        columnCount,
        rowGap,
      );
      figures.forEach((figure, index) => {
        const { column, top } = layout.positions[index];
        figure.style.left = `${column * (columnWidth + columnGap)}px`;
        figure.style.top = `${top}px`;
      });

      grid.style.height = `${layout.height + (Number.parseFloat(styles.paddingBottom) || 0)}px`;
      lastWidth = width;
      lastColumnCount = columnCount;
    };

    const observer = new ResizeObserver(() => layout());
    observer.observe(grid);
    const contentChanged = () => layout(true);
    grid.addEventListener("load", contentChanged, true);
    grid.addEventListener("error", contentChanged, true);
    void document.fonts.ready.then(contentChanged);
    layout(true);

    return () => {
      active = false;
      observer.disconnect();
      grid.removeEventListener("load", contentChanged, true);
      grid.removeEventListener("error", contentChanged, true);
    };
  }, [photos]);

  return (
    <div
      ref={gridRef}
      className="relative grid grid-cols-1 gap-x-6 gap-y-8 pb-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {photos.map((photo) => (
        <figure className="min-w-0" key={photo.src}>
          <img
            className="h-auto w-full rounded-lg"
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 break-words text-[0.95rem] leading-relaxed text-muted-foreground">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Cmf26Gallery({ sections }: { sections: readonly Cmf26PhotoSection[] }) {
  return (
    <PageSection id="photos" className="scroll-mt-24" aria-labelledby="photos-heading">
      <SectionIntro>
        <h2 id="photos-heading">CMF26 photos</h2>
      </SectionIntro>
      <div className="divide-y border-y">
        {sections.map((section) => (
          <details open key={section.title}>
            <summary className="cursor-pointer py-4 font-semibold text-foreground marker:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {section.title}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {section.photos.length} photos
              </span>
            </summary>
            <Cmf26PhotoMasonry photos={section.photos} />
          </details>
        ))}
      </div>
    </PageSection>
  );
}
