import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Divider from "../../../Components/Helper/Divider";
import axios from "axios";
import { toast } from "react-toastify";

const StudentsData = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [students, setStudents] = useState([]);
  const fetchTestimonials = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/get-students`,
    );
    const { data } = res;
    setStudents(data?.students);
  };

  const columns = [
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Name
        </h1>
      ),
      dataIndex: "clientName",
      key: "clientName",

      render: (text) => (
        <p className="w-32 text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          College
        </h1>
      ),
      dataIndex: "clientCollege",
      key: "clientCollege",
      render: (text) => (
        <p className="w-44 max-w-52 text-center text-xs font-medium">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Rank
        </h1>
      ),
      dataIndex: "Rank",
      key: "Rank",
      render: (text) => (
        <p className="line-clamp-3 text-center text-xs font-medium">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Image
        </h1>
      ),
      dataIndex: "imgUrl",
      key: "imgeUrl",
      render: (image) => (
        <img
          className="h-10 mx-auto w-10"
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${image}`}
        />
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Course
        </h1>
      ),
      dataIndex: "Course",
      key: "Course",
      render: (course) => (
        <p className="line-clamp-3 text-center text-xs font-medium">{course}</p>

      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Actions
        </h1>
      ),
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
            className="cursor-pointer text-green-500"
          />
          <FaTrash
            onClick={async () => {
              const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}admin/delete-testimonial/${record?._id}`,
              );

              fetchTestimonials();
            }}
            className="cursor-pointer text-red-500"
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fn = async () => fetchTestimonials();
    fn();
  }, []);
  return (
    <>
      {isView && (
        <Modal
          open={isView}
          onClose={() => setIsView(false)}
          onCancel={() => setIsView(false)}
        >
          <TestimonialCard
            clientCollege={viewItem?.clientCollege}
            clientName={viewItem?.clientName}
            imgUrl={viewItem?.imgUrl}
            review={viewItem?.review}
          />
        </Modal>
      )}
      {isEdit && (
        <EditCard
          id={editItem?._id}
          clientCollege={editItem?.clientCollege}
          clientName={editItem?.clientName}
          imgUrl={editItem?.imgUrl}
          review={editItem?.review}
          onCancel={() => setIsEdit(false)}
        />
      )}
      {isAdd && <AddCard open={isAdd} onCancel={() => setIsAdd(false)} />}
      <Container>
        <button
          onClick={() => setIsAdd(true)}
          className="float-right my-2 rounded bg-yellow-500 p-1 font-semibold text-white transition-all hover:scale-105 hover:shadow hover:shadow-black"
        >
          Add New +
        </button>

        <Table
          loading={students?.length < 0}
          className="h-full"
          dataSource={students}
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
        src={`${import.meta.env.VITE_BACKEND_URL}uploads/${imgUrl}`}
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
  id,
  imgUrl,
  review,
  clientName,
  clientCollege,
  onCancel,
}) => {
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
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}admin/edit-testimonial/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    onCancel();
  };

  return (
    <Modal
      title={
        <span className="text-xl font-semibold text-gray-700">
          Edit Testimonial
        </span>
      }
      open={true}
      onOk={handleSave}
      onCancel={onCancel}
      okButtonProps={{
        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
      }}
      cancelButtonProps={{
        className: "border-gray-300 hover:border-gray-400 text-gray-600",
      }}
    >
      <div className="flex flex-col gap-4 p-4">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={
              editImage?.file
                ? editImage?.url
                : `${import.meta.env.VITE_BACKEND_URL}uploads/${editImage?.url}`
            }
            alt="Client"
            className="h-24 w-24 rounded-full border-2 border-gray-300 shadow-md"
          />
          <label className="mt-3 cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-sm text-white shadow hover:bg-blue-600">
            Upload New Image
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                setEditImage({
                  file: e.target.files[0],
                  url: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </label>
        </div>

        {/* Input Fields */}
        <Input
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          placeholder="Client Name"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <Input
          value={editedCollege}
          onChange={(e) => setEditedCollege(e.target.value)}
          placeholder="Client College"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <Input.TextArea
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
          placeholder="Review"
          rows={4}
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel }) => {
  const [formData, setFormData] = useState({
    imgUrl: "",
    file: "",
    clientName: "",
    clientCollege: "",
    Rank: "",
    Course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
        imgUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.clientName ||
      !formData.clientCollege ||
      !formData.Rank ||
      !formData.Course
    ) {
      alert("All fields are required!");
      return;
    }

    const formDataToSend = new FormData();
    // formDataToSend.append("imgUrl", formData.imgUrl);
    formDataToSend.append("file", formData.file);
    formDataToSend.append("clientName", formData.clientName);
    formDataToSend.append("clientCollege", formData.clientCollege);
    formDataToSend.append("Rank", formData.Rank);
    formDataToSend.append("Course", formData.Course);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-student`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setFormData({
        imgUrl: "",
        file: "",
        clientName: "",
        clientCollege: "",
        Rank: "",
        Course: "",
      });
      onCancel();
      toast.success(data?.message);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <Modal
      title="Add Student"
      open={open}
      onClose={onCancel}
      onCancel={onCancel}
      footer={false}
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {formData.imgUrl && (
            <img
              className="mx-auto h-32 w-32 rounded-full"
              src={formData.imgUrl}
              alt="Student"
            />
          )}

          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full"
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
          <input
            type="text"
            name="Rank"
            value={formData.Rank}
            onChange={handleChange}
            placeholder="Rank"
            className="w-full rounded-md border p-2"
          />
          <input
            type="text"
            name="Course"
            value={formData.Course}
            onChange={handleChange}
            placeholder="Course"
            className="w-full rounded-md border p-2"
          />

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
              className="rounded-md bg-[#272E6A] px-4 py-2 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default StudentsData;
