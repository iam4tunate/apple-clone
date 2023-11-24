import { useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { AccordionArr } from "../data";

function Footer() {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const handleToggle = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };
  return (
    <footer className="bg-[#f5f5f7] py-6 text-[13px] max-[833px]:px-4 px-6">
      <div className="max-w-5xl mx-auto">
        {/* LARGE VIEWPORT FOOTER  */}
        <div className="min-[834px]:block hidden">
          <div className="grid grid-cols-4 pb-8">
            <ul className="space-y-2">
              <span className="font-SFMedium">Explore</span>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
            </ul>
            <ul className="space-y-2">
              <span className="font-SFMedium">Account</span>
              <li>Manage Your Apple ID</li>
              <li>iCloud.com</li>
            </ul>
            <ul className="space-y-2">
              <span className="font-SFMedium">Apple Values</span>
              <li>Privacy</li>
            </ul>
            <ul className="space-y-2">
              <span className="font-SFMedium">About Apple</span>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Oppurtunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
            </ul>
          </div>
        </div>
        {/* SMALL VIEWPORT FOOTER */}
        <div className="max-[833px]:block hidden">
          <div className="pb-3">
            {AccordionArr.map(({ id, title, links }) => (
              <div
                key={id}
                className="cursor-pointer space-y-2 pt-3"
                onClick={() => handleToggle(id)}
              >
                <div className="flex items-center justify-between">
                  <span className="">{title}</span>
                  {selectedID === id ? <IoIosClose /> : <IoIosAdd />}
                </div>
                {selectedID === id &&
                  links.map((link) => (
                    <p key={link.label} className="pl-[1rem]">
                      {link.label}
                    </p>
                  ))}
                <div className="after:bg-dark after:h-[1px] after:bg-opacity-10 after:w-full after:block after:mt-2 mt-2 mb-2" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="pb-3">
            <p className="pb-3">
              <span className="underline text-blue">Find a retailer</span> near
              you.
            </p>
            <p>Nigeria</p>
          </div>
          <div className="block w-full h-[1px] bg-dark bg-opacity-20 my-1.5 max-[833px]:hidden" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-8 text-xs max-[833px]:flex-col max-[833px]:items-start">
              <p>Copyright © 2023 Apple Inc. All rights reserved</p>
              <span className="flex items-center max-[833px]:pt-1">
                <p>Term of Use</p>
                <span className="block h-4 w-[1px] bg-dark bg-opacity-40 mx-3" />
                <p>Site Map</p>
              </span>
            </div>
            <p className="max-[833px]:hidden">Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
