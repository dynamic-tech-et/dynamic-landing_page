import HeadingComponent from "../common/heading";
import { FaRegNewspaper } from "react-icons/fa6";
import NewsCard from "./newsCard";

const NewsComponent = () => {
  return (
    <div
      id="news"
      className="flex flex-col items-center justify-center w-full gap-8 pt-24 mx-auto md:w-4/5"
    >
      <HeadingComponent
        title="Latest News"
        icon={<FaRegNewspaper size={80} color="black" />}
        description=""
      />

      <div className="grid w-full gap-24 gird-cols-1 md:grid-cols-2 xl:grid-cols-3 place-content-center">
        <NewsCard
          imageUrl="https://picsum.photos/800/600"
          title="News 1"
          date="12/12/2021"
          author="John Doe"
          comments={["comment 1", "comment 2", "comment 3"]}
        />
        <NewsCard
          imageUrl="https://picsum.photos/800/600"
          title="News 2"
          date="12/12/2021"
          author="John Doe"
          comments={["comment 1", "comment 2", "comment 3"]}
        />
        <NewsCard
          imageUrl="https://picsum.photos/800/600"
          title="News 3"
          date="12/12/2021"
          author="John Doe"
          comments={["comment 1", "comment 2", "comment 3"]}
        />
      </div>
    </div>
  );
};

export default NewsComponent;
