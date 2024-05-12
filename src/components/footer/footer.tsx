import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsTelegram,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer
      container
      className="flex items-center justify-center"
      style={{
        backgroundImage: "url(./wave.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "3rem 0",
      }}
    >
      <div className="w-4/5 pb-6 mx-auto">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center justify-center">
            <Footer.Brand
              href="/"
              className="h-10 w-44"
              title="Dynamic Technologies"
              src=""
            >
              <img
                src="/logo.svg"
                className="object-none object-center w-full h-full bg-center "
                alt="Flowbite React Logo"
              />
            </Footer.Brand>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-lg text-gray-900" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 transition-all hover:underline hover:transition-all"
                >
                  Dynamic Technologies
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="text-lg text-gray-900"
                title="Follow us"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 transition-all hover:underline hover:transition-all"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 transition-all hover:underline hover:transition-all"
                >
                  Linkedin
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 transition-all hover:underline hover:transition-all"
                >
                  Tiktok
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 transition-all hover:underline hover:transition-all"
                >
                  Telegram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-lg text-white"
            href="#"
            by="Dynamic Technologies™"
            year={2024}
          />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsLinkedin} />
            <Footer.Icon className="text-white" href="#" icon={BsTelegram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
