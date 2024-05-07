import { FaPlus } from "react-icons/fa6";

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  type: string;
};
const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, type }) => {
  return (
    <div className="flex justify-center items-center rounded-lg cursor-pointer relative">
      <img
        className="w-full h-full rounded-lg"
        src={imageUrl}
        alt="project photo"
      />
      <div className="absolute rounded-lg opacity-0 flex flex-col justify-center items-center gap-2 bg-gray-700 hover:opacity-70 m-auto left-0 right-0 top-0 bottom-0">
        <FaPlus size={30} color="white" className="" />
        <p className="text-white font-bold text-xl">{title}</p>
        <p className="text-white text-lg font-semibold">{type}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
