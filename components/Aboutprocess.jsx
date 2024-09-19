import React from "react";
import Image from "next/image";
const Journey = () => {
    return (
        <div className="">

      
        <div className=" max-w-7xl 2xl:max-w-[1530px] 2xl:mt-6 my-10 mt-6 px-4 py-12 m-auto text-[#000000] ">
            <div className="  text-center ">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold Poppin ">
                    Process of Development
                </h2>
                <p className=" text-xs sm:text-sm lg:text-lg xl:text-xl  mt-4 Poppin">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/>industry’s standard dummy text ever since the 1500s.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3  max-w-7xl  2xl:max-w-max lg:grid-cols-5 xl:grid-cols-5  justify-center items-center gap-6 2xl:gap-10  mt-8">
                    <div className="text-center  items-center  w-auto h-auto mt-4  p-6 2xl:p-10 bg-[#5FE2D8] rounded-3xl">
                        <div className="   flex flex-col justify-center    ">
                            <div className="flex justify-center ">
                                <Image
                                    className=" w-24 h-24 2xl:w-28 2xl:h-28 "
                                    src="1jour.svg"
                                    alt="Inception"
                                    width={400}
                                    height={400}
                                />
                           </div>
                        
                            <div className="text-xl md:text-xl 2xl:text-3xl text-center mt-4 font-bold">Analysis</div>
                            
                            
                        </div>
                    </div>
                    <div className="text-center  items-center  w-auto h-auto mt-4  p-6 2xl:p-10 bg-[#5FE2D8] rounded-3xl">
                        <div className="   flex flex-col justify-center    ">
                            <div className="flex justify-center ">
                                <Image
                                    className=" w-24 h-24 2xl:w-28 2xl:h-28 "
                                    src="2jour.svg"
                                    alt="Inception"
                                    width={400}
                                    height={400}
                                />
                           </div>
                        
                            <div className="text-xl md:text-xl 2xl:text-3xl text-center mt-4 font-bold">Design</div>
                            
                            
                        </div>
                    </div>
                    <div className="text-center  items-center  w-auto h-auto mt-4  p-6 2xl:p-10 bg-[#5FE2D8] rounded-3xl">
                        <div className="   flex flex-col justify-center    ">
                            <div className="flex justify-center ">
                                <Image
                                    className=" w-24 h-24 2xl:w-28 2xl:h-28 "
                                    src="3jour.svg"
                                    alt="Inception"
                                    width={400}
                                    height={400}
                                />
                           </div>
                        
                            <div className="text-xl md:text-xl 2xl:text-3xl text-center mt-4 font-bold">Development</div>
                            
                            
                        </div>
                    </div>
                    <div className="text-center  items-center  w-auto h-auto mt-4  p-6 2xl:p-10 bg-[#5FE2D8] rounded-3xl">
                        <div className="   flex flex-col justify-center    ">
                            <div className="flex justify-center ">
                                <Image
                                    className=" w-24 h-24 2xl:w-28 2xl:h-28 "
                                    src="4jour.svg"
                                    alt="Inception"
                                    width={400}
                                    height={400}
                                />
                           </div>
                        
                            <div className="text-xl md:text-xl 2xl:text-3xl text-center mt-4 font-bold">Testing</div>
                            
                            
                        </div>
                    </div>
                    <div className="text-center  items-center  w-auto h-auto mt-4  p-6 2xl:p-10 bg-[#5FE2D8] rounded-3xl">
                        <div className="   flex flex-col justify-center    ">
                            <div className="flex justify-center ">
                                <Image
                                    className=" w-24 h-24 2xl:w-28 2xl:h-28 "
                                    src="5jour.svg"
                                    alt="Inception"
                                    width={400}
                                    height={400}
                                />
                           </div>
                        
                            <div className="text-xl md:text-xl 2xl:text-3xl text-center mt-4 font-bold">Live</div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Journey;

