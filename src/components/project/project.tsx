import ProjectCard from "./projectCard";

const ProjectComponent = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full gap-8 mx-auto mt-20 md:w-4/5"
    >
      <div className="flex items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-gray-900">Recent Projects</h1>
      </div>

      <div className="grid flex-wrap w-4/5 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          imageUrl="src/assets/portfolio/web/euee.png"
          title="EUEE"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/hospital.png"
          title="Hospital Management System"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/tin.jpg"
          title="TIN"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/unishare.jpg"
          title="Unishare"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/charity.png"
          title="Charity"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/ruthcoffee.png"
          title="Ruth Coffee"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/cat.png"
          title="Cat"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/crypto.png"
          title="Crypto"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/etconst.png"
          title="ET construction"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/chatapp.png"
          title="Chat app"
          type="Web Development"
        />
        <ProjectCard
          imageUrl="src/assets/portfolio/web/gpa.png"
          title="GPA"
          type="Web Development"
        />
      </div>
    </div>
  );
};

export default ProjectComponent;
