import React, { useEffect, useState } from "react";
import data from "../../assets/slide1.json";
import { FaHeart, FaSearch } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

const Slider1 = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data);
    }, []);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden px-10">
            {slides.map((slide, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 my-20">
                    <figure className="h-60 relative w-full">
                        <img className="h-full w-full object-cover" src={slide.img} alt="" />
                        <div className="Overlay-Container h-full w-full absolute bg-black top-0 opacity-[50%]">
                            <div className="h-full flex gap-2 justify-center items-center">
                                <button className="bg-white text-gray-900 font-extrabold text-xl rounded-full p-4 shadow-lg">
                                    <FaHeart />
                                </button>
                                <button className="bg-white text-gray-900 font-extrabold text-xl rounded-full p-4 shadow-lg">
                                    <GrPowerCycle />
                                </button>
                                <button className="bg-white text-gray-900 font-extrabold text-xl rounded-full p-4 shadow-lg">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
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
                        <div className="flex mb-2">
                            <span className="text-red-500 text-2xl font-bold mr-4">{slide.price1}</span>
                            <span className="text-gray-700 text-2xl font-bold line-through">{slide.price2}</span>
                        </div>
                        <p className="w-[90%] text-gray-700/70 font-medium text-start mb-4">{slide.des}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider1;
