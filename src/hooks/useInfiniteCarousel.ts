import { useState, useRef, useEffect, useCallback } from "react";
import { MediaItem } from "../components/Carousel/types";

const useInfiniteCarousel = (media: MediaItem[]) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at the first item
  const containerRef = useRef<HTMLDivElement | null>(null);

  const totalItems = media.length;

  // Get circular index to handle infinite scrolling
  const getCircularIndex = (index: number) => {
    return (index + totalItems) % totalItems;
  };

  // Navigation Handlers
  const handleNext = () => {
    setCurrentIndex((prev) => getCircularIndex(prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => getCircularIndex(prev - 1));
  };

  // Smoothly scroll to the current index
  const scrollToIndex = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.firstChild
        ? (container.firstChild as HTMLElement).clientWidth + 12 // Item width + gap
        : 312;
  
      const totalItems = media.length;
      const circularIndex = (currentIndex + totalItems) % totalItems; // Ensure the index wraps circularly
  
      const scrollPosition = circularIndex * itemWidth;
  
      // Rearrange items in the DOM for seamless circular scrolling
      const children = Array.from(container.children) as HTMLElement[];
      if (circularIndex === 0) {
        // Move the last item to the beginning
        container.insertBefore(children[children.length - 1], children[0]);
      } else if (circularIndex === totalItems - 1) {
        // Move the first item to the end
        container.appendChild(children[0]);
      }
  
      // Apply smooth transition
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = `translateX(-${scrollPosition}px)`;
  
      // Reset transition after the animation for seamless experience
      setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = `translateX(0px)`; // Reset transform to align with the rearranged items
      }, 500);
    }
  }, [currentIndex, media.length]);
  

  useEffect(() => {
    scrollToIndex();
  }, [currentIndex, scrollToIndex]);

  return {
    containerRef,
    currentIndex,
    handleNext,
    handlePrev,
  };
};

export default useInfiniteCarousel;
