import React, { useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import toolbar from "react-quill"

const MainNewsPage = () => {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const [value, setValue] = useState("");
  return (
    <>
      <Quill
        value={value}
        modules={{
          toolbar: toolbarOptions,
        }}
        onChange={setValue}
      />
    </>
  );
};

export default MainNewsPage;
