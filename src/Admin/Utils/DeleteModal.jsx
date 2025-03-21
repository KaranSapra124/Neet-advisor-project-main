import { Modal, Button } from "antd";
import React from "react";

const DeleteModal = ({ isOpen, setIsOpen, handleDelete }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null} // Custom footer use kar rahe hain
      centered
      className="rounded-lg"
    >
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Are you sure?</h2>
        <p className="mt-2 text-gray-600">This action cannot be undone.</p>
        <div className="mt-5 flex justify-center gap-4">
          <Button
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
            onClick={() => setIsOpen()}
          >
            Cancel
          </Button>
          <Button
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
