import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import React, { useState } from "react";
import axios from "axios";
import "./TipTap.css";
import { FaImage, FaListOl, FaListUl } from "react-icons/fa";
const MainNewsPage = ({setHTML}) => {
  
  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}super-admin/add-news`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        const imageUrl = `${import.meta.env.VITE_BACKEND_URL}uploads/${data.filename}`;
        editor.chain().focus().setImage({ src: imageUrl }).run();
      }
    };
    input.click();
  };

  const editor = useEditor({
    extensions: [StarterKit, Image],

    editorProps: {
      attributes: {
        class: "p-4 text-sm border lg:h-48 h-24 overflow-y-auto tiptap",
      },
    },
    content: "",
    onUpdate: ({ editor }) => {
      setHTML(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const [heading, setHeading] = useState("paragraph");

  return (
    <>
      <div>
        <div className="toolbar mb-4 flex flex-wrap items-center gap-3 rounded-lg border-b bg-gray-100 p-3 shadow-lg">
          <button
            className="rounded border border-gray-300 bg-white px-3 py-1 text-sm transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            B
          </button>
          <button
            className="rounded border border-gray-300 bg-white px-3 py-1 text-sm transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            I
          </button>
          <button
            className="rounded border border-gray-300 bg-white px-3 py-1 text-sm transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            S
          </button>
          <button
            className="rounded border border-gray-300 bg-white px-3 py-1 text-sm transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().setParagraph().run()}
          >
            P
          </button>

          <FaListUl
            className="cursor-pointer rounded border border-gray-300 p-2 text-3xl transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />

          <FaListOl
            className="cursor-pointer rounded border border-gray-300 p-2 text-3xl transition hover:bg-gray-200"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          />

          <select
            className="rounded border border-gray-300 bg-white p-2 text-sm transition hover:bg-gray-200"
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
              if (e.target.value === "paragraph") {
                editor.chain().focus().setParagraph().run();
              } else {
                editor
                  .chain()
                  .focus()
                  .setHeading({ level: parseInt(e.target.value) })
                  .run();
              }
            }}
          >
            <option value="paragraph">Paragraph</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>

          <FaImage
            className="cursor-pointer rounded border border-gray-300 p-2 text-4xl transition hover:bg-gray-200"
            onClick={handleImageUpload}
          />
        </div>

        <EditorContent editor={editor} />
      </div>
      {/* <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div> */}
    </>
  );
};

export default MainNewsPage;
