import HeadingComponent from "../common/heading";
import { FaRegNewspaper } from "react-icons/fa6";
import NewsCard from "./newsCard";


const NewsComponent = () => {
    return (
        <div id="news" className="w-full md:w-4/5 mx-auto flex flex-col justify-center items-center gap-8 pt-24">
            <HeadingComponent title="Latest News" icon={<FaRegNewspaper size={80} color="black" />} description=""/>

            <div className="w-full grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 place-content-center gap-24">
                <NewsCard imageUrl="https://picsum.photos/800/600" title="News 1" date="12/12/2021" author="John Doe" comments={["comment 1", "comment 2", "comment 3"]} />
                <NewsCard imageUrl="https://picsum.photos/800/600" title="News 2" date="12/12/2021" author="John Doe" comments={["comment 1", "comment 2", "comment 3"]} />
                <NewsCard imageUrl="https://picsum.photos/800/600" title="News 3" date="12/12/2021" author="John Doe" comments={["comment 1", "comment 2", "comment 3"]} />
                
            </div>
        </div>
    )
}

export default NewsComponent;