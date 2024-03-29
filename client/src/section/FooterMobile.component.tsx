import { CiInstagram, CiLinkedin } from "react-icons/ci";
import FooterLogo from "../assets/FooterLogo.svg";
import { IoLogoFacebook } from "react-icons/io";

const FooterMobile = () => {
  return (
    <>
      <footer className="  h-[35rem] -mb-12 -mx-8 mt-12 bg-black">
        <div className=" flex justify-center flex-col items-center py-12">
          <img src={FooterLogo} alt="footer-logo" className="scale-[70%]" />
          <p className="text-frumos pb-4 pt-8 text-sm">
            Bd. Iuliu Maniu 1-3, București 061071
          </p>
          <p className="text-frumos py-4 text-xs">lse.electron@gmail.com</p>
          <p className="text-frumos py-4 text-xs">Terms and Conditions</p>
          <p className="text-frumos py-4 text-xs">Privacy Policy</p>
          <div className="flex justify-between gap-10 pt-12 ">
            <a
              className=" border p-2 rounded-lg"
              href="https://www.instagram.com/electron.lse"
              target="_blank"
            >
              <CiInstagram size={20} className="text-white" />
            </a>
            <a
              className=" border p-2 rounded-lg "
              href="https://www.facebook.com/electronbylse"
              target="_blank"
            >
              <IoLogoFacebook size={20} className="text-white" />
            </a>
            <a
              className=" border p-2 rounded-lg"
              href="https://www.linkedin.com/company/electronlse/"
              target="_blank"
            >
              <CiLinkedin size={20} className="text-white" />
            </a>
          </div>
          <p className=" text-[0.55rem] text-frumos pt-12">
            © Copyright 2024 | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterMobile;
