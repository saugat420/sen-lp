"use client";

import Player from "@vimeo/player";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function VimeoPlayer({ videoUrl }: { videoUrl: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;
    player.getDuration().then(setDuration).catch(() => undefined);
    player.getMuted().then(setIsMuted).catch(() => undefined);
    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));
    player.on("ended", () => setIsPlaying(false));
    player.on("volumechange", ({ volume }) => setIsMuted(volume === 0));
    player.on("timeupdate", ({ seconds, duration: videoDuration }) => {
      setCurrentTime(seconds);
      setDuration(videoDuration);
    });

    return () => {
      playerRef.current = null;
    };
  }, []);

  async function togglePlayback() {
    if (!playerRef.current) return;
    if (isPlaying) await playerRef.current.pause();
    else {
      await playerRef.current.setMuted(false);
      await playerRef.current.setVolume(1);
      setIsMuted(false);
      await playerRef.current.play();
    }
  }

  async function toggleMute() {
    if (!playerRef.current) return;
    const nextMuted = !isMuted;
    await playerRef.current.setMuted(nextMuted);
    if (!nextMuted) await playerRef.current.setVolume(1);
    setIsMuted(nextMuted);
  }

  async function seek(event: ChangeEvent<HTMLInputElement>) {
    if (!playerRef.current) return;
    const nextTime = Number(event.target.value);
    setCurrentTime(nextTime);
    await playerRef.current.setCurrentTime(nextTime);
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-black">
      <div className="aspect-video">
        <iframe
          ref={iframeRef}
          src={`${videoUrl}?controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1`}
          title="Workshop introduction video"
          className="h-full w-full"
          allow="autoplay; picture-in-picture"
        />
      </div>
      <div className="flex items-center gap-3 bg-black px-4 py-3">
        <button type="button" onClick={togglePlayback} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15" aria-label={isPlaying ? "Pause video" : "Play video"}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M7 5h3v14H7V5Zm7 0h3v14h-3V5Z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
          )}
        </button>
        <button type="button" onClick={toggleMute} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15" aria-label={isMuted ? "Turn video sound on" : "Mute video"}>
          {isMuted ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true"><path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z" /><path d="m16 9 5 6m0-6-5 6" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true"><path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z" /><path d="M15 9.5a4 4 0 0 1 0 5M18 7a7.5 7.5 0 0 1 0 10" /></svg>
          )}
        </button>
        <input type="range" min="0" max={duration || 1} step="0.1" value={Math.min(currentTime, duration || 1)} onChange={seek} aria-label="Video timeline" className="h-1 w-full cursor-pointer accent-[#ef2029]" />
      </div>
    </div>
  );
}
