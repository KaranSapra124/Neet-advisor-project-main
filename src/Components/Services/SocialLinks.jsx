import React from 'react';
import Container from '../Helper/Container';
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs';

const SocialLinks = () => {
    const socialLinks = [
        {
            icon: <BsTwitter />,
            followersCount: 1200, // Mock followers for Twitter
            platform: 'Twitter',
            id: "Twitter",
            link: 'https://twitter.com/yourprofile' // Add your Twitter link
        },
        {
            icon: <BsLinkedin />,
            followersCount: 800, // Mock followers for LinkedIn
            platform: 'LinkedIn',
            id: "Linkedin",
            link: 'https://linkedin.com/in/yourprofile' // Add your LinkedIn link
        },
        {
            icon: <BsFacebook />,
            followersCount: 1500, // Mock followers for Facebook
            platform: 'Facebook',
            id: "Facebook",
            link: 'https://facebook.com/yourprofile' // Add your Facebook link
        },
        {
            icon: <BsInstagram />,
            followersCount: 950, // Mock followers for Instagram
            platform: 'Instagram',
            id: "Instagram",
            link: 'https://instagram.com/yourprofile' // Add your Instagram link
        }
    ];

    return (
        <Container>
            {/* <div className='py-10'> */}
            <h1 className='primary font-bold text-4xl pb-5 text-center'>Let's Get <span className='text-yellow-400 font-extrabold'>Social!</span></h1>
            <p className='text-gray-800 text-center font-semibold pb-10'>Connect with us on Social Media</p>
            {/* </div> */}
            <div className="flex   items-center  justify-center space-x-6"> {/* Optional: Add some spacing between links */}
                {socialLinks.map((elem, index) => (
                    <a
                        id={elem.id}
                        key={index} // Add a unique key for each element
                        href={elem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex hover:text-white hover:scale-105 transition-all duration-300  hover:border-none  hover:shadow-custom-inset  custom-button items-center space-x-2" // Optional: Flexbox for alignment

                    >
                        {elem.icon}

                    </a>
                ))}
            </div>
        </Container>
    );
}

export default SocialLinks;