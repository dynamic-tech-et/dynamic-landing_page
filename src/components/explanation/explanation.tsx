import { BsRocketTakeoff } from "react-icons/bs";
import HeadingComponent from "../common/heading";
import { HiLightBulb } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import Image from "../../assets/Innovation-amico (2).svg";

const ExplanationComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto sm:w-4/5">
      <HeadingComponent
        title="How We Get It Done"
        description="Our process is designed to help you succeed. Here’s how we do it."
        icon={<BsRocketTakeoff size={80} color="black" />}
      />

      <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full items-between justify center lg:w-1/2 gap-28">
          <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:flex-row flex-nowrap">
            <div className="flex p-10 text-center rounded-full hover:bg-red-300">
              <HiLightBulb size={100} />
            </div>
            <div className="flex flex-col items-start justify-center w-4/5 gap-3 md:w-1/2">
              <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                Ideation
              </p>
              <p className="text-lg font-semibold text-gray-600">
                We transform ideas into actionable plans through innovative
                brainstorming and teamwork. Let’s turn your vision into reality.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-8 sm:flex-row flex-nowrap">
            <div className="flex flex-col items-end justify-center w-full gap-3 md:w-1/2">
              <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                Design and Development
              </p>
              <p className="text-lg font-semibold text-gray-600 text-end">
                Our team crafts intuitive, user-friendly designs and builds
                robust solutions to meet your needs. We prioritize
                functionality, aesthetics, and seamless user experiences
                throughout the entire development process.
              </p>
            </div>
            <div className="flex p-10 text-center rounded-full hover:bg-blue-300 ">
              <FaLaptopCode size={100} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:flex-row flex-nowrap">
            <div className="flex p-10 text-center rounded-full hover:bg-yellow-300">
              <BsJournalText size={100} />
            </div>
            <div className="flex flex-col items-start justify-center w-4/5 gap-3 md:w-1/2">
              <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                Deployment
              </p>
              <p className="text-lg font-semibold text-gray-600">
                We ensure a smooth transition from development to deployment.
                Our team will guide you through the process and provide support
                every step of the way. Let’s launch your project and watch it
                soar.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-48 md:w-1/2">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExplanationComponent;
