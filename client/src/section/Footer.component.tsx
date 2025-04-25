import FooterLogo from "../assets/FooterLogo.svg"
import Terms from "../assets/Terms and Conditions.svg"
import Privacy from "../assets/Privacy Policy.svg"
import FaceBook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
import Linkedin from "../assets/LinkedIn.svg"

const Footer = () => {

    return (
        <>
            <div className="w-[80%] h-full  mx-auto relative">
                <a><img src={FooterLogo} alt="Electron Logo" className="pt-16"/></a>
                <a><img onClick={() => console.log("terms")} src={Terms} alt="Terms and Conditions"
                        className="pt-8  ml-[2%] hover:underline"/> </a>
                <a><img onClick={() => console.log("Privacy")} src={Privacy} alt="Terms and Conditions"
                        className="pt-5  ml-[2%] hover:underline"/> </a>
                <h3 className="font-source-code-pro mx-auto -mt-16">Bd. Iuliu Maniu 1-3, București 061071</h3>
                <h3 className="font-source-code-pro mx-auto pt-5">lse.electron@gmail.com</h3>
                <div className=" h-auto w-auto absolute right-36 -mt-14 flex">
                    <img className="cursor-pointer hover:cursor-grab"
                        onClick={() => window.open('https://www.facebook.com/electron.hackathon', '_blank')}
                         src={FaceBook} alt="FaceBook"/>
                    <img className="cursor-pointer hover:cursor-grab"
                        onClick={() => window.open('https://www.instagram.com/electron.hackathon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                        src={Instagram} alt="Instagram"/>
                    <img className="cursor-pointer hover:cursor-grab"
                         onClick={() => window.open('https://www.linkedin.com/company/electronlse/', '_blank')}
                         src={Linkedin} alt="LinkedIn"/>
                </div>
                <h6 className="font-source-code-pro mt-8 text-left  text-xs">© Copyrights 2024 | All Rights
                    Reserved</h6>
            </div>
        </>
    );
}

export default Footer;
