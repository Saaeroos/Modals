import { ModalStore } from "@/app/types/modalStore";
import { create } from "zustand";

const useSignupModal = create<ModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggleModal: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));

export default useSignupModal;
