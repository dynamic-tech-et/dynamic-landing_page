import { IoIosPlayCircle } from "react-icons/io";
import HeroImage from "../../assets/Programming-amico.svg";
import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse items-center justify-center w-full mx-auto md:w-4/5 md:flex-row md:gap-2"
    >
      <div className="flex flex-col items-start justify-center w-full gap-8 pb-12 md:w-1/2 md:py-48">
        <h2 className="text-5xl font-bold text-white whitespace">
          Dynamic Software Technologies
        </h2>
        <h3 className="text-xl text-white">
          We build innovative software solutions for your business needs.
        </h3>
        <h4 className="text-lg text-white">
          Let us help you bring your vision to life.
        </h4>

        <div className="flex flex-col items-center justify-start w-full gap-6 sm:flex-row">
          <button className="p-4 text-lg font-semibold text-white transition-colors border border-white hover:bg-white hover:text-black">
            Our Services
          </button>
          <div className="flex items-center justify-center gap-1 cursor-pointer flex-nowrap">
            <IoIosPlayCircle
              size={30}
              className="text-white transition-all border-none hover:border hover:border-white"
            />
            <p className="text-white">Get Started</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ x: 80 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 4,
        }}
        className="flex items-center justify-center w-full py-24 md:w-1/2 md:py-48"
      >
        <img src={HeroImage} alt="Hero Image" className="w-3/4 md:scale-125" />
      </motion.div>
    </div>
  );
};

export default HeroComponent;
