import React from 'react';

const videos = [
    {
        id: 1,
        title: "Sample Video 1",
        description: "This is the description for sample video 1.",
        url: "https://www.youtube.com/embed/pdm0e_Uexqc?si=YjlT3ziZkH6k3T6K" // Replace with actual video URLs
    },
    {
        id: 2,
        title: "Sample Video 2",
        description: "This is the description for sample video 2.",
        url: "https://www.youtube.com/embed/pdm0e_Uexqc?si=YjlT3ziZkH6k3T6K" // Replace with actual video URLs
    },
    {
        id: 3,
        title: "Sample Video 3",
        description: "This is the description for sample video 3.",
        url: "https://www.youtube.com/embed/pdm0e_Uexqc?si=YjlT3ziZkH6k3T6K" // Replace with actual video URLs
    }
];

const Videos = () => {
    return (
        <div className="min-h-screen bg-gradient-to-l from-primary to-secondary  bg-opacity-20 flex items-center justify-center p-4">
            <div className="bg-white p-8">
                {videos.map(video => (
                    <div key={video.id} className="flex flex-col md:flex-row mb-8 pb-4 border-b border-gray-200 transition-transform duration-300 hover:scale-105">
                        <div className="w-full md:w-2/5 p-4">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full"
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 p-4 flex flex-col justify-center">
                            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                            <p className="text-gray-700">{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
