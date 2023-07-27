import { ModalStore } from "@/app/types/modalStore";
import { create } from "zustand";

const useModal2 = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggleModal: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));

export default useModal2;
