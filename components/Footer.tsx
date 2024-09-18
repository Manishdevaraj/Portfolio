import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const icons = [
    { id: 1, component: <CiLinkedin className="text-2xl text-white" />, Link: "https://www.linkedin.com/in/manishdevaraj" },
    { id: 2, component: <FaSquareInstagram className="text-2xl text-white" />, Link: "https://www.instagram.com/yourprofile" },
    { id: 3, component: <FaSquareXTwitter className="text-2xl text-white" />, Link: "https://www.twitter.com/yourprofile" },
  ];

  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center text-white">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:manishdevaraj03@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-5 flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {icons.map((icon) => (
            <div key={icon.id}>
              <a href={icon.Link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                {icon.component}
              </a>
            </div>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © {new Date().getFullYear()} Manish Devaraj
        </p>
      </div>
    </footer>
  );
};

export default Footer;
