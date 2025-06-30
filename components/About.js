"use client";
import { useRef, useState } from "react";

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-[470px] h-[320px] rounded-3xl overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/sample.mp4"
        muted
        loop
      />

      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 p-4 text-white h-full flex flex-col justify-center items-center text-center space-y-6">
        <button onClick={handlePlayPause} className="cursor-pointer">
          <div className="bg-white/80 p-3 rounded-full inline-block">
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 3.5A.5.5 0 0 1 6 3h1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 6 3h-1a.5.5 0 0 1-.5-.5zM9.5 3.5A.5.5 0 0 1 10 3h1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 10 3h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 1 7.5 5.5v5a.5.5 0 0 1-.79.407L4.223 8.407a.5.5 0 0 1 0-.814l2.567-1.586z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </section>
  );
}
