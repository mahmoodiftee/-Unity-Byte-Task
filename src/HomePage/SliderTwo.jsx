import React, { useState } from "react";
import SlideThree from "../Component/SliderTwo/SlideThree";
import SlideTwo from "../Component/SliderTwo/SlideTwo";
import SlideOne from "../Component/SliderTwo/SlideOne";

const SliderTwo = () => {
    const slides = [
        <SlideOne />,
        <SlideTwo />,
        <SlideThree />
    ];
    let [current, setCurrent] = useState(0);

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-extrabold uppercase text-center mb-4">Slider 2</h1>
            <div className="mx-auto w-full mb-4">
                <div className="md:w-[10%] w-1/4 mx-auto container">
                    {slides.map((_, i) => (

                        <React.Fragment key={i}>
                            <input
                                onClick={() => {
                                    setCurrent(i);
                                }}
                                type="radio"
                                name="slide"
                                id={`c${i + 2}`}
                                checked={current === i}
                            />
                            <label
                                htmlFor={`c${i + 2}`}
                                className={`card rounded-full border-4 ${current === i ? "border-orange-500 bg-orange-500" : "border-gray-300 bg-gray-300"
                                    }`}
                            ></label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 w-1/2 mx-auto mb-4 h-[3px]"></div>
            <div className="w-full m-auto">
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
                </div>
            </div>
        </div>
    );
};

export default SliderTwo;
