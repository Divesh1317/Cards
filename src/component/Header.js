import React from "react";


const Header = () => {

        return (
            <div className="flex flex-col pb-4 bg-white   max-w-full">
                <div className="flex justify-center items-center px-16 py-3.5 w-full bg-gray-800 max-sm:max-w-full ">
                    <div className="flex gap-5 justify-center max-w-full w-[749px] sm:flex-wrap">
                        <div className="flex flex-col flex-1 justify-center items-start py-2 pr-16 bg-white rounded-lg border border-solid border-zinc-200">
                            <img
                                loading="lazy"
                                src="https://i.ibb.co/Y2Gfy3X/IMAGE.png" alt="IMAG"
                                className="w-8 aspect-square mx-2"
                            />
                        </div>
                        <div className="flex gap-5 justify-between my-auto text-sm leading-5 text-gray-300">
                            <div>Categories</div>
                            <div className="flex-auto">Website Builders</div>
                        </div>
                        <div className="flex justify-center items-center text-sm leading-5 text-gray-300">
                            Today's deals
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    

    export default Header;
