import React, { useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AdminServices = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const servicesArr = [
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Shortlist Your Success",
      content:
        "Based on your expected NEET Score, we shortlist for you the state & college you should apply for.",
      icon: "../../../About/motivationGif.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Guidance from our Advisor",
      content:
        "An Intensive one to one NEET counselling session from our Advisor who will answer your queries about AIQ & State Quota NEET Counselling.",
      icon: "../../../About/person-speaker.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Application Filling",
      content:
        "Support with filling of application form of All India Quota/ESI/AFMC/Deemed Universities & different state quota counselling.",
      icon: "../../../About/BookImg.gif",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
      title: "Look beyond MBBS",
      content:
        "There are many more medical courses like BDS, BAMS, Physiotherapy, DNB, etc.",
      icon: "../../../About/mission.gif",
    },
  ];
  const columns = [
    {
      title: "Service",
      dataIndex: "title",
      key: "title",

      render: (text) => (
        <p className="w-32 max-w-40 text-xs font-semibold">{text}</p>
      ),
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",

      render: (video) => (
        <video src={video} className="h-24 w-24 rounded"></video>
      ),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <p className="line-clamp-1 w-52 text-xs">{text}</p>,
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (img) => {
        console.log(img);
        return <img className="h-10 w-10" src={img} />;
      },
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
          <FaTrash
            onClick={async () => {
              const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}admin/delete-testimonial/${record?._id}`,
              );

              fetchTestimonials();
            }}
            className="cursor-pointer text-primary-color"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      {isView && (
        <Modal
          onOk={() => setIsView(false)}
          open={isView}
          onClose={() => setIsView(false)}
          onCancel={() => setIsView(false)}
        >
          <ViewItem
            title={viewItem?.title}
            content={viewItem?.content}
            icon={viewItem?.icon}
            video={viewItem?.video}
          />
        </Modal>
      )}
      <Container>
        <div>
          {/* <h1 className="text-2xl">Services</h1> */}
          <button className="float-right my-2 rounded bg-yellow-600 p-1 font-semibold text-white">
            Add New +
          </button>
          <Table columns={columns} dataSource={servicesArr}></Table>
        </div>
      </Container>
    </>
  );
};

const EditCard = ({ video, title, content, icon }) => {
  const [editedName, setEditedName] = useState(clientName);
  const [editedCollege, setEditedCollege] = useState(clientCollege);
  const [editedReview, setEditedReview] = useState(review);
  const [editImage, setEditImage] = useState({ file: "", url: imgUrl });

  const handleSave = async () => {
    const formData = {
      clientName: editedName,
      clientCollege: editedCollege,
      review: editedReview,
      file: editImage?.file ? editImage?.file : null,
    };
    // await axios.post(
    //   `${import.meta.env.VITE_BACKEND_URL}admin/edit-testimonial/${id}`,
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   },
    // );
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
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${editImage?.url}`}
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
            <img
              className="mx-auto h-32 w-32 rounded-full"
              src={formData?.imgUrl}
              alt=""
            />
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

const ViewItem = ({ video, title, content, icon }) => {
  return (
    <div className="flex flex-col gap-3 p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <img src={icon} className="w-7" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <video autoPlay controls className="w-full rounded-lg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};
export default AdminServices;
