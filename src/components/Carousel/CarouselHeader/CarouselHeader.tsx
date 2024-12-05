import React, { useCallback } from 'react';
import { Button, Controls, Header, Title } from "../styles";

interface CarouselHeaderProps {
  handleScroll: (direction: 'prev' | 'next') => void;
}

const CarouselHeader: React.FC<CarouselHeaderProps> = ({ handleScroll }) => {
  const handlePrev = useCallback(() => handleScroll('prev'), [handleScroll]);
  const handleNext = useCallback(() => handleScroll('next'), [handleScroll]);

  return (
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
  );
};

export default React.memo(CarouselHeader);