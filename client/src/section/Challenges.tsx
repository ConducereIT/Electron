import { Fragment, useState } from "react";

import ChallengesText from "../assets/Challenges.svg";
import BlurAlabstru4 from "../assets/bluralabstru4.svg";
import BlurPurple5 from "../assets/BlurPurple5.svg";
import BlurAlabstru6 from "../assets/BlurAlbastru6.svg";
import Proba1 from "../assets/Proba1.svg";
import Proba2 from "../assets/Proba2.svg";
import Proba3 from "../assets/Proba3.svg";
import CheckIcon from "../assets/Check icon.svg";
// import JuratiButton from "../../assets/JuratiButton.svg"
import PremiiML from "../assets/Premii-ML&AI.svg";
import PremiiCapture from "../assets/PrizeCTF_pc.svg";
import PremiiConnect from "../assets/PrizeCon_pc.svg";

export const Challenges = () => {
  const [expandedDiv, setExpandedDiv] = useState<number | null>(0);
  const extendBox = (index: number) => {
    if (index === expandedDiv) {
      setExpandedDiv(null);
    } else {
      setExpandedDiv(index);
    }
  };

  return (
    <>
      <img
        id="Challenges"
        src={BlurAlabstru4}
        alt="Blur"
        className="absolute -mt-96 -translate-y-44 -ml-96 -z-10 opacity-85"
      />
      <img
        src={BlurPurple5}
        alt="blur"
        className="absolute -mt-72 -translate-y-44 right-0 mr-80 -translate-x-10 -z-10 opacity-85 scale-125"
      />
      <img
        src={BlurAlabstru6}
        alt="blue"
        className="absolute mt-20 scale-125 mr-36 -translate-y-44 right-0  translate-x-10 -z-10 opacity-85"
      />
      <img
        src={ChallengesText}
        alt="Challenges Text"
        className="scale-125 absolute left-1/2 transform -translate-x-1/2 -mt-36"
      />
      <div className="mb-44 font-source-code-pro">
        <div className="flex justify-between">
          <div
            className={`w-[30%] relative ${
              expandedDiv === 1 ? "h-[80%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[110%] relative top-2 ${
                expandedDiv === 1 ? "mt-10" : "mt-5"
              }`}
              src={Proba1}
              alt=""
            />

            {expandedDiv === 1 ? (
              <div className={` bg-white h-[80%] mt-4`}>
                <h1 className="text-lg tracking-tighter text-left ml-5 mt-[10%]  text-black font-bold">
                Această probă oferă o experiență practică în utilizarea modelelor de computer vision, dar și data analysis.
                Participanții vor interacționa cu tehnologii avansate de prelucrare de date, explorând aplicații esențiale în domeniul inteligenței artificiale.
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Computer Vision</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Data Analysis</h3>
                  </div>
                  {/* <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>Digital Forsenics</h3>
                  </div> */}
                </div>

                {/*<div className="text-black flex text-lg ml-5 mt-10" >*/}
                {/*    <img src={JuratiButton} alt=""/>*/}
                {/*    <h3 className="ml-5" >Vezi List Jurati</h3>*/}
                {/*</div>*/}
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div
              className={`flex mt-5 -ml-10 ${
                expandedDiv === 1 ? "mb-5" : "mb-5"
              }`}
            >
              <button
                onClick={() => extendBox(1)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <span className="text-black">{"🛈"}</span>
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                  <span className="mr-2 scale-100 font-bold ">
                    Inscrie-te aici
                  </span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img src={PremiiML} className="absolute -z-10 scale-[200%] right-2" />
            </div>
          </div>
          <div
            className={`w-[30%] relative ${
              expandedDiv === 2 ? "h-[80%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[110%] relative top-2 ${
                expandedDiv === 2 ? "mt-10" : "mt-5"
              }`}
              src={Proba2}
              alt=""
            />

            {expandedDiv === 2 ? (
              <div className={`bg-white h-[80%] w-[100%] mt-4`}>
                <h1 className="text-lg tracking-tighter text-left ml-5 mt-[10%]  text-black font-bold">
                Această probă se adresează persoanelor orientate spre gândirea neconvențională, prin intermediul provocărilor din diverse arii de studiu. Se va testa abilitatea de a deduce și aplica în mod practic informațiile teoretice acumulate.
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Hardware Hacking</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Cyber Security</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>Signal Processing</h3>
                  </div>
                </div>

                {/*<div className="text-black flex text-lg ml-5 mt-10">*/}
                {/*    <img src={JuratiButton} alt=""/>*/}
                {/*    <h3 className="ml-5">Vezi List Jurati</h3>*/}
                {/*</div>*/}
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div
              className={`flex mt-5 -ml-10 ${
                expandedDiv === 2 ? "mb-5" : "mb-5"
              }`}
            >
              <button
                onClick={() => extendBox(2)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <span className="text-black">{"🛈"}</span>
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                  <span className="mr-2 scale-100 font-bold">
                    Inscrie-te aici
                  </span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img
                src={PremiiCapture}
                className="absolute -z-10 scale-[200%]  -right-1"
              />
            </div>
          </div>

          <div
            className={`w-[30%] relative  ${
              expandedDiv === 3 ? "h-[80%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[110%] relative top-2 ${
                expandedDiv === 3 ? "mt-10" : "mt-5"
              }`}
              src={Proba3}
              alt=""
            />

            {expandedDiv === 3 ? (
              <div className={` bg-white h-[80%] w-[100%] mt-6`}>
                <h1 className="text-lg tracking-tighter text-left ml-5 mt-[10%]  text-black font-bold">
                Această probă îi provoacă pe participanți să rezolve probleme tehnice din domenii diverse, punându-le la încercare logica, creativitatea și capacitatea de a aplica cunoștințele teoretice în mod practic.
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Hardware Hacking</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Cyber Security</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>Signal processing</h3>
                  </div>
                </div>

                {/*<div className="text-black flex text-lg ml-5 mt-10">*/}
                {/*    <img src={JuratiButton} alt=""/>*/}
                {/*    <h3 className="ml-5">Vezi List Jurati</h3>*/}
                {/*</div>*/}
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div
              className={`flex mt-5 -ml-10 ${
                expandedDiv === 3 ? "mb-5" : "mb-5"
              }`}
            >
              <button
                onClick={() => extendBox(3)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <span className="text-black">{"🛈"}</span>
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                  <span className="mr-2 scale-100 font-bold">
                    Inscrie-te aici
                  </span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img
                src={PremiiConnect}
                className="absolute -z-10 scale-[200%] left-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
