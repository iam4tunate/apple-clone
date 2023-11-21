import Header from "./components/Header";
import Footer from "./components/Footer";
import { IoChevronForwardOutline } from "react-icons/io5";
import QUOTATION from "./assets/quotation.png";
import PROMOCHIP from "./assets/promo_chip.png";

const App = () => {
  return (
    <div>
      <Header />
      {/* HERO 1 */}
      <div className="bg-[url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554415/apple%20clone/io9fwkqo7ph0iik0lsqd.jpg')] max-sm:bg-iphone15pro_sm max-md:bg-iphone15pro_md w-full bg-cover h-[630px] max-md:h-[590px] bg-bottom flex justify-center">
        <div className="text-white translate-y-24 text-center max-[1068px]:pb-[25rem]">
          <div className="text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>iPhone 15 Pro</span>
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
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
      {/* HERO 2 */}
      <div className="bg-iphone15_lg max-sm:bg-iphone15_sm max-md:bg-iphone15_md w-full bg-cover h-[630px] max-md:h-[550px] bg-bottom flex justify-center">
        <div className="text-dark translate-y-14 text-center max-[1068px]:pb-[25rem]">
          <div className="text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>iPhone 15</span>
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
            New camera. New design. Newphoria
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
      <div className="bg-macbook_lg max-sm:bg-macbook_sm max-md:bg-macbook_md w-full bg-cover h-[630px] max-md:h-[550px] bg-bottom flex justify-center">
        <div className="text-dark translate-y-14 text-center max-[1068px]:pb-[25rem]">
          <div className="flex items-start text-[3.5rem] max-[1068px]:text-[3rem] max-[734px]:text-[2rem] leading-none font-SFSemiBold text-center px-3">
            <span>MacBook Air 15</span>
            <img
              src={QUOTATION}
              alt=""
              className="w-4 h-5 max-[734px]:w-2.5 max-[734px]:h-3 pt-1.5 max-[734px]:pt-1 ml-1 max-[734px]:ml-0.5"
            />
          </div>
          <div className="text-[1.6rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1.1rem] leading-none pt-2 pb-4 font-SFMedium max-[1068px]:font-SF">
            Impressively big. Impressively thin
          </div>
          <div className="text-blue flex items-center justify-center">
            <span className="text-[1.3rem] max-[1068px]:text-[1.2rem] max-[734px]:text-[1rem]">
              Learn more
            </span>
            <IoChevronForwardOutline className="text-base pt-[2px]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 max-[734px]:gap-y-3 pt-3 max-[734px]:pb-3">
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

        <div className="bg-macstudio_lg max-sm:bg-macstudio_sm max-md:bg-macstudio_md w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-dark text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              Mac Studio
            </div>
            <div className="w-[50%] leading-tight mx-auto text-[1.2rem] max-[1068px]:text-[1.1rem] pt-2 pb-4">
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
      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 max-[734px]:gap-y-3 px-3 max-[734px]:px-0 pb-3">
        <div className="bg-macbookpro_lg max-sm:bg-macbookpro_sm max-md:bg-macbookpro_md w-full bg-cover h-[630px] max-md:h-[500px] bg-center flex justify-center">
          <div className="text-white text-center pt-12 max-[734px]:py-12">
            <div className="text-[2.5rem] max-[1068px]:text-[2rem] max-[1068px]:font-SFSemiBold leading-none font-SFBold text-center">
              MacBook Pro
            </div>
            <div className="max-sm:w-[50%] max-sm:leading-tight max-sm:mx-auto text-[1.2rem] max-[1068px]:text-[1.1rem] pt-2 pb-4">
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
      </div>
      <Footer />
    </div>
  );
};
export default App;
