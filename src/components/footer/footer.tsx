import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer
      container
      className="flex justify-center items-center"
      style={{
        backgroundImage: "url(./wave.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "7rem 0",
      }}
    >
      <div className="w-4/5 mx-auto pb-6">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="h-20 w-44 flex justify-center items-center ">
            <Footer.Brand
              width="100%"
              href="/"
              src="./logo.svg"
              alt="Dynamic Technologies Logo"
              name=""
              className="h-full m-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-gray-900 text-lg" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Dynamic Technologies
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="text-gray-900 text-lg"
                title="Follow us"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-gray-900 text-lg" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-lg text-gray-500 hover:underline transition-all hover:transition-all"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-white text-lg"
            href="#"
            by="Dynamic Technologies™"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
