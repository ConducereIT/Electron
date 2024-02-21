import OrangeLogo from "../assets/OrangeLogo.svg";
import TextLogo from "../assets/textlogo.svg";

export default function MainTextMobile() {
  return (
    <>
      <div className="flex justify-center items-center object-contain ">
        <img className="" src={TextLogo} alt="" />
      </div>

      <h3 className="text-frumos text-sm mt-8 mb-4">
        Hackathon developed by LSE x ETTI
      </h3>
      <div className="flex justify-center">
        <h3 className="text-frumos text-sm flex items-center">
          powered by Orange <img className=" ml-4" src={OrangeLogo} alt="" />
        </h3>
      </div>
    </>
  );
}
