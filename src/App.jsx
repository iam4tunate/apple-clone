import IPHONE15PRO_LG from "./assets/hero_iphone15pro_lg.jpg";
import IPHONE15PRO_MD from "./assets/hero_iphone15pro_md.jpg";
import IPHONE15PRO_SM from "./assets/hero_iphone15pro_sm.jpg";

import IPHONE15_LG from "./assets/hero_iphone15_lg.jpg";
import IPHONE15_MD from "./assets/hero_iphone15_md.jpg";
import IPHONE15_SM from "./assets/hero_iphone15_sm.jpg";

import MACBOOK_LG from "./assets/hero_macbook_lg.jpg";
import MACBOOK_MD from "./assets/hero_macbook_md.jpg";
import MACBOOK_SM from "./assets/hero_macbook_sm.jpg";

import IPAD_LG from "./assets/promo_ipad_lg.jpg";
import IPAD_MD from "./assets/promo_ipad_md.jpg";
import IPAD_SM from "./assets/promo_ipad_sm.jpg";

import MACSTUDIO_LG from "./assets/promo_mac_studio_lg.jpg";
import MACSTUDIO_MD from "./assets/promo_mac_studio_md.jpg";
import MACSTUDIO_SM from "./assets/promo_mac_studio_sm.jpg";

import MACBOOKPRO_LG from "./assets/promo_mbp_lg.jpg";
import MACBOOKPRO_MD from "./assets/promo_mbp_lg.jpg";
import MACBOOKPRO_SM from "./assets/promo_mbp_lg.jpg";

import IPADPRO_LG from "./assets/promo_ipadpro_lg.jpg";
import IPADPRO_MD from "./assets/promo_ipadpro_md.jpg";
import IPADPRO_SM from "./assets/promo_ipadpro_sm.jpg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";

const App = () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const lg = vw >= 1069;
  const md = vw >= 735 && vw <= 1068;
  const sm = vw <= 734;
  return (
    <div>
      <Header />
      <Hero
        title="iPhone 15 Pro"
        text="Titanium. So strong. So light. So Pro."
        bgImg={lg ? IPHONE15PRO_LG : md ? IPHONE15PRO_MD : sm && IPHONE15PRO_SM}
      />
      <Hero
        textDark
        title="iPhone 15"
        text="New camera. New design. Newphoria"
        bgImg={lg ? IPHONE15_LG : md ? IPHONE15_MD : sm && IPHONE15_SM}
      />
      <Hero
        textDark
        quotation
        title="MacBook Air 15"
        text="Impressively big. Impressively thin"
        bgImg={lg ? MACBOOK_LG : md ? MACBOOK_MD : sm && MACBOOK_SM}
      />
      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 max-[734px]:gap-y-3 pt-3 max-[734px]:pb-3">
        <Hero2
          textDark
          title="iPad"
          text="Lovable. Drawable. Magical"
          bgImg={lg ? IPAD_LG : md ? IPAD_MD : sm && IPAD_SM}
        />
        <Hero2
          textDark
          maxW
          title="Mac Studio"
          text="Supercharged by M2 Max and M2 Ultra"
          bgImg={lg ? MACSTUDIO_LG : md ? MACSTUDIO_MD : sm && MACSTUDIO_SM}
        />
      </div>
      <div className="grid grid-cols-2 max-[734px]:grid-cols-1 gap-x-3 max-[734px]:gap-y-3 px-3 max-[734px]:px-0">
        <Hero2
          maxW
          title="MacBook Pro"
          text="Supercharged by M2 Pro and M2 Max"
          bgImg={lg ? MACBOOKPRO_LG : md ? MACBOOKPRO_MD : sm && MACBOOKPRO_SM}
        />
        <Hero2
          chip
          title="iPad Pro"
          text="Supercharged by"
          bgImg={lg ? IPADPRO_LG : md ? IPADPRO_MD : sm && IPADPRO_SM}
        />
      </div>
      <Footer />
    </div>
  );
};
export default App;
