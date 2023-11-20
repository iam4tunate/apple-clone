import APPLE_LOGO from "../assets/logo.svg";
import SEARCH_ICON from "../assets/search.svg";
import MENU_ICON from "../assets/menu.svg";

function Header() {
  return (
    <header className="h-[46px] fixed top-0 left-0 right-0 bg-dark bg-opacity-80 backdrop-blur-xl z-50">
      <div className="max-w-screen-lg mx-auto text-white text-opacity-80 flex items-center justify-between font-SFThin text-xs px-[16px]">
        <img src={APPLE_LOGO} alt="Apple" className="w-4" />
        <div className="flex items-center justify-between max-[833px]:hidden w-[70%] mx-auto">
          <span>Mac</span>
          <span>iPad</span>
          <span>iPhone</span>
          <span>Support</span>
          <span>Where to Buy</span>
        </div>
        <div className="flex items-center gap-x-7">
          <img src={SEARCH_ICON} alt="serach" className="w-[18px]" />
          <img src={MENU_ICON} alt="menu" className="w-[18px] min-[834px]:hidden" />
        </div>
      </div>
    </header>
  );
}
export default Header;
