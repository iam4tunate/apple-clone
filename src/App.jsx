import IPHONE15PRO from "./assets/hero_iphone15pro.jpg";
import IPHONE15 from "./assets/hero_iphone15.jpg";
import IPAD from "./assets/promo_ipad.jpg";
import MACBOOK from "./assets/hero_macbook.jpg";
import MACSTUDIO from "./assets/promo_mac_studio.jpg";
import IPADPRO from "./assets/promo_ipadpro.jpg";
import MACKBOOKPRO from "./assets/promo_macbookpro.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";

const App = () => {
  return (
    <div>
      <Header />
      <Hero
        bgImg={IPHONE15PRO}
        title="iPhone 15 Pro"
        text="Titanium. So strong. So light. So Pro."
      />
      <Hero
        bgImg={IPHONE15}
        title="iPhone 15"
        textDark={true}
        text="New camera. New design. Newphoria"
      />
      <Hero
        bgImg={MACBOOK}
        title="MacBook Air 15"
        textDark={true}
        text="Impressively big. Impressively thin"
        quotation={true}
      />
      <div className="grid grid-cols-2 gap-x-3 pt-4">
        <Hero2
          bgImg={IPAD}
          title="MacBook Pro"
          textDark={true}
          text="Lovable. Drawable. Magical"
        />
        <Hero2
          bgImg={MACSTUDIO}
          title="iPad Pro"
          textDark={true}
          text="Supercharged by M2 Max and M2 Ultra"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3 px-4">
        <Hero2
          bgImg={MACKBOOKPRO}
          title="MacBook Pro"
          text="Supercharged by M2 Pro and M2 Max"
        />
        <Hero2
          bgImg={IPADPRO}
          title="iPad Pro"
          chip={true}
          text="Supercharged by"
        />
      </div>
      <Footer />
    </div>
  );
};
export default App;
