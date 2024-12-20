import React, { useState, useEffect } from 'react';
// import './Gallery.css'; // Assuming you have a separate CSS file for styles

const imageUrls = [
    { url: "https://neetadvisor.com/assets/images/seminars/seminar2-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar8-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar7-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar6-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar5-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar4-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar3-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar2-1024x576.webp" },
    { url: "https://neetadvisor.com/assets/images/seminars/seminar1-1024x576.webp" }
];

const Gallery = () => {
    const [images, setImages] = useState(imageUrls);
    const [random, setRandom] = useState(0)

    const shuffleImages = () => {
        const shuffled = [...images];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setImages(shuffled);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            shuffleImages();
            setRandom(Math.floor(Math.random() * images.length))
        }, 2500);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-4xl font-bold py-5 text-indigo-900">Conceptualizing<span className='text-yellow-400 font-bold'> NEET Counselling </span>Easy Way</h1>
            <p className="px-20 text-center text-gray-800">
                Our team has developed a set of webinars/seminars and workshops exclusively for students aspiring for a successful career in medicine. These thoughtfully crafted sessions will cover a wide range of topics that will address concerns, answer queries, and clarify doubts of both students and parents.
            </p>

            <div className="grid grid-cols-3 gap-6 py-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-300 ease-in-out ${random === index ? "scale-110 p-5" : "p-0"} relative h-52 w-72 m-2 rounded-lg overflow-hidden image-container`}
                        style={{
                            backgroundImage: `url(${image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;