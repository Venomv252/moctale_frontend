import React from "react";
import BubbleBackground from "./Bubblebackground";
import GOT from "../../../assets/Series-Posters/Got.jpg";
import TSsR from "../../../assets/Movies Posters/shawshank_redemption.jpg"
import TWoWS from "../../../assets/Movies Posters/TWoWS.jpg"
import BB from "../../../assets/Movies Posters/BB.jpg"
import BBS5 from "../../../assets/Series-Posters/BBS5.jpg"
import AKOSK from "../../../assets/Series-Posters/AKOSK.jpg"
import DS6 from "../../../assets/Series-Posters/DS6.jpg"
import Panchayat from "../../../assets/Series-Posters/Panchayat.jpg"
import DPS from "../../../assets/Movies Posters/DPS.jpg"
import HP from "../../../assets/Movies Posters/HP.jpg"
import TMW from "../../../assets/Movies Posters/TMW.jpg"
import TGF from "../../../assets/Movies Posters/TGF.jpg"
import Accepted from "../../../assets/Movies Posters/Accepted.jpg"
import Avengers from "../../../assets/Movies Posters/Avengers-Doomsday.jpg"
import TDN from "../../../assets/Anime-Poster/TDN.jpg"
import DBZ from "../../../assets/Anime-Poster/DBZ.jpg"
import Naruto from "../../../assets/Anime-Poster/Naruto.jpg"
import SL from "../../../assets/Anime-Poster/SL.jpg"
import suits from "../../../assets/Series-Posters/Suits.jpg"


const Landingmain = () => {
  return (
    <>
      <div className="relative w-full bg-[#080808]">
        <div className="relative  w-full bg-[#080808]  z-0">
          <BubbleBackground />
          <div
            className="fixed inset-0 z-1 pointer-events-none flex flex-col items-center mt-[200px]"
            style={{ opacity: "1" }}
          >
            <div className="w-[250px] h-[50px] md:w-[300px] md:h-[60px] lg:w-[400px] lg:h-[80px] relative">
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
            <div className="-mb-12" style={{opacity:"1"}} >
              <div className="relative w-full backdrop-blur-sm" style={{WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100px)", maskImage: "linear-gradient(transparent, black 100px)"}}>
                <div className="container mx-auto pl-3 pr-4 lg:pl-6 lg: pr-8 xl:pl-14 xl:pr-16 2xl:pl-[120px] 2xl:pr-[128px] pt-20 lg:pt-40">
                <div className="grid grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
                  <div className="flex flex-col gap-4 transitiom-transform duration-300">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={GOT} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={TSsR} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={TWoWS} style={{}}/>
                    </div>
                    
                    
                    
                  </div>
                  <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover  h-[100%] w-full inset-0 text-transparent" src={BBS5} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[300px] w-full inset-0 text-transparent" src={DPS} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" fetchpriority="low" data-nimg ="fill" className="object-cover absolute h-[100%]   w-full inset-0 text-transparent" src={HP} style={{}}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 transitiom-transform duration-300">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={DS6} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={TGF} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={Accepted} style={{}}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={AKOSK} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={TMW} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={TDN} style={{}}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 transitiom-transform duration-300">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={Panchayat} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={DBZ} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={suits} style={{}}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 transitiom-transform duration-300 -translate-y-12 md:-translate-y-24 hidden lg:flex">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={Naruto} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={Avengers} style={{}}/>
                    </div>
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-neutral-900">
                    <img alt ="Movie poster 1" decoding="async" loading="lazy" data-nimg ="fill" className="object-cover absolute h-[100%] w-full inset-0 text-transparent" src={SL} style={{}}/>
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
