import APPLE_LOGO from "../assets/logo.svg";
import SEARCH_ICON from "../assets/search.svg";

function Header() {
  return (
    <header className="h-[44px] fixed top-0 left-0 right-0 bg-dark bg-opacity-80 backdrop-blur-xl z-50">
      <div className="max-w-screen-lg mx-auto text-white text-opacity-80 flex items-center justify-between font-SFThin text-xs">
        <img src={APPLE_LOGO} alt="Apple logo" />
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Support</span>
        <span>Where to buy</span>
        <img src={SEARCH_ICON} alt="serach icon" />
      </div>
    </header>
  );
}
export default Header;
