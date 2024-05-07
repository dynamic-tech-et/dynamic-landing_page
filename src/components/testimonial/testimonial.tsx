import HeadingComponent from "../common/heading";
import { BsChatQuote } from "react-icons/bs";
import TestimonialCard from "./testimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const TestimonialComponent = () => {
    return (
        <div id="testimonials" className="w-full sm:w-4/5 mx-auto flex flex-col justify-center items-center gap-12 pt-16">
            <HeadingComponent title="Client Testimonials" description="" icon={<BsChatQuote size={80} color="black" />} />  
            
            <Carousel
                   responsive={responsive}
                   infinite={true}
                   autoPlay={false}                  
                   
                   className="h-96 w-full flex center items-center gap-8"
                >
                    <TestimonialCard imageUrl={null} name="John Doe" position="CEO" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." rating={5} />
                    <TestimonialCard imageUrl={null} name="Jane Doe" position="CTO" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." rating={4} />
                    <TestimonialCard imageUrl={null} name="John Doe" position="CEO" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." rating={3} />
                    <TestimonialCard imageUrl={null} name="Jane Doe" position="CTO" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." rating={2} />
                </Carousel>

        </div>
        
    )
}

export default TestimonialComponent;