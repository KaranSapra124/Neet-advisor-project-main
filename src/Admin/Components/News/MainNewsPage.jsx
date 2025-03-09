import React, { useEffect, useRef, useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import toolbar from "react-quill"

const MainNewsPage = () => {
  const quillRef = useRef(null);
  const handleImageUpload = () => {
    const ImageInput = document.createElement("input");
    ImageInput.setAttribute("type", "file");
    // ImageInput.setAttribute("accept", "image/");
    ImageInput.click();
    console.log(ImageInput);
    ImageInput.onchange = async () => {
      const file = ImageInput.files[0];
      if (file) {
        console.log("File Selected: ", file);

        // Yaha tera API call ya Base64 conversion karega
        const imageUrl = URL.createObjectURL(file);

        // Quill editor pe image insert karega
        const range = quillRef.current.getEditor().getSelection();
        quillRef.current
          .getEditor()
          .insertEmbed(range.index, "image", imageUrl);
      }
    };
  };
  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote"],
    ["link", "image", "video"],

    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    // [{ script: "sub" }, { script: "super" }], // superscript/subscript
    // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <Quill
        ref={quillRef}
        value={value}
        modules={{
          toolbar: {
            container: toolbarOptions, // 👈 Yaha toolbarOptions pass kar diya
            handlers: {
              image: () => handleImageUpload(), // 👈 Yaha handlers pass kar diya
            },
          },
        }}
        onChange={setValue}
      />
    </>
  );
};

export default MainNewsPage;
