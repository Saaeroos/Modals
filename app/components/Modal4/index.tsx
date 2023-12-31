"use client";

import useModal4 from "@/app/hooks/modals/useModal4";
import NestedComponentModal4 from "./NestedComponentModal4";
import Modal from "react-modal";

export default function Modal4() {
    const { isOpen, onClose } = useModal4();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            style={{ overlay: { zIndex: 5 } }}
        >
            <h1>Modal 4</h1>
            <NestedComponentModal4 />
            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                >
                    Got it, thanks!
                </button>
            </div>
        </Modal>
    );
}
