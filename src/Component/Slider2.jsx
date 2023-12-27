import React, { useEffect, useState } from "react";
import data from "../assets/slide2.json";

const Slider2 = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className="flex flex-col gap-4 mb-10">
                    <figure className="h-60 w-full"><img className="h-full w-full object-cover" src={slide.img} alt="" /></figure>
                    <div className="flex flex-col justify-center px-4 md:px-0">
                        <div className="flex justify-start">
                            <span className="text-yellow-500 text-xl font-bold">{Array(slide.rating).fill("★").join("")}</span>
                        </div>
                        <h2 className="text-xl text-gray-800/80 text-start font-bold mb-2">{slide.title}</h2>
                        <div className="flex mb-2">
                            <span className="text-red-500 text-2xl font-bold mr-4">{slide.price1}</span>
                            <span className="text-gray-700 text-2xl font-bold line-through">{slide.price2}</span>
                        </div>
                        <p className="text-gray-700/70 font-medium text-start mb-4">{slide.des}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider2;
