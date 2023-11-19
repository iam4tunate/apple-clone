import PROMOCHIP from "../assets/promo_chip.png";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero2 = ({ bgImg, title, text, textDark, chip }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full bg-cover h-[630px] bg-center flex justify-center"
    >
      <div
        className={`${
          textDark ? "text-dark" : "text-white"
        } text-center translate-y-16`}
      >
        <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
          {title}
        </div>
        <div
          className={`${
            chip && "flex items-center gap-x-1"
          } text-[1.2rem] max-[1068px]:text-[1.1rem] leading-none pt-2 pb-4`}
        >
          <span>{text}</span>{" "}
          {chip && <img src={PROMOCHIP} alt="" className="w-[1.8rem]" />}
        </div>
        <div className="text-blue flex items-center justify-center">
          <span className="text-[1.1rem]">Learn more</span>
          <IoChevronForwardOutline className="text-base pt-[2px]" />
        </div>
      </div>
    </div>
  );
};
export default Hero2;
