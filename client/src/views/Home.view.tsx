import React from "react";

import LaptopSVG from "../assets/laptop.svg";
import { Countdow } from "../components/Countdown.component.tsx";
import { MainText } from "../components/MainText.component.tsx";
import Header from "../components/Header.component.tsx";
import BlueBlur from "../assets/Blur.svg";
import PurpleBlur from "../assets/PurpleBlur.svg";
import BlurAlbastru3 from "../assets/BLurAlbastru3.svg";

// import BlueBlurFooter from "../assets/FooterBlur1.svg"
// import PurpleBlurFooter from "../assets/FooterBlur2.svg"
import LaptopMobileSVG from "../assets/LaptopMobile.svg";
// Sections
import { Challenges } from "../section/Challenges.tsx";
// import {JuriuSection} from "../section/Juriu.component.tsx";
import Footer from "../section/Footer.component.tsx";
import MainTextMobile from "../components/MainTextMobile.component.tsx";
import { CountdownMobile } from "../components/CountdownMobile.component.tsx";
import HeaderMobile from "../components/HeaderMobile.Component.tsx";
import Location from "../assets/Frame 12.svg";
import Date from "../assets/Frame 13.svg";
import { ChallengesMobile } from "../section/ChallengesMobile.tsx";
import FooterMobile from "../section/FooterMobile.component.tsx";
const Home = () => {
  return (
    <React.Fragment>
      {/* Desktop */}
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="hidden md:block">
        <img
          id="AboutUs"
          className="absolute -left-96 -ml-28 -top-80 opacity-95 -z-10"
          src={BlueBlur}
          alt=""
        />
        <img
          className="absolute scale-125 left-64 rounded-full top-96 opacity-95 -z-10"
          src={PurpleBlur}
          alt=""
        />
        <img
          className="absolute right-0 translate-y-44  opacity-96 -z-10"
          src={BlurAlbastru3}
          alt=""
        />
      </div>
      <div className="hidden md:block mt-30  h-auto w-auto">
        <div className="h-96 mt-40 mb-20 z-10">
          <MainText />
          <a href="">
            <button
              className="bg-[#FFC947] rounded-md mb-10 text-black w-60 flex items-center absolute mt-8 h-12 left-1/2 transform -translate-x-1/2"
              onClick={() =>
                window.open(
                  "https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3",
                  "_blank"
                )
              }
            >
              <span className="mr-2 scale-125 absolute left-10 font-bold">
                Inscrie-te aici
              </span>
              <div className="absolute right-2.5">
                <span className="  bg-black text-white rounded-full h-6 w-6 flex justify-center items-center">
                  <span className="text-white  ">{">"}</span>
                </span>
              </div>
            </button>
          </a>
        </div>
        <div className="h-full w-full mt-60 ">
          <div className="absolute z-10 left-[30%] -mt-10 right-[30%]">
            <Countdow numarMinute={10} />
          </div>
          <img className="md:mt-10 scale-150" src={LaptopSVG} alt="" />
        </div>
      </div>
      <div id="" className="hidden md:block mt-96 h-auto w-auto">
        <Challenges />
      </div>

      <div id="Juriu" className="hidden md:block mt-3 h-48 mt-5  w-auto">
        {/*<JuriuSection />*/}
      </div>

      <div className="hidden md:block mt-8 w-[100%] bg-[#000000] absolute h-80  left-0 mt-20">
        <Footer />
      </div>

      {/* Mobile */}
      <div className=" mt-10">
        <div className="md:hidden object-contain">
          <img
            className="absolute scale-100 -top-20 -left-40 opacity-95 rounded-full -z-10"
            src={BlueBlur}
            alt=""
          />
          <img
            className="absolute scale-125 top-72  -left-32 opacity-90  rounded-full -z-10"
            src={PurpleBlur}
            alt=""
          />
          <img
            className="absolute scale-75 top-24 left-0  opacity-70  rounded-full -z-10"
            src={BlurAlbastru3}
            alt=""
          />
        </div>
        <div className="md:hidden">
          <HeaderMobile />
        </div>
        <div className="md:hidden" id="AboutUs">
          <MainTextMobile />
          <a
            href="https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3"
            target="_blank"
            className="flex justify-center"
          >
            <button className="bg-[#FFC947] rounded-lg text-frumos my-10 p-6 text-black w-60 flex justify-center items-center absolute">
              <span className="mr-2 scale-125 absolute pr-4 font-bold">
                Inscrie-te aici
              </span>
              <div className="absolute right-2.5">
                <span className="  bg-black text-white rounded-full h-6 w-6 flex justify-center items-center">
                  <span className="text-white  ">{">"}</span>
                </span>
              </div>
            </button>
          </a>
        </div>

        <div className="md:hidden mx-auto">
          <div className="h-full w-full mt-60 flex justify-center ">
            <div className="absolute z-10  ">
              <CountdownMobile numarMinute={10} />
            </div>
            <img
              className="absolute md:mt-10 object-contain w-[90%] -translate-y-8"
              src={LaptopMobileSVG}
              alt="Laptop"
            />
            <img
              src={Location}
              className=" absolute z-10 -translate-y-40"
              alt="Location"
            />
            <div className="  my-80"></div>
            <img
              src={Date}
              className=" absolute z-20 translate-y-10 "
              alt="Date"
            />
          </div>
        </div>
        <div className="md:hidden mx-auto  mt-12">
          <ChallengesMobile />
        </div>
        <div className="md:hidden mx-auto ">
          <FooterMobile />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
