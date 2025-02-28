import React, { useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Testimonial = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const testimonialsData = [
    {
      id: 1,
      name: "Smt. Deepali Chandra",
      title: "CEO, ABC Corporation",
      testimonial: `I want to share that “ there are different types of people/ professionals in the city“ but a truly professional, not only professional in the professional sense but as a good human beings, we have come to know some very nice, fine person like Mr. Bansal and Vivek Ji who have been very helpful throughout the NEET Counselling and have given us time which is most important. We got best possible advise from neet advisor which has GIVEN US A GREAT assurance, apart from the fact that the child has done well but “fine tuning and making good choices at the right time” , is very important, in which they all have helped. We are grateful to the entire team of NEET ADVISOR. All the very best.`,
      image: "./Testimonials/Testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      title: "Entrepreneur, StartUp India",
      testimonial: `The personalized attention and expertise provided by the NEET Advisor team were outstanding. They guided us at every step, ensuring that we made informed decisions. Their insights were invaluable, and I would recommend them to anyone looking for professional, heartfelt advice.`,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 3,
      name: "Anita Verma",
      title: "Parent of a Medical Student",
      testimonial: `Before we came to NEET Advisor, we were overwhelmed by the sheer volume of decisions we needed to make. They simplified the process, gave us a clear roadmap, and constantly supported us throughout the journey. I can’t thank them enough for their commitment and dedication.`,
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 4,
      name: "John Smith",
      title: "Software Engineer, TechCorp",
      testimonial: `Professionalism, attention to detail, and understanding our specific needs made working with NEET Advisor an amazing experience. They were proactive, transparent, and approachable at every stage of the process. Highly recommended!`,
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 5,
      name: "Dr. Kavita Sharma",
      title: "Parent of NEET Aspirant",
      testimonial: `Thank you so much to the NEET Advisor team for being a true guiding light for my child. From college selection to documentation, everything was seamless, which gave us immense peace of mind. We felt secure in making decisions with their honest and expert advice.`,
      image: "https://picsum.photos/200/300?random=4",
    },
    // {
    //   id: 5,
    //   name: "Dr. Kavita Sharma",
    //   title: "Parent of NEET Aspirant",
    //   testimonial: `Thank you so much to the NEET Advisor team for being a true guiding light for my child. From college selection to documentation, everything was seamless, which gave us immense peace of mind. We felt secure in making decisions with their honest and expert advice.`,
    //   image: "https://picsum.photos/200/300?random=4",
    // },
    {
      id: 6,
      name: "Sneha Gupta",
      title: "High School Teacher",
      testimonial: `The team at NEET Advisor is phenomenal. They don’t just provide advice; they ensure that you feel confident in your decisions. Their ability to understand both student and parent concerns is exceptional. This is what sets them apart!`,
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 7,
      name: "Ramesh Malhotra",
      title: "Businessman",
      testimonial: `We were completely lost until we came across NEET Advisor. They took the time to analyze our situation and provided tailored advice. Their knowledge and dedication are truly praiseworthy.`,
      image: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 8,
      name: "Priya Kapoor",
      title: "Parent of a NEET Ranker",
      testimonial: `A heartfelt thank you to NEET Advisor! It’s rare to find professionals who are so compassionate and understanding. Their guidance was instrumental in my child securing admission to a top medical college.`,
      image: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 9,
      name: "Vikas Sharma",
      title: "Father of a NEET Aspirant",
      testimonial: `NEET Advisor not only helped us with the admission process but also provided emotional support throughout. They’re truly dedicated to ensuring success for every student.`,
      image: "https://picsum.photos/200/300?random=8",
    },
    {
      id: 10,
      name: "Preeti Mishra",
      title: "Parent of a NEET Candidate",
      testimonial: `The NEET Advisor team was incredibly helpful in navigating the complexities of counseling. Their professionalism and personal touch gave us the confidence to move forward.`,
      image: "https://picsum.photos/200/300?random=9",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Review",
      dataIndex: "testimonial",
      key: "testimonial",
      render: (text) => (
        <p className="line-clamp-3 text-xs font-semibold">{text}</p>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <img className="h-10 w-10" src={image} />,
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-5">
          <FaEye className="cursor-pointer text-primary-color" />

          <FaEdit
            onClick={() => setEditItem(record)}
            className="cursor-pointer text-primary-color"
          />
          <FaTrash className="cursor-pointer text-primary-color" />
        </div>
      ),
    },
  ];
  return (
    <>
      {isView && <Modal />}
      <Container>
        <Table
          className="h-full"
          dataSource={testimonialsData}
          columns={columns}
          pagination={{
            pageSize: 5,
          }}
        />
      </Container>
    </>
  );
};

export default Testimonial;
