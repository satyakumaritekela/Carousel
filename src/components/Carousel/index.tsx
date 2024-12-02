import React from "react";
import {
  Section,
  Header,
  Title,
  Controls,
  Button,
  CarouselWrapper,
  CarouselItem
} from "./styles";
import { MediaItem } from "./types";
import useInfiniteCarousel from "../../hooks/useInfiniteCarousel";
import VideoItem from "../VideoItem";

const Carousel: React.FC<{ media: MediaItem[] }> = ({ media }) => {
  const { containerRef, handleNext, handlePrev, currentIndex } =
    useInfiniteCarousel(media);

  return (
    <Section>
      <Header>
        <Title>Carousel Title</Title>
        <Controls>
          <Button onClick={handlePrev} aria-label="Previous">
            <div className="arrow left" />
          </Button>
          <Button onClick={handleNext} aria-label="Next">
            <div className="arrow right" />
          </Button>
        </Controls>
      </Header>
      <CarouselWrapper ref={containerRef}>
        {media.map((item, index) => (
          <CarouselItem key={item.id} active={index === currentIndex}>
            {item.type === "video" && (
              <VideoItem src={item.src} isActive={index === currentIndex} />
            )}
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
};

export default Carousel;
