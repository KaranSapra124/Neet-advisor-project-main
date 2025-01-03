import React, { useState } from 'react';
import { Modal, Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CareerModal = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        console.log('Form values:', values);
        message.success('Application submitted successfully!');
        setIsOpen(false);
        form.resetFields();
    };

    const handleUploadChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <Modal
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}

        >
            <Form className='p-10'
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                    label="Cover Letter"
                    name="coverLetter"
                    rules={[{ required: true, message: 'Please enter your cover letter!' }]}
                >
                    <Input.TextArea rows={4} placeholder="Write your cover letter here" />
                </Form.Item>

                <Form.Item
                    label="Resume"
                    name="resume"
                    rules={[{ required: true, message: 'Please upload your resume!' }]}
                >
                    <Upload 
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        beforeUpload={() => false} // Prevent automatic upload
                        onChange={handleUploadChange}
                    >
                        <Button className='bg-yellow-500 text-white ' icon={<UploadOutlined />}>Upload Resume</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button className='bg-yellow-500 text-white ' htmlType="submit">
                        Submit Application
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CareerModal;