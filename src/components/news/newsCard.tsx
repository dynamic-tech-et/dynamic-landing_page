import { FaCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";

type NewsCardProps = {
    imageUrl: string;
    title: string;
    date: string;
    author: string;
    comments?: string[];
}

const NewsCard:React.FC<NewsCardProps> = ({imageUrl, title, date, author, comments}) => {
    return (
        <div className="flex flex-col w-76 py-10 justify-center items-center gap-6 shadow-xl mt-10 rounded-lg">
            <img className="w-full h-60 rounded-lg" src={imageUrl} alt="news photo" />
            <div className="w-4/5 mx-auto flex flex-col items-start justify-center gap-4">
                <div className="w-full flex flex-nowrap justify-start items-center gap-2">
                    <FaCalendarAlt size={10} color="black" />
                    <p>{date}</p>
                </div>
                <p className="text-xl font-bold text-gray-900 text-start ">
                    {title}
                </p>
                <hr className="w-full text-gray-600"/>
                <div className="w-full py-6 flex justify-between items-center ">
                    <div className="flex justify-start flex-nowrap items-center gap-2">
                        <CiUser size={20} color="black" />
                        <p>{author}</p>
                    </div>
                    <p className="text-xl font-bold text-gray-900"> 
                        -
                    </p>
                    <div className="flex justify-start flex-nowrap items-center gap-2">
                        <FaRegComments size={20} color="black" />
                        <p>comments</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsCard;