import { create } from "zustand";
import { ModalStore } from "../types/type";

const useModal2 = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggleModal: () => set((prev) => ({ isOpen: !prev.isOpen })),
}));

export default useModal2;
