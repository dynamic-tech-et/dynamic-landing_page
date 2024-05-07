import Chip from "../common/chip";
import ProjectCard from "./projectCard";

const ProjectComponent = () => {
  return (
    <div
      id="projects"
      className="w-full md:w-4/5 mx-auto flex flex-col justify-center items-center gap-8"
    >
      <div className="w-full flex justify-center items-center">
        <h1 className="text-4xl text-gray-900 font-bold">Recent Projects</h1>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center gap-3">
        <Chip
          label="See All"
          color="blue"
          handleClick={() => console.log("All")}
        />
        <Chip
          label="Branding"
          color="green"
          handleClick={() => console.log("Branding")}
        />
        <Chip
          label="Mobile Application"
          color="red"
          handleClick={() => console.log("Mobile Application")}
        />
        <Chip
          label="Web Development"
          color="yellow"
          handleClick={() => console.log("Web Development")}
        />
        <Chip
          label="UI/UX"
          color="purple"
          handleClick={() => console.log("UI/UX")}
        />
      </div>

      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap">
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 1"
          type="Branding"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 2"
          type="Mobile Application"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 3"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 4"
          type="UI/UX"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 5"
          type="Branding"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 6"
          type="Mobile Application"
        />
        <ProjectCard
          imageUrl="https://picsum.photos/800/600"
          title="Project 7"
          type="Web Development"
        />
      </div>
    </div>
  );
};

export default ProjectComponent;
