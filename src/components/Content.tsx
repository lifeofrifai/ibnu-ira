"use client";
import BlurFade from "@/components/ui/blur-fade";
import Particles from "@/components/ui/particles";
export default function Content() {


  return (
  <div className="flex flex-col gap-16 w-screen h-screen p-10 justify-center " id="konten" >
      <Particles
        className="absolute inset-0"
        quantity={20}
        ease={50}
        color={"#ffffff"}
        refresh
      />
    <section id="header" className="flex flex-col">
      <div>
      <BlurFade delay={1} inView>
        <h2 className="text-3xl text-center font-bold tracking-tighter xl:text-6xl/none text-[#d8b383]  style-script-regular">
        Assalamu'alaikum Wr. Wb.
        </h2>
      </BlurFade>
      <BlurFade delay={2} inView className="text-gray-200 text-center text-sm">
        <p>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :</p>
        </BlurFade>
      </div>
    </section>

    <section id="header" className="flex flex-col">
      <div>
      <BlurFade delay={2} inView>
        <p className=" text-6xl">🤵🏻‍♂️</p>
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none text-left text-[#d8b383]  style-script-regular">
        Ibnu Zardan
        </h2>
      </BlurFade>
      <BlurFade delay={3} inView className="text-gray-300 text-sm">
        <p>Putra Dari</p>
        <p>Bapak Alm <span className="font-semibold">Ramli Aji </span></p>
        <p>Ibu <span className="font-semibold">Mariani Abdullah</span></p>
        </BlurFade>
      </div>
    </section>
    <section id="header" className="flex flex-col ">
      <div>
      <BlurFade delay={3} inView duration={4}>
        <h2 className="text-9xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none text-center bg-clip-text text-transparent bg-gradient-to-b from-[#EFE0CD]  to-[#d8b383]  style-script-regular">
          &
        </h2>
      </BlurFade>
      </div>
    </section>
    <section id="header" className="flex flex-col ">
      <div>
      <BlurFade delay={2} inView>
        <p className="text-right text-6xl">👰🏻‍♀️</p>
        <h2 className="text-5xl  font-bold tracking-tighter sm:text-6xl xl:text-6xl/none text-right text-[#d8b383] style-script-regular">
          Zahra Afranisa 
        </h2>
      </BlurFade>
      <BlurFade delay={3} inView className="text-right text-gray-200 text-sm">
        <p>Putri Dari</p>
        <p>Bapak <span className="font-semibold">Yustom, M.Si</span></p>
        <p>Ibu <span className="font-semibold">Cut Karolina, S.E</span></p>
      </BlurFade>
      </div>
    </section>


  </div>
  )
}