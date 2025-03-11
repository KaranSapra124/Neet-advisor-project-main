import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TiptapEditor from "./TipTapEditor";

const MainNewsPage = () => {
  const quillRef = useRef(null);

  // const handleImageUpload = () => {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     if (file) {
  //       const formData = new FormData();
  //       formData.append("file", file);

  //       try {
  //         const { data } = await axios.post(
  //           `${import.meta.env.VITE_BACKEND_URL}super-admin/add-news`,
  //           formData,
  //           {
  //             headers: {
  //               "Content-Type": "multipart/form-data",
  //             },
  //           },
  //         );

  //         const imageUrl = `${import.meta.env.VITE_BACKEND_URL}uploads/${data.filename}`;
  //         // const editor = quillRef.current.getEditor();
  //         // const range = editor.getSelection();

  //         // const index = range ? range.index : editor.getLength();
  //         // editor.insertEmbed(index, "image", imageUrl);
  //       } catch (error) {
  //         console.error("Image upload failed:", error);
  //       }
  //     }
  //   };
  // };

  // const toolbarOptions = [
  //   [{ size: ["small", false, "large", "huge"] }],
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //   ["bold", "italic", "underline", "strike"],
  //   ["blockquote"],
  //   ["link", "image", "video"],
  //   [{ list: "ordered" }, { list: "bullet" }],
  //   [{ direction: "rtl" }],
  //   [{ color: [] }, { background: [] }],
  //   [{ align: [] }],
  //   ["clean"],
  // ];

  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   console.log(quillRef.current.getEditor().hasFocus());
  // }, [value]);

  return (
    <>
      <TiptapEditor />
    </>
    // <ReactQuill
    //   ref={quillRef}
    //   value={value}
    //   modules={{
    //     toolbar: {
    //       container: toolbarOptions,
    //       handlers: {
    //         image: handleImageUpload,
    //       },
    //     },
    //   }}
    //   onChange={setValue}
    // />
  );
};

export default MainNewsPage;
