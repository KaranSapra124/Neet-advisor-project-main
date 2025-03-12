import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
// import Video from "@tiptap/extension-video";
import React, { useState } from "react";
import axios from "axios";
import "./TipTap.css";
import {
  FaImage,
  FaListOl,
  FaListUl,
  FaBorderAll,
  FaAlignCenter,
  FaVideo,
  FaPalette,
  FaColumns,
} from "react-icons/fa";
import { FaTableCellsRowUnlock } from "react-icons/fa6";

const MainNewsPage = ({ html, setHTML }) => {
  const [heading, setHeading] = useState("paragraph");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      // Video,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Highlight,
      Underline,
    ],
    content: html,
    editorProps: {
      attributes: {
        class: "h-96 overflow-y-auto p-2 newsDiv",
      },
    },
    onUpdate: ({ editor }) => {
      setHTML(editor.getHTML());
    },
  });

  if (!editor) return null;

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
          { headers: { "Content-Type": "multipart/form-data" } },
        );
        const imageUrl = `${import.meta.env.VITE_BACKEND_URL}uploads/${data.filename}`;
        editor.chain().focus().setImage({ src: imageUrl }).run();
      }
    };
    input.click();
  };

  const handleVideoEmbed = () => {
    const url = prompt("Enter video URL");
    if (url) {
      editor.chain().focus().setVideo({ src: url }).run();
    }
  };

  return (
    <div>
      <div className="toolbar mb-4 flex flex-wrap items-center gap-3 rounded-lg border-b bg-gray-100 p-3 shadow-lg">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          U
        </button>
        <FaListUl
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <FaListOl
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <button onClick={() => editor.chain().focus().setColor("red").run()}>
          Red
        </button>
        <FaBorderAll
          onClick={() =>
            editor.chain().focus().insertTable({ rows: 2, cols: 3 }).run()
          }
        />
        <FaAlignCenter
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        />
        <FaPalette
          onClick={() => editor.chain().focus().setColor("black").run()}
        />
        <FaColumns  onClick={() => editor?.chain()?.focus()?.addColumnAfter().run()} />
          <FaTableCellsRowUnlock onClick={() => editor?.chain()?.focus()?.addRowAfter().run()}/>
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
        <FaImage onClick={handleImageUpload} />
        {/* <FaVideo onClick={handleVideoEmbed} /> */}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default MainNewsPage;
