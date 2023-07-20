"use client";

import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import useModal1 from "./zustandModals/useModal1";
import useModal2 from "./zustandModals/useModal2";

export default function Home() {
    const { onOpen: openModal1 } = useModal1();
    const { onOpen: openModal2 } = useModal2();
    return (
        <>
            <Modal1 />
            <Modal2 />
            <div className="flex w-full justify-center">
                <button
                    className="bg-black text-white mr-2 p-2"
                    onClick={openModal1}
                >
                    open modal 1
                </button>
                <button
                    className="bg-black text-white p-2"
                    onClick={openModal2}
                >
                    open modal 2
                </button>
            </div>
        </>
    );
}
