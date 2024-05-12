import ServiceCard from "./service-card";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdGraphicEq } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import HeadingComponent from "../common/heading";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: any;
};
const CardData: ServiceCardProps[] = [
  {
    title: "Custom System Development",
    description:
      "Designed and developed from scratch to perfectly suit your business needs with Cost-effective solutions.",
    icon: <MdOutlineDeveloperMode size={50} />,
  },
  {
    title: "Website Development",
    description:
      "Responsive, secure, mobile-first, and user-friendly websites  utilizing the latest and modern web technologies.",
    icon: <CgWebsite size={50} />,
  },
  {
    title: "Mobile Development",
    description:
      "Mobile applications for iOS and Android platforms to leverage mobility and maximize productivity.",
    icon: <FaMobile size={50} />,
  },
  {
    title: "Digital Marketing",
    description:
      "In the ever-evolving digital landscape, where consumer behavior is shaped by online interactions, a comprehensive digital marketing strategy is paramount. At Qemer Tech, we go beyond conventional approaches to provide..",
    icon: <HiSpeakerphone size={50} />,
  },
  {
    title: "Graphic Solution",
    description:
      "Crafting visually stunning and impactful graphics for a wide range of purposes through a combination of artistic prowess, technical expertise, and a deep understanding of visual communication principles.",
    icon: <MdGraphicEq size={50} />,
  },
  {
    title: "Training",
    description:
      "We offer online and in-person professional training in areas like Graphic designing, Software Programming, web development, and Database designed and delivered by industry experts.",
    icon: <IoIosPeople size={50} />,
  },
];

const ServiceComponent = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center w-full gap-12 pt-16 mx-auto sm:w-4/5"
    >
      <HeadingComponent
        title="Our Services"
        description=" We offer a wide range of services to help you achieve your business goals."
        icon={<IoBagHandleOutline size={80} color="black" />}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center md:gap-12"
      >
        {CardData.map((card, index) => {
          return (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          );
        })}
      </motion.div>

      <div className="flex items-center justify-end w-full py-4">
        <button className="flex items-center gap-1 p-4 transition-all border border-gray-900 bg-gradient-to-r from-black to-gray-500 text-whte flex-nowrap hover:bg-white hover:rounded-full hover:text-green-900">
          <p className="text-lg font-semibold text-white">Discover More</p>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default ServiceComponent;
