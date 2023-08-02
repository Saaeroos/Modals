"use client";

import Modal from "react-modal";
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/hooks/modals/useSignupModal";

export default function SignupModal() {
    const { isOpen, onClose } = useSignupModal();
    const router = useRouter();

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
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
