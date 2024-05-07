import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
type ServiceCardProps = {
  title: string;
  description: string;
  icon: any;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      animate={{ top: -100 }}
        transition={{ duration: 1 }}
      className="flex group flex-col px-10 py-10 justify-center items-center shadow-xl mt-10 "
    >
      <div className="flex justify-center items-center relative w-44 h-28 bg-none group-hover:transition-all duration-500 ease-in-out group-hover:bg-service-card-blob bg-no-repeat bg-center bg-cover">
        <div className="absolute top-50 left-50 text-lg">{icon}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-4xl text-gray-900">{title}</h3>
        <p>{description}</p>

        <div className="flex justify-center items-center gap-2 flex-nowrap">
          <button className="text-green-700 flex text-lg font-semibold justify-center items-center border-none hover:text-gray-900">
            discover now
          </button>
          <FaArrowRightLong color="#038184" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
