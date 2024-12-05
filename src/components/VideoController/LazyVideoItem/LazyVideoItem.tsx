import React, { useRef, useEffect } from "react";
import { MediaItem } from "../../Carousel/types";

type LazyVideoItemProps = {
  item: MediaItem;
  children: React.ReactNode;
};

const LazyVideoItem = ({ item, children }: LazyVideoItemProps) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (item.type === "image") {
            const img: HTMLMediaElement = ref.current;
            img.src = item.src; // Set source when in view
          } else if (item.type === "video") {
            const video:HTMLVideoElement = ref.current;
            video.preload = "auto"; // Preload video
          }
        }
      },
      { rootMargin: "200px" } // Start preloading when 200px away from view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [item]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default LazyVideoItem;