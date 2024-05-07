import { BsRocketTakeoff } from "react-icons/bs";
import HeadingComponent from "../common/heading";
import { HiLightBulb } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import Image from "../../assets/Innovation-amico (2).svg";


const ExplanationComponent = () => {
    return (
        <div className="w-full sm:w-4/5 mx-auto flex flex-col justify-center items-center">
            <HeadingComponent
                title="How We Get It Done"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aspernatur explicabo nostrum facere!"
                icon={<BsRocketTakeoff size={80} color="black"/>}
            />
            
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full">
                <div className="w-full flex flex-col items-between justify center lg:w-1/2 gap-28">
                    <div className="flex flex-col sm:flex-row flex-nowrap justify-center gap-8 items-center w-full h-full">
                        <div className=" rounded-full flex text-center hover:bg-red-300 p-10">
                            <HiLightBulb size={100} />
                        </div>
                        <div className="w-4/5 md:w-1/2 flex flex-col justify-center items-start gap-3">
                            <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                                Ideation
                            </p>
                            <p className="text-lg text-gray-600 font-semibold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aspernatur explicabo nostrum facere!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-nowrap justify-center gap-8 items-center w-full">
                        
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-end gap-3">
                            <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                                Design and Development
                            </p>
                            <p className="text-lg text-gray-600 font-semibold text-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aspernatur explicabo nostrum facere!
                            </p>
                        </div>
                        <div className="rounded-full flex text-center hover:bg-blue-300 p-10 ">
                            <FaLaptopCode size={100} />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-nowrap justify-center gap-8 items-center w-full h-full">
                        <div className="rounded-full flex text-center hover:bg-yellow-300 p-10">
                            <BsJournalText size={100} />
                        </div>
                        <div className="w-4/5 md:w-1/2 flex flex-col justify-center items-start gap-3">
                            <p className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                                Deployment
                            </p>
                            <p className="text-lg text-gray-600 font-semibold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aspernatur explicabo nostrum facere!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 py-48 items-center justify-center">
                    <img src={Image} alt="" />
                </div> 
            </div>

        </div>
    )
}

export default ExplanationComponent;