import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Select, Space, Table, Checkbox } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteModal from "../../Utils/DeleteModal";
const statesArray = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
// Fetch Queries
const fetchQueries = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-queries`,
    { withCredentials: true },
  );
  return data?.queries;
};

const Queries = () => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState({ open: false, item: null });

  const handleDeleteQuery = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-query/${id}`,
        { withCredentials: true },
      );
      toast.success(data?.message);
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Something went wrong!");
    }
  };

  const mutation = useMutation({
    mutationFn: handleDeleteQuery,
    onSuccess: () => queryClient.invalidateQueries(["allQueries"]),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (text) => <p className="text-center">{text}</p>,
    },
    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
      render: (text) => <p className="text-center">{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
      render: (text) => <p className="text-center">{text}</p>,
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
      render: (text) => <p className="text-center">{text || "N/A"}</p>,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (text) => <p className="text-center">{text || "N/A"}</p>,
    },
    {
      title: "Captcha",
      dataIndex: "captcha",
      key: "captcha",
      render: (value) => (
        <p className="text-center">{value ? "Verified" : "Not Verified"}</p>
      ),
    },
    {
      title: "Actions",
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

  const { data, isLoading } = useQuery({
    queryKey: ["allQueries"],
    queryFn: fetchQueries,
  });

  return (
    <>
      {isDelete.open && (
        <DeleteModal
          isOpen={isDelete.open}
          setIsOpen={() => setIsDelete({ open: false, item: null })}
          handleDelete={() => mutation.mutate(isDelete.item)}
        />
      )}
      {isEdit && (
        <EditQueryModal item={editItem} onCancel={() => setIsEdit(false)} />
      )}
      {isAdd && <AddQueryModal open={isAdd} onCancel={() => setIsAdd(false)} />}

      <Container>
        <button
          onClick={() => setIsAdd(true)}
          className="float-right my-2 rounded bg-yellow-500 p-1 font-semibold text-white hover:bg-yellow-600"
        >
          Add New +
        </button>
        <Table
          loading={isLoading}
          bordered
          className="rounded shadow"
          columns={columns}
          dataSource={data}
        />
      </Container>
    </>
  );
};

// Edit Query Modal
const EditQueryModal = ({ item, onCancel }) => {
  const [formData, setFormData] = useState({ ...item });
  const queryClient = useQueryClient();

  const handleSave = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-query/${item._id}`,
        formData,
        { withCredentials: true },
      );

      toast.success(data?.message);
      onCancel();
    } catch (error) {
      console.error("Error updating query:", error);
      toast.error("Something went wrong!");
    }
  };

  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries(["allQueries"]),
  });

  return (
    <Modal
      title="Edit Query"
      open={true}
      onOk={mutation.mutate}
      onCancel={onCancel}
    >
      <QueryForm formData={formData} setFormData={setFormData} />
    </Modal>
  );
};

// Add Query Modal
const AddQueryModal = ({ open, onCancel }) => {
  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    State: "",
    Description: "",
    captcha: false,
  });

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-query-admin`,
        formData,
        { withCredentials: true },
      );

      toast.success(data?.message);
      onCancel();
    } catch (error) {
      console.error("Error submitting query:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Modal
      title="Add Query"
      open={open}
      onOk={handleSubmit}
      onCancel={onCancel}
    >
      <QueryForm formData={formData} setFormData={setFormData} />
    </Modal>
  );
};

// Reusable Form Component
const QueryForm = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Input
        name="Name"
        value={formData.Name}
        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
        placeholder="Name"
      />
      <Input
        name="PhoneNumber"
        value={formData.PhoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, PhoneNumber: e.target.value })
        }
        placeholder="Phone Number"
      />
      <Input
        name="Email"
        value={formData.Email}
        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
        placeholder="Email"
      />
      {/* ✅ State Dropdown */}
      <Select
        showSearch
        placeholder="Select State"
        value={formData.State}
        onChange={(value) => setFormData({ ...formData, State: value })}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        {statesArray.map((state) => (
          <Select.Option key={state} value={state}>
            {state}
          </Select.Option>
        ))}
      </Select>
      <Input.TextArea
        name="Description"
        value={formData.Description}
        onChange={(e) =>
          setFormData({ ...formData, Description: e.target.value })
        }
        placeholder="Description"
      />
      <Checkbox
        checked={formData.captcha}
        onChange={(e) =>
          setFormData({ ...formData, captcha: e.target.checked })
        }
      >
        Captcha Verified
      </Checkbox>
    </div>
  );
};

export default Queries;
