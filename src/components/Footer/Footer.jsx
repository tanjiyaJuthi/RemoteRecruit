import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import footerBg from "../../assets/images/footer-bg.png";
import navLogo from "../../assets/images/nav-logo.png";
import icon from "../../assets/images/icon.png";
import SocialIcon from "../shared/SocialIcon";

const Footer = () => {
    const socials = [
        {
        icon: <FaFacebookF />,
        label: "Facebook",
        href: "#",
        },
        {
        icon: <FaInstagram />,
        label: "Instagram",
        href: "#",
        },
        {
        icon: <FaXTwitter />,
        label: "X",
        href: "#",
        },
        {
        icon: <FaTwitter />,
        label: "Twitter",
        href: "#",
        },
        {
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        href: "#",
        },
    ];
        
    return (
        <div
            className="
                header-wrapper
                min-h-150
                lg:min-h-screen
                bg-cover
                bg-center
                bg-no-repeat
                text-white
                mt-10
                md:mt-20
                lg:mt-65
                px-5
                lg:px-0
                pt-20
                md:pt-0
            "
            style={{
                backgroundImage: `url(${footerBg})`,
            }}
        >
            <div className="footer-wrapper max-w-334 mx-auto mb-40">
                <div
                    className="
                        grid
                        grid-cols-1
                        items-center
                        gap-8
                        pt-20
                        lg:grid-cols-2
                        lg:pt-110
                    "
                >
                    <img
                        src={navLogo}
                        alt="Remote Recruit"
                        className="w-40"
                    />

                    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-self-end">
                        {socials.map((social) => (
                        <SocialIcon
                            key={social.label}
                            icon={social.icon}
                            label={social.label}
                            href={social.href}
                            className="bg-[#3d63a4] text-white"
                        />
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-[#8ba3cc]"></div>

            <div>
                <img className="mx-auto pt-6" src={icon} alt="Remote Recuit Sign" />
            </div>
        </div>
    );
};

export default Footer;