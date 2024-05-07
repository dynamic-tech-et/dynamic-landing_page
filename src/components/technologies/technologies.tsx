import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


const TechnologiesComponent = () => {
    return (
        <div className="w-full sm:w-3/5 mx-auto flex flex-col justify-center items-center gap-12 pt-24">
            <p className="text-4xl font-bold text-center text-gray-900">Technologies</p>
            
                <Carousel
                   responsive={responsive}
                   infinite={true}
                   autoPlay={true}
                   autoPlaySpeed={2000}
                   
                   className="h-96 w-full"
                >
                    <div className="w-48 flex justify-center items-center bg-white ">
                        <img className="w-40" width="80px" src="./django.svg" alt="..." />
                     
                    </div>
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./mongodb.svg" alt="..." />
                    </div>
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./nextjs.svg" alt="..." />
                    </div>
                    <div className="w-48 flex justify-center items-center ">
                   `    <img className="w-40" width="80px" src="./react.svg" alt="..." />
                    </div>
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./postgres.svg" alt="..." />
                    </div>
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./nodejs.svg" alt="..." />
                    </div> 
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./svelte.svg" alt="..." />
                    </div> 
                    <div className="w-48 flex justify-center items-center ">
                        <img className="w-40" width="80px" src="./angular.svg" alt="..." />
                    </div>       
                           
                    
                </Carousel>
         
        </div>
    )
}

export default TechnologiesComponent;