import OrangeLogo from "../assets/OrangeLogo.svg";
import TextLogo from "../assets/textlogo.svg";
export const MainText = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img className="h-48" src={TextLogo} alt="" />
      </div>

      <h3 className="text-frumos text-2xl  h-20 mt-4">
        :: Hackathon developed with LSE x ETTI ::
      </h3>
      <div className="flex justify-center">
        <h3 className="text-frumos text-1xl h-20 -mt-14 flex items-center">
          powered by
          <img className="ml-3" src={OrangeLogo} alt="" />
        </h3>
      </div>
    </>
  );
};
