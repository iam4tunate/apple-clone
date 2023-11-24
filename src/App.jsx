import { Footer, Header } from "./components";
import { IoChevronForwardOutline } from "react-icons/io5";
import PROMOCHIP from "./assets/promo_chip.png";

const App = () => {
  return (
    <div>
      <Header />
      {/* HERO 1 */}
      <div className="bg-hero_macbook_lg max-sm:bg-hero_macbook_sm w-full bg-cover h-[630px] max-md:h-[550px] bg-bottom flex justify-center mb-3">
        <div className="text-dark translate-y-24 text-center max-[1068px]:pb-[25rem]">
          <div className="text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>MacBook Pro</span>
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.4rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
            Mind-blowing. Head-turning.
          </div>
          <div className="text-blue flex items-center justify-center">
            <span className="text-[1.3rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1rem]">
              Learn more
            </span>
            <IoChevronForwardOutline className="text-base pt-[2px]" />
          </div>
        </div>
      </div>
      {/* HERO 2 */}
      <div className="bg-hero_imac_lg max-sm:bg-hero_imac_sm w-full bg-cover h-[630px] max-md:h-[550px] bg-bottom flex justify-center mb-3">
        <div className="text-dark translate-y-14 text-center max-[1068px]:pb-[25rem]">
          <div className="text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>iMac</span>
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.4rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
            Packed with more juice.
          </div>
          <div className="text-blue flex items-center justify-center">
            <span className="text-[1.3rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1rem]">
              Learn more
            </span>
            <IoChevronForwardOutline className="text-base pt-[2px]" />
          </div>
        </div>
      </div>
      {/* HERO 3 */}
      <div className="bg-hero_iphone15pro_lg max-sm:bg-hero_iphone15pro_sm max-md:bg-hero_iphone15pro_md w-full bg-cover h-[630px] max-md:h-[590px] bg-bottom flex justify-center mb-3">
        <div className="text-white translate-y-24 text-center max-[1068px]:pb-[25rem]">
          <div className="text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>iPhone 15 Pro</span>
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.4rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
            Titanium. So strong. So light. So Pro.
          </div>
          <div className="text-blue flex items-center justify-center">
            <span className="text-[1.3rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1rem]">
              Learn more
            </span>
            <IoChevronForwardOutline className="text-base pt-[2px]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 py-3 px-3 max-[734px]:gap-y-3 max-[734px]:px-0">
        <div className="bg-iphone15_lg max-md:bg-iphone15_md max-sm:bg-iphone15_sm w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-dark text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              iPhone 15
            </div>
            <div className="text-[1.2rem] max-[1068px]:text-[1.1rem] leading-none pt-2 pb-4">
              New camera. New design. Newphria
            </div>
            <div className="text-blue flex items-center justify-center">
              <span className="text-[1.1rem] max-[1068px]:text-[1rem]">
                Learn more
              </span>
              <IoChevronForwardOutline className="text-base pt-[2px]" />
            </div>
          </div>
        </div>
        <div className="bg-ipad_lg max-sm:bg-ipad_sm max-md:bg-ipad_md w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-dark text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              iPad
            </div>
            <div className="text-[1.2rem] max-[1068px]:text-[1.1rem] leading-none pt-2 pb-4">
              Lovable. Drawable. Magical
            </div>
            <div className="text-blue flex items-center justify-center">
              <span className="text-[1.1rem] max-[1068px]:text-[1rem]">
                Learn more
              </span>
              <IoChevronForwardOutline className="text-base pt-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 max-[734px]:gap-y-3 px-3 max-[734px]:px-0 pb-3">
        <div className="bg-ipadpro_lg max-sm:bg-ipadpro_sm max-md:bg-ipadpro_md w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-white text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              iPad Pro
            </div>
            <div className="flex items-center gap-x-1 text-[1.2rem] max-[1068px]:text-[1.1rem] pt-2 pb-4">
              <span>Supercharged by</span>{" "}
              <img src={PROMOCHIP} alt="" className="w-[1.8rem]" />
            </div>
            <div className="text-blue flex items-center justify-center">
              <span className="text-[1.1rem] max-[1068px]:text-[1rem]">
                Learn more
              </span>
              <IoChevronForwardOutline className="text-base pt-[2px]" />
            </div>
          </div>
        </div>
        <div className="bg-macstudio_lg max-sm:bg-macstudio_sm max-md:bg-macstudio_md w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-dark text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              Mac Studio
            </div>
            <div className="max-md:w-[50%] leading-tight mx-auto text-[1.2rem] max-[1068px]:text-[1.1rem] pt-2 pb-4">
              Supercharged by M2 Max and M2 Ultra
            </div>
            <div className="text-blue flex items-center justify-center">
              <span className="text-[1.1rem] max-[1068px]:text-[1rem]">
                Learn more
              </span>
              <IoChevronForwardOutline className="text-base pt-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
