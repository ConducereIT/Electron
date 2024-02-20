import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/Logo2.svg";
export default function HeaderMobile() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  let content;
  if (nav) {
    content = (
      <div className="fixed h-screen w-screen p-0 bg-black/95 grid place-items-center items-center z-20 px-10 py-20 top-0 left-0">
        <a
          onClick={handleNav}
          href="#AboutUs"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 ">
              About Us
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Challenges"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left ">
              Challenges
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Premii"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 ">
              Premii
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Juriu"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 ">
              Juriu
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Program"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              Program
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Parteneri"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              Parteneri
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#FAQ"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              FAQ
            </p>
          </button>
        </a>
        <a
          onClick={handleNav}
          href="#Contact"
          className="pb-2 w-1/2 border-[#ffc947]"
        >
          <button>
            <p className="text-white/90 text-frumos text-nowrap pr-10 ">
              Contact
            </p>
          </button>
        </a>
      </div>
    );
  }
  return (
    <>
      {/* <div>
        <div className="  bg-black">
          <AiOutlineMenu
            onClick={handleNav}
            className="fixed top-8 right-4 z-[99] md:hidden text-blue-950 outline-4 font-extrabold"
            size={20}
            color="white"
          />
        </div>
        {content}
      </div> */}
      <div>
        {nav && (
          <IoMdClose
            onClick={handleNav}
            className=" fixed top-8 right-5 z-[99] md:hidden text-blue-950 outline-4 font-extrabold"
            size={30}
            color="white"
          />
        )}
        <div className="   fixed flex justify-between w-full top-0 left-0 px-5 py-4 bg-[#091931]">
          <img src={Logo} alt="Logo" />
          {!nav && (
            <AiOutlineMenu
              onClick={handleNav}
              className=" z-[99] md:hidden text-blue-950 outline-4 font-extrabold"
              size={20}
              color="white"
            />
          )}
        </div>
        {content}
      </div>
    </>
  );
}