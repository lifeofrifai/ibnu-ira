"use client";
import BlurFade from "@/components/ui/blur-fade";
import Meteors from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";


export default function Hero() {


  return (
  <div className="flex flex-col w-screen h-screen items-center justify-center  relative  overflow-hidden ">
      <Meteors number={40} />
    <section id="header" className="flex flex-col items-center">
      <BlurFade delay={1} inView>
        <span className="text-pretty text-3xl tracking-tighter sm:text-3xl xl:text-4xl/none text-center ">
          💍
        </span>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <span className="text-pretty text-xl tracking-tighter lg:text-4xl/none text-center text-[#EFE0CD]">
          You're invited to the wedding of
        </span>
      </BlurFade>
      <BlurFade delay={1} inView>
        <h2 className="text-7xl font-bold tracking-tighter lg:text-6xl/none text-center bg-clip-text text-transparent bg-gradient-to-b from-[#EFE0CD]  to-[#d8b383] style-script-regular shadow-sm">
          Ibnu & Ira
        </h2>
      </BlurFade>
      {/* <BlurFade delay={0.75} inView>
        <span className="text-pretty text-base tracking-tighter sm:text-3xl xl:text-4xl/none text-center text-red-900 bg-white rounded-full p-1">
          Sabtu, 11 Januari 2025
        </span>
      </BlurFade> */}
      <BlurFade delay={1.3} inView>
      <a className="z-10 flex min-h-20 items-center justify-center mt-20 shadow-sm animate-bounce" href="#konten"
      >
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-[#EFE0CD]  text-base text-gray-500 transition-all ease-in hover:cursor-pointer hover:bg-[#cfc2b2] ",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-gray-600">
            <span>💌 View Invitation </span>
          </AnimatedShinyText>
        </div>
      </a>
      </BlurFade>
    </section>

  </div>
  )
}