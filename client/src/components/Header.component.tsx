import Logo from "../assets/Logo.svg";
interface HeaderProps {
  setOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="-mt-2 flex justify-center fixed w-4/5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative w-full h-16 bg-[#091931] border-4 border-e-4 border-s-4 border-[#749CE9] shadow-md rounded-full flex justify-between items-center px-4">
        <div className="absolute left-0 ml-10 mt-1.5 scale-125">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="absolute right-0 mr-10 space-x-7 text-2xl text-white">
          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#AboutUs"
          >
            Despre noi
          </a>
          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#Challenges"
          >
            Probe
          </a>
          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#Program"
          >
            Program
          </a>

          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#FAQ"
          >
            FAQ
          </a>
          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#Parteneri"
          >
            Parteneri
          </a>
          <a
            className="text-white hover:text-[#FFC947] hover:animate-pulse text-frumos tracking-tighter"
            href="#Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
