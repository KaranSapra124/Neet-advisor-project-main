import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import axios from "axios";

const AdminServices = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [servicesArr, setServicesArr] = useState([]);
  // const servicesArr = [
  //   {
  //     video:
  //       "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
  //     title: "Shortlist Your Success",
  //     content:
  //       "Based on your expected NEET Score, we shortlist for you the state & college you should apply for.",
  //     icon: "../../../About/motivationGif.gif",
  //   },
  //   {
  //     video:
  //       "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
  //     title: "Guidance from our Advisor",
  //     content:
  //       "An Intensive one to one NEET counselling session from our Advisor who will answer your queries about AIQ & State Quota NEET Counselling.",
  //     icon: "../../../About/person-speaker.gif",
  //   },
  //   {
  //     video:
  //       "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
  //     title: "Application Filling",
  //     content:
  //       "Support with filling of application form of All India Quota/ESI/AFMC/Deemed Universities & different state quota counselling.",
  //     icon: "../../../About/BookImg.gif",
  //   },
  //   {
  //     video:
  //       "https://videos.pexels.com/video-files/3252123/3252123-sd_640_360_25fps.mp4",
  //     title: "Look beyond MBBS",
  //     content:
  //       "There are many more medical courses like BDS, BAMS, Physiotherapy, DNB, etc.",
  //     icon: "../../../About/mission.gif",
  //   },
  // ];
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
        <video
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${video}`}
          autoPlay
          loop
          muted
          className="h-24 w-24 rounded"
        ></video>
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
        return (
          <img
            className="h-10 w-10"
            src={`${import.meta.env.VITE_BACKEND_URL}uploads/${img}`}
          />
        );
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
              // console.log(record)
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
  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/get-services`,
      );
      setServicesArr(data?.services);
    };
    fetchServices();
  }, []);

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
          // onSave={handleSave}
          onCancel={() => setIsEdit(false)}
          key={editItem?._id}
          id={editItem?._id}
          title={editItem?.title}
          content={editItem?.content}
          icon={editItem?.icon}
          video={editItem?.video}
        />
      )}
      {isAdd && (
        <AddCard
          open={isAdd}
          onCancel={() => setIsAdd(false)}
          title={"Add Service"}
        />
      )}

      <Container>
        <div>
          {/* <h1 className="text-2xl">Services</h1> */}
          <button
            onClick={() => setIsAdd(true)}
            className="float-right my-2 rounded bg-yellow-600 p-1 font-semibold text-white"
          >
            Add New +
          </button>
          <Table columns={columns} dataSource={servicesArr}></Table>
        </div>
      </Container>
    </>
  );
};

const EditCard = ({ video, title, content, icon, onCancel, id }) => {
  const [editedVideo, setEditedVideo] = useState({ file: "", url: video });
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editedIcon, setEditedIcon] = useState({ file: "", url: icon });
  const [editImage, setEditImage] = useState(null);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("video", editedVideo?.file);
    formData.append("title", editedTitle);
    formData.append("content", editedContent);
    formData.append("icon", editedIcon?.file);
    // Example API call (uncomment to use)
    // await axios.post(`${import.meta.env.VITE_BACKEND_URL}admin/edit-testimonial/${id}`, formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-service/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    // onSave(formData); // Pass formData to parent if needed
    onCancel();
  };

  // useEffect(() => console.log(editedIcon), [editedIcon]);
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
          src={
            editedIcon?.file !== ""
              ? editedIcon.url
              : `${import.meta.env.VITE_BACKEND_URL}uploads/${editedIcon?.url}`
          }
          alt="Icon"
          className="mx-auto h-20 w-20 rounded-full"
        />

        {/* File Input for Icon */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setEditedIcon({
              file: file,
              url: URL.createObjectURL(file),
            });
          }}
        />

        {/* Video Input */}
        <video
          src={
            editedVideo?.file !== ""
              ? editedVideo?.url
              : `${import.meta.env.VITE_BACKEND_URL}uploads/${editedVideo?.url}`
          }
          autoPlay
          className="w-52 rounded"
        ></video>
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
const AddCard = ({ open, onCancel, title }) => {
  const [formData, setFormData] = useState({
    videoUrl: "",
    videoFile: null,
    iconUrl: "",
    iconFile: null,
    content: "",
    title: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      [`${type}File`]: file,
      [`${type}Url`]: url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.videoFile ||
      !formData.iconFile ||
      !formData.title ||
      !formData.content
    ) {
      alert("All fields are required!");
      return;
    }

    const submissionData = new FormData();
    submissionData.append("title", formData.title);
    submissionData.append("content", formData.content);
    submissionData.append("video", formData.videoFile);
    submissionData.append("icon", formData.iconFile);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-service`,
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setFormData({
        videoUrl: "",
        videoFile: null,
        iconUrl: "",
        iconFile: null,
        content: "",
        title: "",
      });

      onCancel(); // Close modal after success
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <Modal title={title} open={open} onCancel={onCancel} footer={null}>
      <div className="flex flex-col space-y-4 p-5">
        {/* Icon Upload & Preview */}
        <label>Upload Image:</label>
        {formData.iconUrl && (
          <img
            src={formData.iconUrl}
            alt="Icon Preview"
            className="mx-auto h-16 w-16"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "icon")}
        />

        {/* Video Upload & Preview */}
        <label>Upload Video:</label>

        {formData.videoUrl && (
          <video className="mx-auto w-full rounded-lg" controls>
            <source src={formData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange(e, "video")}
        />

        {/* Title & Content Inputs */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Title"
          className="w-full rounded-md border p-2"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter Content"
          className="w-full rounded-md border p-2"
          rows={3}
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border px-4 py-2 text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-[#272E6A] px-4 py-2 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

const ViewItem = ({ video, title, content, icon }) => {
  return (
    <div className="flex flex-col gap-3 p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${icon}`}
          className="w-7"
        />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <video autoPlay controls className="w-full rounded-lg">
        <source
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${video}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};
export default AdminServices;
