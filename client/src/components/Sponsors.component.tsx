import OrangeLogo from "../assets/OrangeLogo.svg";
import Gold from "../assets/Gold.svg";
import Silver from "../assets/Silver.svg";
import Bronze from "../assets/Bronze.svg";
import LSEM from "../assets/LogoWhite.webp";
import LSE from "../assets/LSE_logo.svg";
import ETTI from "../assets/ETTI-LOGO-A-1 1.svg";
import UPB from "../assets/LOGO_UPB_205 3.2.png";
import UPBM from "../assets/politehnica 1.svg";
import CyberEdu from "../assets/cyberEDU-logo-alternative 1.svg";
export default function Sponsors() {
  return (
    <>
      <div className="mt-10 lg:mt-24">
        <h3 className="text-frumos lg:mb-4 h-20 flex text-xl lg:text-3xl justify-center items-center text-white">
          Powered by
          <img
            className="ml-3 lg:ml-6 lg:scale-150 scale-125"
            src={OrangeLogo}
            alt=""
          />
        </h3>
        <div className=" grid lg:grid-cols-6 lg:mx-0 items-center place-items-center gap-2 lg:gap-0">
           <img onClick={() =>
                   window.open(
                       "https://madenn.ro/",
                       "_blank"
                   )
               }
               src={Gold} alt="Gold" className=" lg:col-span-2 scale-75 hover:cursor-pointer" />
          <img src={Silver} alt="Silver" className=" lg:col-span-2 scale-75" />
          <img src={Bronze} alt="Bronze" className="lg:col-span-2 scale-75" />
          <div className="lg:hidden mt-10">
            <p className="text-frumos text-white">
              Eveniment organizat cu sprijinul
            </p>
            <div className="flex justify-between mt-5">
              <img src={LSEM} alt="LSE" />
              <img src={ETTI} alt="Etti" />
              <img src={UPBM} alt="Etti" className="scale-[130%]" />
              <img src={CyberEdu} alt="Etti" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-10">
          <div className="grid grid-cols-7 mt-5">
            <p className="text-frumos text-2xl mt-2 col-span-3 text-white">
              Eveniment organizat cu sprijinul
            </p>
            <img src={LSE} alt="LSE" className="-mt-12 scale-[50%]" />
            <img src={ETTI} alt="Etti" className=" scale-150 pl-8 mt-5" />
            <img src={UPB} alt="Etti" className="-mt-12 scale-[50%]" />
            <img src={CyberEdu} alt="Etti" className=" scale-150  pl-8 mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}
