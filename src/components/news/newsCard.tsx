import { FaCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";

type NewsCardProps = {
  imageUrl: string;
  title: string;
  date: string;
  author: string;
  comments?: string[];
};

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  date,
  author,
  comments,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 mt-10 rounded-lg shadow-xl w-76">
      <img className="w-full rounded-lg h-60" src={imageUrl} alt="news photo" />
      <div className="flex flex-col items-start justify-center w-4/5 gap-4 mx-auto">
        <div className="flex items-center justify-start w-full gap-2 flex-nowrap">
          <FaCalendarAlt size={10} color="black" />
          <p>{date}</p>
        </div>
        <p className="text-xl font-bold text-gray-900 text-start ">{title}</p>
        <hr className="w-full text-gray-600" />
        <div className="flex items-center justify-between w-full py-6 ">
          <div className="flex items-center justify-start gap-2 flex-nowrap">
            <CiUser size={20} color="black" />
            <p>{author}</p>
          </div>
          <p className="text-xl font-bold text-gray-900">-</p>
          <div className="flex items-center justify-start gap-2 flex-nowrap">
            <FaRegComments size={20} color="black" />
            <p>{comments?.length} Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
