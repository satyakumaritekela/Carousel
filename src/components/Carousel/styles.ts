import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  padding: 20px;
  background-color: #ECEBE7;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

export const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  background: #F7F8F6;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .arrow {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1px solid #000;
    border-width: 1px 1px 0 0;
    transform: rotate(0deg);
    transition: transform 0.3s ease;

    &.left {
      transform: rotate(-135deg); /* Rotates arrow to point left */
      right: 9px;
    }

    &.right {
      transform: rotate(45deg); /* Rotates arrow to point right */
      left: 9px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  gap: 12px;
`;

export const CarouselItem = styled.div<{ active: boolean }>`
  flex: 0 0 300px; /* Fixed width for each item */
  height: 532px; /* Fixed height */
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
  border: ${({ active }) => (active ? "2px solid #69A2FF" : "2px solid transparent")};
`;
