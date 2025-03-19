import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Select, Switch, Table } from "antd";
import {
  FaEdit,
  FaEnvelope,
  FaEye,
  FaGraduationCap,
  FaLock,
  FaRocket,
  FaTrash,
  FaUniversity,
  FaUserShield,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
// import Ug_seminar from "../../../Pages/Ug_seminar";

const fetchSeminar = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}super-admin/get-ug-seminars`,
    );
    const { data } = res;
    return data?.allSeminars;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

const Ug_seminar = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["allUGSeminars"],
    queryFn: fetchSeminar,
    // throwOnError: () => navigate("/admin/login"),
  });
  const queryClient = useQueryClient();
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-ug-seminar/${id}`,
      );
      toast.success(data?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  const mutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => queryClient.invalidateQueries(["allAdmins"]),
  });

  const columns = [
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Video Thumbnail
        </h1>
      ),
      dataIndex: "video",
      key: "video",
      render: (text) => (
        <video
          autoPlay
          loop
          src={`${import.meta.env.VITE_BACKEND_URL}uploads/${text}`}
          alt="Video Thumbnail"
          className="mx-auto h-28 w-28 rounded"
        />
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Title
        </h1>
      ),
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    // {
    //   title: (
    //     <h1 className="text-center text-lg font-bold text-primary-color">
    //       Description
    //     </h1>
    //   ),
    //   dataIndex: "description",
    //   key: "description",
    //   render: (text) => (
    //     <p className="line-clamp-2 max-w-52 text-center text-xs font-medium">
    //       {text}
    //     </p>
    //   ),
    // },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          State
        </h1>
      ),
      dataIndex: "state",
      key: "state",
      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Location
        </h1>
      ),
      dataIndex: "location",
      key: "location",
      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Date
        </h1>
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Time
        </h1>
      ),
      dataIndex: "time",
      key: "time",
      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
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
        <div className="flex items-center justify-center gap-5">
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
          <ViewCard
            adminNameData={viewItem?.adminName}
            adminEmailData={viewItem?.adminEmail}
            adminPermissionsData={viewItem?.adminPermissions}
            adminStatusData={viewItem?.adminStatus}
          />
        </Modal>
      )}
      {isEdit && (
        <EditCard
          id={editItem?._id}
          video={editItem?.video}
          catchPhrase={editItem?.catchPhrase}
          url={editItem?.URL}
          date={editItem?.date}
          description={editItem?.description}
          location={editItem?.location}
          state={editItem?.state}
          time={editItem?.time}
          title={editItem?.title}
          onCancel={() => setIsEdit(false)}
          // key={editItem?._id}
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

const ViewCard = ({
  adminNameData,
  adminEmailData,
  adminStatusData,
  adminPermissionsData,
}) => {
  return (
    <div className="relative mx-auto rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg lg:mx-0">
      <div className="flex items-center justify-between gap-4">
        {/* Admin Details */}
        <div className="flex-1">
          {/* Admin Name */}
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <FaUserShield className="text-yellow-600" /> {adminNameData}
          </h2>

          {/* Admin Email */}
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <FaEnvelope className="text-yellow-600" /> {adminEmailData}
          </p>

          {/* Admin Permissions */}
          <div className="mt-2">
            <p className="text-sm font-semibold text-gray-800">Permissions:</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {adminPermissionsData.map((perm, index) => (
                <span
                  key={index}
                  className="rounded-full border border-yellow-600 bg-yellow-100 px-2 py-1 text-xs text-yellow-800"
                >
                  {perm}
                </span>
              ))}
            </div>
          </div>

          {/* Admin Status */}
          <div className="mt-3 flex items-center gap-2">
            <FaLock className="text-yellow-600" />
            <span className="text-sm font-semibold text-gray-800">Status:</span>
            <Switch
              checked={adminStatusData}
              checkedChildren="Active"
              unCheckedChildren="Inactive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EditCard = ({
  id,
  video,
  title,
  description,
  date,
  time,
  url,
  state,
  location,
  catchPhrase,
  onCancel,
}) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    video: video,
    title: title,
    description: description,
    date: date,
    time: time,
    URL: url,
    state: state,
    location: location,
    catchPhrase: catchPhrase,
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Image Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, video: file }));
    }
  };

  // Form Submit Handler
  const handleSave = async () => {
    if (
      !formData?.video ||
      !formData?.title ||
      !formData?.description ||
      !formData?.time ||
      !formData?.date ||
      !formData?.catchPhrase ||
      !formData?.location ||
      !formData?.state ||
      !formData?.URL
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-ug-seminar/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success(data?.message);
      queryClient.invalidateQueries(["allWebinars"]);
      onCancel();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries(["allWebinars"]),
  });
  useEffect(() => console.log(typeof formData?.video), [formData?.video]);
  return (
    <Modal
      title={
        <span className="text-xl font-semibold text-gray-700">
          Edit Webinar
        </span>
      }
      open={true}
      onOk={mutation.mutate}
      onCancel={onCancel}
      okButtonProps={{
        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
        loading: mutation.isLoading,
      }}
      cancelButtonProps={{
        className: "border-gray-300 hover:border-gray-400 text-gray-600",
      }}
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <form onSubmit={mutation.mutate} className="space-y-4">
          <label className="mx-2 font-semibold text-gray-800">Video:</label>
          {formData?.video && (
            <video
              className="w-52"
              src={
                typeof formData?.video === "object"
                  ? URL.createObjectURL(formData?.video)
                  : `${import.meta.env.VITE_BACKEND_URL}uploads/${formData?.video}`
              }
              autoPlay
              loop
            />
          )}
          <input
            type="file"
            name="video"
            value={formData.video.filename}
            onChange={handleFileChange}
            placeholder="Enter video link"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Seminar Title"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Seminar Description"
            className="w-full rounded-md border p-2"
          ></textarea>

          <label className="mx-2 font-semibold text-gray-800">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter Location"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Catch Phrase:
          </label>
          <input
            type="text"
            name="catchPhrase"
            value={formData.catchPhrase}
            onChange={handleChange}
            placeholder="Enter Catch Phrase"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Seminar URL:
          </label>
          <input
            type="text"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
            className="w-full rounded-md border p-2"
          />

          {/* <div className="flex justify-between">
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
          </div> */}
        </form>
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel }) => {
  const [videoPreview, setVideoPreview] = useState("");

  const [formData, setFormData] = useState({
    video: "",
    title: "",
    description: "",
    date: "",
    time: "",
    URL: "",
    state: "",
    location: "",
    catchPhrase: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "video") {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        video: file,
      }));

      // Create a preview URL for the selected video
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setVideoPreview((prev) => previewURL);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  // let videoFile = formData?.video && URL.createObjectURL(formData?.video);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.video ||
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.time ||
      !formData.URL ||
      !formData.state ||
      !formData.location ||
      !formData.catchPhrase
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-ug-seminar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setFormData({
        video: "",
        title: "",
        description: "",
        date: "",
        time: "",
        URL: "",
        state: "",
        location: "",
        catchPhrase: "",
      });

      onCancel();
      toast.success(data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => queryClient.invalidateQueries(["allSeminars"]),
  });

  return (
    <Modal
      title="Add Seminar"
      open={open}
      onClose={onCancel}
      onCancel={onCancel}
      footer={false}
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <form onSubmit={mutation.mutate} className="space-y-4">
          <label className="mx-2 font-semibold text-gray-800">Video:</label>
          {formData?.video && (
            <video
              className="w-52"
              src={videoPreview && videoPreview}
              autoPlay
              loop
            />
          )}
          <input
            type="file"
            name="video"
            // value={formData.video.filename}
            onChange={handleChange}
            placeholder="Enter video link"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Seminar Title"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Seminar Description"
            className="w-full rounded-md border p-2"
          ></textarea>

          <label className="mx-2 font-semibold text-gray-800">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter Location"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Catch Phrase:
          </label>
          <input
            type="text"
            name="catchPhrase"
            value={formData.catchPhrase}
            onChange={handleChange}
            placeholder="Enter Catch Phrase"
            className="w-full rounded-md border p-2"
          />

          <label className="mx-2 font-semibold text-gray-800">
            Seminar URL:
          </label>
          <input
            type="text"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
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

const AdminStatusSwitch = ({ val, record }) => {
  const queryClient = useQueryClient();

  const handleSave = async (status) => {
    console.log(status);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-admin/${record?._id}`,
        { ...record, adminStatus: status },
      );
      toast.success(data?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: queryClient.invalidateQueries(["allAdmins"]),
  });

  return (
    <div className="flex items-center justify-center">
      <Switch
        onChange={(status) => mutation.mutate(status)}
        className="mx-auto"
        checked={val}
      />
    </div>
  );
};

export default Ug_seminar;
