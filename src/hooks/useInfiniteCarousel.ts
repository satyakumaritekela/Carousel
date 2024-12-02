import { useState, useRef, useEffect, useCallback } from "react";
import { MediaItem } from "../components/Carousel/types";

const useInfiniteCarousel = (media: MediaItem[]) => {
  const [visibleItems, setVisibleItems] = useState<MediaItem[]>([]); // Items currently rendered
  const containerRef = useRef<HTMLDivElement | null>(null);

  const totalItems = media.length;

  // Determine how many items to show based on screen width
  const getVisibleItemCount = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 5;
    if (width >= 768) return 3;
    return 1;
  };

  const updateVisibleItems = useCallback(
    (startIndex: number) => {
      const visibleCount = getVisibleItemCount();
      const newVisibleItems = [];
      for (let i = 0; i < visibleCount + 1; i++) {
        newVisibleItems.push(media[(startIndex + i) % totalItems]);
      }
      setVisibleItems(newVisibleItems);
    },
    [media, totalItems]
  );

  const scrollToPosition = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // Handle next action
  const handleNext = () => {
    setVisibleItems((prev) => {
      const nextIndex = (media.indexOf(prev[prev.length - 1]) + 1) % totalItems;
      const firstItem = prev.slice(1);
      const nextItem = media[nextIndex];
      return [...firstItem, nextItem];
    });
    scrollToPosition();
  };

  // Handle previous action
  const handlePrev = () => {
    setVisibleItems((prev) => {
      const prevIndex =
        (media.indexOf(prev[0]) - 1 + totalItems) % totalItems;
      const lastItem = prev.slice(0, prev.length - 1);
      const prevItem = media[prevIndex];
      return [prevItem, ...lastItem];
    });
    scrollToPosition();
  };

  // Adjust visible items when media or screen width changes
  useEffect(() => {
    updateVisibleItems(0); // Start from the first index initially
    const handleResize = () => updateVisibleItems(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateVisibleItems]);

  return {
    containerRef,
    visibleItems,
    handleNext,
    handlePrev,
  };
};

export default useInfiniteCarousel;