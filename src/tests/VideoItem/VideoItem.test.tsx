import React from "react";
import { render, fireEvent } from "@testing-library/react";
import VideoItem from "../../components/VideoItem";

describe("VideoItem Component", () => {
  it("renders the video with controls hidden", () => {
    const { getByAltText } = render(<VideoItem src="/video.mp4" isActive={false} />);
    expect(getByAltText("Play/Pause")).toBeInTheDocument();
  });

  it("plays video when 'Play' is clicked", () => {
    const { getByAltText } = render(<VideoItem src="/video.mp4" isActive />);
    const playButton = getByAltText("Play/Pause");

    fireEvent.click(playButton);
    expect(getByAltText("Play/Pause")).toHaveAttribute("src", "/icons/pause.svg");
  });

  it("toggles mute state when 'Sound' is clicked", () => {
    const { getByAltText } = render(<VideoItem src="/video.mp4" isActive />);
    const soundButton = getByAltText("Sound Toggle");

    fireEvent.click(soundButton);
    expect(getByAltText("Sound Toggle")).toHaveAttribute("src", "/icons/sound_off.svg");
  });
});
