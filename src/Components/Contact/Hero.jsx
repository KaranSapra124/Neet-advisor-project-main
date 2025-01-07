import React, { useState, useEffect } from 'react'
import Container from "../Helper/Container"
import { Dropdown, Menu, Switch } from 'antd'
const Hero = () => {


    return (
        <>
            <Container className={'bg-gradient-to-tr from-gray-200 to-gray-300/10'}>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary-color text-3xl font-semibold'>Reach Out <span className='text-yellow-600 font-extrabold'> To Us!</span></h1>
                    <p className='text-gray-700 font-semibold my-2 text-sm'>Get in touch with our <strong>Mentors</strong> , fill out the form below!</p>
                </div>
                <FormComponent />
            </Container>
        </>
    )
}

// import React, { useState } from 'react';
// import { Switch, Dropdown, Menu } from 'antd';

const FormComponent = () => {
    const [isUG, setIsUg] = useState(true);
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const items = [
        {
            key: 1,
            label: <option onClick={() => setFormData((prev) => ({
                ...prev,
                courseDetail: "GeneralQuery"
            }))} value={'GeneralQuery'}>GeneralQuery</option>
        },
        {
            key: 2,
            label: <option onClick={() => setFormData((prev) => ({
                ...prev,
                courseDetail: "Escalation"
            }))} value={'Escalation'}>Escalation</option>
        }
    ];

    const menu = <Menu className="bg-gray-500">
        {items.map(item => (
            <Menu.Item key={item.key} className="text-gray-500 font-bold hover:bg-gray-200 px-4 py-2">
                {item.label}
            </Menu.Item>
        ))}
    </Menu>

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            exam: isUG ? "Ug" : "Pg"
        }))
    }, [isUG])




    return (
        <div className="max-w-screen-2xl  mx-auto p-2  flex  items-center">
            <div className="bg-gray-100 backdrop-blur-sm rounded-xl shadow-xl w-1/2 p-2 h-96 md:p-4">
                <div className="space-y-2">
                    {/* Input Fields Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="Enter Your Name..."
                            type="text"
                            name="Name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-200 rounded-lg 
                                 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-yellow-600
                                 transition-colors duration-300 shadow-md"
                        />
                        <input
                            placeholder="Enter Your Number..."
                            type="number"
                            min={0}
                            onChange={handleChange}
                            name="phoneNumber"
                            className="w-full px-4 py-2 bg-gray-200 rounded-lg 
                                 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-yellow-600
                                 transition-colors duration-300 shadow-md"
                        />
                        <input
                            placeholder="Enter Your Email..."
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-200 rounded-lg 
                                 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-yellow-600
                                 transition-colors duration-300 md:col-span-2 shadow-md"
                        />
                    </div>

                    {/* Switch and Dropdown Group */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Switch
                                checkedChildren="UG"
                                unCheckedChildren="PG"
                                defaultChecked
                                className="bg-yellow-600"
                                checked={isUG} // Use 'checked' to bind the state
                                onChange={(checked) => setIsUg(checked)} // Use the 'checked' parameter to update the state
                            />

                            <Dropdown overlay={menu} >
                                <a
                                    onClick={e => e.preventDefault()}
                                    className="px-4 py-2 bg-gray-200 rounded-lg
                                         text-gray-400  font-semibold hover:border-yellow-600 cursor-pointer
                                         transition-colors duration-300 shadow-md"
                                >
                                    Select Option
                                </a>
                            </Dropdown>
                        </div>

                        <textarea
                            name="description"
                            placeholder="Description (Optional)"
                            rows={3}
                            onChange={handleChange}
                            className="w-full  px-4 py-2 bg-gray-200 rounded-lg
                                 text-gray-500 placeholder-gray-400 focus:outline-none focus:border-yellow-600
                                 transition-colors duration-300 resize-none shadow-md"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button onClick={() => console.log(formData)} className="w-full mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg
                             hover:bg-yellow-500 transform transition-all duration-300
                             hover:scale-[1.02] focus:outline-none focus:ring-2 
                             focus:ring-yellow-500 focus:ring-opacity-50">
                    Send
                </button>
            </div>

            {/* Map iframe (commented out but styled) */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0180566231634!2d77.2802189754974!3d28.539176975715858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce386847e1c93%3A0x535231df782a3e3d!2sNEET%20ADVISOR!5e0!3m2!1sen!2sin!4v1736235673499!5m2!1sen!2sin"
                className="w-1/2 h-96 shadow-xl mx-2 rounded-lg border-none hover:scale-105 transition-all cursor-pointer"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};



export default Hero