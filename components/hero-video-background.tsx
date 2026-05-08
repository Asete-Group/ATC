"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const heroVideos = [
  "/hero-section/videos/hero-video-01.mp4",
  "/hero-section/videos/hero-video-02.mp4",
  "/hero-section/videos/hero-video-03.mp4",
  "/hero-section/videos/hero-video-04.mp4",
] as const;

export function HeroVideoBackground() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playCurrentVideo = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.removeAttribute("controls");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    video.play().catch(() => {
      // Browsers can briefly block autoplay while the source changes.
    });
  }, []);

  useEffect(() => {
    playCurrentVideo();
  }, [activeVideo, playCurrentVideo]);

  function playNextVideo() {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  }

  return (
    <video
      key={heroVideos[activeVideo]}
      ref={videoRef}
      className="pointer-events-none size-full object-cover"
      src={heroVideos[activeVideo]}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      disablePictureInPicture
      controls={false}
      onCanPlay={playCurrentVideo}
      onLoadedData={playCurrentVideo}
      onEnded={playNextVideo}
      onError={playNextVideo}
    />
  );
}
