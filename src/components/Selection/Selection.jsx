import React from 'react';
import v1 from "../../assets/website/notes.mp4";
import v2 from "../../assets/website/derivation.mp4";
import v3 from "../../assets/website/video.mp4";
import v4 from "../../assets/website/pyq.mp4";

const Selection = () => {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 gap-4 p-4  ">




            <div className="relative m-2  shadow-xl  bg-black rounded-3xl bg-opacity-40">
                <video
                    className="object-cover  shadow-xl  w-full h-full rounded-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={v1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bg-black bg-opacity-60 rounded-3xl inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Notes</h2>
                
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                </div>
            </div>




            <div className="relative m-2 shadow-xl  bg-black rounded-3xl bg-opacity-40">
                <video
                    className="object-cover  shadow-xl  rounded-3xl w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={v2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bg-black bg-opacity-60 rounded-3xl inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Derivations</h2>
                    
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                </div>
            </div>





            <div className="relative m-2 shadow-xl  bg-black rounded-3xl bg-opacity-60">
                <video
                    className="object-cover rounded-3xl rounded-3xl w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={v3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bg-black rounded-3xl bg-opacity-60 inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Video Lectures</h2>
                   
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                </div>
            </div>





            <div className="relative bg-black m-2 shadow-xl  rounded-3xl bg-opacity-40">
                <video
                    className="object-cover rounded-3xl w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={v4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bg-black  rounded-3xl bg-opacity-60 inset-0 flex flex-col  justify-center items-center text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">PYQ's</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                </div>
            </div>
        </div>
    );
};

export default Selection;
