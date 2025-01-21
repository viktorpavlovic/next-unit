import Logo from "@/assets/NextUnitLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-home-img py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            src={Logo}
            alt="logo"
            className="h-16 w-auto object-contain rounded-lg  hover:opacity-90 transition-opacity duration-300"
          />
          <p className="my-5">
            NextUnit IT Consulting: Delivering innovative, secure, and scalable
            technology solutions to drive your business forward. Let us
            transform your IT strategy into a competitive advantage.
          </p>
          <p>© Next Unit All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ularmcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us (Click to call)</h4>
          <p className="my-5">Nikola Urošević</p>
          <b>
            <a href="tel:+381621778597">+381621778597</a>
          </b>
          <p className="my-5">Stefan Rečević</p>
          <b>
            <a href="tel:+381648552626">+381648552626</a>
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
