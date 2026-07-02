import React from "react";
import BubbleBackground from "./Bubblebackground";
//series poster 
import Got from "../../../assets/Series-Posters/Got.jpg"

// movie poster
import shawshank from "../../../assets/Movies Posters/shawshank_redemption.jpg"
import TWoWS from "../../../assets/Movies Posters/TWoWS.jpg"

// anime poster


const Landingmain = () => {
  return (
    <>
      <div className="relative w-full bg-[#080808] ">
        <div className="relative  w-full bg-[#080808] ">
          <div className="absolute inset-0  overflow-hidden">
            <div className="w-full h-full blur-sm">
              <BubbleBackground />
            </div>
          </div>
          <div
            className="absolute inset-0  z-10 pointer-events-none flex flex-col items-center mt-[200px]"
            style={{ opacity: "1" }}
          >
            <div className="w-[250px] h-[50px] md:w-[300px] md:h-[60px] lg:w-[400px] lg:h-[80px] relative z-30">
              {/*Logo*/}
              <img
                alt="Moctale Logo"
                decoding="async"
                data-nimg="fill"
                className="object-contain"
                src="https://www.moctale.in/Moctale-logo-HQ.svg"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
          </div>

          <div className="relative z-20">
            <div className="h-[30vh] lg:h-[40vh]"></div>
            <div className="-mb-12" style={{ opacity: "1" }}>
              <div
                className="relative w-full backdrop-blur-sm"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 100px)",
                  maskImage: "linear-gradient(transparent, black 100px)",
                }}
              >
                <div className="container mx-auto pl-3 pr-4 lg:pl-6 lg:claspr-8 xl:pl-14 xl:pr-16 2xl:pl-[120px] 2xl:pr-[128px] pt-20 lg:pt-40">
                  <div className="grid grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
                    <div className="flex flex-col gap-4 transitiom-transform duration-300">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src={Got}
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src={shawshank}
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src={TWoWS}
                          style={{}}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover  h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Series-Posters/BBS5.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[300px] w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/DPS.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          fetchpriority="low"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%]   w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/HP.jpg"
                          style={{}}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 transitiom-transform duration-300">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Series-Posters/DS6.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/TGF.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/Accepted.jpg"
                          style={{}}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Series-Posters/AKOSK.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/TMW.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Anime-Posters/TDN.jpg"
                          style={{}}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 transitiom-transform duration-300">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Series-Posters/Panchayat.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Anime-Posters/DBZ.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Series-Posters/Suits.jpg"
                          style={{}}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24 hidden lg:flex">
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Anime-Posters/Naruto.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Movies-Posters/Avengers-Doomsday.jpg"
                          style={{}}
                        />
                      </div>
                      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                        <img
                          alt="Movie poster 1"
                          decoding="async"
                          loading="lazy"
                          data-nimg="fill"
                          className="object-cover absolute h-[100%] w-full inset-0 text-transparent"
                          src="/assets/Anime-Posters/SL.jpg"
                          style={{}}
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[500px] bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent pointer-events-none z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingmain;
