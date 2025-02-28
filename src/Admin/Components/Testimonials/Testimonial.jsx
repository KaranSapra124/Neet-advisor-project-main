import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Divider from "../../../Components/Helper/Divider";
import axios from "axios";

const Testimonial = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const testimonialsData = [
    {
      id: 1,
      name: "Smt. Deepali Chandra",
      title: "CEO, ABC Corporation",
      testimonial: `I want to share that “ there are different types of people/ professionals in the city“ but a truly professional, not only professional in the professional sense but as a good human beings, we have come to know some very nice, fine person like Mr. Bansal and Vivek Ji who have been very helpful throughout the NEET Counselling and have given us time which is most important. We got best possible advise from neet advisor which has GIVEN US A GREAT assurance, apart from the fact that the child has done well but “fine tuning and making good choices at the right time” , is very important, in which they all have helped. We are grateful to the entire team of NEET ADVISOR. All the very best.`,
      image: "../Testimonials/Testimonial-1.jpg",
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

      render: (text) => (
        <p className="w-32 max-w-40 text-xs font-semibold">{text}</p>
      ),
    },
    {
      title: "Designation",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <p className="w-32 max-w-40 text-xs font-semibold">{text}</p>
      ),
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
          <FaEye
            onClick={() => {
              setIsView(true);
              setViewItem(record);
            }}
            className="cursor-pointer text-primary-color"
          />

          <FaEdit
            onClick={() => {
              setIsEdit(true);
              setEditItem(record);
            }}
            className="cursor-pointer text-primary-color"
          />
          <FaTrash className="cursor-pointer text-primary-color" />
        </div>
      ),
    },
  ];

  useEffect(() => console.log(editItem), [editItem]);
  return (
    <>
      {isView && (
        <Modal
          open={isView}
          onClose={() => setIsView(false)}
          onCancel={() => setIsView(false)}
        >
          <TestimonialCard
            clientCollege={viewItem?.title}
            clientName={viewItem?.name}
            imgUrl={viewItem?.image}
            review={viewItem?.testimonial}
          />
        </Modal>
      )}
      {isEdit && (
        <EditCard
          clientCollege={editItem?.title}
          clientName={editItem?.name}
          imgUrl={editItem?.image}
          review={editItem?.testimonial}
          onCancel={() => setIsEdit(false)}
          onSave={setEditItem}
        />
      )}
      {isAdd && <AddCard open={isAdd} onCancel={() => setIsAdd(false)} />}
      <Container>
        <button
          onClick={() => setIsAdd(true)}
          className="float-right my-2 rounded bg-yellow-600 p-1 font-semibold text-white transition-all hover:scale-105 hover:shadow hover:shadow-black"
        >
          Add New +
        </button>

        <Table
          className="h-full"
          dataSource={testimonialsData}
          columns={columns}
          pagination={{
            pageSize: 5,
          }}
          bordered={true}
        />
      </Container>
    </>
  );
};

const TestimonialCard = ({ imgUrl, review, clientName, clientCollege }) => {
  return (
    <div className="relative mx-auto my-3.5 flex h-full max-h-full rounded-md bg-gray-200/5 p-4 lg:mx-0 lg:my-0 lg:max-h-72 lg:gap-4">
      <img
        className="absolute -left-3 -top-3 h-10 w-10 rounded-full shadow shadow-yellow-600 lg:h-14 lg:w-14"
        src={imgUrl}
        alt=""
        srcset=""
      />
      <div className="px-3 py-4 lg:px-6 lg:py-5">
        <h1 className="text-[0.7rem] font-bold text-primary-color lg:text-sm">
          {clientName}
        </h1>
        <h2 className="my-1 text-[0.5rem] font-medium text-gray-800 lg:text-xs">
          {clientCollege}
        </h2>
        <Divider className="my-4 h-1 w-12 rounded-full bg-yellow-600 lg:w-20" />
        <p className="text-[0.5rem] font-bold italic lg:text-xs">"{review}"</p>
      </div>
    </div>
  );
};

const EditCard = ({
  imgUrl,
  review,
  clientName,
  clientCollege,
  onSave,
  onCancel,
}) => {
  const [editedName, setEditedName] = useState(clientName);
  const [editedCollege, setEditedCollege] = useState(clientCollege);
  const [editedReview, setEditedReview] = useState(review);
  const [editImage, setEditImage] = useState({ file: "", url: imgUrl });

  const handleSave = () => {
    onSave({
      imgUrl: editImage,
      review: editedReview,
      clientName: editedName,
      clientCollege: editedCollege,
    });
    onCancel();
  };

  return (
    <Modal
      title="Edit Testimonial"
      open={true}
      onOk={handleSave}
      onCancel={onCancel}
    >
      <div className="flex flex-col gap-4 p-5">
        <img
          src={editImage?.url}
          alt="Client"
          className="mx-auto h-20 w-20 rounded-full"
        />
        <input
          type="file"
          name=""
          onChange={(e) => {
            setEditImage({
              file: e.target.files[0],
              url: URL.createObjectURL(e.target.files[0]),
            });
          }}
          id=""
        />
        <Input
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          placeholder="Client Name"
        />
        <Input
          value={editedCollege}
          onChange={(e) => setEditedCollege(e.target.value)}
          placeholder="Client College"
        />
        <Input.TextArea
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
          placeholder="Review"
          rows={4}
        />
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel }) => {
  const [formData, setFormData] = useState({
    imgUrl: "",
    file: "",
    review: "",
    clientName: "",
    clientCollege: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.imgUrl ||
      !formData.review ||
      !formData.clientName ||
      !formData.clientCollege
    ) {
      alert("All fields are required!");
      return;
    }
    setFormData({ imgUrl: "", review: "", clientName: "", clientCollege: "" });
    onCancel(); // Close modal after submission
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}admin/add-testimonial`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      },
    );
  };

  return (
    <>
      <Modal
        title="Add Testimonial"
        open={open}
        onClose={onCancel}
        onCancel={onCancel}
        footer={false}
      >
        {/* <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"> */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <input
              type="text"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full rounded-md border p-2"
            /> */}
            <img src={formData?.imgUrl} alt="" srcset="" />
            <input
              type="file"
              name="file"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  file: e.target.files[0],
                  imgUrl: URL.createObjectURL(e.target.files[0]),
                }));
              }}
              id=""
            />
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Review"
              className="w-full rounded-md border p-2"
              rows={3}
            />
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Client Name"
              className="w-full rounded-md border p-2"
            />
            <input
              type="text"
              name="clientCollege"
              value={formData.clientCollege}
              onChange={handleChange}
              placeholder="Client College"
              className="w-full rounded-md border p-2"
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border px-4 py-2 text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#272E6A] px-4 py-2 text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
};

export default Testimonial;
