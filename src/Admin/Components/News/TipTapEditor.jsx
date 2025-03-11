import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import React, { useState } from "react";
import axios from "axios";

const MainNewsPage = () => {
  const [html, setHTML] = useState("");
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
        class: "p-2 text-sm border h-96 overflow-y-auto",
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

  return (
    <>
      <div>
        <div className="toolbar">
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()}>
            Strike
          </button>
          <button onClick={() => editor.chain().focus().setParagraph().run()}>
            Paragraph
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            Bullet List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            Ordered List
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 1 }).run()
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 2 }).run()
            }
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 3 }).run()
            }
          >
            H3
          </button>
          {/* <button onClick={handleImageUpload}>Upload Video</button> */}
          <button onClick={handleImageUpload}>Upload Image</button>
        </div>

        <EditorContent editor={editor} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default MainNewsPage;
