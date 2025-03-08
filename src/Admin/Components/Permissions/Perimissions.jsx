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

const fetchAdmins = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}super-admin/get-admins`,
  );
  const { data } = res;
  return data?.allAdmins;
};
const permissions = ["Testimonials", "Blogs", "Services", "Students"];

const Permissions = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [viewItem, setViewItem] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["allAdmins"],
    queryFn: fetchAdmins,
  });
  const queryClient = useQueryClient();
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/delete-admin/${id}`,
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
          Admin Name
        </h1>
      ),
      dataIndex: "adminName",
      key: "adminName",

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
      dataIndex: "adminEmail",
      key: "adminEmail",
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
      dataIndex: "adminPermissions",
      key: "adminPermissions",
      render: (text) => (
        <>
          <Select
            defaultActiveFirstOption={true}
            defaultValue={text[0]}
            className="w-full"
          >
            {text?.map((elem, index) => {
              return <Select.Option>{elem}</Select.Option>;
            })}
          </Select>
        </>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Admin Status
        </h1>
      ),
      dataIndex: "adminStatus",
      key: "adminStatus",
      render: (val) => {
        return (
          <div className="flex items-center justify-center">
            <Switch className="mx-auto" checked={val} />
          </div>
        );
      },
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
          adminNameData={editItem?.adminName}
          adminEmailData={editItem?.adminEmail}
          adminPermissionsData={editItem?.adminPermissions}
          adminStatusData={editItem?.adminStatus}
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
  adminNameData,
  adminEmailData,
  adminStatusData,
  adminPermissionsData,
  onCancel,
}) => {
  const queryClient = useQueryClient();
  const [adminName, setadminName] = useState(adminNameData);
  const [adminEmail, setadminEmail] = useState(adminEmailData);
  const [adminStatus, setadminStatus] = useState(adminStatusData);
  const [adminPermissions, setadminPermissions] =
    useState(adminPermissionsData);

  const formData = {
    adminName: adminName,
    adminEmail: adminEmail,
    adminStatus: adminStatus,
    adminPermissions: adminPermissions,
  };

  const handleSave = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/edit-admin/${id}`,
        formData,
      );
      toast.success(data?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
    onCancel();
  };

  const mutation = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries(["allAdmins"]),
  });

  return (
    <Modal
      title={
        <span className="text-xl font-semibold text-gray-700">Edit Admin</span>
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
        {/* Input Fields */}
        <Input
          value={adminName}
          onChange={(e) => setadminName(e.target.value)}
          placeholder="Admin Name"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <Input
          value={adminEmail}
          onChange={(e) => setadminEmail(e.target.value)}
          placeholder="Admin Email"
          className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <Select
          mode="multiple"
          placeholder="Select Permissions"
          value={adminPermissions}
          onChange={(val) => {
            setadminPermissions(val);
          }}
          className="w-full"
        >
          {permissions?.map((permission) => (
            <Select.Option key={permission} value={permission}>
              {permission}
            </Select.Option>
          ))}
        </Select>
        <Switch
          onChange={() => setadminStatus(!adminStatus)}
          className="w-fit"
          checked={adminStatus}
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
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-admin`,
        formData,
      );

      setFormData({
        adminName: "",
        adminEmail: "",
        adminStatus: "",
        adminPermissions: [],
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
          <label className="mx-2 font-semibold text-gray-800">
            Admin Name:
          </label>
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            placeholder="Admin Name"
            className="w-full rounded-md border p-2"
          />
          <label className="mx-2 font-semibold text-gray-800">
            Admin Email:
          </label>
          <input
            type="text"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleChange}
            placeholder="Admin Email"
            className="w-full rounded-md border p-2"
          />
          <label className="mx-2 font-semibold text-gray-800">
            Admin Permissions:
          </label>
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
          <div>
            <label className="mx-2 font-semibold text-gray-800">
              Admin Status:
            </label>
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
