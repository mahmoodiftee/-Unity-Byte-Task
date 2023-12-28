import { useState } from "react";
import Slider1 from "../Component/Slider1";
import Slider2 from "../Component/Slider2";
import Slider3 from "../Component/slide3";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Home = () => {
    const slides = [
        <Slider1 />,
        <Slider2 />,
        <Slider3 />,
    ];
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <div key={index} className="w-full h-full">
                        {s}
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-black/70 px-10 text-3xl">
                <button className="bg-white rounded-full p-4 shadow-lg" onClick={previousSlide}>
                    <MdKeyboardArrowLeft  />
                </button>
                <div  className="bg-gray-100 w-full h-[3px]"></div>
                <button  className="bg-white rounded-full p-4 shadow-lg"onClick={nextSlide}>
                    <MdKeyboardArrowRight  />
                </button>
            </div>
        </div>
    );
};

export default Home;
