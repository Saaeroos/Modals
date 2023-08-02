"use client";

import Modal from "react-modal";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/modals/useLoginModal";

export default function LoginModal() {
    const { isOpen, onClose } = useLoginModal();
    const router = useRouter();

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
            <h1 className="">Login Modal</h1>
            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => router.back()}
                >
                    Got it, thanks!
                </button>
            </div>
        </Modal>
    );
}
