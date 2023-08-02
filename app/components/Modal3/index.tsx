"use client";

import useModal3 from "@/app/hooks/modals/useModal3";
import NestedComponentModal3 from "./NestedComponentModal3";
import Modal from "react-modal";

export default function Modal3() {
    const { isOpen, onClose } = useModal3();

    return (
        <div className="z-50">
            <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
                <h1 className="">Modal 3</h1>
                <NestedComponentModal3 />
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
        </div>
    );
}
