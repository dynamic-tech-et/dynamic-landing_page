import HeadingComponent from "../common/heading";
import { BsChatQuote } from "react-icons/bs";
import TestimonialCard from "./testimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialComponent = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center w-full gap-12 pt-16 mx-auto sm:w-4/5"
    >
      <HeadingComponent
        title="Client Testimonials"
        description=""
        icon={<BsChatQuote size={80} color="black" />}
      />

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        className="flex items-center w-full gap-8 h-96 center"
      >
        <TestimonialCard
          imageUrl={null}
          name="Yohannes Tadesse"
          position="CEO"
          testimonial="Product was delivered on time and the team was very professional. Highly recommended."
          rating={5}
        />
        <TestimonialCard
          imageUrl={null}
          name="Dawit fisseha"
          position="CTO"
          testimonial="Their team is very professional and they have been able to deliver a quality service within the time frame. Highly recommended."
          rating={4}
        />
        <TestimonialCard
          imageUrl={null}
          name="Girum Abebe"
          position="CEO"
          testimonial="Dynamic and highly professional team. They have been able to deliver a quality service within the time frame. Highly recommended."
          rating={3}
        />
        <TestimonialCard
          imageUrl={null}
          name="Tamrat Assefa"
          position="COO"
          testimonial="Dynamic Technologies has been a great partner for us. They have been able to deliver a quality service within the time frame. Highly recommended."
          rating={2}
        />
      </Carousel>
    </div>
  );
};

export default TestimonialComponent;
