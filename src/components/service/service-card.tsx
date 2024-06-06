import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
type ServiceCardProps = {
  title: string;
  icon: any;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <motion.div
      animate={{ top: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center px-10 py-10 shadow-xl group "
    >
      <div className="relative flex items-center justify-center duration-500 ease-in-out bg-center bg-no-repeat bg-cover w-44 h-28 bg-none group-hover:transition-all group-hover:bg-service-card-blob">
        <div className="absolute text-lg top-50 left-50">{icon}</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-4xl text-gray-900">{title}</h3>

        <div className="flex items-center justify-center gap-2 flex-nowrap">
          <a
            href="https://t.me/DynamicTechnologiesEth"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center justify-center text-lg font-semibold text-green-700 border-none hover:text-gray-900">
              discover now
            </button>
          </a>
          <FaArrowRightLong color="#038184" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
