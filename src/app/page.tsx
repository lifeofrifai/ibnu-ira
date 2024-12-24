"use client";
import React, { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Schedule from "@/components/Schedule";
import Particles from "@/components/ui/particles";
import Greeting from "@/components/Greeting";
import Footer from "@/components/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to autoplay the audio when the page loads
    const autoplayAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true); // Update state to reflect that music is playing
        } catch (error) {
          console.log("Autoplay failed:", error); // Most likely due to browser restrictions
        }
      }
    };
    autoplayAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-[#353535] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Particles
        className="absolute inset-0"
        quantity={20}
        ease={50}
        color={"#ffffff"}
        refresh
      />

      {/* Music Controller */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleMusic}
          className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/akad.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Content */}
      <Hero />
      <Content />
      <Schedule />
      <Greeting />
      <Footer />
    </div>
  );
}
