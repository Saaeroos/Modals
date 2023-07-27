"use client";

import useModal4 from "@/app/hooks/useModal4";
import Modal from "react-modal";
import { useRouter } from "next/navigation";

// Modal.setAppElement("#modal-3");

export default function SignupModal() {
    const { onClose } = useModal4();
    const router = useRouter();

    return (
        <Modal isOpen={true} onRequestClose={onClose} ariaHideApp={false}>
            <h1 className="">Sign up Modal</h1>
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
