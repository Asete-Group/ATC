"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

const heroVideos = [
  "/hero-section/videos/hero-video-01.mp4",
  "/hero-section/videos/hero-video-02.mp4",
  "/hero-section/videos/hero-video-03.mp4",
  "/hero-section/videos/hero-video-04.mp4",
] as const;

export function HeroVideoBackground() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const prepareAndPlayVideo = useCallback((src = heroVideos[activeVideo]) => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.autoplay = true;
    video.removeAttribute("controls");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (video.getAttribute("src") !== src) {
      video.setAttribute("src", src);
      video.load();
    }

    video.play().catch(() => {
      // Browsers can briefly block autoplay while the source changes.
    });
  }, [activeVideo]);

  useLayoutEffect(() => {
    prepareAndPlayVideo();
  }, [prepareAndPlayVideo]);

  function playNextVideo() {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  }

  return (
    <video
      ref={videoRef}
      className="hero-background-video pointer-events-none size-full object-cover"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      disablePictureInPicture
      controls={false}
      onCanPlay={() => prepareAndPlayVideo()}
      onLoadedData={() => prepareAndPlayVideo()}
      onEnded={playNextVideo}
      onError={playNextVideo}
    />
  );
}
