import styled from "styled-components";

export const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  // make it right side
  right: 5px;
  gap: 12px;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
