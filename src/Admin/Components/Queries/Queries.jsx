import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Select, Space, Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteModal from "../../Utils/DeleteModal";
const fetchServices = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-seminar-progress/all`,
    null,
    {
      withCredentials: true,
    },
  );
  return data?.allSeminarsTimeline;
};
const Queries = () => {
  const query = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState({ open: false, item: null });

  const handleDeleteTimeline = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-progress/${id}`,

        {
          withCredentials: true,
        },
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
          Name
        </h1>
      ),
      dataIndex: "title",
      key: "title",
      render: (text) => <p className="text-center text-xs font-bold">{text}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Phone Number
        </h1>
      ),
      dataIndex: "fromTime",
      key: "fromTime",
      render: (time) => <p className="text-center text-xs">{time}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Email
        </h1>
      ),
      dataIndex: "endTime",
      key: "endTime",
      render: (time) => <p className="text-center text-xs">{time}</p>,
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Exam Type
        </h1>
      ),
      dataIndex: "motive",
      key: "motive",
      render: (text) => (
        <p className="line-clamp-2 text-xs font-semibold text-gray-800">
          {text}
        </p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Option
        </h1>
      ),
      dataIndex: "seminarType",
      key: "seminarType",
      render: (text) => (
        <p
          className={`${text === "UG" ? "mx-auto line-clamp-1 w-fit rounded bg-green-500 p-0.5 text-center text-xs font-semibold text-white" : "mx-auto line-clamp-1 w-fit rounded bg-blue-500 p-0.5 text-center text-xs font-semibold text-white"}`}
        >
          {text ? text : "N/A"}
        </p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Description
        </h1>
      ),
      dataIndex: "seminarType",
      key: "seminarType",
      render: (text) => (
        <p
          className={`${text === "UG" ? "mx-auto line-clamp-1 w-fit rounded bg-green-500 p-0.5 text-center text-xs font-semibold text-white" : "mx-auto line-clamp-1 w-fit rounded bg-blue-500 p-0.5 text-center text-xs font-semibold text-white"}`}
        >
          {text ? text : "N/A"}
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
          <FaEdit
            onClick={() => {
              setIsEdit(true);
              setEditItem(record);
            }}
            className="cursor-pointer text-green-700"
          />
          <FaTrash
            onClick={() => setIsDelete({ open: true, item: record?._id })}
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
      {isDelete && (
        <DeleteModal
          isOpen={isDelete?.open}
          setIsOpen={() => setIsDelete({ open: false, item: null })}
          handleDelete={() => mutation.mutate(isDelete?.item)}
        />
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
          seminarType={editItem?.seminarType}
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

const EditCard = ({
  title,
  motive,
  fromTime,
  endTime,
  seminarType,
  onCancel,
  id,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedMotive, setEditedMotive] = useState(motive);
  const [editedFromTime, setEditedFromTime] = useState(fromTime);
  const [editedEndTime, setEditedEndTime] = useState(endTime);
  const [editedType, setEditedType] = useState(seminarType);
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
          seminarType: editedType,
        },
        {
          withCredentials: true,
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
    onSuccess: () => queryClient.invalidateQueries(["allPGProgress"]),
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
        <label className="mx-2 font-semibold text-gray-800">
          Seminar Type:
        </label>
        <Space wrap>
          <Select
            onChange={(val) => setEditedType(val)}
            value={editedType}
            defaultValue={"PG"}
            options={[
              { value: "PG", label: <span>PG</span> },
              { value: "UG", label: <span>UG</span> },
            ]}
          ></Select>
        </Space>
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel, title }) => {
    const [formData, setFormData] = useState({
      Name: "",
      PhoneNumber: "",
      Email: "",
      ExamType: "UG",
      Option: "",
      Description: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.Name || !formData.PhoneNumber || !formData.Email || !formData.Option) {
        alert("All required fields must be filled!");
        return;
      }
  
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}add-query`,
          formData,
          { withCredentials: true }
        );
  
        toast.success(data?.message);
        setFormData({
          Name: "",
          PhoneNumber: "",
          Email: "",
          ExamType: "UG",
          Option: "",
          Description: "",
        });
        onCancel();
      } catch (error) {
        console.error("Error submitting query:", error);
        alert("Something went wrong. Please try again!");
      }
    };
  
    return (
      <Modal title={title} open={open} onCancel={onCancel} footer={null}>
        <div className="flex flex-col space-y-4 p-5">
          <label className="font-medium">Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Enter your name" className="w-full rounded-md border p-2" />
  
          <label className="font-medium">Phone Number:</label>
          <input type="tel" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} placeholder="Enter your phone number" className="w-full rounded-md border p-2" />
  
          <label className="font-medium">Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Enter your email" className="w-full rounded-md border p-2" />
  
          <label className="font-medium">Exam Type:</label>
          <Select name="ExamType" value={formData.ExamType} onChange={(value) => setFormData({ ...formData, ExamType: value })} options={[{ value: "UG", label: "UG" }, { value: "PG", label: "PG" }]} className="w-full" />
  
          <label className="font-medium">Option:</label>
          <input type="text" name="Option" value={formData.Option} onChange={handleChange} placeholder="Enter option" className="w-full rounded-md border p-2" />
  
          <label className="font-medium">Description:</label>
          <textarea name="Description" value={formData.Description} onChange={handleChange} placeholder="Enter description" className="w-full rounded-md border p-2" rows={3} />
  
          <div className="flex justify-between">
            <button type="button" onClick={onCancel} className="rounded-md border px-4 py-2 text-gray-700">Cancel</button>
            <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#272E6A] px-4 py-2 text-white">Submit Query</button>
          </div>
        </div>
      </Modal>
    );
  };
  

export default Queries;
