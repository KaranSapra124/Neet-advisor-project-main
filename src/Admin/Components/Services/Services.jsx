import React from "react";
import Container from "../../../Components/Helper/Container";
import { Table } from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AdminServices = () => {
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
  return (
    <>
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

export default AdminServices;
