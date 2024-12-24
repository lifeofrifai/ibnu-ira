"use client";
import React, { useState, useEffect } from "react";
import BlurFade from "@/components/ui/blur-fade";

export default function Schedule() {
  const [countdownAkad, setCountdownAkad] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [countdownPreh, setCountdownPreh] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate remaining time
  const calculateTimeLeft = (eventDate: any) => {
    const now = new Date();
    const eventDateTime = new Date(eventDate).getTime();
    const difference = eventDateTime - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    const akadDate = "2025-01-03T10:00:00";
    const prehDate = "2025-01-11T11:00:00";

    const timer = setInterval(() => {
      setCountdownAkad(calculateTimeLeft(akadDate));
      setCountdownPreh(calculateTimeLeft(prehDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-10 p-6" >
      <BlurFade delay={1} inView>
        <h1 className="style-script-regular text-4xl font-bold text-[#d8b383] text-center mt-20">
          Save The Date
        </h1>
      </BlurFade>

      {/* Akad Nikah */}
      <BlurFade delay={1} inView>
      <div className="w-full mb-20 bg-gradient-to-b from-[#EFE0CD] to-[#e7d1b4] rounded-2xl flex flex-col items-center px-5 py-14 gap-10">
        <div className="text-center flex flex-col gap-1">
          <p className="text-6xl">💍</p>
          <p className="text-3xl style-script-regular font-bold">Akad Nikah</p>
          <p className="text-gray-800">Jumat 03 Januari 2025 (10:00 WIB)</p>
          <p className="text-gray-800">Mesjid Keuchik Leumik</p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1162021143705!2d95.33408617623311!3d5.549786294430566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040376f3439dbed%3A0xc358f85208f11c!2sMasjid%20Haji%20Keuchik%20Leumiek!5e0!3m2!1sid!2sid!4v1735061168952!5m2!1sid!2sid"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-center flex flex-row gap-3">
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownAkad.days}</p>
            <p className="text-sm">Hari</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownAkad.hours}</p>
            <p className="text-sm">Jam</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownAkad.minutes}</p>
            <p className="text-sm">Menit</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownAkad.seconds}</p>
            <p className="text-sm">Detik</p>
          </div>
        </div>
      </div>
      </BlurFade>

      {/* Preh Dara Baroe */}
      <BlurFade delay={1} inView>
      <div className="w-full mb-20 bg-gradient-to-b from-[#EFE0CD] to-[#e7d1b4] rounded-2xl flex flex-col items-center px-5 py-14 gap-10">
        <div className="text-center flex flex-col gap-1">
          <p className="text-6xl">💌</p>
          <p className="text-3xl style-script-regular font-bold">
            Preh Dara Baroe
          </p>
          <p className="text-gray-800">Jumat 11 Januari 2025 (11:00 WIB)</p>
          <p className="text-gray-800">
            Jl. Bandara Sultan Iskandar Muda Desa Gani Kecamatan Ingin Jaya
          </p>
          <div className="flex items-center w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d958.0434404102816!2d95.37968940600354!3d5.51376350477387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1735061785592!5m2!1sid!2sid"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-center flex flex-row gap-3">
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownPreh.days}</p>
            <p className="text-sm">Hari</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownPreh.hours}</p>
            <p className="text-sm">Jam</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownPreh.minutes}</p>
            <p className="text-sm">Menit</p>
          </div>
          <div className="bg-[#353535] p-3 rounded-xl text-white">
            <p className="font-bold text-xl">{countdownPreh.seconds}</p>
            <p className="text-sm">Detik</p>
          </div>
        </div>
      </div>
      </BlurFade>
    </div>
  );
}
