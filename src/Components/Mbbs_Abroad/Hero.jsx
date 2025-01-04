import React from 'react';
import { 
  FaGlobeAmericas, 
  FaBookReader, 
  FaUserGraduate,
  FaArrowRight 
} from 'react-icons/fa';

const Hero = () => {
  const imageArr = [
    'https://neetadvisor.com/assets/images/gallery/international/6.webp',
    'https://neetadvisor.com/assets/images/gallery/international/7.webp',
    'https://neetadvisor.com/assets/images/gallery/international/9.webp'
  ];

  const features = [
    { icon: FaGlobeAmericas, text: "International Education" },
    { icon: FaBookReader, text: "Expert Counselling" },
    { icon: FaUserGraduate, text: "Career Guidance" }
  ];

  const [currentImage, setCurrentImage] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % imageArr.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary-color/10 text-primary-color px-4 py-2 rounded-full text-sm font-semibold">
                Your Future Starts Here
              </span>
            </div>
            
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-primary-color leading-tight">
              World Class Counselling For Your{' '}
              <span className="text-yellow-500 font-extrabold transform hover:scale-105 transition-transform duration-300">
                Global Dreams
              </span>
            </h1>
            
            <p className="text-gray-700 text-sm md:text-sm font-medium leading-relaxed max-w-xl">
              Dreams should know no borders, geographies, or limits. And this belief 
              is translated into helping you dream bigger. Talk to us to learn more 
              about medical studies overseas.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {features.map(({ icon: Icon, text }, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-6 h-6 text-primary-color" />
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group bg-primary-color text-white px-8 py-4 rounded-lg 
                               hover:bg-opacity-90 transition-all duration-300 
                               shadow-lg font-semibold flex items-center justify-center space-x-2">
                <span>Get Started Now</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-primary-color
                               text-primary-color font-semibold hover:bg-primary-color
                               hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Carousel Section */}
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {imageArr.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  currentImage === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Carousel Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {imageArr.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${currentImage === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/60 hover:bg-white/80'}`}
                />
              ))}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;