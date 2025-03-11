import React, { useEffect, useState } from "react";
import Container from "../../../Components/Helper/Container";
import { Input, Modal, Select, Switch, Table } from "antd";
import TipTapEditor from "../News/TipTapEditor";
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

const MainNewsPage = () => {
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
          News Page
        </h1>
      ),
      dataIndex: "generatedHTML",
      key: "generatedHTML",

      render: (text) => (
        <p className="text-center text-xs font-bold text-gray-800">{text}</p>
      ),
    },
    {
      title: (
        <h1 className="text-center text-lg font-bold text-primary-color">
          Category
        </h1>
      ),
      dataIndex: "newsCategory",
      key: "newsCategory",
      render: (text) => (
        <p className="max-w-52 text-center text-xs font-medium">{text}</p>
      ),
    },

    // {
    //   title: (
    //     <h1 className="text-center text-lg font-bold text-primary-color">
    //       Admin Status
    //     </h1>
    //   ),
    //   dataIndex: "adminStatus",
    //   key: "adminStatus",
    //   render: (val, record) => {
    //     return (
    //       <div className="flex items-center justify-center">
    //         <AdminStatusSwitch val={val} record={record} />
    //       </div>
    //     );
    //   },
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
          {/* <FaEye
            onClick={() => {
              setIsView(true);
              setViewItem(record);
            }}
            className="cursor-pointer text-primary-color"
          /> */}

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
          {/* <div className="mt-3 flex items-center gap-2">
            <FaLock className="text-yellow-600" />
            <span className="text-sm font-semibold text-gray-800">Status:</span>
            <Switch
              checked={adminStatusData}
              checkedChildren="Active"
              unCheckedChildren="Inactive"
            />
          </div> */}
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
        {/* Admin Name */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Admin Name
          </label>
          <Input
            value={adminName}
            onChange={(e) => setadminName(e.target.value)}
            placeholder="Enter Admin Name"
            className="mt-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Admin Email */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Admin Email
          </label>
          <Input
            value={adminEmail}
            onChange={(e) => setadminEmail(e.target.value)}
            placeholder="Enter Admin Email"
            className="mt-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Admin Permissions */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Permissions
          </label>
          <Select
            mode="multiple"
            placeholder="Select Permissions"
            value={adminPermissions}
            onChange={(val) => setadminPermissions(val)}
            className="mt-1 w-full"
          >
            {permissions?.map((permission) => (
              <Select.Option key={permission} value={permission}>
                {permission}
              </Select.Option>
            ))}
          </Select>
        </div>

        {/* Admin Status */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">Status:</span>
          <Switch
            onChange={() => setadminStatus(!adminStatus)}
            checked={adminStatus}
            checkedChildren="Active"
            unCheckedChildren="Inactive"
          />
        </div>
      </div>
    </Modal>
  );
};

const AddCard = ({ open, onCancel }) => {
  const [formData, setFormData] = useState({
    generatedHTML: "",
    hashtags: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => console.log(formData), [formData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.generatedHTML || !formData?.hashtags) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}super-admin/add-admin`,
        formData,
      );

      setFormData({
        generatedHTML: "",
        hashtags: [],
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
          <label className="mx-2 font-semibold text-gray-800">Add News</label>
          <TipTapEditor />
          <label className="mx-2 font-semibold text-gray-800">
            Add Hashtags:
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

export default MainNewsPage;
