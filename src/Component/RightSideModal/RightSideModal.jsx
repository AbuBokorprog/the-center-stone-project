import React, { useState } from "react";

const RightSideModal = ({ title, component }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-10">
      <button
        onClick={openModal}
        className={`${isModalOpen ? "text-white" : "text-yellow-500"} p-4`}
      >
        {title}
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        ></div>
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full lg:w-1/2 bg-white shadow-lg p-4 transform transition-transform ${
          isModalOpen ? "translate-x-0 lg:translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="overflow-y-auto h-full">{component}</div>
      </div>
    </div>
  );
};

export default RightSideModal;
