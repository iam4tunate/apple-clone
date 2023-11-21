function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-6 text-[13px] px-6">
      <div className="max-w-5xl mx-auto">
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
        <div>
          <p>
            <span className="underline text-blue">Find a retailer</span> near
            you.
          </p>
          <div className="block w-full h-[1px] bg-dark bg-opacity-20 my-1.5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-8 text-xs">
              <p>Copyright © 2023 Apple Inc. All rights reserved</p>
              <span className="flex items-center">
                <p>Term of Use</p>
                <span className="block h-4 w-[1px] bg-dark bg-opacity-40 mx-3" />
                <p>Site Map</p>
              </span>
            </div>
            <p>Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
