import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Table } from "antd";
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
  const handleSave = (data) => {
    console.log(data);
  };
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
      {isEdit && (
        <EditCard
          onSave={handleSave}
          onCancel={() => setIsEdit(false)}
          key={editItem?._id}
          title={editItem?.title}
          content={editItem?.content}
          icon={editItem?.icon}
          video={editItem?.video}
        />
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

const EditCard = ({ video, title, content, icon, onCancel, onSave }) => {
  const [editedVideo, setEditedVideo] = useState({ file: "", url: video });
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editedIcon, setEditedIcon] = useState(icon);
  const [editImage, setEditImage] = useState(null);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("video", editedVideo);
    formData.append("title", editedTitle);
    formData.append("content", editedContent);
    if (editImage?.file) {
      formData.append("file", editImage.file);
    }

    // Example API call (uncomment to use)
    // await axios.post(`${import.meta.env.VITE_BACKEND_URL}admin/edit-testimonial/${id}`, formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    onSave(formData); // Pass formData to parent if needed
    onCancel();
  };

  // useEffect(
  //   () => console.log(editedVideo, editedTitle, editedIcon, editedContent),
  //   [editedVideo, editedTitle, editedIcon, editedContent],
  // );
  return (
    <Modal
      title="Edit Testimonial"
      open={true}
      onOk={handleSave}
      onCancel={onCancel}
    >
      <div className="flex flex-col gap-4 p-5">
        {/* Display Image Preview */}
        <img
          src={editImage?.url || editedIcon}
          alt="Icon"
          className="mx-auto h-20 w-20 rounded-full"
        />

        {/* File Input for Icon */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setEditImage({
              file,
              url: URL.createObjectURL(file),
            });
          }}
        />

        {/* Video Input */}
        <video src={editedVideo?.url} autoPlay className="w-52 rounded"></video>
        <input
          type="file"
          // accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setEditedVideo({
              file,
              url: URL.createObjectURL(file),
            });
          }}
        />

        {/* Title Input */}
        <Input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Title"
        />

        {/* Content Input */}
        <Input.TextArea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          placeholder="Content"
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
