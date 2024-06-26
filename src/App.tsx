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
import ProjectComponent from "./components/project/project";

function App() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Header />
      </div>
      <div
        className="bg-gradient-to-r"
        style={{
          background: "#0b344b",
        }}
      >
        <div>
          <HeroComponent />
        </div>
      </div>
      <ServiceComponent />
      <ProjectComponent />
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
