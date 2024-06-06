const HeroComponent = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col-reverse items-center justify-center w-full mx-auto text-center md:w-4/5 md:flex-row md:gap-2"
      >
        <div className="flex flex-col items-center justify-center w-full gap-8 pb-12 md:w-1/2 md:py-48">
          <h1 className="text-6xl text-white">
            We build innovative software solutions for your business needs.
          </h1>
          <h4 className="text-3xl text-center text-gray-400">
            Let us help you bring your vision to life.
          </h4>

          <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto text-center sm:flex-row">
            <button className="px-6 py-4 text-lg font-semibold text-white transition-colors border border-white hover:bg-white hover:text-black">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* <motion.div
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
      </motion.div> */}
    </>
  );
};

export default HeroComponent;
