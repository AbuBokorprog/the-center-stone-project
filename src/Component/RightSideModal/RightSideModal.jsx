import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Cart from "../Cart/Cart";

const RightSideModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={openModal}
        className=" text-yellow-500 font-bold py-2 px-4 rounded"
      >
        <MdOutlineShoppingBag className="w-full h-full"></MdOutlineShoppingBag>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full lg:w-1/2 bg-white shadow-lg p-8 transform transition-transform ${
          isModalOpen ? "translate-x-0 lg:translate-x-20" : "translate-x-full"
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
        <div className="mt-4">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default RightSideModal;
