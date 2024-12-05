import React, { useState, useRef, useEffect } from "react";
import { Video, ControlsWrapper, VideoContainer } from "./styles";
import playIcon from "../../public/icons/play.svg";
import pauseIcon from "../../public/icons/pause.svg";
import soundOnIcon from "../../public/icons/sound_on.svg";
import soundOffIcon from "../../public/icons/sound_off.svg";
import { VideoProps } from "./types";
import Image from "next/image";

const VideoController = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, isActive }, ref) => {
    const internalRef = useRef<HTMLVideoElement | null>(null);
    const videoRef = (ref as React.MutableRefObject<HTMLVideoElement>) || internalRef;
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
      if (isActive && videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      } else if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }, [isActive]);

    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handleMuteToggle = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    return (
      <VideoContainer>
        <Video
          ref={videoRef}
          src={src}
          muted={isMuted}
          loop
          playsInline
          autoPlay={isActive}
        />
        {isActive && (
          <ControlsWrapper>
            <Image
              src={isMuted ? soundOffIcon : soundOnIcon}
              alt="Sound Toggle"
              width={32}
              height={32}
              style={{ cursor: "pointer" }}
              onClick={handleMuteToggle}
            />
            <Image
              src={isPlaying ? pauseIcon : playIcon}
              alt="Play/Pause"
              width={32}
              height={32}
              style={{ cursor: "pointer" }}
              onClick={handlePlayPause}
            />
          </ControlsWrapper>
        )}
      </VideoContainer>
    );
  }
);

export default React.memo(VideoController);
