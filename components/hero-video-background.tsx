"use client";

import { useEffect, useRef, useState } from "react";

const heroVideos = [
  "/hero-section/videos/hero-video-01.mp4",
  "/hero-section/videos/hero-video-02.mp4",
  "/hero-section/videos/hero-video-03.mp4",
  "/hero-section/videos/hero-video-04.mp4",
] as const;

export function HeroVideoBackground() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.play().catch(() => {
      // Browsers can briefly block autoplay while the source changes.
    });
  }, [activeVideo]);

  function playNextVideo() {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  }

  return (
    <video
      key={heroVideos[activeVideo]}
      ref={videoRef}
      className="size-full object-cover"
      src={heroVideos[activeVideo]}
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden
      onEnded={playNextVideo}
      onError={playNextVideo}
    />
  );
}
