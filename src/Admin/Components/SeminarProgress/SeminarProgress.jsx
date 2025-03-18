import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const fetchServices = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminar-progress`,
  );
  return data?.allSeminarsTimeline;
};
const SeminarProgress = () => {
  const query = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const handleDeleteTimeline = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-progress/${id}`,
      );
      toast.success(data?.message);
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Something went wrong!");
    }
  };
  const mutation = useMutation({
    mutationFn: handleDeleteTimeline,
    onSuccess: () => query.invalidateQueries(["allProgress"]),
  });

  const columns = [
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Title
        </h1>
      ),
      dataIndex: "title",
      key: "title",
      render: (text) => <p className="text-center text-xs font-bold">{text}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          From Time
        </h1>
      ),
      dataIndex: "fromTime",
      key: "fromTime",
      render: (time) => <p className="text-center text-xs">{time}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          End Time
        </h1>
      ),
      dataIndex: "endTime",
      key: "endTime",
      render: (time) => <p className="text-center text-xs">{time}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Motive
        </h1>
      ),
      dataIndex: "motive",
      key: "motive",
      render: (text) => (
        <p className="line-clamp-1 w-52 text-xs font-semibold text-gray-800">
          {text}
        </p>
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
        <div className="flex justify-center gap-4 text-lg">
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
            className="cursor-pointer text-green-700"
          />
          <FaTrash
            onClick={() => mutation.mutate(record?._id)}
            className="cursor-pointer text-red-500"
          />
        </div>
      ),
    },
  ];

  const { data, isLoading, error } = useQuery({
    queryKey: ["allProgress"],
    queryFn: fetchServices,
  });

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
          motive={editItem?.motive}
          endTime={editItem?.endTime}
          fromTime={editItem?.fromTime}
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
          <button
            onClick={() => setIsAdd(true)}
            className="float-right my-2 rounded bg-yellow-500 p-1 font-semibold text-white transition-all hover:bg-yellow-600"
          >
            Add New +
          </button>
          <Table
            onHeaderRow={(column, index) => {
              return <h1 className="text-4xl">{column}</h1>;
            }}
            tableLayout="fixed"
            loading={isLoading}
            bordered
            className="rounded shadow"
            columns={columns}
            dataSource={data}
          ></Table>
        </div>
      </Container>
    </>
  );
};

const EditCard = ({ title, motive, fromTime, endTime, onCancel, id }) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedMotive, setEditedMotive] = useState(motive);
  const [editedFromTime, setEditedFromTime] = useState(fromTime);
  const [editedEndTime, setEditedEndTime] = useState(endTime);
  const queryClient = useQueryClient();

  const handleSave = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-seminar-progress/${id}`,
        {
          title: editedTitle,
          motive: editedMotive,
          fromTime: editedFromTime,
          endTime: editedEndTime,
        },
      );

      toast.success(data?.message);
      onCancel();
    } catch (error) {
      console.error("Error updating seminar:", error);
      toast.error("Something went wrong!");
    }
  };
  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries(["allProgress"]),
  });

  return (
    <Modal
      title="Edit Seminar"
      open={true}
      onOk={mutation.mutate}
      onCancel={onCancel}
    >
      <div className="flex flex-col gap-4 p-5">
        {/* Title Input */}
        <Input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Title"
        />

        {/* Motive Input */}
        <Input.TextArea
          value={editedMotive}
          onChange={(e) => setEditedMotive(e.target.value)}
          placeholder="Motive"
          rows={4}
        />

        {/* From Time Input */}
        <Input
          type="time"
          value={editedFromTime}
          onChange={(e) => setEditedFromTime(e.target.value)}
          placeholder="From Time"
        />

        {/* End Time Input */}
        <Input
          type="time"
          value={editedEndTime}
          onChange={(e) => setEditedEndTime(e.target.value)}
          placeholder="End Time"
        />
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel, title }) => {
  const query = useQueryClient();
  const mutation = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => query.invalidateQueries(["allProgress"]),
  });
  const [formData, setFormData] = useState({
    title: "",
    fromTime: "",
    endTime: "",
    motive: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.fromTime ||
      !formData.endTime ||
      !formData.motive
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-seminar-progress`,
        formData,
      );

      toast.success(data?.message);

      setFormData({
        title: "",
        fromTime: "",
        endTime: "",
        motive: "",
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
        {/* Title */}
        <label className="font-medium">Seminar Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Seminar Title"
          className="w-full rounded-md border p-2"
        />

        {/* From Time */}
        <label className="font-medium">Start Time:</label>
        <input
          type="time"
          name="fromTime"
          value={formData.fromTime}
          onChange={handleChange}
          className="w-full rounded-md border p-2"
        />

        {/* End Time */}
        <label className="font-medium">End Time:</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className="w-full rounded-md border p-2"
        />

        {/* Seminar Motive */}
        <label className="font-medium">Seminar Motive:</label>
        <textarea
          name="motive"
          value={formData.motive}
          onChange={handleChange}
          placeholder="Enter Seminar Motive"
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
            onClick={mutation.mutate}
            className="rounded-md bg-[#272E6A] px-4 py-2 text-white"
          >
            Add Seminar
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
export default SeminarProgress;
