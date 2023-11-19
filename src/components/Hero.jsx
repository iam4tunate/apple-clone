import QUOTATION from "../assets/quotation.png";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = ({ bgImg, title, text, textDark, quotation }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full bg-cover h-[630px] bg-center flex justify-center"
    >
      <div
        className={`${
          textDark ? "text-dark" : "text-white"
        } text-center translate-y-24`}
      >
        <div
          className={`${
            quotation && "flex items-start"
          } text-[3.3rem] max-[1068px]: max-[1068px]: leading-none font-SFBold text-center`}
        >
          <span>{title}</span>
          {quotation && (
            <img src={QUOTATION} alt="" className="w-4 h-5 pt-1.5 ml-1" />
          )}
        </div>
        <div className="text-[1.6rem] max-[1068px]: leading-none pt-2 pb-4">
          {text}
        </div>
        <div className="text-blue flex items-center justify-center">
          <span className="text-[1.3rem]">Learn more</span>
          <IoChevronForwardOutline className="text-base pt-[2px]" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
