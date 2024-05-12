import "./App.css";
import Header from "./components/header/header";
import FooterComponent from "./components/footer/footer";
import HeroComponent from "./components/hero/hero";
import ServiceComponent from "./components/service/service";
import ExplanationComponent from "./components/explanation/explanation";
// import ProjectComponent from "./components/project/project";
// import NewsComponent from "./components/news/news";
import TechnologiesComponent from "./components/technologies/technologies";
import TestimonialComponent from "./components/testimonial/testimonial";

function App() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Header />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-500">
        <div
          style={{
            backgroundImage: `url("./blob-two.svg"), url("./blob-four.svg")`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top -10rem right -15rem, center left -5rem",
            zIndex: "5",
          }}
        >
          <HeroComponent />
        </div>
      </div>
      <ServiceComponent />
      <ExplanationComponent />
      {/* <ProjectComponent /> */}
      <TestimonialComponent />
      {/* <NewsComponent /> */}
      <TechnologiesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
