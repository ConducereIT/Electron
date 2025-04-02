import { Fragment, useState } from "react";

import Proba1 from "../assets/Proba1.svg";
import Proba2 from "../assets/Proba2.svg";
import Proba3 from "../assets/Proba3.svg";
import CheckIcon from "../assets/Check icon.svg";
// import JuratiButton from "../../assets/JuratiButton.svg"
import PremiiML from "../assets/PremiiML.svg";
import PremiiCapture from "../assets/PrizeCTF.svg";
import PremiiConnect from "../assets/PrizeCon.svg";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const ChallengesMobile = () => {
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
      <p className="text-4xl font-bold mb-10 text-white text-frumos -mt-32">
        Challenges
      </p>
      <div className=" mb-20 font-source-code-pro select-none ">
        <div className="flex flex-col justify-center ">
          <div
            className={`relative mb-20 ${
              expandedDiv === 1 ? "h-[50%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[90%] relative top-2 ${
                expandedDiv === 1 ? "mt-10" : "mt-5"
              }`}
              src={Proba1}
              alt="Proba1"
            />

            {expandedDiv === 1 ? (
              <div className={` bg-white  mt-4`}>
                <h1 className="text-lg tracking-tighter text-left ml-5  text-black ">
                  Scopul acestei probe consta in dezvoltarea unui sistem
                  specializat pentru imbunatatirea, restaurarea si analiza
                  imaginilor in contextul securitatii, cu utilizarea
                  tehnologiilor de inteligenta artificiala
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="CheckIcon" className="mr-5" />
                    <h3 className="mr-6">Super Resolution</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="CheckIcon" className="mr-5" />
                    <h3 className="mr-6">Denoising</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="CheckIcon" className="mr-5" />
                    <h3>Digital Forsenics</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div className={`flex my-5 ${expandedDiv === 1 ? "mb-5" : "mb-5"}`}>
              <button
                onClick={() => extendBox(1)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <IoMdInformationCircleOutline />
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=40a121ba7d8ac969b5d08e041632f81ad4a599d11f054d4d1812ac94f480c4e34b4a9548de58bdf3"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black  flex items-center justify-center h-12">
                  <span className=" text-sm font-bold ">Inscrie-te aici</span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6  justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img
                src={PremiiML}
                about="Premii"
                className="absolute flex justify-center -right-0 -mt-24 scale-[130%] -z-10 "
              />
            </div>
          </div>

          <div
            className={`relative mt-28 mb-20 ${
              expandedDiv === 2 ? "h-[50%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[90%] relative top-2 ${
                expandedDiv === 2 ? "mt-10" : "mt-5"
              }`}
              src={Proba2}
              alt=""
            />

            {expandedDiv === 2 ? (
              <div className={` bg-white  mt-4`}>
                <h1 className="text-lg tracking-tighter text-left ml-5  text-black ">
                  Proba se adresează celor orientați spre gândirea creativă și
                  neconvențională, prin intermediul unor provocări structurate
                  care acoperă diverse discipline. Scopul este testarea
                  abilitatea de a deduce și aplica în mod practic informațiile
                  teoretice acumulate
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Audio-video</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Embeded Systems</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>Cyber Security</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>FPGA design</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div className={`flex my-5 ${expandedDiv === 2 ? "mb-5" : "mb-5"}`}>
              <button
                onClick={() => extendBox(2)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <IoMdInformationCircleOutline />
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=89f43e3accaf616a26c74767c31b4b9d4c33810a0564d2fcd0d4c4d1394c706d356100a2496721d5"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black  flex items-center justify-center h-12">
                  <span className=" text-sm font-bold ">Inscrie-te aici</span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6  justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img
                src={PremiiCapture}
                about="Premii"
                className="absolute flex justify-center -right-0 -mt-24 scale-[130%] -z-10 "
              />
            </div>
          </div>
          <div
            className={`relative my-28 mb-20 ${
              expandedDiv === 3 ? "h-[50%]" : "h-[30%]"
            } bg-white flex flex-col justify-center items-center rounded-xl transition-all duration-500`}
          >
            <img
              className={`mb-4 scale-[90%] relative top-2 ${
                expandedDiv === 3 ? "mt-10" : "mt-5"
              }`}
              src={Proba3}
              alt=""
            />

            {expandedDiv === 3 ? (
              <div className={` bg-white  mt-4`}>
                <h1 className="text-lg tracking-tighter text-left ml-5  text-black ">
                  Proba oferă participanților posibilitatea de a-și testa
                  aptitudinile în calitate de viitori ingineri electroniști,
                  familiarizându-se în același timp cu dispozitivele integrate
                  și protocoalele de comunicare asociate.
                </h1>

                <div className="text-black mt-10 ml-5 ">
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Communication Protocols</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3 className="mr-6">Embedded Systems</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={CheckIcon} alt="" className="mr-5" />
                    <h3>Reverse Engineering</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden h-0 w-0"></div>
            )}

            <div className={`flex mt-5 ${expandedDiv === 3 ? "mb-5" : "mb-5"}`}>
              <button
                onClick={() => extendBox(3)}
                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12"
              >
                <span>
                  <IoMdInformationCircleOutline />
                </span>
              </button>
              <a
                href="https://cyber-edu.co/register?token=89f43e3accaf616a26c74767c31b4b9d4c33810a0564d2fcd0d4c4d1394c706d356100a2496721d5"
                target="_blank"
              >
                <button className="bg-[#FFC947] rounded-md text-black  flex items-center justify-center h-12">
                  <span className=" text-sm font-bold ">Inscrie-te aici</span>
                  <span className="inline-block bg-black text-white rounded-full h-6 w-6  justify-center items-center ml-5">
                    {" "}
                    <Fragment></Fragment>
                    <span className="text-white">{">"}</span>
                  </span>
                </button>
              </a>
              <img
                src={PremiiConnect}
                about="Premii"
                className="absolute flex justify-center right-0 -mt-24 scale-[130%] -z-10 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
