"use client";

import useModal4 from "@/app/modals/useModal4";
import NestedComponentModal4 from "./NestedComponentModal4";
import Modal from "react-modal";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

// Modal.setAppElement("#modal-3");

export default function Modal4() {
    const { isOpen, onClose } = useModal4();

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
            <h1 className="">Modal 4</h1>
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
