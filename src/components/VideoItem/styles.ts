import styled from "styled-components";

export const Video = styled.video`
  width: 100%;
  height: 532px; /* Fixed height */
  border-radius: 8px;
  object-fit: cover;
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  right: 5px;
  gap: 12px;
`;

export const VideoContainer = styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ active }) => (active ? "2px solid #69a2ff" : "2px solid transparent")};
`;
