import { useState } from "react";
import { MediaItem } from "../components/Carousel/types";

const useInfiniteCarousel = (media: MediaItem[]) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const bufferCount = 1;

  const getVideoItems = () => {
      const totalItems = media.length;
      return Array.from(
          { length: visibleCount + 2 * bufferCount },
          (_, i) => media[(startIndex + i - bufferCount + totalItems) % totalItems]
      );
  };

  const handleScroll = (direction) => {
      setStartIndex((prevIndex) =>
          direction === "right"
              ? (prevIndex + 1) % media.length
              : (prevIndex - 1 + media.length) % media.length
      );
  };

  return {
    getVideoItems, handleScroll
  };
};

export default useInfiniteCarousel;