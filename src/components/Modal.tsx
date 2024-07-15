import { useModalStore } from "@stores/modalStore";
import arrowLeft from "@assets/icons/arrow-uturn-left-icon.svg";
import React from "react";

const Modal: React.FC = () => {
  const { isOpen, title, content, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-gray-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto space-y-4 py-20">
            <div
              className="flex gap-2 cursor-pointer transition-all hover:-translate-x-1 active:-translate-x-1"
              onClick={closeModal}
            >
              <img src={arrowLeft.src} className="w-6 h-6 text-white" />
              Back
            </div>

            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
