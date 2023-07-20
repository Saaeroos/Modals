import React, { useState, useCallback } from "react";

interface ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggleModal: () => void;
}

const useConfirmationModal = (): ModalStore => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Handlers
    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return {
        isOpen,
        onOpen,
        onClose,
        toggleModal,
    };
};

export default useConfirmationModal;
