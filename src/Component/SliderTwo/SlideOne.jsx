import { useEffect, useState } from "react";
import data from "../../assets/slide1.json";

const SlideOne = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data);
    }, []);


    return (
        <div className="w-full md:w-1/2 mx-auto">
            <div className="flex flex-col gap-4 overflow-hidden">
                {slides.map((slide, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <figure className="h-20 w-20 relative">
                            <img className="h-full w-full object-cover" src={slide.img} alt="" />
                        </figure>
                        <div className="flex flex-col justify-center px-4 md:px-0">
                            <div className="flex justify-start">
                                {[...Array(5)].map((_, starIndex) => (
                                    <span
                                        key={starIndex}
                                        className={`text-xl ${starIndex < slide.rating ? 'text-yellow-500' : 'text-gray-300'} font-bold`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-xl text-gray-800/80 text-start font-bold mb-2">{slide.title}</h2>
                            <div className="flex justify-start items-center mb-2">
                                <span className="text-orange-500 text-2xl font-bold mr-4">{slide.price1}</span>
                                <span className="text-gray-900/70 text-xl font-bold line-through">{slide.price2}</span>
                            </div>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlideOne;