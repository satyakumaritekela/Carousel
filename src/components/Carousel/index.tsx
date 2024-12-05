import React from "react";
import {
  Section,
  CarouselWrapper,
  CarouselItem
} from "./styles";
import { MediaItem } from "./types";
import useInfiniteCarousel from "../../hooks/useInfiniteCarousel";
import VideoController from "../VideoController";
import LazyVideoItem from "../VideoController/LazyVideoItem/LazyVideoItem";
import CarouselHeader from "./CarouselHeader/CarouselHeader";

const Carousel: React.FC<{ media: MediaItem[] }> = ({ media }) => {
  const { getVideoItems, handleScroll } =
    useInfiniteCarousel(media);

  return (
    <Section>
      <CarouselHeader handleScroll={handleScroll} />
      <CarouselWrapper>
        {getVideoItems().map((item, index) => (
          <CarouselItem key={item.id} active={index === 0} id={item.id}>
            {item.type === "video" && (
              <LazyVideoItem item={item}>
                <VideoController src={item.src} isActive={index === 0} />
              </LazyVideoItem>
            )}
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
};

export default Carousel;
