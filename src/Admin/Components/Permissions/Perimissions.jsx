import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Select, Switch, Table } from "antd";
import {
  FaEdit,
  FaEye,
  FaGraduationCap,
  FaRocket,
  FaTrash,
  FaUniversity,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

const fetchStudents = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-students`,
  );
  const { data } = res;
  return data?.students;
};
const Permissions = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchedStudent"],
    queryFn: fetchStudents,
  });
  const queryClient = useQueryClient();
  const handleDelete = async (id) => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-student/${id}`,
    );
  };
  const mutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => queryClient.invalidateQueries(["fetchedStudents"]),
  });

  const columns = [
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Admin Name
        </h1>
      ),
      dataIndex: "clientName",
      key: "clientName",

      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Admin Email
        </h1>
      ),
      dataIndex: "clientCollege",
      key: "clientCollege",
      render: (text) => (
        <p className="max-w-52 text-center text-xs font-medium">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Admin Permissions
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
          Admin Status
        </h1>
      ),
      dataIndex: "imgUrl",
      key: "imgeUrl",
      render: (image) => (
        <img
          className="mx-auto h-10 w-10"
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${image}`}
        />
      ),
    },
    // {
    //   title: (
    //     <h1 className="text-center text-lg font-bold text-primary-color">
    //       Admin
    //     </h1>
    //   ),
    //   dataIndex: "Course",
    //   key: "Course",
    //   render: (course) => (
    //     <p className="line-clamp-3 text-center text-xs font-medium">{course}</p>
    //   ),
    // },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Actions
        </h1>
      ),
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-5">
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
            onClick={() => mutation.mutate(record?._id)}
            className="cursor-pointer text-red-500"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      {isView && (
        <Modal
          open={isView}
          onClose={() => setIsView(false)}
          onCancel={() => setIsView(false)}
          footer={false}
        >
          <TestimonialCard
            clientCollege={viewItem?.clientCollege}
            clientName={viewItem?.clientName}
            imgUrl={viewItem?.imgUrl}
            Course={viewItem?.Course}
            Rank={viewItem?.Rank}
          />
        </Modal>
      )}
      {isEdit && (
        <EditCard
          id={editItem?._id}
          clientCollege={editItem?.clientCollege}
          clientName={editItem?.clientName}
          imgUrl={editItem?.imgUrl}
          Course={editItem?.Course}
          Rank={editItem?.Rank}
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
          tableLayout="fixed"
          loading={isLoading}
          className="h-full"
          dataSource={data}
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

const TestimonialCard = ({
  imgUrl,
  Course,
  clientName,
  clientCollege,
  Rank,
}) => {
  return (
    <div className="relative mx-auto p-1 lg:mx-0">
      <img
        src="./Webinar/validation-badge-bg-removed.gif"
        className="absolute -top-2 left-[33rem] z-20 w-10 max-[380px]:left-[31.7rem] lg:left-[23.5rem]"
        alt=""
        srcset=""
      />
      <div className="cursor-pointer rounded-xl border-b-2 border-l-2 border-yellow-600 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            {/* Student Name and Divider */}
            <h2 className="mb-2 text-[0.7rem] font-extrabold text-primary-color lg:text-sm">
              {clientName}
            </h2>
            <div className="mb-2 h-0.5 w-12 rounded-full bg-yellow-600 lg:mb-4 lg:w-16" />

            {/* College Info */}
            <div className="mb-1.5 flex items-center gap-1 lg:mb-3">
              <FaUniversity className="mt-1 flex-shrink-0 text-primary-color" />
              <p className="mx-1 line-clamp-1 text-[0.6rem] font-semibold text-gray-800 lg:text-xs">
                {clientCollege}
              </p>
            </div>

            {/* Rank */}
            <div className="mb-1.5 flex items-center gap-1 lg:mb-3">
              <FaRocket className="text-primary-color" />
              <span className="mx-1 text-[0.6rem] font-semibold lg:text-xs">
                AIR Rank:{" "}
                <span className="font-bold text-primary-color">{Rank}</span>
              </span>
            </div>

            {/* MBBS Badge */}
            <div className="inline-flex items-center rounded-full border border-primary-color bg-white px-1 py-1 text-primary-color">
              <FaGraduationCap className="mr-1" />
              <span className="pr-2 text-[0.6rem] font-bold lg:text-xs">
                {Course}
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="w-10 rounded-lg object-cover shadow-md"
              src={`${import.meta.env.VITE_BACKEND_URL}uploads/${imgUrl}`}
              alt={clientName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EditCard = ({
  id,
  imgUrl,
  Course,
  clientName,
  clientCollege,
  Rank,
  onCancel,
}) => {
  const queryClient = useQueryClient();
  const [editedName, setEditedName] = useState(clientName);
  const [editedCollege, setEditedCollege] = useState(clientCollege);
  const [editedRank, setEditedRank] = useState(Rank);
  const [editedCourse, setEditedCourse] = useState(Course);
  const [editImage, setEditImage] = useState({ file: "", url: imgUrl });

  const formData = new FormData();
  formData.append("clientName", editedName);
  formData.append("clientCollege", editedCollege);
  formData.append("Rank", editedRank);
  formData.append("Course", editedCourse);
  if (editImage?.file) {
    formData.append("file", editImage.file);
  }
  const handleSave = async (formData) => {
    console.log("SAVED");
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-student/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    onCancel();
  };

  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries(["fetchedStudent"]),
  });

  return (
    <Modal
      title={
        <span className="text-xl font-semibold text-gray-700">
          Edit Student
        </span>
      }
      open={true}
      onOk={() => mutation.mutate(formData)}
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
        <Input
          value={editedRank}
          onChange={(e) => setEditedRank(e.target.value)}
          placeholder="Rank"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <Input
          value={editedCourse}
          onChange={(e) => setEditedCourse(e.target.value)}
          placeholder="Course"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel }) => {
  const [formData, setFormData] = useState({
    adminName: "",
    adminEmail: "",
    adminStatus: "",
    adminPermissions: [],
  });

  const permissions = ["Testimonials", "Blogs", "Services", "Students"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => console.log(formData), [formData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.adminName ||
      !formData.adminEmail ||
      !formData.adminPermissions ||
      !formData.adminStatus
    ) {
      alert("All fields are required!");
      return;
    }
    const formDataToSend = new FormData();
    // formDataToSend.append("imgUrl", formData.imgUrl);
    formDataToSend.append("adminName", formData.adminName);
    formDataToSend.append("adminEmail", formData.adminEmail);
    formDataToSend.append("adminPermissions", formData.adminPermissions);
    formDataToSend.append("adminStatus", formData.adminStatus);

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
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => queryClient.invalidateQueries(["fetchedStudent"]),
  });

  return (
    <Modal
      title="Add Student"
      open={open}
      onClose={onCancel}
      onCancel={onCancel}
      footer={false}
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <form onSubmit={mutation.mutate} className="space-y-4">
          {/* {formData.imgUrl && (
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
          /> */}
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            placeholder="Admin Name"
            className="w-full rounded-md border p-2"
          />
          <input
            type="text"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleChange}
            placeholder="Admin Email"
            className="w-full rounded-md border p-2"
          />
            <label className="mx-2 text-gray-800 font-semibold">Admin Permissions:</label>
          <Select
            mode="multiple"
            placeholder="Select Permissions"
            value={formData.adminPermissions}
            onChange={(val) => {
              console.log(val);
              setFormData((prev) => ({
                ...prev,
                adminPermissions: val,
              }));
            }}
            className="w-full"
          >
            {permissions?.map((permission) => (
              <Select.Option key={permission} value={permission}>
                {permission}
              </Select.Option>
            ))}
          </Select>
          <div >
            <label className="mx-2 text-gray-800 font-semibold">Admin Status:</label>
            <Switch
              defaultValue={false}
              onChange={(val) => {
                setFormData((prev) => ({ ...prev, adminStatus: val }));
              }}
            />
          </div>

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

export default Permissions;
