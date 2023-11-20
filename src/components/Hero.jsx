import QUOTATION from "../assets/quotation.png";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = ({ bgImg, title, text, textDark, quotation }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full bg-cover min-h-[622px] bg-center flex justify-center"
    >
      <div
        className={`${
          textDark ? "text-dark" : "text-white"
        } text-center translate-y-24 max-[1068px]:pb-[25rem]`}
      >
        <div
          className={`${
            quotation && "flex items-start"
          } text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center tracking-tight px-3`}
        >
          <span>{title}</span>
          {quotation && (
            <img src={QUOTATION} alt="" className="w-4 h-5 max-[734px]:w-2.5 max-[734px]:h-3 pt-1.5 max-[734px]:pt-1 ml-1 max-[734px]:ml-0.5" />
          )}
        </div>
        <div className="text-[1.6rem] max-[1068px]:text-[1.4rem] max-[734px]:text-[1.2rem] leading-none pt-2 pb-4 font-SFMedium">
          {text}
        </div>
        <div className="text-blue flex items-center justify-center">
          <span className="text-[1.3rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1rem]">
            Learn more
          </span>
          <IoChevronForwardOutline className="text-base pt-[2px]" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
