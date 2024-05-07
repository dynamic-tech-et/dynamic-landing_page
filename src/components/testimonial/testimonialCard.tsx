import { FaRegCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

type TestimonialCardProps = {
    imageUrl: string | null;
    name: string;
    position: string;
    testimonial: string;
    rating: number;
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({imageUrl, name, position, testimonial, rating}) => {
    return (
        <div className="py-8 w-full  md:w-11/12 md:mx-auto flex flex-col justify-center items-start gap-8 bg-gray-100 shadow-lg">
            <div className="w-full px-8 flex-col gap-4 md:gap-2 md:flex-row  flex justify-between items-center">
                <div className="w-full md:w-1/2 justify-center flex md:justify-start items-center gap-8 ">
                    {imageUrl?
                        <img src={imageUrl} alt="user" className="w-16 h-16 rounded-full" />
                        : <FaRegCircleUser size={50} />
                    }
                    <div className="flex flex-col justify-center items-start gap-2">
                        <p className="font-bold text-lg whitespace-nowrap">{name}</p>
                        <p className="text-gray-500 font-semibold">{position}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center gap-2">
                    {[...Array(rating)].map((_, index) => (
                        <FaStar key={index} size={20} color="#FFD700" />
                    ))}                 
                </div>

            </div>
            <div className="w-full px-8">
                <p className="text-gray-800 text-lg font-semibold">{testimonial}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;