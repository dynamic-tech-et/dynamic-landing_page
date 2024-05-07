import { IoIosPlayCircle } from "react-icons/io";
import HeroImage from "../../assets/Programming-amico.svg";
import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <div
      id="home"
      className="flex w-full md:w-4/5 mx-auto flex-col-reverse justify-center md:flex-row md:gap-2 items-center"
    >
      <div className="flex w-full md:w-1/2 pb-12 md:py-48 flex-col gap-8 justify-center items-start">
        <h2 className="text-white text-5xl font-bold whitespace">
          Dynamic Software Technologies
        </h2>
        <h3 className="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          voluptas aspernatur explicabo nostrum facere!
        </h3>
        <h4 className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h4>

        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-6">
          <button className="p-4 border text-lg font-semibold border-white text-white hover:bg-white hover:text-black transition-colors">
            Our Services
          </button>
          <div className="flex justify-center items-center gap-1 flex-nowrap cursor-pointer">
            <IoIosPlayCircle
              size={30}
              className="border-none hover:border hover:border-white transition-all text-white"
            />
            <p className="text-white">Watch Video</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ x: 80 }}
        transition={{ repeat: Infinity, repeatType: "reverse",ease: "easeInOut", duration: 4 }}
        className="flex w-full md:w-1/2 py-24 md:py-48 items-center justify-center"
      >
        <img src={HeroImage} alt="Hero Image" className="w-3/4 md:scale-125" />
      </motion.div>
    </div>
  );
};

export default HeroComponent;
